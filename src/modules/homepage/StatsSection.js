'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from './StatsSection.module.css';

// Animated Counter Component
const Counter = ({ value, duration = 2 }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
    // Parse numeric part and suffix (e.g., "200" and "+")
    const num = parseInt(value);
    const suffix = value.replace(/[0-9]/g, '');

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = num;
            const totalDuration = duration * 1000;
            const incrementTime = totalDuration / end;

            const timer = setInterval(() => {
                start += 1;
                setDisplayValue(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, num, duration]);

    return (
        <span ref={nodeRef}>
            {displayValue}{suffix}
        </span>
    );
};

// Simplified Stats
const stats = [
    { label: 'Active Clients', value: '200+' },
    { label: 'Projects Shipped', value: '500+' },
    { label: 'Team Experts', value: '25+' },
    { label: 'Growth YoY', value: '300%' },
];

export default function StatsSection() {
    return (
        <section className={styles.statsSection}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.value}>
                                <Counter value={stat.value} />
                            </div>
                            <div className={styles.label}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
