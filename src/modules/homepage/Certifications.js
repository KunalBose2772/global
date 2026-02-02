'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star } from 'lucide-react';
import styles from './Certifications.module.css';

// Helper for icon
const RocketIcon = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
);

const certifications = [
    { name: 'ISO 9001:2015', icon: Award, color: 'blue' },
    { name: 'Google Partner', icon: Star, color: 'red' },
    { name: 'MSME Registered', icon: ShieldCheck, color: 'green' },
    { name: 'StartUp India', icon: RocketIcon, color: 'orange' }, // Using custom component below
];

export default function Certifications() {
    return (
        <section className={styles.certSection}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.textColumn}>
                        <h2 className={styles.title}>Recognized & Certified</h2>
                        <p className={styles.subtitle}>
                            We maintain the highest standards of quality and security in all our deliverables.
                        </p>
                    </div>

                    <div className={styles.certGrid}>
                        {certifications.map((cert, index) => {
                            const Icon = cert.icon;
                            return (
                                <motion.div
                                    key={index}
                                    className={styles.certCard}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    <div className={`${styles.iconBox} ${styles[cert.color]}`}>
                                        <Icon size={32} />
                                    </div>
                                    <span className={styles.certName}>{cert.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
