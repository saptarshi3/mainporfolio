import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function OpenSource() {
    const [typedText, setTypedText] = useState('');

    const terminalLines = [
        '> contributing to open-source on GitHub',
        '> exploring AI tools, prompts, and automation',
        '> building small experiments with APIs and LLMs',
        '> learning by doing, not just reading',
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.opensource-card', {
                scrollTrigger: {
                    trigger: '#opensource',
                    start: 'top center',
                },
                y: 50,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
            });
        });

        // Typewriter effect
        let currentLine = 0;
        let currentChar = 0;
        let text = '';

        const typeInterval = setInterval(() => {
            if (currentLine < terminalLines.length) {
                if (currentChar < terminalLines[currentLine].length) {
                    text += terminalLines[currentLine][currentChar];
                    setTypedText(text);
                    currentChar++;
                } else {
                    text += '\n';
                    setTypedText(text);
                    currentLine++;
                    currentChar = 0;
                }
            } else {
                clearInterval(typeInterval);
            }
        }, 50);

        return () => {
            ctx.revert();
            clearInterval(typeInterval);
        };
    }, []);

    return (
        <section
            id="opensource"
            className="section-container bg-almost-black relative section-blend-top section-blend-bottom"
            style={{
                '--blend-color-top': '#1a1a1a', // From Experience
                '--blend-color-bottom': '#000000' // To Contact
            }}
        >
            {/* Noise background */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'
            }} />

            <div className="relative z-10 w-full max-w-6xl">
                <h2 className="heading-lg mb-16 text-center">OPEN SOURCE & AI</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Terminal panel */}
                    <div className="opensource-card glass-card p-8 font-mono text-sm">
                        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="ml-4 text-mid-gray">terminal</span>
                        </div>

                        <div className="space-y-2 text-light-gray whitespace-pre-wrap min-h-[200px]">
                            {typedText}
                            <span className="inline-block w-2 h-4 bg-white animate-pulse ml-1" />
                        </div>
                    </div>

                    {/* Info cards */}
                    <div className="space-y-6">
                        <div className="opensource-card glass-card-hover p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Github className="w-6 h-6" />
                                <h3 className="heading-md text-xl">GitHub</h3>
                            </div>
                            <p className="text-light-gray leading-relaxed mb-4">
                                Active on GitHub, contributing to open-source projects and building in public.
                                Sharing code, learning from others, and collaborating with the developer community.
                            </p>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-text inline-block"
                            >
                                View Profile
                            </a>
                        </div>

                        <div className="opensource-card glass-card-hover p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Sparkles className="w-6 h-6" />
                                <h3 className="heading-md text-xl">AI Experiments</h3>
                            </div>
                            <p className="text-light-gray leading-relaxed">
                                I'm exploring how AI tools can speed up development, generate creative ideas, and help
                                prototype quickly. This portfolio itself is an example of using AI and 3D together to
                                create something unique and memorable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
