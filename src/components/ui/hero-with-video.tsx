import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../next/next-themes';
import { Play, Pause, Mail, ArrowRight, Menu, ChevronDown, Sun, Moon } from 'lucide-react';
import { TextEffect } from './text-effect';

interface NavbarHeroProps {
    brandName?: string;
    heroTitle?: string;
    heroSubtitle?: string;
    heroDescription?: string;
    backgroundImage?: string;
    emailPlaceholder?: string;
}

const NavbarHero: React.FC<NavbarHeroProps> = ({
    brandName = "nexus",
    heroTitle = "Innovation Meets Simplicity",
    heroSubtitle = "Join the community",
    heroDescription = "Discover cutting-edge solutions designed for the modern digital landscape.",
    backgroundImage = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    emailPlaceholder = "enter@email.com"
}) => {
    const [email, setEmail] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleEmailSubmit = () => {
        console.log('Email submitted:', email);
    };

    const toggleDropdown = (dropdownName: string) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    const ThemeToggleButton = () => {
        if (!mounted) return <div className="w-10 h-10" />;
        return (
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="bg-muted hover:bg-border flex-shrink-0 p-2.5 rounded-full transition-colors"
                aria-label="Toggle theme"
            >
                {theme === "light" ? <Moon className="h-5 w-5 text-foreground" /> : <Sun className="h-5 w-5 text-foreground" />}
            </button>
        );
    };

    return (
        <section className="relative w-full min-h-[90vh] bg-transparent flex flex-col overflow-hidden pointer-events-none">
            <div className="relative z-20 w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-1 flex flex-col pointer-events-auto">
                {/* --- Navbar --- */}
                <div className="py-2 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <a href="#" className="font-bold text-2xl pb-1 text-foreground cursor-pointer flex-shrink-0 drop-shadow-md">
                            {brandName}
                        </a>
                        <nav className="hidden lg:flex text-muted-foreground/90 font-medium">
                            <ul className="flex items-center space-x-2 drop-shadow-sm">
                                <li><a href="/events" className="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Events</a></li>
                                <li><a href="/volunteer" className="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Volunteer</a></li>
                                <li><a href="/donations" className="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Donate</a></li>
                                <li><a href="/programs" className="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Programs</a></li>
                                <li><a href="/contact" className="hover:text-foreground px-3 py-2 text-sm transition-colors rounded-lg">Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden lg:flex items-center gap-3">
                            <a href="/volunteer" className="text-foreground hover:text-muted-foreground cursor-pointer py-2 px-4 text-sm capitalize font-medium transition-colors rounded-xl drop-shadow-md">Sign Up</a>
                            <a href="/donations" className="bg-foreground hover:bg-muted-foreground text-background py-2.5 px-5 text-sm rounded-xl capitalize font-medium transition-colors flex items-center gap-2">
                                Donate<ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                        <ThemeToggleButton />
                        <div className="lg:hidden relative">
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="bg-transparent hover:bg-accent border-none p-2 rounded-xl transition-colors">
                                <Menu className="h-6 w-6" />
                            </button>
                            {isMobileMenuOpen && (
                                <ul className="absolute top-full right-0 mt-2 p-2 shadow-lg bg-card border border-border rounded-xl w-56 z-30">
                                    <li><a href="/events" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Events</a></li>
                                    <li><a href="/volunteer" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Volunteer</a></li>
                                    <li><a href="/donations" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Donate</a></li>
                                    <li><a href="/programs" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Programs</a></li>
                                    <li><a href="/contact" className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Contact</a></li>
                                    <li className="border-t border-border mt-2 pt-2 space-y-2">
                                        <a href="/volunteer" className="block w-full text-center px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg">Sign Up</a>
                                        <a href="/donations" className="block w-full bg-foreground text-background hover:bg-muted-foreground px-3 py-2.5 text-sm rounded-lg flex items-center justify-center gap-2 font-medium">
                                            Donate<ArrowRight className="h-4 w-4" />
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- Hero Section --- */}
                <div className="flex-1 flex flex-col items-center justify-center pt-16 pb-24 text-center">
                    <div className="max-w-4xl mx-auto drop-shadow-xl z-20">
                        <TextEffect per="word" as="h1" preset="slide" className="text-5xl md:text-7xl lg:text-8xl text-foreground font-bold tracking-tight bg-gradient-to-r from-orange-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                            {heroTitle}
                        </TextEffect>
                        <p className="mt-8 text-xl sm:text-2xl text-foreground/80 font-medium animate-fade-in-up">{heroDescription}</p>
                        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                            <div className="relative">
                                <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <input type="email" placeholder={emailPlaceholder} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full sm:w-[350px] bg-background/80 backdrop-blur-md border border-border/50 text-foreground placeholder-muted-foreground font-medium pl-14 pr-4 py-3 sm:py-4 text-base rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-lg" />
                            </div>
                            <button onClick={handleEmailSubmit} className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 sm:py-4 text-base rounded-full normal-case font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                                Join Now<ArrowRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { NavbarHero };
