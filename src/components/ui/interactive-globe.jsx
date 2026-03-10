import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

export const InteractiveGlobe = () => {
    const globeRef = useRef();
    const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [scrollProgress, setScrollProgress] = useState(0);

    // Handle window resize and scroll for parallax/expansion effect
    useEffect(() => {
        const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });

        const handleScroll = () => {
            // Calculate how far down the page we've scrolled 
            // The globe effect reaches its maximum when scrolled 800px down
            const maxScroll = Math.min(window.innerHeight, 800);
            const progress = Math.min(window.scrollY / maxScroll, 1);
            setScrollProgress(progress);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial setup
        handleScroll();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Setup globe auto-rotation and initial position
    useEffect(() => {
        if (globeRef.current) {
            const controls = globeRef.current.controls();
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.5;
            controls.enableZoom = false; // Disable zoom to keep it consistent as a background

            // Adjust starting camera position (altitude handles the perceived 'size' of the globe)
            globeRef.current.pointOfView({ lat: 20, lng: -40, altitude: 2.2 });
        }
    }, [dimensions.width]);

    // Data for our pillars of service (pinpoints on the globe)
    const markerData = [
        { lat: 40.7128, lng: -74.0060, title: "Our Impact", desc: "Thousands of warm meals delivered to those in need.", icon: 'utensils' },
        { lat: 51.5074, lng: -0.1278, title: "Mobile Delivery", desc: "Reaching isolated neighborhoods and home-bound seniors.", icon: 'truck' },
        { lat: 35.6895, lng: 139.6917, title: "Community Kitchens", desc: "Safe, welcoming spaces for sharing a warm meal together.", icon: 'users' },
        { lat: -33.8688, lng: 151.2093, title: "Global Reach", desc: "Expanding our mission to nourish communities worldwide.", icon: 'globe' },
        { lat: -23.5505, lng: -46.6333, title: "Local Partnerships", desc: "Teaming up with local restaurants to redirect surplus food.", icon: 'handshake' }
    ];

    // Create custom HTML elements for markers using raw SVG strings for Lucide icons
    const createHtmlElement = (d) => {
        const el = document.createElement('div');

        let iconHtml = '';
        if (d.icon === 'utensils') iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`;
        else if (d.icon === 'truck') iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`;
        else if (d.icon === 'users') iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`;
        else if (d.icon === 'globe') iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`;
        else iconHtml = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/></svg>`;

        el.innerHTML = `
            <div class="relative group cursor-pointer flex flex-col items-center">
                <div class="absolute inset-0 bg-primary/40 rounded-full animate-ping z-0 group-hover:animate-none"></div>
                <div class="w-10 h-10 bg-card/80 backdrop-blur-md rounded-full border border-primary/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform group-hover:scale-110 relative z-10">
                    ${iconHtml}
                </div>
                <div class="absolute top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-[280px] z-50">
                    <div class="bg-card/95 backdrop-blur-xl border border-border p-4 rounded-xl shadow-2xl text-center">
                        <h4 class="font-bold text-lg text-foreground mb-1 font-heading">${d.title}</h4>
                        <p class="text-sm text-muted-foreground leading-relaxed">${d.desc}</p>
                    </div>
                </div>
            </div>
        `;
        return el;
    };

    // Calculate CSS transforms based on scroll progress
    // Initial: Translates down by 60vh so only the top is visible, scaled slightly down
    // Scrolled: Translates to center (0), scales up to 1.05
    const translateY = (1 - scrollProgress) * 60; // 60vh down -> 0
    const scale = 0.85 + (scrollProgress * 0.2); // 0.85 -> 1.05

    return (
        <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
            <div
                className="w-full h-full transform transition-transform duration-75 ease-out"
                style={{ transform: `translateY(${translateY}vh) scale(${scale})` }}
            >
                <Globe
                    ref={globeRef}
                    width={dimensions.width}
                    height={dimensions.height}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                    backgroundColor="rgba(0,0,0,0)" // Make transparent to blend better
                    htmlElementsData={markerData}
                    htmlElement={createHtmlElement}
                />
            </div>
            {/* Gradient overlay to smoothly blend the globe into the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
        </div >
    );
};
