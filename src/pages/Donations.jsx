import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart } from 'lucide-react';

const AnimatedCounter = ({ target, suffix = '', duration = 2 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const end = target;
        const startTime = performance.now();
        const step = (now) => {
            const elapsed = (now - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [inView, target, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const Donations = () => {
    return (
        <div className="fade-in pt-32 pb-24 min-h-screen bg-muted/10">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight flex items-center justify-center gap-3">
                        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                            Make a Difference
                        </span>
                        <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">Your direct contribution ensures we can afford fresh ingredients and fuel to keep trucks moving.</p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="bg-card/80 backdrop-blur px-8 py-4 rounded-2xl border border-border">
                            <p className="text-3xl md:text-4xl font-bold font-heading text-primary"><AnimatedCounter target={5000} suffix="+" /></p>
                            <p className="text-sm text-muted-foreground mt-1">Meals Served</p>
                        </div>
                        <div className="bg-card/80 backdrop-blur px-8 py-4 rounded-2xl border border-border">
                            <p className="text-3xl md:text-4xl font-bold font-heading text-primary"><AnimatedCounter target={1200} suffix="+" /></p>
                            <p className="text-sm text-muted-foreground mt-1">Volunteers</p>
                        </div>
                        <div className="bg-card/80 backdrop-blur px-8 py-4 rounded-2xl border border-border">
                            <p className="text-3xl md:text-4xl font-bold font-heading text-primary"><AnimatedCounter target={45} /></p>
                            <p className="text-sm text-muted-foreground mt-1">Communities Reached</p>
                        </div>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="bg-card p-10 rounded-3xl shadow-sm border border-border transition-all hover:-translate-y-2 hover:shadow-xl relative md:mt-6">
                        <h3 className="text-5xl font-bold font-heading text-foreground mb-4">$10</h3>
                        <p className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">Starter</p>
                        <p className="text-muted-foreground mb-8 text-lg min-h-[56px]">Provides 2 warm, nutritious meals for individuals.</p>
                        <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground py-4 px-6 rounded-full font-bold transition-all shadow-sm" onClick={() => alert('Mock Payment Success!')}>Donate $10</button>
                    </div>

                    <div className="bg-card p-12 rounded-3xl shadow-xl border-2 border-primary transition-all hover:-translate-y-2 relative z-10 transform md:scale-105">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm font-bold pt-1 pb-1.5 px-4 rounded-full uppercase tracking-widest shadow-md">Most Impactful</div>
                        <h3 className="text-6xl font-bold font-heading text-primary mb-4">$25</h3>
                        <p className="text-foreground font-bold mb-2 uppercase tracking-wider text-sm">Groceries</p>
                        <p className="text-muted-foreground mb-8 text-lg min-h-[56px]">Provides an entire week of groceries for a full family.</p>
                        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-6 rounded-full font-bold transition-all shadow-md hover:shadow-lg" onClick={() => alert('Mock Payment Success!')}>Donate $25</button>
                    </div>

                    <div className="bg-card p-10 rounded-3xl shadow-sm border border-border transition-all hover:-translate-y-2 hover:shadow-xl relative md:mt-6">
                        <h3 className="text-5xl font-bold font-heading text-foreground mb-4">$50</h3>
                        <p className="text-primary font-bold mb-2 uppercase tracking-wider text-sm">Sponsor</p>
                        <p className="text-muted-foreground mb-8 text-lg min-h-[56px]">Supports our mobile kitchen fuel operations for a day.</p>
                        <button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground py-4 px-6 rounded-full font-bold transition-all shadow-sm" onClick={() => alert('Mock Payment Success!')}>Donate $50</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donations;
