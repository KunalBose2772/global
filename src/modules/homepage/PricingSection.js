'use client';

import { motion } from 'framer-motion';
import { Check, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './PricingSection.module.css';

const plans = [
    {
        name: 'Starter',
        price: '₹15,000',
        period: '/project',
        description: 'Perfect for small businesses looking to establish an online presence.',
        features: [
            '5 Page Responsive Website',
            'Basic SEO Setup',
            'Contact Form Integration',
            'Mobile Friendly Design',
            '1 Month Support'
        ],
        notIncluded: ['Content Creation', 'Advanced SEO', 'E-commerce'],
        popular: false,
        buttonVariant: 'outline'
    },
    {
        name: 'Business',
        price: '₹35,000',
        period: '/project',
        description: 'Comprehensive solution for growing businesses needing more features.',
        features: [
            '10 Page Custom Website',
            'Advanced SEO Optimization',
            'Content Management System',
            'Social Media Integration',
            'Google Analytics Setup',
            '3 Months Support'
        ],
        notIncluded: ['E-commerce Functionality'],
        popular: true,
        buttonVariant: 'primary'
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Tailored solutions for large organizations with complex requirements.',
        features: [
            'Targeted E-commerce Solutions',
            'Custom Web Applications',
            'API Integrations',
            'Priority Support 24/7',
            'Cloud Hosting Setup',
            'Dedicated Project Manager'
        ],
        notIncluded: [],
        popular: false,
        buttonVariant: 'outline'
    }
];

export default function PricingSection() {
    return (
        <section id="pricing" className={styles.pricingSection}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.badge}>Pricing</span>
                    <h2 className={styles.title}>Transparent <span className={styles.gradient}>Pricing</span></h2>
                    <p className={styles.subtitle}>
                        Choose the perfect plan for your business needs. No hidden fees.
                    </p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}

                            <div className={styles.cardHeader}>
                                <h3 className={styles.planName}>{plan.name}</h3>
                                <div className={styles.priceWrapper}>
                                    <span className={styles.price}>{plan.price}</span>
                                    <span className={styles.period}>{plan.period}</span>
                                </div>
                                <p className={styles.description}>{plan.description}</p>
                            </div>

                            <ul className={styles.featureList}>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={styles.featureItem}>
                                        <div className={styles.checkIcon}><Check size={16} /></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                                {plan.notIncluded.map((feature, i) => (
                                    <li key={i} className={`${styles.featureItem} ${styles.disabled}`}>
                                        <div className={styles.crossIcon}><X size={16} /></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact" className={`${styles.ctaBtn} ${styles[plan.buttonVariant]}`}>
                                <span>Get Started</span>
                                <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
