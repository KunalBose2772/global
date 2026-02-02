'use client';

import { motion } from 'framer-motion';
import { Zap, ShieldCheck, TrendingUp, Lock } from 'lucide-react'; // Kept value props icons
import Image from 'next/image';
import styles from './Technologies.module.css';

// 1. The Value Props (Customer Centric)
const values = [
    {
        title: "Blazing Fast Performance",
        desc: "53% of users abandon a site appearing to take >3s to load. Our Next.js architecture ensures sub-second interactions.",
        icon: Zap
    },
    {
        title: "Empire-Grade Security",
        desc: "Sleep soundly knowing your data is fortified. We employ banking-grade encryption and automated threat detection.",
        icon: ShieldCheck
    },
    {
        title: "Infinite Scalability",
        desc: "Whether you have 100 visitors or 10 million. Our cloud-native builds auto-scale to handle traffic spikes effortlessly.",
        icon: TrendingUp
    }
];

// 2. The Tech Stack (Real Logos)
// Using reliable SVGs from public CDNs for standard tech logos since local assets aren't all present.
const stack = [
    { name: "Next.js", url: "/next.svg" }, // Local
    { name: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Node.js", url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "TypeScript", url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "Docker", url: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png" }, // Using PNG for Docker as SVG sometimes has issues or use another source. Actually SVG is fine usually.
    { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "Redis", url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Redis_Logo.svg" },
    { name: "Google Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "Python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
];

export default function Technologies() {
    return (
        <section className={styles.techSection}>
            <div className={styles.bgGrid} />

            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <motion.span
                        className={styles.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Our Technology
                    </motion.span>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Not Just Code. <br />
                        <span style={{ color: '#2563eb' }}>A Competitive Advantage.</span>
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        We use globally recognized standards to build digital assets that are faster, safer, and more profitable than your competition.
                    </motion.p>
                </div>

                {/* The "Why It Matters" Grid */}
                <div className={styles.valueGrid}>
                    {values.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                className={styles.valueCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                            >
                                <div className={styles.iconBox}>
                                    <Icon size={32} />
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>

            {/* The "Under the Hood" Scroller */}
            <div className={styles.techTickerWrapper}>
                <div className={styles.tickerLabel}>Powering Your Success With</div>
                <div className={styles.tickerTrack}>
                    {/* Triple duplication for smoother infinite scroll on wide screens */}
                    {[...stack, ...stack, ...stack].map((tech, i) => {
                        return (
                            <div key={i} className={styles.techItem}>
                                <div className={styles.logoWrapper}>
                                    <Image
                                        src={tech.url}
                                        alt={tech.name}
                                        width={40}
                                        height={40}
                                        className={styles.techLogo}
                                    />
                                </div>
                                <span className={styles.techName}>{tech.name}</span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}
