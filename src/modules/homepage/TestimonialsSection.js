'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
    {
        id: 1,
        quote: "I was losing sleep over our site performance. After the switch, our load times dropped by 70% and I finally stopped worrying about Google rankings.",
        author: "Sarah Jenkins",
        role: "CMO, TechFlow Inc."
    },
    {
        id: 2,
        quote: "It’s rare to find a team that actually understands business, not just code. I feel completely confident handing them our biggest projects.",
        author: "Michael Ross",
        role: "Founder, Estate Ventures"
    },
    {
        id: 3,
        quote: "The relief I felt when the new platform launched without a single bug was indescribable. They took the stress completely out of the equation.",
        author: "David Chen",
        role: "CTO, NextLevel SaaS"
    },
    {
        id: 4,
        quote: "We were drowning in technical debt. They didn't just fix it; they engineered a system that's making our team faster and happier.",
        author: "Amanda Locke",
        role: "VP of Engineering, ScaleUp"
    }
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Calculate the 3 visible testimonials
    const visibleTestimonials = [
        testimonials[activeIndex % testimonials.length],
        testimonials[(activeIndex + 1) % testimonials.length],
        testimonials[(activeIndex + 2) % testimonials.length],
    ];

    return (
        <section className={styles.section}>
            <div className={styles.glow} />
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Emotional Validation</span>
                    <h2 className={styles.headline}>
                        The Relief of <span className={styles.highlight}>Reliability.</span>
                    </h2>
                </div>

                <div className={styles.carouselViewport}>
                    <motion.div className={styles.cardTrack} layout>
                        <AnimatePresence mode="popLayout" initial={false}>
                            {visibleTestimonials.map((t) => (
                                <motion.div
                                    key={t.id}
                                    layout
                                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        scale: 1,
                                    }}
                                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
                                    className={`${styles.card} ${t.id === testimonials[(activeIndex + 1) % testimonials.length].id ? styles.cardActive : ''}`}
                                >
                                    <Quote size={32} className={styles.quoteIcon} />
                                    <p className={styles.quoteText}>"{t.quote}"</p>

                                    <div className={styles.authorBlock}>
                                        <div className={styles.authorName}>{t.author}</div>
                                        <div className={styles.authorRole}>{t.role}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

                <div className={styles.controls}>
                    <button className={styles.navButton} onClick={prevSlide} aria-label="Previous testimonial">
                        <ChevronLeft size={20} />
                    </button>
                    <button className={styles.navButton} onClick={nextSlide} aria-label="Next testimonial">
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div className={styles.indicators}>
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
