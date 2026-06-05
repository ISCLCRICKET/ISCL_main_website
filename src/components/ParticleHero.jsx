import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent, useTransform, motion } from 'framer-motion';


const ParticleHero = ({ children }) => {
  const containerRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  
  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end end"]
  });

  // Fade out video canvas as content scrolls over it (from progress 0.5 to 0.95, scroll 40vh to 76vh)
  const canvasOpacity = useTransform(scrollYProgress, [0.5, 0.95], [1, 0]);


  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Helper to draw a specific frame to the canvas
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate dimensions to maintain aspect ratio (like background-size: cover)
    const imgWidth = img.naturalWidth || img.width;
    const imgHeight = img.naturalHeight || img.height;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvas.width / canvas.height;

    let drawWidth, drawHeight, drawX, drawY;

    if (imgRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      drawX = (canvas.width - drawWidth) / 2;
      drawY = 0;
    } else {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      drawX = 0;
      drawY = (canvas.height - drawHeight) / 2;
    }

    // Enable high-quality image smoothing for crisp rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    currentFrameRef.current = frameIndex;
  };

  useEffect(() => {
    const totalFrames = 176;
    
    // Check if device is mobile to reduce memory/loading times
    const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768;
    const step = isMobileDevice ? 2 : 1; // Load every second frame on mobile
    
    const loadedImages = [];
    imagesRef.current = loadedImages;

    // 1. Load the first frame immediately
    const firstImg = new Image();
    firstImg.src = '/ezgif-1e0c9f08816de3b0-jpg/ezgif-frame-001.jpg';
    firstImg.onload = () => {
      loadedImages[0] = firstImg;
      // Draw first frame immediately once loaded
      drawFrame(0);
    };

    // 2. Preload the remaining frames in the background
    let loadedCount = 1;
    const framesToLoad = [];
    
    for (let i = 2; i <= totalFrames; i++) {
      // On mobile, skip odd frames to save bandwidth and memory
      if (isMobileDevice && i % 2 !== 0 && i !== totalFrames) {
        continue;
      }
      framesToLoad.push(i);
    }

    // Load remaining frames asynchronously
    framesToLoad.forEach((frameNum) => {
      const img = new Image();
      const paddedNum = String(frameNum).padStart(3, '0');
      img.src = `/ezgif-1e0c9f08816de3b0-jpg/ezgif-frame-${paddedNum}.jpg`;
      img.onload = () => {
        loadedImages[frameNum - 1] = img;
        loadedCount++;
        
        // Draw frame 2 immediately if loaded to begin preview early
        if (frameNum === 2) {
          drawFrame(1);
        }
        
        if (loadedCount >= framesToLoad.length + 1) {
          setImagesLoaded(true);
        }
      };
    });

    // Resize listener
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener('resize', handleResize);
    // Initial size setup
    const canvas = canvasRef.current;
    if (canvas) {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Listen to scroll events to render the correct frame
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const totalFrames = 176;
    const progress = Math.max(0, Math.min(1, latest));
    
    // Scale progress so the video finishes 15% before the scroll track ends (for smooth blending)
    const blendThreshold = 0.85;
    const activeProgress = Math.min(1.0, progress / blendThreshold);
    const targetIndex = Math.round(activeProgress * (totalFrames - 1));
    
    // Fallback search to find the nearest loaded frame in case some aren't loaded yet
    let closestIndex = targetIndex;
    if (!imagesRef.current[targetIndex]) {
      let dist = 1;
      while (dist < totalFrames) {
        if (targetIndex - dist >= 0 && imagesRef.current[targetIndex - dist]) {
          closestIndex = targetIndex - dist;
          break;
        }
        if (targetIndex + dist < totalFrames && imagesRef.current[targetIndex + dist]) {
          closestIndex = targetIndex + dist;
          break;
        }
        dist++;
      }
    }
    
    drawFrame(closestIndex);
  });

  return (
    <div ref={containerRef} className="relative bg-black -mt-16 min-h-[240vh]">
      {/* Scroll Track for Progress Calculation (determines scroll duration for 50% on-screen, 50% scroll-up) */}
      <div ref={scrollTrackRef} className="absolute top-0 left-0 w-full h-[180vh] pointer-events-none" />

      {/* Sticky viewport container to freeze canvas in the background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center z-0">
        {/* Scroll-scrubbing Canvas */}
        <motion.canvas 
          ref={canvasRef}
          style={{ opacity: canvasOpacity }}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />

        {/* Animated Floating Particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: Math.random() * 0.4 + 0.1
              }}
              animate={{
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
                opacity: [null, Math.random() * 0.4 + 0.1]
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll spacer matching when the video crosses 50% play duration */}
      <div className="h-[40vh] w-full pointer-events-none" />

      {/* Content wrapper positioned exactly below the video, scrolling up on top of it */}
      <div className="relative z-10 w-full py-20 flex items-center justify-center min-h-screen pt-24 overflow-hidden">
        {/* Background Stadium Image with Overlay (exactly as it was before) */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1576868986107-b5f3e2e89fff)` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/85 via-[#0A0A0A]/70 to-[#0A0A0A]"></div>
          
          {/* Gradient Mesh Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E91E8C]/12 via-[#8B5CF6]/12 to-[#2563EB]/12"></div>
        </div>

        {/* Content wrapper container to stack above background */}
        <div className="relative z-10 w-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ParticleHero;