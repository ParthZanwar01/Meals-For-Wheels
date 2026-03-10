import { UtensilsCrossed, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative pt-16 pb-8 overflow-hidden border-t border-white/10 bg-transparent">
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-orange-500 p-2 rounded-xl">
                                <UtensilsCrossed className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading tracking-tight flex items-center text-white">
                                Meals for <span className="text-orange-400 ml-1.5">More</span>
                            </h3>
                        </div>
                        <p className="text-white/80 text-lg leading-relaxed max-w-md">
                            Providing healthy food, steady support, and a warm community to those who need it most. Together, we are nourishing the future.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold font-heading tracking-wide uppercase text-white mb-6">Explore</h4>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Home</a></li>
                            <li><a href="/programs" className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Our Programs</a></li>
                            <li><a href="/events" className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200">Upcoming Events</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold font-heading tracking-wide uppercase text-white mb-6">Action</h4>
                        <ul className="space-y-4">
                            <li><a href="/volunteer" className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200 flex items-center gap-1 group">Volunteer <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="/donations" className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200 flex items-center gap-1 group">Donate <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                            <li><a href="/contact" className="text-white/70 hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200 flex items-center gap-1 group">Contact Us <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>&copy; {new Date().getFullYear()} Meals for More. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
