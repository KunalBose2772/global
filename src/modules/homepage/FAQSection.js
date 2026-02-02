'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './FAQSection.module.css';

const faqs = [
    {
        question: "How much does a typical engagement cost?",
        answer: "Every project is unique, but our engagement typically starts at $5k for core web development and scales based on complexity. We focus on ROI—most clients see their investment pay off within the first 6 months through increased conversion and efficiency."
    },
    {
        question: "How long will it take to launch?",
        answer: "A standard high-performance website takes 4-6 weeks from strategy to launch. More complex web apps or SaaS platforms typically range from 8-12 weeks. We provide a detailed timeline during our diagnosis phase and stick to it."
    },
    {
        question: "What kind of support do you provide after launch?",
        answer: "We don't just hand over the keys and disappear. We offer comprehensive support packages that include server monitoring, security updates, and content management. We act as your fractional technical team."
    },
    {
        question: "What if it doesn't work?",
        answer: "We operate on a milestone basis with clear deliverables. If we miss a critical metric defined in our strategy, we continue working at no extra cost until it's hit. Our 'Risk Reduction Engine' is designed to prevent failure before we wrote a single line of code."
    } // Psychological objection removal
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Objection Removal</span>
                    <h2 className={styles.headline}>
                        Your Fears, <span className={styles.highlight}>Answered.</span>
                    </h2>
                </div>

                <div className={styles.accordion}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${openIndex === index ? styles.itemOpen : ''}`}
                        >
                            <button
                                className={styles.trigger}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                            >
                                {faq.question}
                                <span className={styles.iconWrapper}>
                                    <ChevronDown size={20} />
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        className={styles.content}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className={styles.contentInner}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
