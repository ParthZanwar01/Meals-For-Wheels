import { motion } from 'framer-motion';
import { InteractiveGlobe } from '../components/ui/interactive-globe';
import {
    Users, Truck, Heart, Globe, Utensils, School,
    Handshake, Target, TrendingUp, MapPin, Award
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

/* ─── content data ─── */

const aboutLines = [
    'We are Meals for More — a nonprofit dedicated to nourishing communities across the globe, one rotation at a time.',
    'We operate mobile soup kitchens, deliver meals to homebound seniors, and partner with local schools to ensure no one goes hungry.',
    'Our goal is simple: bring warm, nutritious food to those who need it most, while building lasting connections in every community we serve.',
];

const bentoCards = [
    {
        title: 'Our Core Mission',
        description: 'We believe no one should go to bed hungry. Through a network of mobile kitchens, volunteer teams, and community partnerships, we deliver hot, nutritious meals directly to those in need — regardless of geography, age, or circumstance.',
        icon: Target,
        span: 'full', // spans full width
        gradient: 'from-orange-500/20 via-amber-500/10 to-transparent',
    },
    {
        title: 'Mobile Kitchens',
        description: 'Our fleet of mobile soup kitchens reaches the most isolated neighborhoods, bringing warm food and a sense of community.',
        icon: Truck,
        gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    },
    {
        title: 'Senior Delivery',
        description: 'Dedicated routes serve homebound seniors who cannot access traditional food services, ensuring dignity and care.',
        icon: Heart,
        gradient: 'from-rose-500/20 via-pink-500/10 to-transparent',
    },
    {
        title: 'School Programs',
        description: 'Partnering with local schools to provide breakfast and lunch programs so children can focus on learning, not hunger.',
        icon: School,
        gradient: 'from-emerald-500/20 via-green-500/10 to-transparent',
    },
    {
        title: 'Community Partners',
        description: 'Collaborating with restaurants and grocers to redirect surplus food, reducing waste while feeding families.',
        icon: Handshake,
        gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    },
];

const stats = [
    { label: 'Meals Served', value: 50000, suffix: '+', icon: Utensils },
    { label: 'Volunteers', value: 1200, suffix: '+', icon: Users },
    { label: 'Cities Reached', value: 35, suffix: '', icon: MapPin },
    { label: 'Years Active', value: 8, suffix: '', icon: Award },
];

const roles = [
    {
        name: 'Sarah Chen',
        role: 'Executive Director',
        description: 'Leads our mission and shapes the strategic vision for reaching more families in need.',
        icon: Users,
    },
    {
        name: 'Marcus Johnson',
        role: 'Operations Lead',
        description: 'Coordinates our fleet of mobile kitchens and delivery routes to maximize impact.',
        icon: Truck,
    },
    {
        name: 'Priya Patel',
        role: 'Volunteer Coordinator',
        description: 'Builds and supports our community of volunteers who make every meal possible.',
        icon: Heart,
    },
    {
        name: 'David Okafor',
        role: 'Community Outreach Director',
        description: 'Forges partnerships with local organizations and expands our presence to new communities.',
        icon: Globe,
    },
];

/* ─── reusable animation variants ─── */

const popUp = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: (i = 0) => ({
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
    }),
};

const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
    }),
};

/* ─── animated counter hook ─── */

const useCounter = (end, duration = 2000, startTrigger = true) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        if (!startTrigger) return;
        let start = 0;
        const step = end / (duration / 16);
        ref.current = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(ref.current);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(ref.current);
    }, [end, duration, startTrigger]);

    return count;
};

/* ─── stat card with counter ─── */

const StatItem = ({ label, value, suffix, icon: Icon, delay }) => {
    const [inView, setInView] = useState(false);
    const count = useCounter(value, 2000, inView);
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={delay}
            variants={slideUp}
            onViewportEnter={() => setInView(true)}
            className="flex flex-col items-center gap-2 py-6"
        >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 flex items-center justify-center mb-2">
                <Icon className="w-6 h-6 text-orange-400" />
            </div>
            <span className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                {count.toLocaleString()}{suffix}
            </span>
            <span className="text-sm text-white/60 uppercase tracking-widest font-medium">{label}</span>
        </motion.div>
    );
};

