import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
    const textRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-line', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            });

            gsap.from('.hero-label', {
                opacity: 0,
                duration: 1,
                delay: 0.5,
            });

            gsap.from('.hero-cta', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 1,
            });
        });

        return () => ctx.revert();
    }, []);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="section-container relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-almost-black/50 to-pure-black pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl">
                <div className="flex flex-col items-start justify-center min-h-screen">
                    {/* Mini label */}
                    <div className="hero-label label-mono mb-8">
                        SAPTARSHI / PORTFOLIO 2025
                    </div>

                    {/* Main heading */}
                    <div ref={textRef} className="mb-12">
                        <h1 className="heading-xl mb-4">
                            <div className="hero-line overflow-hidden">
                                <span className="block">I BUILD</span>
                            </div>
                            <div className="hero-line overflow-hidden">
                                <span className="block">SMOOTH</span>
                            </div>
                            <div className="hero-line overflow-hidden">
                                <span className="block gradient-text">DIGITAL EXPERIENCES</span>
                            </div>
                        </h1>
                    </div>

                    {/* Subheading */}
                    <div className="hero-label max-w-2xl mb-12 space-y-2">
                        <p className="text-light-gray text-base md:text-lg">
                            B.Tech IT student • Techno Main Salt Lake, Kolkata
                        </p>
                        <p className="text-mid-gray text-sm md:text-base">
                            Full-stack web dev • DSA in Java • Open-source & AI
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="hero-cta flex flex-wrap gap-6 items-center">
                        <button onClick={scrollToProjects} className="btn-outline">
                            View Projects
                        </button>
                        <a href="#contact" className="btn-text">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-indicator">
                <span className="label-mono text-xs">SCROLL</span>
                <ChevronDown className="w-5 h-5" />
            </div>
        </section>
    );
}
