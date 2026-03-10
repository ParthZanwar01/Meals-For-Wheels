import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartHandshake, CheckCircle2, Loader2 } from 'lucide-react';

const Volunteer = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', whyJoin: '', standOut: '', resume: null
    });
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume' && files?.[0]) {
            setUploading(true);
            setTimeout(() => setUploading(false), 1200);
        }
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="fade-in pt-40 pb-24 min-h-screen flex items-center justify-center bg-muted/10">
                <div className="bg-card p-12 rounded-3xl shadow-xl border border-border text-center max-w-lg mx-auto">
                    <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold font-heading mb-4">Application Received!</h2>
                    <p className="text-muted-foreground text-lg mb-8">Thank you for stepping up to help your community. Our volunteer coordinator will review your application and be in touch shortly.</p>
                    <button onClick={() => window.location.href = "/"} className="bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-8 rounded-full font-bold transition-all shadow-md">Return Home</button>
                </div>
            </div>
        );
    }

    return (
        <div className="fade-in pt-24 pb-24 min-h-screen bg-muted/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row bg-card rounded-[2.5rem] shadow-xl overflow-hidden border border-border min-h-[75vh]">
                    {/* Left Column - Image & Context */}
                    <div className="lg:w-5/12 relative overflow-hidden flex flex-col justify-end p-12 lg:p-16 shine-effect">
                        <img src="https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=1000&auto=format&fit=crop" alt="Volunteers serving food" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                        <div className="relative z-10 text-white">
                            <HeartHandshake className="w-12 h-12 mb-6 text-primary" />
                            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Volunteer With Us</h2>
                            <p className="text-lg text-white/80 leading-relaxed font-medium">Be the fuel that keeps our mobile kitchens running. Whether you're cooking, packing, or driving, your time brings warmth and hope to individuals across the city.</p>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:w-7/12 p-8 sm:p-12 lg:p-16 bg-card flex flex-col justify-center">
                        <h3 className="text-3xl font-bold font-heading mb-2 text-foreground">Join the Mission</h3>
                        <p className="text-muted-foreground mb-8 text-lg">Tell us a bit about yourself so we can find the perfect role for you.</p>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-semibold mb-2 text-foreground/90 text-sm tracking-wide">FULL NAME</label>
                                    <input type="text" name="name" required onChange={handleChange} className="w-full p-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base" placeholder="Jane Doe" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-2 text-foreground/90 text-sm tracking-wide">EMAIL ADDRESS</label>
                                    <input type="email" name="email" required onChange={handleChange} className="w-full p-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base" placeholder="jane@example.com" />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="block font-semibold mb-2 text-foreground/90 text-sm tracking-wide">WHY DO YOU WANT TO JOIN?</label>
                                <div className="relative">
                                    <AnimatePresence>
                                        {focused !== 'whyJoin' && !formData.whyJoin && (
                                            <motion.span initial={{ opacity: 1 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="absolute left-3.5 top-3.5 text-muted-foreground text-base pointer-events-none">I believe in giving back...</motion.span>
                                        )}
                                    </AnimatePresence>
                                    <textarea name="whyJoin" rows="3" required onChange={handleChange} onFocus={() => setFocused('whyJoin')} onBlur={() => setFocused(null)} className="w-full p-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base resize-none relative z-10" placeholder=" "></textarea>
                                </div>
                            </div>

                            <div>
                                <label className="block font-semibold mb-2 text-foreground/90 text-sm tracking-wide">WHAT MAKES YOU STAND OUT?</label>
                                <textarea name="standOut" rows="3" required onChange={handleChange} className="w-full p-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-base resize-none" placeholder="I have 3 years of commercial kitchen experience..."></textarea>
                            </div>

                            <div>
                                <label className="block font-semibold mb-2 text-foreground/90 text-sm tracking-wide">RESUME (OPTIONAL)</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-border border-dashed rounded-xl hover:border-primary/50 transition-colors bg-muted/20 relative min-h-[140px] items-center">
                                    <AnimatePresence mode="wait">
                                        {uploading ? (
                                            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-2">
                                                <Loader2 className="h-10 w-10 text-primary animate-spin" />
                                                <p className="text-sm text-muted-foreground">Processing...</p>
                                            </motion.div>
                                        ) : formData.resume ? (
                                            <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-2">
                                                <CheckCircle2 className="h-10 w-10 text-green-500" />
                                                <p className="text-sm font-medium text-foreground">{formData.resume.name}</p>
                                            </motion.div>
                                        ) : (
                                            <motion.div key="upload" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-1 text-center">
                                                <svg className="mx-auto h-12 w-12 text-muted-foreground/60" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <div className="flex text-sm text-muted-foreground justify-center">
                                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80 focus-within:outline-none">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="resume" type="file" className="sr-only" onChange={handleChange} accept=".pdf,.doc,.docx" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-muted-foreground">PDF, DOC, DOCX up to 10MB</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-6 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-1 flex justify-center items-center gap-2 text-lg">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteer;
