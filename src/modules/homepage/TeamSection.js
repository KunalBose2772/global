'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import styles from './TeamSection.module.css';

const team = [
    {
        name: 'John Doe',
        role: 'Founder & CEO',
        image: '/images/testimonial-1.png', // Temporary placeholder
        bio: 'Visionary leader with 15+ years of experience in digital transformation.'
    },
    {
        name: 'Jane Smith',
        role: 'Creative Director',
        image: '/images/testimonial-2.png', // Temporary placeholder
        bio: 'Award-winning designer passionate about creating intuitive user experiences.'
    },
    {
        name: 'Mike Johnson',
        role: 'Tech Lead',
        image: '/images/testimonial-3.png', // Temporary placeholder
        bio: 'Full-stack expert specializing in scalable cloud architectures.'
    },
    {
        name: 'Sarah Lee',
        role: 'Marketing Head',
        image: '/images/testimonial-1.png', // Placeholders rotation
        bio: 'Data-driven marketer who knows how to turn clicks into customers.'
    }
];

export default function TeamSection() {
    return (
        <section className={styles.teamSection}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.badge}>Our Team</span>
                    <h2 className={styles.title}>Meet the <span className={styles.gradient}>Experts</span></h2>
                    <p className={styles.subtitle}>
                        The talented individuals behind Global Webify's success.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={member.image} alt={member.name} className={styles.image} />
                                <div className={styles.socialOverlay}>
                                    <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
                                    <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
                                    <a href="#" className={styles.socialLink}><Mail size={20} /></a>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.name}>{member.name}</h3>
                                <p className={styles.role}>{member.role}</p>
                                <p className={styles.bio}>{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
