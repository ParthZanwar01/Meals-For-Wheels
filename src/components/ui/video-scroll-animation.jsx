import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';

export const VideoScrollAnimation = ({ videoUrl, height = "300vh", className = "" }) => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [duration, setDuration] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Update video time when scroll changes
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (videoRef.current && duration > 0) {
            // map latest 0-1 to time
            const targetTime = latest * duration;
            requestAnimationFrame(() => {
                if (videoRef.current) {
                    videoRef.current.currentTime = targetTime;
                }
            });
        }
    });

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
            videoRef.current.pause();
        }
    };

    return (
        <div ref={containerRef} style={{ height }} className={`relative w-full ${className}`}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    preload="auto"
                    muted
                    playsInline
                    onLoadedMetadata={handleLoadedMetadata}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <OverlayContent scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
};

const OverlayContent = ({ scrollYProgress }) => {
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2, 0.4], [50, 0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.4, 0.6, 0.8], [50, 0, -50]);

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-8 text-center text-white">
            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">Our Journey Begins</h2>
                <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
                    Scroll down to see the impact of our mission across the globe.
                </p>
            </motion.div>

            <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute">
                <h2 className="text-4xl md:text-6xl font-bold font-heading mb-4">Nourishing Communities</h2>
                <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
                    Every rotation of the earth, we strive to bring warmth and hope.
                </p>
            </motion.div>
        </div>
    );
};
