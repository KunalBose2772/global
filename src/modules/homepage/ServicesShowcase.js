'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Code2,
    Smartphone,
    Palette,
    Megaphone,
    Search,
    Layers,
    ArrowRight,
    Zap,
    CheckCircle2,
    X
} from 'lucide-react';
import styles from './ServicesShowcase.module.css';

const services = [
    {
        id: 'web',
        title: 'Website Development',
        fullTitle: 'Websites That Convert Visitors Into Customers',
        desc: 'Fast, stunning, and built to sell.',
        icon: Code2,
        span: 'span2',
        description: "Your website shouldn't just look good—it should be your best salesperson. We build high-performance websites designed to capture attention, build trust, and drive meaningful business growth.",
        features: [
            { title: 'Blazing Fast Speed', desc: 'Sub-second load times that keep visitors engaged.' },
            { title: 'SEO Architecture', desc: 'Built-in structure that Google loves to rank.' },
            { title: 'Conversion Focused', desc: 'Strategic layouts that guide users to buy.' },
            { title: 'Mobile First', desc: 'Perfect experience on every device size.' }
        ]
    },
    {
        id: 'app',
        title: 'App Development',
        fullTitle: 'Native Apps That Users Love',
        desc: 'iOS & Android excellence.',
        icon: Smartphone,
        span: 'span1',
        description: "Transform your business idea into a powerful mobile experience. We build native and cross-platform apps that are smooth, intuitive, and scalable.",
        features: [
            { title: 'Native Performance', desc: '60fps interactions.' },
            { title: 'Scalable Backend', desc: 'Handles millions of users.' }
        ]
    },
    {
        id: 'marketing',
        title: 'Digital Marketing',
        fullTitle: 'Campaigns That Print Money',
        desc: 'ROI-focused growth strategies.',
        icon: Megaphone,
        span: 'rowSpan2',
        description: "Stop wasting money on ads that don't work. Our data-driven approach ensures every dollar you spend brings back more in revenue.",
        features: [
            { title: 'PPC Dominance', desc: 'Google & Facebook Ads mastery.' },
            { title: 'SEO Growth', desc: 'Long-term organic traffic.' },
            { title: 'Content Strategy', desc: 'Authority-building content.' },
            { title: 'Analytics', desc: 'Crystal clear reporting.' }
        ]
    },
    {
        id: 'branding',
        title: 'Branding & Design',
        fullTitle: 'A Brand That Commands Respect',
        desc: 'Stand out in a crowded market.',
        icon: Palette,
        span: 'span1',
        description: "Your brand is more than a logo. It's the feeling your customers get when they interact with you. We craft identities that stick.",
        features: [
            { title: 'Visual Identity', desc: 'Logos, colors, and typography.' },
            { title: 'Brand Strategy', desc: 'Positioning and voice.' }
        ]
    },
    {
        id: 'seo',
        title: 'Advanced SEO',
        fullTitle: 'Rank #1 for What Matters',
        desc: 'Technical & Content SEO.',
        icon: Search,
        span: 'span1',
        description: "Invisibility is expensive. We help you dominate the search results for the keywords that actually drive revenue to your business.",
        features: [
            { title: 'Technical Audits', desc: 'Fixing the foundation.' },
            { title: 'Link Building', desc: 'High-authority outreach.' }
        ]
    },
    {
        id: 'saas',
        title: 'SaaS Solutions',
        fullTitle: 'Scalable Software Products',
        desc: 'From MVP to IPO.',
        icon: Layers,
        span: 'span1',
        description: "Building a software product? We help you architect, build, and scale your SaaS platform with enterprise-grade best practices.",
        features: [
            { title: 'Cloud Native', desc: 'AWS/Azure/GCP ready.' },
            { title: 'API First', desc: 'Connect with anything.' }
        ]
    }
];

export default function ServicesShowcase() {
    const [activeId, setActiveId] = useState(null);

    const activeService = services.find(s => s.id === activeId);

    return (
        <section className={styles.showcaseSection}>
            <div className={styles.techOverlay} />

            <div className={styles.container}>
                {/* Header */}
                <div className={styles.headerContainer}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className={styles.label}>Our Expertise</span>
                        <h2 className={styles.mainHeadline}>
                            Solutions Engineered for <br />
                            <span className={styles.gradientText}>Massive Impact.</span>
                        </h2>
                        <p className={styles.subHeadline}>
                            We don't just "do digital." We build the systems, products, and campaigns that power your business growth.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className={styles.gridContainer}>
                    <div className={styles.bentoGrid}>
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                layoutId={`card-${service.id}`}
                                className={`${styles.serviceCard} ${styles[service.span]}`}
                                onClick={() => setActiveId(service.id)}
                            >
                                <div className={styles.cardIcon}>
                                    <service.icon size={28} />
                                </div>
                                <h3 className={styles.bentoTitle}>{service.title}</h3>
                                <p className={styles.bentoDesc}>{service.desc}</p>

                                <div className={styles.clickHint}>
                                    Explore <ArrowRight size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Expanded Overlay */}
                    <AnimatePresence>
                        {activeId && activeService && (
                            <>
                                <motion.div
                                    className={styles.gridDimmer}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setActiveId(null)}
                                />
                                <motion.div
                                    className={styles.expandedCard}
                                    layoutId={`card-${activeId}`}
                                >
                                    {/* Close Button */}
                                    <button
                                        className={styles.closeButton}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveId(null);
                                        }}
                                    >
                                        <X size={24} />
                                    </button>

                                    {/* Left Side */}
                                    <div className={styles.expandedLeft}>
                                        <div className={styles.iconBig}>
                                            <activeService.icon size={40} />
                                        </div>
                                        <motion.h3
                                            className={styles.largeTitle}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {activeService.fullTitle}
                                        </motion.h3>
                                        <motion.p
                                            className={styles.largeDesc}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {activeService.description}
                                        </motion.p>
                                    </div>

                                    {/* Right Side */}
                                    <div className={styles.expandedRight}>
                                        <div className={styles.detailSectionTitle}>
                                            What We Deliver
                                        </div>

                                        <div className={styles.featureGrid}>
                                            {activeService.features.map((feature, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    className={styles.featureItem}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.4 + (idx * 0.1) }}
                                                >
                                                    <h4>
                                                        <Zap size={18} color="#3b82f6" />
                                                        {feature.title}
                                                    </h4>
                                                    <p>{feature.desc}</p>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className={styles.ctaArea}>
                                            <div className={styles.clickHint} style={{ opacity: 1, transform: 'none' }}>
                                                <CheckCircle2 size={16} />
                                                Ready to start?
                                            </div>
                                            <div className={styles.ctaLink}>
                                                Get a Proposal <ArrowRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
