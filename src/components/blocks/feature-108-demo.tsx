import { Truck, Users, Zap } from "lucide-react";

import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108"

const demoData = {
    badge: "Community Focus",
    heading: "Our Core Pillars of Service",
    description: "Discover how we operate and the direct impact your support makes every single day.",
    tabs: [
        {
            value: "tab-1",
            icon: <Zap className="h-auto w-4 shrink-0" />,
            label: "Our Impact",
            content: {
                badge: "Direct Action",
                title: "Make a real difference.",
                description:
                    "See how thousands of warm meals are creating lasting change in our community. We handle logistics so your donations go straight to the plate.",
                buttonText: "See Stats",
                imageSrc:
                    "https://images.unsplash.com/photo-1593113565630-1e2b582654c5?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Volunteers serving food",
            },
        },
        {
            value: "tab-2",
            icon: <Truck className="h-auto w-4 shrink-0" />,
            label: "Mobile Delivery",
            content: {
                badge: "Access For All",
                title: "Reaching those who can't reach us.",
                description:
                    "Our mobile food trucks ensure isolated neighborhoods and home-bound seniors receive the quality meals and human interaction they deserve.",
                buttonText: "Track Trucks",
                imageSrc:
                    "https://images.unsplash.com/photo-1588614959060-4d144f28b207?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "Delivery truck",
            },
        },
        {
            value: "tab-3",
            icon: <Users className="h-auto w-4 shrink-0" />,
            label: "Community Kitchens",
            content: {
                badge: "Safe Spaces",
                title: "A warm place for everyone.",
                description:
                    "We operate inclusive dining areas where anyone can enjoy a fresh meal and good company. It's more than food; it's about building a supportive community.",
                buttonText: "Find a Kitchen",
                imageSrc:
                    "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?q=80&w=1200&auto=format&fit=crop",
                imageAlt: "People dining together",
            },
        },
    ],
};

function Feature108Demo() {
    return <Feature108 {...demoData} />;
}

export { Feature108Demo };
