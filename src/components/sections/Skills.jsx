import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.skill-card',
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    scrollTrigger: {
                        trigger: '#skills',
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: 'power2.out',
                }
            );
        });

        return () => ctx.revert();
    }, []);

    const skillCategories = [
        {
            category: 'Web Development',
            title: 'WEB DEVELOPMENT',
            skills: [
                'HTML, CSS, JavaScript',
                'React, Next.js',
                'Node.js, Express',
                'Tailwind CSS',
                'REST APIs',
                'MongoDB, SQL',
            ],
        },
        {
            category: 'Programming & DSA',
            title: 'PROGRAMMING & DSA',
            skills: [
                'Java (Primary)',
                'Data Structures',
                'Algorithms',
                'Problem Solving',
                'C/C++ (Basic)',
                'Competitive Programming',
            ],
        },
        {
            category: 'Tools & Platforms',
            title: 'TOOLS & PLATFORMS',
            skills: [
                'Git & GitHub',
                'VS Code',
                'Postman',
                'Figma (Basic)',
                'Linux/Windows',
                'CI/CD Basics',
            ],
        },
        {
            category: 'AI & Learning',
            title: 'AI & LEARNING',
            skills: [
                'AI/ML Exploration',
                'LLM Integration',
                'Prompt Engineering',
                'Open-source Contributions',
                'Automation Tools',
                'Continuous Learning',
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="section-container bg-gradient-to-b from-almost-black via-dark-gray to-almost-black section-blend-top section-blend-bottom"
            style={{
                '--blend-color-top': '#0a0a0a', // From About
                '--blend-color-bottom': '#000000' // To Projects
            }}
        >
            <div className="w-full max-w-7xl">
                <h2 className="heading-lg mb-16 text-center">SKILLS & STACK</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="skill-card glass-card-hover p-8 perspective-1000 group"
                        >
                            <div className="label-mono mb-4 text-mid-gray">{category.category}</div>
                            <h3 className="heading-md mb-6 text-2xl">{category.title}</h3>

                            <ul className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <li
                                        key={skillIndex}
                                        className="flex items-center gap-3 text-light-gray group-hover:text-white transition-colors duration-300"
                                    >
                                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                        <span className="text-sm md:text-base">{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
