'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, SearchX, Compass, TrendingDown } from 'lucide-react';
import styles from './ProblemSection.module.css';

const problems = [
    {
        icon: MousePointerClick,
        title: "Looks good, doesn't convert",
        desc: "You have a beautiful site, but your phone isn't ringing. Visitors commend the design but leave without taking acton."
    },
    {
        icon: SearchX,
        title: "Invisible on Google",
        desc: "Your customers are searching for your services right now, but they're finding your competitors instead of you."
    },
    {
        icon: Compass,
        title: "No clear user journey",
        desc: "Visitors get lost in confusing navigation and unstructured content, causing them to bounce within seconds."
    },
    {
        icon: TrendingDown,
        title: "No measurable ROI",
        desc: "You're spending money on hosting and maintenance, but you have no idea if your website is actually making you money."
    }
];

export default function ProblemSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerLeft}>
                        <motion.h2
                            className={styles.headline}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Why Most Business Websites <br />
                            <span className="text-error">Fail to Generate Leads</span>
                        </motion.h2>
                    </div>

                    <div className={styles.headerRight}>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className={styles.empathyText}>
                                If this feels familiar, you&apos;re not alone. Most sites are built for vanity, not velocity.
                            </p>
                            <a href="/audit" className={styles.auditBtn}>
                                Get Your Free Website Audit
                            </a>
                        </motion.div>
                    </div>
                </div>

                <div className={styles.grid}>
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <motion.div
                                key={index}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className={styles.iconWrapper}>
                                    <Icon size={24} />
                                </div>
                                <h3 className={styles.cardTitle}>{problem.title}</h3>
                                <p className={styles.cardDesc}>{problem.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
