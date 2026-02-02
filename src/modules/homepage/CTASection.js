'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.ctaSection}>
            {/* Background Effects */}
            <div className={styles.bgGradient} />
            <div className={styles.bgGrid} />
            <div className={`${styles.glowOrb} ${styles.orb1}`} />
            <div className={`${styles.glowOrb} ${styles.orb2}`} />

            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.badge}>Get Started Today</span>

                    <h2 className={styles.title}>
                        Ready to Dominate <br />
                        <span className={styles.gradient}>Your Market?</span>
                    </h2>

                    <p className={styles.subtitle}>
                        Stop leaving money on the table. Join 500+ businesses that have transformed their digital presence with Global Webify.
                    </p>

                    <div className={styles.buttonGroup}>
                        <Link href="/contact" className={styles.primaryBtn}>
                            <span>Start My Project</span>
                            <ArrowRight size={20} />
                        </Link>

                        <a href="tel:+919876543210" className={styles.secondaryBtn}>
                            <Phone size={20} />
                            <span>Schedule a Call</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
