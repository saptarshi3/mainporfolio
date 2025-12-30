import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSwap, { Card } from '../CardSwap/CardSwap';

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
            title: 'E-Marketplace & Produce Traceability',
            role: 'Full-stack Developer',
            description:
                'Agricultural supply chain transparency platform with real-time tracking and farmer connections.',
            tech: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
            year: '2024',
        },
        {
            title: 'Drug Inventory & Supply Chain',
            role: 'Full-stack Developer • SIH',
            description:
                'Smart India Hackathon project for medicine stock monitoring and transparency in logistics.',
            tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
            year: '2024',
        },
        {
            title: 'Personal Portfolio Concepts',
            role: 'Frontend Developer & Designer',
            description:
                'Experimental frontends with scroll animations, glassmorphism, and 3D web experiences.',
            tech: ['React', 'Three.js', 'GSAP', 'Tailwind'],
            year: '2024-2025',
        },
        {
            title: 'DSA Visualizer',
            role: 'Developer',
            description:
                'Interactive visualization tool for data structures and algorithms with step-by-step execution.',
            tech: ['Java', 'JavaFX', 'Algorithms', 'DSA'],
            year: '2024',
        },
    ];

    return (
        <section
            id="projects"
            className="section-container bg-pure-black relative overflow-visible section-blend-top section-blend-bottom"
            style={{
                '--blend-color-top': '#0a0a0a',
                '--blend-color-bottom': '#0a0a0a'
            }}
        >
            {/* Spotlight effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-7xl">
                <div className="mb-16">
                    <h2 className="heading-lg mb-6">PROJECTS</h2>
                    <p className="text-light-gray text-lg max-w-2xl">
                        A selection of work that showcases interfaces, performance, and user experience.
                    </p>
                </div>

                <div className="relative h-[600px]">
                    <CardSwap
                        width={500}
                        height={280}
                        cardDistance={50}
                        verticalDistance={60}
                        delay={6000}
                        pauseOnHover={true}
                        skewAmount={5}
                        easing="elastic"
                    >
                        {projects.map((project, index) => (
                            <Card key={index} className="project-card">
                                <div className="flex flex-col h-full justify-between">
                                    <div>
                                        <div className="label-mono text-xs mb-2">{project.year}</div>
                                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                                        <p className="text-xs text-mid-gray mb-3">{project.role}</p>
                                        <p className="text-sm leading-relaxed">{project.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1 pt-3">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 text-xs border border-white/20 rounded text-light-gray"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </div>
        </section>
    );
}
