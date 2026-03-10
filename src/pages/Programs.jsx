import { motion } from 'framer-motion';

const ProgramCard = ({ title, desc, img, delay }) => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className="group relative bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
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
        { title: 'Mobile Soup Kitchen', desc: 'Our converted trucks travel to neighborhoods delivering hot, fresh soup and bread every evening.', img: 'https://images.unsplash.com/photo-1593113563332-9c9dc03c8091?q=80&w=800&auto=format&fit=crop' },
        { title: 'Senior Delivery Route', desc: 'Dedicated volunteers bringing nutritious meals directly to homebound elderly residents.', img: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=800&auto=format&fit=crop' },
        { title: 'School Pantry Support', desc: 'Partnering with local schools to ensure children have food access over weekends and holidays.', img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop' },
    ];
    return (
        <div className="fade-in pt-32 pb-24 min-h-screen">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-heading mb-4 tracking-tight">Community Programs</h2>
                    <p className="text-lg text-muted-foreground">Discover the different ways we serve our community.</p>
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