/* ─── page component ─── */

const About = () => {
    return (
        <div className="fade-in min-h-screen">

            {/* ════════════════════════════════════════════════
                SECTION 1 — Hero / About Us Intro
            ════════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Decorative gradient orbs */}
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* Animated accent line */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '80px' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mb-8"
                    />

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={popUp}
                        className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight text-white"
                    >
                        About Us
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        custom={0.5}
                        variants={popUp}
                        className="text-lg text-white/50 uppercase tracking-widest font-medium mb-12"
                    >
                        Who We Are · What We Do · Our Goals
                    </motion.p>

                    <div className="space-y-6">
                        {aboutLines.map((line, i) => (
                            <motion.p
                                key={i}
                                initial="hidden"
                                animate="visible"
                                custom={i + 1}
                                variants={popUp}
                                className="text-lg md:text-xl text-white/85 leading-relaxed"
                            >
                                {line}
                            </motion.p>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 2 — Bento Grid (Mission Pillars)
            ════════════════════════════════════════════════ */}
            <section className="relative py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                        className="text-3xl md:text-5xl font-bold font-heading text-center text-white mb-4"
                    >
                        What Drives Us
                    </motion.h2>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        variants={slideUp}
                        className="text-center text-white/50 text-lg mb-16 max-w-2xl mx-auto"
                    >
                        Our mission stands on five pillars that guide everything we do.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {bentoCards.map((card, i) => {
                            const Icon = card.icon;
                            const isFull = card.span === 'full';
                            return (
                                <motion.div
                                    key={card.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    custom={i}
                                    variants={slideUp}
                                    className={`group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/[0.15] hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-2xl ${isFull ? 'md:col-span-4 p-8 md:p-10' : 'md:col-span-1 p-6'
                                        }`}
                                >
                                    {/* Card gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                    <div className="relative z-10">
                                        <div className={`w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-white/[0.12] transition-colors ${isFull ? 'w-14 h-14' : ''}`}>
                                            <Icon className={`text-white/70 group-hover:text-white transition-colors ${isFull ? 'w-7 h-7' : 'w-6 h-6'}`} />
                                        </div>
                                        <h3 className={`font-bold font-heading text-white mb-2 ${isFull ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                                            {card.title}
                                        </h3>
                                        <p className={`text-white/60 leading-relaxed ${isFull ? 'text-base md:text-lg max-w-3xl' : 'text-sm'}`}>
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Subtle corner glow */}
                                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-white/[0.05] transition-all duration-500 pointer-events-none" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 3 — Impact Stats
            ════════════════════════════════════════════════ */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Divider line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                        className="text-3xl md:text-4xl font-bold font-heading text-center text-white mb-16"
                    >
                        Our Impact
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <StatItem key={s.label} {...s} delay={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════════
                SECTION 4 — Roles / Team (Globe Background)
            ════════════════════════════════════════════════ */}
            <section className="relative min-h-[80vh] py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Earth background */}
                <div className="absolute inset-0 z-0">
                    <InteractiveGlobe />
                    {/* Gradient overlays to blend globe into the page */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-[1] pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent z-[1] pointer-events-none" />
                </div>

                {/* Cards content */}
                <div className="relative z-10 max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideUp}
                        className="text-center mb-16"
                    >
                        <span className="text-sm uppercase tracking-widest text-orange-400/80 font-medium mb-4 block">Leadership</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white">
                            Our Team
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {roles.map((r, i) => {
                            const Icon = r.icon;
                            return (
                                <motion.div
                                    key={r.name}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    custom={i}
                                    variants={slideUp}
                                    className="group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-7 shadow-xl hover:shadow-2xl hover:border-white/[0.18] hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2"
                                >
                                    {/* Glow on hover */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 flex items-center justify-center mb-5 group-hover:from-orange-500/30 group-hover:to-amber-500/20 transition-all">
                                            <Icon className="w-6 h-6 text-orange-400" />
                                        </div>
                                        <h3 className="text-xl font-bold font-heading text-white mb-1">{r.name}</h3>
                                        <p className="text-sm text-orange-400/80 font-medium uppercase tracking-wider mb-3">{r.role}</p>
                                        <p className="text-white/55 text-sm leading-relaxed">{r.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
