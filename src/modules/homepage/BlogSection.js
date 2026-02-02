'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './BlogSection.module.css';

const posts = [
    {
        id: 1,
        title: 'Top 10 SEO Trends for 2024 You Cannot Ignore',
        excerpt: 'Discover the latest SEO strategies that will help your website rank higher and attract more organic traffic in 2024.',
        image: '/images/portfolio-9.png', // Temporary placeholder
        date: 'Jan 15, 2024',
        author: 'John Doe',
        category: 'SEO',
        link: '/blog/seo-trends-2024'
    },
    {
        id: 2,
        title: 'Why Responsive Web Design is Crucial for Business',
        excerpt: 'Learn why having a mobile-friendly website is no longer optional but a necessity for business growth and user retention.',
        image: '/images/portfolio-5.png', // Temporary placeholder
        date: 'Jan 10, 2024',
        author: 'Jane Smith',
        category: 'Web Design',
        link: '/blog/responsive-web-design'
    },
    {
        id: 3,
        title: 'The Power of Content Marketing in B2B Strategy',
        excerpt: 'Explore how a solid content marketing strategy can generate leads, build trust, and establish authority in the B2B space.',
        image: '/images/portfolio-6.png', // Temporary placeholder
        date: 'Jan 05, 2024',
        author: 'Mike Johnson',
        category: 'Marketing',
        link: '/blog/content-marketing-b2b'
    }
];

export default function BlogSection() {
    return (
        <section id="blog" className={styles.blogSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <span className={styles.badge}>Our Blog</span>
                        <h2 className={styles.title}>Latest <span className={styles.gradient}>Insights</span></h2>
                        <p className={styles.subtitle}>
                            Expert tips, industry trends, and latest updates from our digital world.
                        </p>
                    </div>

                    <Link href="/blog" className={styles.viewAllBtn}>
                        <span>View All Posts</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>

                <div className={styles.grid}>
                    {posts.map((post, index) => (
                        <motion.article
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.imageWrapper}>
                                <img src={post.image} alt={post.title} className={styles.image} />
                                <span className={styles.category}>{post.category}</span>
                            </div>

                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <div className={styles.metaItem}>
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <User size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                <h3 className={styles.postTitle}>
                                    <Link href={post.link}>{post.title}</Link>
                                </h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>

                                <Link href={post.link} className={styles.readMore}>
                                    Read More
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
