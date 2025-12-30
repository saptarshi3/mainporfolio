import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.project-card',
                {
                    x: (index) => (index % 2 === 0 ? -100 : 100),
                    opacity: 0,
                },
                {
                    scrollTrigger: {
                        trigger: '#projects',
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    x: 0,
                    opacity: 1,
                    stagger: 0.3,
                    duration: 1,
                    ease: 'power2.out',
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            title: 'E-Marketplace & Produce Traceability Platform',
            role: 'Full-stack Developer',
            description:
                'Web platform designed to improve agricultural supply chain transparency and market access for small farmers in India. Features real-time tracking, farmer profiles, and buyer connections.',
            tech: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Express'],
            year: '2024',
        },
        {
            title: 'Drug Inventory & Supply Chain Tracker',
            role: 'Full-stack Developer • Hackathon Project',
            description:
                'System to monitor medicine stock levels, track distribution, and increase transparency in drug logistics. Built during Smart India Hackathon.',
            tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'JWT Auth'],
            year: '2024',
        },
        {
            title: 'Personal Portfolio Concepts',
            role: 'Frontend Developer & Designer',
            description:
                'Experimental frontends focused on scroll animations, glassmorphism, and minimal aesthetics. Exploring Three.js and WebGL for immersive experiences.',
            tech: ['React', 'Three.js', 'GSAP', 'Tailwind CSS', 'Framer Motion'],
            year: '2024-2025',
        },
        {
            title: 'DSA Visualizer',
            role: 'Developer',
            description:
                'Interactive tool to visualize data structures and algorithms in Java. Helps students understand complex concepts through animations and step-by-step execution.',
            tech: ['Java', 'JavaFX', 'Algorithms', 'Data Structures'],
            year: '2024',
        },
    ];

    return (
        <section
            id="projects"
            className="section-container bg-pure-black relative overflow-hidden section-blend-top section-blend-bottom"
            style={{
                '--blend-color-top': '#0a0a0a', // From Skills
                '--blend-color-bottom': '#1a1a1a' // To Experience
            }}
        >
            {/* Spotlight effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl">
                <div className="mb-16">
                    <h2 className="heading-lg mb-6">PROJECTS</h2>
                    <p className="text-light-gray text-lg max-w-2xl">
                        A selection of work that reflects how I think about interfaces, performance, and user experience.
                    </p>
                </div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card glass-card-hover p-8 md:p-10 group cursor-pointer"
                            style={{
                                transform: 'perspective(1000px)',
                            }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Left: Content */}
                                <div className="space-y-4">
                                    <div className="label-mono">{project.year}</div>
                                    <h3 className="heading-md text-2xl md:text-3xl group-hover:text-shadow-glow transition-all duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-mid-gray text-sm">{project.role}</p>
                                    <p className="text-light-gray leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs border border-white/20 rounded-full text-light-gray"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: Placeholder visual */}
                                <div className="flex items-center justify-center">
                                    <div className="w-full aspect-video glass-card flex items-center justify-center relative overflow-hidden group-hover:border-white/30 transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                                        <div className="relative z-10 flex flex-col items-center gap-4 text-mid-gray">
                                            <ExternalLink className="w-12 h-12" />
                                            <span className="label-mono text-xs">PROJECT PREVIEW</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
