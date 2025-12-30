import { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (you can integrate with a backend or email service)
        console.log('Form submitted:', formData);
        alert('Message sent! (This is a demo - integrate with a real backend)');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const socialLinks = [
        { icon: Github, label: 'GitHub', url: 'https://github.com' },
        { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
        { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
    ];

    return (
        <section
            id="contact"
            className="section-container bg-pure-black relative overflow-hidden section-blend-top"
            style={{ '--blend-color-top': '#0a0a0a' }} // From OpenSource (almost-black)
        >
            {/* Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="heading-xl mb-6">
                        <span className="block">LET'S BUILD</span>
                        <span className="block gradient-text">SOMETHING</span>
                    </h2>
                    <p className="text-light-gray text-lg max-w-2xl mx-auto">
                        Open to internships, remote work, open-source collaboration, and interesting side projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="heading-md text-2xl mb-6">GET IN TOUCH</h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <Mail className="w-5 h-5 mt-1 text-mid-gray" />
                                    <div>
                                        <p className="label-mono mb-1">Email</p>
                                        <a
                                            href="mailto:saptarshikundu044@gmail.com"
                                            className="text-white hover:text-light-gray transition-colors"
                                        >
                                            saptarshikundu044@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 mt-1 text-mid-gray" />
                                    <div>
                                        <p className="label-mono mb-1">Location</p>
                                        <p className="text-white">Kolkata, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <p className="label-mono mb-4">CONNECT</p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="glass-card p-4 hover:bg-white/10 transition-all duration-300 group"
                                            aria-label={social.label}
                                        >
                                            <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="label-mono block mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-mid-gray focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="label-mono block mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-mid-gray focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="label-mono block mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-mid-gray focus:outline-none focus:border-white/30 transition-colors resize-none"
                                    placeholder="Tell me about your project or idea..."
                                />
                            </div>

                            <button type="submit" className="btn-outline w-full flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center pt-12 border-t border-white/10">
                    <p className="text-mid-gray text-sm mb-2">
                        © 2025 Saptarshi. Crafted in black & white.
                    </p>
                    <p className="font-mono text-xs text-mid-gray">
            // minimal, but dramatic
                    </p>
                </div>
            </div>
        </section>
    );
}
