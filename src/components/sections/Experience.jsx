import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Trophy, Code } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.timeline-item', {
                scrollTrigger: {
                    trigger: '#experience',
                    start: 'top center',
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
            });
        });

        return () => ctx.revert();
    }, []);

    const experiences = [
        {
            icon: Trophy,
            title: 'Smart India Hackathon (SIH)',
            role: 'Full-stack Developer / Team Member',
            description:
                'Participated in India\'s largest hackathon, developing a drug inventory and supply chain tracking system. Collaborated with a team to build a full-stack solution addressing real-world healthcare logistics challenges.',
            year: '2024',
            tags: ['Hackathon', 'Problem-solving', 'Teamwork'],
        },
        {
            icon: Code,
            title: 'College Hackathons & Coding Competitions',
            role: 'Developer & Participant',
            description:
                'Active participant in various college-level hackathons and coding competitions. Focused on building practical solutions and improving problem-solving skills under time constraints.',
            year: '2023-2024',
            tags: ['Competitive Programming', 'Web Development', 'Innovation'],
        },
        {
            icon: Award,
            title: 'Open Source & Freelance Work',
            role: 'Contributor & Developer',
            description:
                'Contributing to open-source projects on GitHub and taking on small freelance web development projects. Building real-world experience while giving back to the developer community.',
            year: '2023-Present',
            tags: ['Open Source', 'Freelance', 'Community'],
        },
    ];

    return (
        <section
            id="experience"
            className="section-container bg-dark-gray relative section-blend-top section-blend-bottom"
            style={{
                '--blend-color-top': '#000000', // From Projects
                '--blend-color-bottom': '#0a0a0a' // To OpenSource
            }}
        >
            {/* Dot grid background */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            }} />

            <div className="relative z-10 w-full max-w-5xl">
                <h2 className="heading-lg mb-16 text-center">EXPERIENCE & HACKATHONS</h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const Icon = exp.icon;
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 ${isEven ? '' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-white rounded-full -translate-x-1/2 z-10 hidden md:block" />

                                    {/* Content */}
                                    <div className={`${isEven ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                                        <div className={`glass-card-hover p-6 md:p-8 ${isEven ? 'md:ml-auto' : ''}`}>
                                            <div className={`flex items-center gap-3 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                                                <Icon className="w-6 h-6 text-white" />
                                                <span className="label-mono">{exp.year}</span>
                                            </div>

                                            <h3 className="heading-md text-xl md:text-2xl mb-2">{exp.title}</h3>
                                            <p className="text-mid-gray text-sm mb-4">{exp.role}</p>
                                            <p className="text-light-gray leading-relaxed mb-6">{exp.description}</p>

                                            <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                                                {exp.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-3 py-1 text-xs border border-white/20 rounded-full text-light-gray"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
