import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-content', {
                scrollTrigger: {
                    trigger: '#about',
                    start: 'top center',
                    end: 'center center',
                    scrub: 1,
                },
                y: 100,
                opacity: 0,
            });
        });

        return () => ctx.revert();
    }, []);

    const facts = [
        { label: 'Location', value: 'Kolkata, India' },
        { label: 'Degree', value: 'B.Tech IT' },
        { label: 'College', value: 'Techno Main Salt Lake' },
        { label: 'Interests', value: 'Web Dev, AI, Open-Source, Design, Hackathons' },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="section-container bg-almost-black relative section-blend-top"
            style={{ '--blend-color-top': '#000000' }} // From Hero
        >
            {/* Grid background */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
            }} />

            <div className="about-content relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Left: Abstract portrait frame */}
                <div className="flex items-center justify-center">
                    <div className="glass-card p-8 w-full max-w-md aspect-square flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10 text-center">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white/20 flex items-center justify-center">
                                <span className="text-6xl font-display font-bold">S</span>
                            </div>
                            <p className="label-mono">SAPTARSHI KUNDU</p>
                        </div>
                    </div>
                </div>

                {/* Right: Text content */}
                <div className="flex flex-col justify-center space-y-8">
                    <h2 className="heading-lg">ABOUT SAP</h2>

                    <div className="space-y-4 text-light-gray text-base md:text-lg leading-relaxed">
                        <p>
                            I'm <span className="text-white font-semibold">Saptarshi (Sap)</span>, a B.Tech Information Technology student at Techno Main Salt Lake, Kolkata. I love building web experiences that feel smooth, intentional, and just a little bit dramatic.
                        </p>
                        <p>
                            I'm currently focused on <span className="text-white">full-stack web development</span>, data structures & algorithms in Java, and experimenting with AI and open-source projects. I enjoy learning by building and shipping things, not just reading about them.
                        </p>
                    </div>

                    {/* Facts grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        {facts.map((fact, index) => (
                            <div key={index} className="glass-card p-4 hover:bg-white/10 transition-all duration-300">
                                <p className="label-mono mb-2">{fact.label}</p>
                                <p className="text-white text-sm">{fact.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
