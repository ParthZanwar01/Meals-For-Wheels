const Programs = () => {
    return (
        <div className="fade-in pt-32 pb-24 min-h-screen">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-heading mb-4 tracking-tight">Community Programs</h2>
                    <p className="text-lg text-muted-foreground">Discover the different ways we serve our community.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl group">
                        <div className="h-56 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1593113563332-9c9dc03c8091?q=80&w=800&auto=format&fit=crop" alt="Soup Kitchen" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">Mobile Soup Kitchen</h3>
                            <p className="text-muted-foreground leading-relaxed">Our converted trucks travel to neighborhoods delivering hot, fresh soup and bread every evening.</p>
                        </div>
                    </div>
                    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl group">
                        <div className="h-56 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=800&auto=format&fit=crop" alt="Senior smiling" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">Senior Delivery Route</h3>
                            <p className="text-muted-foreground leading-relaxed">Dedicated volunteers bringing nutritious meals directly to homebound elderly residents.</p>
                        </div>
                    </div>
                    <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl group">
                        <div className="h-56 overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" alt="Children sharing food" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">School Pantry Support</h3>
                            <p className="text-muted-foreground leading-relaxed">Partnering with local schools to ensure children have food access over weekends and holidays.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Programs;
