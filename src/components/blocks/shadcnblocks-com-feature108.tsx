import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
}

interface Tab {
    value: string;
    icon: React.ReactNode;
    label: string;
    content: TabContent;
}

interface Feature108Props {
    badge?: string;
    heading?: string;
    description?: string;
    tabs?: Tab[];
}

const Feature108 = ({
    badge = "shadcnblocks.com",
    heading = "A Collection of Components Built With Shadcn & Tailwind",
    description = "Join us to build flawless web solutions.",
    tabs = [
        {
            value: "tab-1",
            icon: <Zap className="h-auto w-4 shrink-0" />,
            label: "Boost Revenue",
            content: {
                badge: "Modern Tactics",
                title: "Make your site a true standout.",
                description:
                    "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
                buttonText: "See Plans",
                imageSrc:
                    "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
                imageAlt: "placeholder",
            },
        },
        {
            value: "tab-2",
            icon: <Pointer className="h-auto w-4 shrink-0" />,
            label: "Higher Engagement",
            content: {
                badge: "Expert Features",
                title: "Boost your site with top-tier design.",
                description:
                    "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
                buttonText: "See Tools",
                imageSrc:
                    "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
                imageAlt: "placeholder",
            },
        },
        {
            value: "tab-3",
            icon: <Layout className="h-auto w-4 shrink-0" />,
            label: "Stunning Layouts",
            content: {
                badge: "Elite Solutions",
                title: "Build an advanced web experience.",
                description:
                    "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
                buttonText: "See Options",
                imageSrc:
                    "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
                imageAlt: "placeholder",
            },
        },
    ],
}: Feature108Props) => {
    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="flex flex-col items-center gap-4 text-center">
                    <Badge variant="outline" className="border-border/50 text-muted-foreground uppercase tracking-widest bg-muted/30">{badge}</Badge>
                    <h2 className="max-w-2xl text-4xl font-bold md:text-5xl font-heading tracking-tight">
                        {heading}
                    </h2>
                    <p className="text-xl text-muted-foreground mt-2 max-w-2xl">{description}</p>
                </div>
                <Tabs defaultValue={tabs[0].value} className="mt-16">
                    <TabsList className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
                        {tabs.map((tab) => (
                            <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-muted-foreground transition-all 
                           data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:scale-105 hover:bg-muted"
                            >
                                {tab.icon} {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="mx-auto mt-12 max-w-screen-xl rounded-3xl bg-card border border-border/50 shadow-sm p-6 lg:p-12 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

                        {tabs.map((tab) => (
                            <TabsContent
                                key={tab.value}
                                value={tab.value}
                                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-16 data-[state=active]:animate-in data-[state=active]:fade-in-50 data-[state=active]:slide-in-from-bottom-10 duration-500 ease-out"
                            >
                                <div className="flex flex-col gap-6 relative z-10 w-full pl-2">
                                    <Badge variant="outline" className="w-fit bg-background border-primary/20 text-primary">
                                        {tab.content.badge}
                                    </Badge>
                                    <h3 className="text-4xl font-bold lg:text-5xl tracking-tight leading-tight">
                                        {tab.content.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                                        {tab.content.description}
                                    </p>
                                    <Button className="mt-4 w-fit gap-2 rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all" size="lg">
                                        {tab.content.buttonText}
                                    </Button>
                                </div>
                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl z-10">
                                    <img
                                        src={tab.content.imageSrc}
                                        alt={tab.content.imageAlt}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export { Feature108 };
