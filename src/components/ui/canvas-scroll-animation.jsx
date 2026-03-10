import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useScroll } from 'framer-motion';

export const CanvasScrollAnimation = ({ frameCount = 240, height = "400vh", className = "", children }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Format index to match `frame_0001.jpg`
    const currentFrame = (index) => `/frames/frame_${index.toString().padStart(4, '0')}.jpg`;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        // Preload images
        const loadedImages = [];
        let loadCount = 0;

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadCount++;
                if (loadCount === frameCount) {
                    setLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, [frameCount]);

    // Handle canvas sizing and initial draw
    useLayoutEffect(() => {
        if (!loaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Draw first frame on resize
            requestAnimationFrame(() => drawImageScaled(images[0], context, canvas));
        };

        window.addEventListener("resize", updateCanvasSize);
        updateCanvasSize(); // Initial call

        return () => window.removeEventListener("resize", updateCanvasSize);
    }, [loaded, images]);

    // Draw helper to cover the canvas like `object-fit: cover`
    const drawImageScaled = (img, ctx, canvas) => {
        if (!img) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio); // Use max for "cover" effect

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    };

    // Scroll listener
    useEffect(() => {
        if (!loaded || !canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        const handleScroll = () => {
            const container = containerRef.current;
            const rect = container.getBoundingClientRect();

            // Calculate how far we've scrolled through THIS specific container
            // rect.top is 0 when the top of container hits the top of viewport
            // We want to track progress from when top hits very top, until bottom hits bottom

            const startScroll = 0; // The point where container sticks to top
            const maxScroll = rect.height - window.innerHeight; // Total scrollable distance inside container

            // Calculate pixels scrolled past the start of the container
            // If rect.top is negative, we've scrolled that many pixels down into it
            let scrollFraction = 0;

            if (rect.top <= 0) {
                scrollFraction = Math.abs(rect.top) / maxScroll;
            }

            // Clamp between 0 and 1
            scrollFraction = Math.max(0, Math.min(1, scrollFraction));

            const frameIndex = Math.min(
                frameCount - 1,
                Math.floor(scrollFraction * frameCount)
            );

            requestAnimationFrame(() => drawImageScaled(images[frameIndex], context, canvas));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loaded, frameCount, images]);

    return (
        <div ref={containerRef} style={{ height }} className={`relative w-full ${className}`}>
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover opacity-80"
                />

                {/* The text content passed in */}
                {typeof children === 'function' ? children({ scrollYProgress }) : children}
            </div>
        </div>
    );
};
