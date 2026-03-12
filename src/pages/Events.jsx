import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveGlobe } from '../components/ui/interactive-globe';
import { ChevronLeft, ChevronRight, Clock, MapPin, X, Utensils } from 'lucide-react';
import { useState, useMemo } from 'react';

/* ─── event data ─── */
const EVENTS = [
    { date: '2026-03-14', title: 'Weekend Meal Drive', time: '9:00 AM – 1:00 PM', location: 'Downtown Soup Kitchen', color: 'orange', description: 'Help us pack and distribute over 500 meals for the community.' },
    { date: '2026-03-18', title: 'School Lunch Program', time: '11:00 AM – 2:00 PM', location: 'Lincoln Elementary', color: 'emerald', description: 'Preparing and serving nutritious lunches for 300 students.' },
    { date: '2026-03-22', title: 'Mobile Kitchen — NE Region', time: '10:00 AM – 4:00 PM', location: 'Northeast District', color: 'blue', description: 'Our mobile kitchen hits the road, visiting 6 neighborhoods.' },
    { date: '2026-03-25', title: 'Volunteer Orientation', time: '6:00 PM – 8:00 PM', location: 'Community Center Hall', color: 'violet', description: 'New volunteer orientation — learn how you can make a difference.' },
    { date: '2026-03-29', title: 'Senior Meals Delivery', time: '8:00 AM – 12:00 PM', location: 'Citywide Routes', color: 'rose', description: 'Delivering warm meals to homebound seniors across 15 routes.' },
    { date: '2026-04-05', title: 'Spring Food Drive', time: '9:00 AM – 3:00 PM', location: 'City Park Pavilion', color: 'amber', description: 'A massive community food collection event.' },
    { date: '2026-04-12', title: 'Community Dinner Night', time: '5:00 PM – 9:00 PM', location: 'Community Center Hall', color: 'orange', description: 'An open community dinner welcoming everyone for a warm meal.' },
    { date: '2026-04-19', title: 'Mobile Kitchen — SW Region', time: '10:00 AM – 4:00 PM', location: 'Southwest District', color: 'blue', description: 'Serving 8 underserved neighborhoods in the southwest.' },
    { date: '2026-04-22', title: 'Earth Day Special', time: '11:00 AM – 3:00 PM', location: 'Green Valley Park', color: 'emerald', description: 'Sustainable meals and eco-friendly packaging workshop.' },
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const colorMap = {
    orange: { dot: 'bg-orange-400', bg: 'bg-orange-500/15', text: 'text-orange-300', border: 'border-orange-500/30', glow: 'shadow-orange-500/20' },
    emerald: { dot: 'bg-emerald-400', bg: 'bg-emerald-500/15', text: 'text-emerald-300', border: 'border-emerald-500/30', glow: 'shadow-emerald-500/20' },
    blue: { dot: 'bg-blue-400', bg: 'bg-blue-500/15', text: 'text-blue-300', border: 'border-blue-500/30', glow: 'shadow-blue-500/20' },
    violet: { dot: 'bg-violet-400', bg: 'bg-violet-500/15', text: 'text-violet-300', border: 'border-violet-500/30', glow: 'shadow-violet-500/20' },
    rose: { dot: 'bg-rose-400', bg: 'bg-rose-500/15', text: 'text-rose-300', border: 'border-rose-500/30', glow: 'shadow-rose-500/20' },
    amber: { dot: 'bg-amber-400', bg: 'bg-amber-500/15', text: 'text-amber-300', border: 'border-amber-500/30', glow: 'shadow-amber-500/20' },
};

/* ─── calendar helpers ─── */
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
const isSameDay = (d1, d2) => d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();

/* ─── event detail modal ─── */
const EventModal = ({ event, onClose }) => {
    if (!event) return null;
    const c = colorMap[event.color] || colorMap.orange;
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                onClick={onClose}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    className={`relative z-10 w-full max-w-md rounded-3xl border ${c.border} bg-[#1a1a1f]/95 backdrop-blur-2xl p-8 shadow-2xl ${c.glow}`}
                >
                    <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                        <X className="w-4 h-4 text-white/70" />
                    </button>

                    <div className={`w-12 h-12 rounded-2xl ${c.bg} flex items-center justify-center mb-5`}>
                        <Utensils className={`w-6 h-6 ${c.text}`} />
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-white mb-2">{event.title}</h3>
                    <p className="text-white/60 leading-relaxed mb-6">{event.description}</p>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-white/70">
                            <Clock className="w-4 h-4 text-white/40" />
                            <span className="text-sm">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                            <MapPin className="w-4 h-4 text-white/40" />
                            <span className="text-sm">{event.location}</span>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className={`mt-8 w-full py-3 rounded-full font-bold text-sm ${c.bg} ${c.text} border ${c.border} hover:brightness-125 transition-all`}
                    >
                        Close
                    </button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

/* ─── page component ─── */
const Events = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [selectedEvent, setSelectedEvent] = useState(null);

    const prevMonth = () => {
        if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(y => y - 1); }
        else setCurrentMonth(m => m - 1);
    };
    const nextMonth = () => {
        if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(y => y + 1); }
        else setCurrentMonth(m => m + 1);
    };
    const goToToday = () => { setCurrentMonth(today.getMonth()); setCurrentYear(today.getFullYear()); };

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

    // Build calendar grid — 6 rows × 7 cols
    const calendarCells = useMemo(() => {
        const cells = [];
        const prevMonthDays = getDaysInMonth(currentYear, currentMonth - 1);

        // Previous month trailing days
        for (let i = firstDay - 1; i >= 0; i--) {
            cells.push({ day: prevMonthDays - i, isCurrentMonth: false, date: null });
        }
        // Current month days
        for (let d = 1; d <= daysInMonth; d++) {
            cells.push({ day: d, isCurrentMonth: true, date: new Date(currentYear, currentMonth, d) });
        }
        // Next month leading days
        const remaining = 42 - cells.length;
        for (let i = 1; i <= remaining; i++) {
            cells.push({ day: i, isCurrentMonth: false, date: null });
        }
        return cells;
    }, [currentYear, currentMonth, daysInMonth, firstDay]);

    // Match events to dates
    const getEventsForDate = (date) => {
        if (!date) return [];
        return EVENTS.filter(e => isSameDay(new Date(e.date), date));
    };

    return (
        <div className="fade-in min-h-screen relative">
            {/* ── Globe background ── */}
            <div className="fixed inset-0 z-0">
                <InteractiveGlobe />
                {/* Darken overlay so the calendar remains legible */}
                <div className="absolute inset-0 bg-black/50 z-[1] pointer-events-none" />
            </div>

            {/* ── Content layer ── */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-3 py-24 sm:py-28 sm:px-6">

                {/* Page title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-6 sm:mb-8"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-white tracking-tight">
                        Events Calendar
                    </h1>
                    <p className="text-white/50 text-lg mt-3">Find and join our upcoming community events.</p>
                </motion.div>

                {/* ── iPad-style frame ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-[1100px] mx-auto"
                >
                    {/* Tablet outer shell */}
                    <div className="rounded-[2rem] sm:rounded-[2.5rem] border-[3px] border-white/[0.12] bg-[#111114]/80 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.6),0_0_30px_rgba(255,165,0,0.04)] overflow-hidden">

                        {/* Top bezel (camera notch) */}
                        <div className="flex items-center justify-center py-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10 ring-1 ring-white/[0.06]" />
                        </div>

                        {/* Screen area */}
                        <div className="mx-2 sm:mx-3 mb-2 sm:mb-3 rounded-2xl sm:rounded-3xl bg-[#0d0d10] border border-white/[0.06] overflow-hidden">

                            {/* Calendar header */}
                            <div className="flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-white/[0.06]">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-white">
                                        {MONTHS[currentMonth]}
                                    </h2>
                                    <span className="text-xl sm:text-2xl font-heading text-white/30 font-light">
                                        {currentYear}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={goToToday}
                                        className="hidden sm:block text-xs uppercase tracking-widest text-orange-400/80 hover:text-orange-300 font-semibold px-3 py-1.5 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 transition-all"
                                    >
                                        Today
                                    </button>
                                    <button onClick={prevMonth} className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06] flex items-center justify-center transition-all">
                                        <ChevronLeft className="w-4 h-4 text-white/60" />
                                    </button>
                                    <button onClick={nextMonth} className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.06] flex items-center justify-center transition-all">
                                        <ChevronRight className="w-4 h-4 text-white/60" />
                                    </button>
                                </div>
                            </div>

                            {/* Day headers */}
                            <div className="grid grid-cols-7 border-b border-white/[0.04]">
                                {DAYS.map(day => (
                                    <div key={day} className="py-2.5 sm:py-3 text-center text-[11px] sm:text-xs uppercase tracking-widest text-white/30 font-semibold">
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar grid */}
                            <div className="grid grid-cols-7">
                                {calendarCells.map((cell, idx) => {
                                    const cellEvents = getEventsForDate(cell.date);
                                    const isToday = cell.date && isSameDay(cell.date, today);
                                    const hasEvents = cellEvents.length > 0;

                                    return (
                                        <div
                                            key={idx}
                                            className={`
                                                relative min-h-[60px] sm:min-h-[90px] md:min-h-[100px] p-1 sm:p-2 border-b border-r border-white/[0.03]
                                                transition-colors duration-200
                                                ${cell.isCurrentMonth ? 'bg-transparent hover:bg-white/[0.02]' : 'bg-white/[0.01]'}
                                                ${hasEvents ? 'cursor-pointer' : ''}
                                            `}
                                            onClick={() => { if (cellEvents.length > 0) setSelectedEvent(cellEvents[0]); }}
                                        >
                                            {/* Day number */}
                                            <span className={`
                                                inline-flex items-center justify-center text-xs sm:text-sm font-medium
                                                ${!cell.isCurrentMonth ? 'text-white/15' : isToday ? '' : 'text-white/60'}
                                                ${isToday ? 'w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-500 text-white font-bold text-xs' : ''}
                                            `}>
                                                {cell.day}
                                            </span>

                                            {/* Event pills */}
                                            <div className="mt-1 flex flex-col gap-0.5">
                                                {cellEvents.map((ev, ei) => {
                                                    const c = colorMap[ev.color] || colorMap.orange;
                                                    return (
                                                        <div
                                                            key={ei}
                                                            className={`
                                                                flex items-center gap-1 rounded-md px-1 sm:px-1.5 py-0.5
                                                                ${c.bg} transition-all hover:brightness-125
                                                            `}
                                                        >
                                                            <div className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
                                                            <span className={`text-[9px] sm:text-[10px] font-medium ${c.text} truncate`}>
                                                                {ev.title}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Bottom bezel (home indicator) */}
                        <div className="flex items-center justify-center py-3 sm:py-4">
                            <div className="w-24 sm:w-32 h-1 rounded-full bg-white/10" />
                        </div>
                    </div>
                </motion.div>

                {/* Upcoming events strip below the tablet */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full max-w-[1100px] mt-8 sm:mt-10"
                >
                    <h3 className="text-lg font-bold font-heading text-white/70 mb-4 px-1">Upcoming Events</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {EVENTS.filter(e => new Date(e.date) >= today).slice(0, 3).map((ev, i) => {
                            const c = colorMap[ev.color] || colorMap.orange;
                            const d = new Date(ev.date);
                            return (
                                <motion.div
                                    key={ev.title}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                                    onClick={() => setSelectedEvent(ev)}
                                    className={`group relative rounded-2xl border ${c.border} bg-white/[0.03] backdrop-blur-xl p-5 cursor-pointer hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${c.glow}`}
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Date block */}
                                        <div className={`w-12 h-14 rounded-xl ${c.bg} flex flex-col items-center justify-center shrink-0`}>
                                            <span className={`text-[10px] uppercase font-bold ${c.text} leading-none`}>
                                                {MONTHS[d.getMonth()].slice(0, 3)}
                                            </span>
                                            <span className={`text-xl font-bold ${c.text} leading-tight`}>
                                                {d.getDate()}
                                            </span>
                                        </div>

                                        <div className="min-w-0">
                                            <h4 className="text-sm font-bold text-white group-hover:text-white/90 truncate">{ev.title}</h4>
                                            <p className="text-xs text-white/40 mt-0.5 truncate flex items-center gap-1">
                                                <Clock className="w-3 h-3 inline shrink-0" /> {ev.time}
                                            </p>
                                            <p className="text-xs text-white/40 truncate flex items-center gap-1">
                                                <MapPin className="w-3 h-3 inline shrink-0" /> {ev.location}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>

            {/* Event detail modal */}
            {selectedEvent && <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
        </div>
    );
};

export default Events;
