'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './RecentProjects.module.css';

const projects = [
    {
        id: 1,
        title: "Firayalal Group",
        category: "Legacy Retail / Digital Transformation",
        image: "/images/portfolio-1.png",
        desc: "Reimagining a 100-year legacy for the digital age."
    },
    {
        id: 2,
        title: "Healthpoint Hospital",
        category: "Healthcare / Patient Experience",
        image: "/images/portfolio-2.png",
        desc: "Seamless patient journeys from appointment to recovery."
    },
    {
        id: 3,
        title: "Elevate HR",
        category: "Corporate / Consultancy",
        image: "/images/portfolio-3.png",
        desc: "Modernizing workforce management solutions."
    },
    {
        id: 4,
        title: "RPS Education",
        category: "Education / E-Learning",
        image: "/images/portfolio-4.png",
        desc: "Empowering the next generation of leaders."
    }
];

export default function RecentProjects() {
    return (
        <section className={styles.section} id="work">
            <div className={styles.ambientLight} />

            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <motion.h2
                        className={styles.headline}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Selected <br /> Work.
                    </motion.h2>
                    <motion.div
                        className={styles.headerText}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className={styles.subheadline}>
                            We build digital assets that define industries.
                            From legacy giants to healthcare innovators.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className={styles.projectGrid}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            className={styles.projectCard}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={styles.projectImage}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className={styles.overlay} />
                            </div>

                            <div className={styles.projectInfo}>
                                <div className={styles.meta}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <span className={styles.projectCategory}>{project.category}</span>
                                </div>
                                <ArrowUpRight size={28} className={styles.arrowIcon} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className={styles.viewAllContainer}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Link href="/portfolio">
                        <button className={styles.viewAllBtn}>View All Projects</button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
