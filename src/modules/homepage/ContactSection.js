'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
    return (
        <section id="contact" className={styles.contactSection}>
            <div className={`container ${styles.container}`}>
                <div className={styles.wrapper}>
                    {/* Left Column: Contact Info */}
                    <motion.div
                        className={styles.infoColumn}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.header}>
                            <span className={styles.badge}>Get in Touch</span>
                            <h2 className={styles.title}>Ready to Start Your Digital Journey?</h2>
                            <p className={styles.subtitle}>
                                Whether you have a question, need a custom quote, or want to discuss a potential partnership, our team is ready to help.
                            </p>
                        </div>

                        <div className={styles.contactDetails}>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}><Phone size={20} /></div>
                                <div>
                                    <h4 className={styles.contactLabel}>Call Us</h4>
                                    <p className={styles.contactValue}>+91 123 456 7890</p>
                                    <p className={styles.contactValue}>+91 987 654 3210</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}><Mail size={20} /></div>
                                <div>
                                    <h4 className={styles.contactLabel}>Email Us</h4>
                                    <p className={styles.contactValue}>hello@globalwebify.com</p>
                                    <p className={styles.contactValue}>support@globalwebify.com</p>
                                </div>
                            </div>
                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}><MapPin size={20} /></div>
                                <div>
                                    <h4 className={styles.contactLabel}>Visit Us</h4>
                                    <p className={styles.contactValue}>
                                        3rd Floor, Mananki Tower,<br />
                                        Main Road, Ranchi, Jharkhand - 834001
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Placeholder */}
                        <div className={styles.socialHelper}>
                            <p>Follow us for updates & news</p>
                            <div className={styles.socialIcons}>
                                {/* Placeholders for social icons */}
                                <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><Linkedin size={20} /></a>
                                <a href="#" aria-label="Facebook" className={styles.socialIcon}><Facebook size={20} /></a>
                                <a href="#" aria-label="Twitter" className={styles.socialIcon}><Twitter size={20} /></a>
                                <a href="#" aria-label="Instagram" className={styles.socialIcon}><Instagram size={20} /></a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Key Form */}
                    <motion.div
                        className={styles.formColumn}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className={styles.form}>
                            <h3 className={styles.formTitle}>Send us a Message</h3>

                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label>Your Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className={styles.field}>
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 99999 99999" />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>

                            <div className={styles.field}>
                                <label>Service Interested In</label>
                                <select>
                                    <option>Select a Service</option>
                                    <option>Web Development</option>
                                    <option>Mobile App Development</option>
                                    <option>Digital Marketing</option>
                                    <option>SEO Services</option>
                                    <option>Branding</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label>Your Message</label>
                                <textarea rows="4" placeholder="Tell us more about your project..."></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Background image overlay */}
            <div className={styles.bgOverlay} style={{
                backgroundImage: 'url(/images/mega-menu-feature.jpg)'
            }} />
        </section>
    );
}
