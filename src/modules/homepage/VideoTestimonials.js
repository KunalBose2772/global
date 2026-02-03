'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './VideoTestimonials.module.css';

const videoTestimonials = [
    {
        id: 1,
        client: 'Dr. Rajesh Kumar',
        company: 'Accugene Diagnostics',
        position: 'Director',
        videoUrl: '/videos/testimonials/accugene.mp4',
        thumbnail: '/images/testimonial-1.png', // Temporary placeholder
        rating: 5,
        quote: 'Global Webify transformed our online presence completely. The new website has significantly increased our patient inquiries.',
        industry: 'Healthcare',
        services: ['Web Development', 'SEO', 'Digital Marketing'],
    },
    {
        id: 2,
        client: 'Amit Sharma',
        company: 'AM Nuts & Spices',
        position: 'Founder & CEO',
        videoUrl: '/videos/testimonials/amnuts.mp4',
        thumbnail: '/images/testimonial-2.png', // Temporary placeholder
        rating: 5,
        quote: 'The e-commerce platform has been a game-changer. We\'ve seen 450% increase in online sales within 6 months.',
        industry: 'E-commerce',
        services: ['E-commerce Development', 'Digital Marketing', 'Branding'],
    },
    {
        id: 3,
        client: 'Priya Mehta',
        company: 'Elevate HR Solutions',
        position: 'CEO',
        videoUrl: '/videos/testimonials/elevate.mp4',
        thumbnail: '/images/testimonial-3.png', // Temporary placeholder
        rating: 5,
        quote: 'They didn\'t just build us a website—they built us a brand. Professional identity that opened doors to major clients.',
        industry: 'HR Consulting',
        services: ['Branding', 'Web Design', 'B2B Marketing'],
    },
    {
        id: 4,
        client: 'Rahul Verma',
        company: 'Sonwe Solar',
        position: 'Managing Director',
        videoUrl: '/videos/testimonials/sonwe.mp4',
        thumbnail: '/images/testimonial-1.png', // Temporary placeholder
        rating: 5,
        quote: 'Outstanding work on our solar energy website. The design perfectly reflects our commitment to sustainability.',
        industry: 'Renewable Energy',
        services: ['Web Development', 'Content Strategy', 'SEO'],
    },
];

const textTestimonials = [
    {
        id: 101,
        content: "Global Webify transformed our digital presence. Their team understood our vision perfectly and delivered a website that has significantly improved our conversion rates.",
        name: "Sarah Jenkins",
        role: "Marketing Director",
        company: "TechFlow Industries",
        rating: 5
    },
    {
        id: 102,
        content: "Working with them was a game-changer. They handled everything from branding to full-stack development. We raised our Series A largely due to the platform they built.",
        name: "Michael Chen",
        role: "Founder & CEO",
        company: "Novus Analytics",
        rating: 5
    },
    {
        id: 103,
        content: "Professional, responsive, and incredibly talented. They didn't just build a site; they built a comprehensive digital strategy that has helped us scale globally.",
        name: "Emma Thompson",
        role: "Operations Manager",
        company: "Global Trade Co",
        rating: 5
    }
];

export default function VideoTestimonials() {
    const [activeVideo, setActiveVideo] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef(null);

    const handlePlayVideo = (testimonial) => {
        setActiveVideo(testimonial);
    };

    const handleCloseVideo = () => {
        setActiveVideo(null);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? videoTestimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === videoTestimonials.length - 1 ? 0 : prev + 1));
    };

    const visibleTestimonials = [
        videoTestimonials[currentIndex],
        videoTestimonials[(currentIndex + 1) % videoTestimonials.length],
        videoTestimonials[(currentIndex + 2) % videoTestimonials.length],
    ];

    return (
        <section id="video-testimonials" className={styles.videoTestimonialsSection}>
            <div className={styles.container}>
                {/* Section Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.badge}>Client Testimonials</span>
                    <h2 className={styles.title}>
                        Hear From Our <span className={styles.gradient}>Happy Clients</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Don&apos;t just take our word for it. Watch real clients share their success stories and experiences working with Global Webify.
                    </p>
                </motion.div>

                {/* Video Carousel Wrapper */}
                <div className={styles.carouselWrapper}>
                    <button
                        className={`${styles.navButton} ${styles.navPrev}`}
                        onClick={handlePrevious}
                        aria-label="Previous testimonials"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className={styles.videoGrid}>
                        {visibleTestimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className={styles.videoCard}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                {/* Video Thumbnail */}
                                <div
                                    className={styles.videoThumbnail}
                                    onClick={() => handlePlayVideo(testimonial)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyPress={(e) => e.key === 'Enter' && handlePlayVideo(testimonial)}
                                >
                                    <img
                                        src={testimonial.thumbnail}
                                        alt={`${testimonial.client} - ${testimonial.company} Video Testimonial`}
                                        className={styles.thumbnail}
                                    />
                                    <div className={styles.playOverlay}>
                                        <div className={styles.playButton}>
                                            <Play size={28} fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className={styles.duration}>2:30</div>
                                </div>

                                {/* Content */}
                                <div className={styles.cardContent}>
                                    {/* Rating */}
                                    <div className={styles.rating}>
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <div className={styles.quoteWrapper}>
                                        <Quote className={styles.quoteIcon} size={20} />
                                        <p className={styles.quote}>{testimonial.quote}</p>
                                    </div>

                                    {/* Client Info */}
                                    <div className={styles.clientInfo}>
                                        <div className={styles.clientName}>{testimonial.client}</div>
                                        <div className={styles.clientPosition}>{testimonial.position}</div>
                                        <div className={styles.clientCompany}>{testimonial.company}</div>
                                    </div>

                                    {/* Services */}
                                    <div className={styles.services}>
                                        {testimonial.services.map((service) => (
                                            <span key={service} className={styles.serviceTag}>
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        className={`${styles.navButton} ${styles.navNext}`}
                        onClick={handleNext}
                        aria-label="Next testimonials"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className={styles.pagination}>
                    {videoTestimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* --- Merged Text Testimonials --- */}
                <div className={styles.textSection}>
                    <div className={styles.textHeader}>
                        <h3 className={styles.title} style={{ fontSize: '2.5rem' }}>More Success Stories</h3>
                    </div>

                    <div className={styles.textGrid}>
                        {textTestimonials.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={styles.textCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div style={{ display: 'flex', gap: 2, marginBottom: '1rem' }}>
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
                                    ))}
                                </div>
                                <Quote size={24} className={styles.textQuoteIcon} />
                                <p className={styles.textBody}>&quot;{item.content}&quot;</p>
                                <div className={styles.textAuthor}>
                                    {/* Avatar placeholder if needed, for now just text */}
                                    <div className={styles.authorMeta}>
                                        <div>{item.name}</div>
                                        <div>{item.role}, {item.company}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        className={styles.videoModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseVideo}
                    >
                        <motion.div
                            className={styles.modalContent}
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeButton} onClick={handleCloseVideo}>
                                ×
                            </button>
                            <video
                                ref={videoRef}
                                className={styles.video}
                                controls
                                autoPlay
                                src={activeVideo.videoUrl}
                            >
                                Your browser does not support the video tag.
                            </video>
                            <div className={styles.modalInfo}>
                                <h3>{activeVideo.client}</h3>
                                <p>{activeVideo.position}, {activeVideo.company}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
}
