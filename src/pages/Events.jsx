import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
    return (
        <div className="fade-in pt-32 pb-24 min-h-screen bg-muted/10">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 tracking-tight drop-shadow-sm">Upcoming Events</h2>
                    <p className="text-lg text-muted-foreground">Join us at our next outreach event to make a direct impact.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="bg-card w-full p-8 md:p-10 rounded-3xl shadow-sm border border-border transition-all hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">Weekend Meal Drive</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg mb-6">Help us pack and distribute over 500 meals for the community. Volunteers of all ages are welcome.</p>
                                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-foreground/80">
                                    <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        <span>Saturday, Oct 28</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                                        <Clock className="w-4 h-4 text-muted-foreground" />
                                        <span>9:00 AM - 1:00 PM</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                                        <MapPin className="w-4 h-4 text-muted-foreground" />
                                        <span>Downtown Soup Kitchen</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-auto w-full shrink-0">
                                <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all">RSVP Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card w-full p-8 md:p-10 rounded-3xl shadow-sm border border-border transition-all hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <h3 className="text-3xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">Thanksgiving Special</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg mb-6">A massive community dinner event open to all. We need cooks, servers, and greeters to make this night memorable.</p>
                                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-foreground/80">
                                    <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        <span>Thursday, Nov 23</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                                        <Clock className="w-4 h-4 text-muted-foreground" />
                                        <span>3:00 PM - 8:00 PM</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full">
                                        <MapPin className="w-4 h-4 text-muted-foreground" />
                                        <span>Community Center Hall</span>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-auto w-full shrink-0">
                                <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all">RSVP Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
