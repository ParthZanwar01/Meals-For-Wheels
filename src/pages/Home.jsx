import { motion, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CanvasScrollAnimation } from '../components/ui/canvas-scroll-animation';
import Navbar from '../components/Navbar';

// Meals for More first, then About Us; longer duration per section
const SECTION_SPAN = 0.16;
const PUSH_BACK_OFFSET = 0.02;
const FADE_DELAY = 0.02;

const createSectionRanges = (index) => {
    const start = index === 0 ? 0 : SECTION_SPAN + (index - 1) * (SECTION_SPAN + PUSH_BACK_OFFSET);
    const end = start + SECTION_SPAN;
    const fadeInStart = start + FADE_DELAY;
    const fadeOutStart = end - FADE_DELAY;
    return { start, end, fadeInStart, fadeOutStart };
};

const Home = () => {
    return (
        <div className="fade-in pb-0">
            <Navbar />
            <CanvasScrollAnimation frameCount={870} height="1200vh">
                {({ scrollYProgress }) => {
                    const sections = [0, 1, 2, 3, 4].map(createSectionRanges);

                    const opacity1 = useTransform(scrollYProgress, [sections[0].start, sections[0].fadeInStart, sections[0].fadeOutStart, sections[0].end], [0, 1, 1, 0]);
                    const y1 = useTransform(scrollYProgress, [sections[0].start, sections[0].fadeInStart, sections[0].fadeOutStart, sections[0].end], [50, 0, 0, -50]);

                    const opacity2 = useTransform(scrollYProgress, [sections[1].start, sections[1].fadeInStart, sections[1].fadeOutStart, sections[1].end], [0, 1, 1, 0]);
                    const y2 = useTransform(scrollYProgress, [sections[1].start, sections[1].fadeInStart, sections[1].fadeOutStart, sections[1].end], [50, 0, 0, -50]);

                    const opacity3 = useTransform(scrollYProgress, [sections[2].start, sections[2].fadeInStart, sections[2].fadeOutStart, sections[2].end], [0, 1, 1, 0]);
                    const y3 = useTransform(scrollYProgress, [sections[2].start, sections[2].fadeInStart, sections[2].fadeOutStart, sections[2].end], [50, 0, 0, -50]);

                    const opacity4 = useTransform(scrollYProgress, [sections[3].start, sections[3].fadeInStart, sections[3].fadeOutStart, sections[3].end], [0, 1, 1, 0]);
                    const y4 = useTransform(scrollYProgress, [sections[3].start, sections[3].fadeInStart, sections[3].fadeOutStart, sections[3].end], [50, 0, 0, -50]);

                    const opacity5 = useTransform(scrollYProgress, [sections[4].start, sections[4].fadeInStart, sections[4].fadeOutStart, sections[4].end], [0, 1, 1, 0]);
                    const y5 = useTransform(scrollYProgress, [sections[4].start, sections[4].fadeInStart, sections[4].fadeOutStart, sections[4].end], [50, 0, 0, -50]);

                    // Programs + Contact: start at 90% scroll
                    const programsContactStart = 0.90;
                    const programsContactEnd = 1.0;
                    const programsContactFadeIn = 0.92;
                    const programsContactFadeOut = 0.98;
                    const opacity6 = useTransform(scrollYProgress, [programsContactStart, programsContactFadeIn, programsContactFadeOut, programsContactEnd], [0, 0.8, 0.8, 0]);
                    const y6 = useTransform(scrollYProgress, [programsContactStart, programsContactFadeIn, programsContactFadeOut, programsContactEnd], [50, 0, 0, -50]);

                    return (
                        <>
                        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-8 text-center text-white z-10 w-full max-w-4xl mx-auto">
                            {/* 1) Meals for More — name first */}
                            <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute flex flex-col items-center pointer-events-auto">
                                <h1 className="text-5xl md:text-8xl font-bold font-heading tracking-tight bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent drop-shadow-xl">Meals for More</h1>
                            </motion.div>

                            {/* 2) About Us */}
                            <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute flex flex-col items-center pointer-events-auto">
                                <h2 className="text-4xl md:text-7xl font-bold font-heading mb-6 drop-shadow-xl">About Us</h2>
                                <p className="text-xl md:text-3xl text-white/90 font-medium drop-shadow-md mb-8 max-w-2xl">
                                    Nourishing communities across the globe, one rotation at a time.
                                </p>
                                <Link to="/programs" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 duration-300">
                                    Learn Our Story
                                </Link>
                            </motion.div>

                            {/* 3) Calendar for events & Donations */}
                            <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute flex flex-col items-center pointer-events-auto">
                                <h2 className="text-4xl md:text-7xl font-bold font-heading mb-6 drop-shadow-xl">Events Calendar</h2>
                                <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl drop-shadow-md">
                                    See where we're going next. Find upcoming food drives and mobile kitchen routes.
                                </p>
                                <Link to="/events" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 duration-300">
                                    View Calendar
                                </Link>
                            </motion.div>

                            {/* 4) Applications / Volunteering Sign up */}
                            <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute flex flex-col items-center pointer-events-auto">
                                <h2 className="text-4xl md:text-7xl font-bold font-heading mb-6 drop-shadow-xl">Volunteer Signup</h2>
                                <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl drop-shadow-md">
                                    Submit your application and resume. Tell us why you want to join the mission.
                                </p>
                                <Link to="/volunteer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 duration-300">
                                    Apply Now
                                </Link>
                            </motion.div>

                            {/* 5) Donations page */}
                            <motion.div style={{ opacity: opacity5, y: y5 }} className="absolute flex flex-col items-center pointer-events-auto">
                                <h2 className="text-4xl md:text-7xl font-bold font-heading mb-6 drop-shadow-xl">Make a Donation</h2>
                                <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl drop-shadow-md">
                                    Fuel the mission. Every contribution directly feeds families in need.
                                </p>
                                <Link to="/donations" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 border border-orange-400/50 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 duration-300">
                                    Donate Today
                                </Link>
                            </motion.div>
                        </div>

                            {/* 6) Programs left, Contact right — fixed to viewport edges (avoids parent constraints) */}
                            <motion.div style={{ opacity: opacity6, y: y6 }} className="fixed left-0 right-0 top-0 bottom-0 pointer-events-auto z-[100] flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-8">
                                <div className="flex flex-col items-start max-w-[220px] lg:max-w-[260px] text-left text-white">
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 drop-shadow-xl">Community Programs</h2>
                                    <p className="text-base md:text-lg text-white/80 mb-4 drop-shadow-md">
                                        Explore the systemic ways we are building sustainable food distribution networks.
                                    </p>
                                    <Link to="/programs" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 duration-300">
                                        Our Programs
                                    </Link>
                                </div>
                                <div className="flex flex-col items-end max-w-[220px] lg:max-w-[260px] text-right text-white">
                                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 drop-shadow-xl">Contact & Socials</h2>
                                    <p className="text-base md:text-lg text-white/80 mb-4 drop-shadow-md">
                                        Connect with us for partnerships, or follow our journey on Instagram.
                                    </p>
                                    <Link to="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 duration-300">
                                        Get in Touch
                                    </Link>
                                </div>
                            </motion.div>
                        </>
                    );
                }}
            </CanvasScrollAnimation>
        </div>
    );
};

export default Home;
