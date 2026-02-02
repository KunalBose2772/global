'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, Users, Target, ArrowRight, ExternalLink } from 'lucide-react';
import styles from './CaseStudies.module.css';

const caseStudies = [
    {
        id: 1,
        client: 'Accugene Diagnostics',
        industry: 'Healthcare & Diagnostics',
        image: '/images/portfolio-5.png', // Corrected path
        challenge: 'Accugene Diagnostics needed a modern, user-friendly website to showcase their advanced diagnostic services and build trust with patients in the healthcare sector.',
        solution: 'We developed a comprehensive digital solution including a responsive website with online appointment booking, patient portal, and integrated SEO strategy to improve local search visibility.',
        results: [
            { metric: '300%', label: 'Increase in Online Appointments', icon: TrendingUp },
            { metric: '250%', label: 'Growth in Organic Traffic', icon: Users },
            { metric: '85%', label: 'Improvement in User Engagement', icon: Target },
        ],
        testimonial: 'Global Webify transformed our online presence completely. The new website not only looks professional but has significantly increased our patient inquiries and bookings.',
        author: 'Dr. Rajesh Kumar',
        position: 'Director, Accugene Diagnostics',
        tags: ['Web Development', 'SEO', 'Healthcare'],
        link: '/case-studies/accugene-diagnostics',
    },
    {
        id: 2,
        client: 'AM Nuts & Spices',
        industry: 'E-commerce & Food Products',
        image: '/images/portfolio-9.png', // Corrected path
        challenge: 'AM Nuts & Spices wanted to expand their traditional business online with a robust e-commerce platform that could handle high traffic and provide seamless shopping experience.',
        solution: 'We built a custom e-commerce platform with advanced product filtering, secure payment gateway integration, inventory management, and implemented a comprehensive digital marketing strategy.',
        results: [
            { metric: '450%', label: 'Increase in Online Sales', icon: TrendingUp },
            { metric: '5000+', label: 'Monthly Active Customers', icon: Users },
            { metric: '92%', label: 'Customer Satisfaction Rate', icon: Target },
        ],
        testimonial: 'The e-commerce platform developed by Global Webify has been a game-changer for our business. We\'ve seen tremendous growth in online sales and customer reach.',
        author: 'Amit Sharma',
        position: 'Founder, AM Nuts & Spices',
        tags: ['E-commerce', 'Digital Marketing', 'Branding'],
        link: '/case-studies/am-nuts-spices',
    },
    {
        id: 3,
        client: 'Elevate HR Solutions',
        industry: 'Human Resources & Consulting',
        image: '/images/portfolio-6.png', // Corrected path
        challenge: 'Elevate HR needed a professional brand identity and digital presence to establish credibility in the competitive HR consulting market and attract corporate clients.',
        solution: 'We created a complete brand identity including logo design, brand guidelines, corporate website, and implemented a B2B-focused digital marketing strategy with LinkedIn campaigns.',
        results: [
            { metric: '200%', label: 'Increase in Lead Generation', icon: TrendingUp },
            { metric: '150%', label: 'Growth in Corporate Clients', icon: Users },
            { metric: '95%', label: 'Brand Recognition Improvement', icon: Target },
        ],
        testimonial: 'Global Webify didn\'t just build us a website—they built us a brand. The professional identity they created has opened doors to major corporate clients.',
        author: 'Priya Mehta',
        position: 'CEO, Elevate HR Solutions',
        tags: ['Branding', 'Web Design', 'B2B Marketing'],
        link: '/case-studies/elevate-hr',
    },
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className={styles.caseStudiesSection}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.badge}>Success Stories</span>
                    <h2 className={styles.title}>
                        Real Results for <span className={styles.gradient}>Real Businesses</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Discover how we've helped businesses across industries achieve remarkable growth through strategic digital solutions. These case studies showcase our proven methodology and measurable results.
                    </p>
                </motion.div>

                {/* Case Studies */}
                <div className={styles.caseStudiesGrid}>
                    {caseStudies.map((study, index) => (
                        <motion.article
                            key={study.id}
                            className={styles.caseStudyCard}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            {/* Image */}
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={study.image}
                                    alt={`${study.client} Case Study - Digital Marketing Success Story`}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.imageOverlay}>
                                    <span className={styles.industry}>{study.industry}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={styles.content}>
                                <h3 className={styles.clientName}>{study.client}</h3>

                                {/* Challenge */}
                                <div className={styles.section}>
                                    <h4 className={styles.sectionTitle}>Challenge</h4>
                                    <p className={styles.sectionText}>{study.challenge}</p>
                                </div>

                                {/* Solution */}
                                <div className={styles.section}>
                                    <h4 className={styles.sectionTitle}>Solution</h4>
                                    <p className={styles.sectionText}>{study.solution}</p>
                                </div>

                                {/* Results */}
                                <div className={styles.results}>
                                    <h4 className={styles.sectionTitle}>Results</h4>
                                    <div className={styles.metricsGrid}>
                                        {study.results.map((result, idx) => {
                                            const Icon = result.icon;
                                            return (
                                                <div key={idx} className={styles.metric}>
                                                    <div className={styles.metricIcon}>
                                                        <Icon size={20} />
                                                    </div>
                                                    <div className={styles.metricNumber}>{result.metric}</div>
                                                    <div className={styles.metricLabel}>{result.label}</div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Testimonial */}
                                <div className={styles.testimonial}>
                                    <p className={styles.quote}>"{study.testimonial}"</p>
                                    <div className={styles.author}>
                                        <div className={styles.authorName}>{study.author}</div>
                                        <div className={styles.authorPosition}>{study.position}</div>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className={styles.tags}>
                                    {study.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <Link href={study.link} className={styles.cta}>
                                    <span>Read Full Case Study</span>
                                    <ExternalLink size={18} />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    className={styles.viewAll}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Link href="/case-studies" className={styles.viewAllBtn}>
                        <span>View All Success Stories</span>
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
