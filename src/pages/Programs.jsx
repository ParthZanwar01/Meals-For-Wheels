import { motion, useScroll, useTransform } from 'framer-motion';

const Lamp = () => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

    return (
        <motion.div 
            style={{ opacity, scale }}
            className="relative flex w-full flex-1 items-center justify-center isolate z-0 mb-[-150px]"
        >
            <div className="absolute top-0 h-48 w-full bg-slate-950 px-24"></div>
            
            {/* Lamp Bar */}
            <motion.div
                initial={{ width: "8rem" }}
                whileInView={{ width: "30rem" }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="absolute top-0 h-0.5 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-50"
            />

            {/* Cones of Light */}
            <div className="absolute top-0 z-10 flex w-full justify-center">
                <div className="h-64 w-[30rem] bg-gradient-to-b from-cyan-500/30 to-transparent blur-3xl opacity-50" />
            </div>
            
            <div className="absolute top-0 z-20 h-48 w-full bg-transparent bg-gradient-to-b from-slate-950 to-transparent" />
        </motion.div>
    );
};

const ProgramCard = ({ title, desc, img, delay }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className="group relative bg-card/80 backdrop-blur-sm rounded-2xl shadow-sm border border-border overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
        <div className="h-56 overflow-hidden">
            <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="p-8">
            <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors inline-block">
                <span className="relative">
                    {title}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const Programs = () => {
    const programs = [
        { title: 'Mobile Soup Kitchen', desc: 'Our converted trucks travel to neighborhoods delivering hot, fresh soup and bread every evening.', img: 'mobile_soup_kitchen_truck_1773425540131.png' },
        { title: 'Senior Delivery Route', desc: 'Dedicated volunteers bringing nutritious meals directly to homebound elderly residents.', img: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=800&auto=format&fit=crop' },
        { title: 'School Pantry Support', desc: 'Partnering with local schools to ensure children have food access over weekends and holidays.', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop' },
    ];
    return (
        <div className="fade-in pt-0 pb-24 min-h-screen relative bg-slate-950">
            <Lamp />
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-6xl font-bold font-heading mb-4 tracking-tight vibrant-glow">Community Programs</h2>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">Discover the different ways we serve our community.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((p, i) => (
                        <ProgramCard key={p.title} {...p} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Programs;
