'use client';

import { motion } from 'framer-motion';
import { Heart, ShieldCheck, TrendingUp, CheckCircle, UserCheck, Star } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const pillars = [
    {
        id: 1,
        problem: "Agencies that ghost you after the deposit.",
        title: "Direct Access to Engineers",
        solution: "No account managers playing ineffective 'telephone'. You get a dedicated Slack channel with the actual developers and designers building your product.",
        result: "Clear Communication, Zero Surprises",
        icon: UserCheck
    },
    {
        id: 2,
        problem: "Projects that drag on for months.",
        title: "Rapid Execution",
        solution: "We work in 2-week sprints with guaranteed deliverables. You see progress every single week, not just at the final reveal.",
        result: "Launch in Weeks, Not Months",
        icon: TrendingUp
    },
    {
        id: 3,
        problem: "Hidden costs and scope creep.",
        title: "Transparent Pricing",
        solution: "We provide fixed-price quotes with detailed scopes. You know exactly what you're paying for and exactly what you're getting. No surprise bills.",
        result: "On Time, On Budget",
        icon: ShieldCheck
    }
];

export default function WhyChooseUs() {
    return (
        <section className={styles.section} id="why-choose-us">
            <div className={styles.bgGlow} />

            <div className={styles.container}>

                {/* Header - Empathetic Approach */}
                <div className={styles.header}>
                    <motion.span
                        className={styles.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heart size={14} fill="currentColor" /> Designed Around You
                    </motion.span>
                    <motion.h2
                        className={styles.headline}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Working with an Agency <br />
                        <span className={styles.highlightText}>Shouldn&apos;t Be a Headache.</span>
                    </motion.h2>
                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        You don&apos;t need another vendor who speaks in code. You need a partner who speaks in results.
                        We exist to make your life easier and your business bigger.
                    </motion.p>
                </div>

                {/* Grid - The Transformation */}
                <div className={styles.pillarsGrid}>
                    {pillars.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.id}
                                className={styles.pillarCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                            >
                                <div className={styles.iconWrapper}>
                                    <div className={styles.iconContainer}>
                                        <Icon size={32} />
                                    </div>
                                </div>

                                {/* The Struggle (Relatable) */}
                                <p className={styles.scamText}>&quot;{item.problem}&quot;</p>

                                {/* The Solution (Empowering) */}
                                <h3 className={styles.truthTitle}>{item.title}</h3>
                                <p className={styles.truthDesc}>{item.solution}</p>

                                {/* The Outcome (Tangible) */}
                                <div className={styles.resultBadge}>
                                    <CheckCircle size={18} />
                                    {item.result}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>

            {/* CTA Injection */}
            <motion.div
                className={styles.ctaWrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <div className={styles.ctaBox}>
                    <div>
                        <h4 className={styles.ctaTitle}>Not sure where to start?</h4>
                        <p className={styles.ctaText}>Get a comprehensive analysis of your current digital presence.</p>
                    </div>
                    <a href="/audit" className="btn btn-primary">
                        Get Your Free Website Audit
                    </a>
                </div>
            </motion.div>

        </section>
    );
}
