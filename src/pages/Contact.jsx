import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="fade-in pt-32 pb-24 min-h-screen bg-muted/10">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 tracking-tight drop-shadow-sm vibrant-glow">Contact Us</h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">We'd love to hear from you. Reach out with any questions, partnership inquiries, or volunteer relations.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column - Contact Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-card p-10 rounded-3xl shadow-sm border border-border">
                            <h3 className="text-3xl font-bold font-heading mb-8">Get in Touch</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                                        <p className="text-muted-foreground">123 Charity Lane, Suite 100<br />San Francisco, CA 94107</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Email Us</h4>
                                        <p className="text-muted-foreground">mealsformore1@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Call Us</h4>
                                        <p className="text-muted-foreground">832-235-5474</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 pt-10 border-t border-border">
                                <h4 className="font-bold text-lg mb-6">Follow Our Journey</h4>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-8 py-3.5 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-all font-bold shadow-sm hover:shadow-md hover:-translate-y-1">
                                    <Instagram className="w-5 h-5" /> Follow on Instagram
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-7">
                        <form className="bg-card p-10 md:p-12 rounded-3xl shadow-xl border border-border" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                            <div className="mb-8">
                                <h3 className="text-3xl font-bold font-heading mb-2 text-foreground">Send a Message</h3>
                                <p className="text-muted-foreground text-lg">Use the form below and we'll get back to you within 24 hours.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block font-semibold mb-2 text-foreground/90 text-sm tracking-wide">FIRST NAME</label>
                                    <input type="text" required className="w-full p-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2 text-foreground/90 text-sm tracking-wide">LAST NAME</label>
                                    <input type="text" required className="w-full p-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block font-semibold mb-2 text-foreground/90 text-sm tracking-wide">EMAIL ADDRESS</label>
                                <input type="email" required className="w-full p-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base" placeholder="john@example.com" />
                            </div>

                            <div className="mb-8">
                                <label className="block font-semibold mb-2 text-foreground/90 text-sm tracking-wide">YOUR MESSAGE</label>
                                <textarea rows="6" required className="w-full p-4 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-6 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-1 text-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
