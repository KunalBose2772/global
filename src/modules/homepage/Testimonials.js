'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        id: 1,
        content: "Global Webify transformed our digital presence. Their team understood our vision perfectly and delivered a website that has significantly improved our conversion rates. The attention to detail is unmatched.",
        name: "Sarah Jenkins",
        role: "Marketing Director",
        company: "TechFlow Industries",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5
    },
    {
        id: 2,
        content: "Working with them was a game-changer for our startup. They handled everything from branding to full-stack development. We raised our Series A funding largely due to the professional platform they built.",
        name: "Michael Chen",
        role: "Founder & CEO",
        company: "Novus Analytics",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5
    },
    {
        id: 3,
        content: "Professional, responsive, and incredibly talented. They didn't just build a site; they built a comprehensive digital strategy that has helped us scale our operations globally.",
        name: "Emma Thompson",
        role: "Operations Manager",
        company: "Global Trade Co",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className={styles.testimonialsSection}>
            {/* Background Ambience */}
            <div className={styles.bgGradient} />
            <div className={styles.bgGrid} />

            <div className="container">
                {/* Header */}
                <div className={styles.header}>
                    <motion.span
                        className={styles.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What They Say
                    </motion.span>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Trusted by Industry <br />
                        <span style={{ color: '#3b82f6' }}>Leaders Worldwide.</span>
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We don&apos;t just build websites; we build lasting partnerships. Here&apos;s what our clients have to say about their experience working with us.
                    </motion.p>
                </div>

                {/* Testimonial Grid */}
                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                        >
                            <div>
                                <div className={styles.rating}>
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={16} className={styles.star} />
                                    ))}
                                </div>
                                <Quote size={32} className={styles.quoteIcon} />
                                <p className={styles.quote}>&quot;{item.content}&quot;</p>
                            </div>

                            <div className={styles.author}>
                                <div className={styles.avatarWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={56}
                                        height={56}
                                        className={styles.avatar}
                                    />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.name}>{item.name}</div>
                                    <div className={styles.role}>
                                        {item.role}, <span className={styles.company}>{item.company}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
