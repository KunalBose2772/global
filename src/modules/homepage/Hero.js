'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            {/* Animated Background Gradient */}
            <div className={styles.gradientBg} />

            {/* Background Pattern Overlay */}
            <div className={styles.patternOverlay} style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url(/images/hero-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.4,
                mixBlendMode: 'overlay',
                zIndex: 0
            }} />

            {/* Floating Elements */}
            <div className={styles.floatingElements}>
                <motion.div
                    className={styles.floatingCircle}
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className={styles.floatingSquare}
                    animate={{
                        rotate: [0, 90, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className={styles.heroContainer}>
                <div className={styles.content}>
                    {/* Main Headline */}
                    <motion.h1
                        className={styles.headline}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        You Don&apos;t Need a Website.<br />
                        <span className="text-gradient">You Need a Revenue Engine.</span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        className={styles.subheadline}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Most agencies build digital brochures. We build high-performance growth systems that turn traffic into paying customers. Stop competing. Start dominating.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className={styles.ctaGroup}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="/contact" className={styles.primaryBtn}>
                            <span>Get Your Growth Strategy</span>
                            <ArrowRight size={20} />
                        </a>
                        <a href="/audit" className={styles.secondaryBtn}>
                            Free Website Audit
                        </a>
                    </motion.div>

                    {/* Testimonial Rating Section */}
                    <motion.div
                        className={styles.testimonialRating}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <div className={styles.testimonialAvatars}>
                            <Image src="/images/testimonial-1.png" alt="Client testimonial" width={40} height={40} className={styles.avatarImg} style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid white' }} />
                            <Image src="/images/testimonial-2.png" alt="Client testimonial" width={40} height={40} className={styles.avatarImg} style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid white', marginLeft: '-12px' }} />
                            <Image src="/images/testimonial-3.png" alt="Client testimonial" width={40} height={40} className={styles.avatarImg} style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid white', marginLeft: '-12px' }} />
                        </div>
                        <div className={styles.testimonialContent}>
                            <div className={styles.ratingStars}>
                                <span className={styles.ratingNumber}>4.9 of 5</span>
                                <div className={styles.stars}>
                                    {[0, 1, 2, 3, 4].map((i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.8 + (i * 0.1) }}
                                        >
                                            ⭐
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                            <p className={styles.ratingText}>On Google & Trustpilot</p>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Visual - Portfolio Marquee */}
                <motion.div
                    className={styles.visual}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <div className={styles.portfolioMarquee}>
                        {/* Column 1 - Reverse */}
                        <div className={`${styles.portfolioColumn} ${styles.reverse}`}>
                            <Image src="/images/portfolio-1.png" alt="Firayalal Public School Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-2.png" alt="RPS Hospital Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-3.png" alt="Health Point Ranchi Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-4.png" alt="Dr Kumar Vishal Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-5.png" alt="Accugene Diagnostics Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-6.png" alt="Elevate HR Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-7.png" alt="Kaveri Restaurant Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-8.png" alt="AFICS India Website" width={300} height={200} className={styles.portfolioImg} />
                            {/* Duplicate for seamless loop */}
                            <Image src="/images/portfolio-1.png" alt="Firayalal Public School Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-2.png" alt="RPS Hospital Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-3.png" alt="Health Point Ranchi Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-4.png" alt="Dr Kumar Vishal Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-5.png" alt="Accugene Diagnostics Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-6.png" alt="Elevate HR Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-7.png" alt="Kaveri Restaurant Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-8.png" alt="AFICS India Website" width={300} height={200} className={styles.portfolioImg} />
                        </div>

                        {/* Column 2 - Normal */}
                        <div className={styles.portfolioColumn}>
                            <Image src="/images/portfolio-9.png" alt="AM Nuts and Spices Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-10.png" alt="Artival Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-11.png" alt="Holiday Horizons Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-12.png" alt="Orbit Eyes Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-1.png" alt="Firayalal Public School Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-2.png" alt="RPS Hospital Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-3.png" alt="Health Point Ranchi Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-4.png" alt="Dr Kumar Vishal Website" width={300} height={200} className={styles.portfolioImg} />
                            {/* Duplicate for seamless loop */}
                            <Image src="/images/portfolio-9.png" alt="AM Nuts and Spices Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-10.png" alt="Artival Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-11.png" alt="Holiday Horizons Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-12.png" alt="Orbit Eyes Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-1.png" alt="Firayalal Public School Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-2.png" alt="RPS Hospital Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-3.png" alt="Health Point Ranchi Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-4.png" alt="Dr Kumar Vishal Website" width={300} height={200} className={styles.portfolioImg} />
                        </div>

                        {/* Column 3 - Reverse */}
                        <div className={`${styles.portfolioColumn} ${styles.reverse}`}>
                            <Image src="/images/portfolio-5.png" alt="Accugene Diagnostics Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-6.png" alt="Elevate HR Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-7.png" alt="Kaveri Restaurant Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-8.png" alt="AFICS India Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-9.png" alt="AM Nuts and Spices Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-10.png" alt="Artival Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-11.png" alt="Holiday Horizons Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-12.png" alt="Orbit Eyes Website" width={300} height={200} className={styles.portfolioImg} />
                            {/* Duplicate for seamless loop */}
                            <Image src="/images/portfolio-5.png" alt="Accugene Diagnostics Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-6.png" alt="Elevate HR Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-7.png" alt="Kaveri Restaurant Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-8.png" alt="AFICS India Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-9.png" alt="AM Nuts and Spices Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-10.png" alt="Artival Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-11.png" alt="Holiday Horizons Website" width={300} height={200} className={styles.portfolioImg} />
                            <Image src="/images/portfolio-12.png" alt="Orbit Eyes Website" width={300} height={200} className={styles.portfolioImg} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
