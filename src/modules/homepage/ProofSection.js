'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './ProofSection.module.css';

const caseStudies = [
    {
        id: 1,
        industry: 'E-Commerce',
        client: 'Generic Fashion Brand',
        challenge: 'High traffic but incredibly low conversion rate (0.8%).',
        solution: 'implemented comprehensive UX audit and streamlined checkout flow.',
        metric: 245,
        suffix: '%',
        metricDesc: 'Increase in Sales'
    },
    {
        id: 2,
        industry: 'Real Estate',
        client: 'Luxury Developers',
        challenge: 'Inconsistent lead quality and high cost per acquisition.',
        solution: 'Built a high-performance landing page system with CRM integration.',
        metric: 65,
        suffix: '%',
        metricDesc: 'Lower Cost Per Lead'
    },
    {
        id: 3,
        industry: 'SaaS',
        client: 'Tech Startup',
        challenge: 'Website was crashing during product launch spikes.',
        solution: 'Migrated to scalable cloud architecture with Next.js.',
        metric: 99.9,
        suffix: '%',
        metricDesc: 'Uptime Guarantee'
    }
];

export default function ProofSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>Real Results</span>
                    <h2 className={styles.headline}>
                        It Worked For Them. <span className={styles.highlight}>It Will Work For You.</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {caseStudies.map((study, index) => (
                        <CaseCard key={study.id} study={study} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CaseCard({ study, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
        >
            <div className={styles.clientInfo}>
                <span className={styles.industryBadge}>{study.industry}</span>
                <div className={styles.clientName}>{study.client}</div>
            </div>

            <div className={styles.challengeStep}>
                <span className={styles.label}>Problem</span>
                <p className={styles.description}>{study.challenge}</p>
            </div>

            <div className={styles.challengeStep}>
                <span className={styles.label}>Solution</span>
                <p className={styles.description}>{study.solution}</p>
            </div>

            <div className={styles.resultBox}>
                <span className={styles.metricValue}>
                    <Counter from={0} to={study.metric} duration={2} isInView={isInView} />
                    {study.suffix}
                </span>
                <span className={styles.metricLabel}>{study.metricDesc}</span>
            </div>
        </motion.div>
    );
}

function Counter({ from, to, duration, isInView }) {
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            setCount(from + (to - from) * ease);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [from, to, duration, isInView]);

    // Handle floating points if needed
    const displayValue = Number.isInteger(to)
        ? Math.round(count)
        : count.toFixed(1);

    return <>{displayValue}</>;
}
