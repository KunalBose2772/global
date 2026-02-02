'use client';

import Link from 'next/link';
import {
    Settings, Code, ShoppingCart, FileCode, Smartphone, Monitor,
    Search, Share2, PenTool, Megaphone, TrendingUp,
    Mail, MapPin, Phone, Facebook, Linkedin, Instagram,
    CreditCard, ShieldCheck
} from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Glass Overlay */}
            <div className={styles.glassOverlay}></div>

            <div className={styles.mainContent}>
                {/* Top Section: Grid */}
                <div className={styles.topSection}>
                    <div className="container">
                        <div className={styles.grid}>

                            {/* Brand Section */}
                            <div className={styles.brandSection}>
                                <div className={styles.logoContainer}>
                                    <Link href="/" className={styles.logoLink}>
                                        <img src="/images/logo.png" alt="Global Webify" className={styles.logo} />
                                    </Link>
                                </div>
                                <p className={styles.description}>
                                    Your trusted partner for web development, digital marketing, and branding. We help businesses grow with modern, effective, and affordable digital solutions. Reach us for a free consultation!
                                </p>
                            </div>

                            {/* Service Column 1 */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>
                                    <Settings size={18} className={styles.titleIcon} />
                                    Our Services
                                </h4>
                                <div className={styles.links}>
                                    <Link href="/web-development" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.custom}`}><Code size={14} /></span>
                                        Custom Web Development
                                    </Link>
                                    <Link href="/ecommerce-web-designing" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.ecommerce}`}><ShoppingCart size={14} /></span>
                                        E-commerce Solutions
                                    </Link>
                                    <Link href="/wordpress-development" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.wordpress}`}><FileCode size={14} /></span>
                                        WordPress Development
                                    </Link>
                                    <Link href="/responsive-web-designing" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.responsive}`}><Smartphone size={14} /></span>
                                        Responsive Design
                                    </Link>
                                    <Link href="/website-maintenance" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.maintenance}`}><Monitor size={14} /></span>
                                        Website Maintenance
                                    </Link>
                                </div>
                            </div>

                            {/* Service Column 2 (No Title, continuation) */}
                            <div className={styles.column}>
                                <div className={`${styles.links} ${styles.offsetLinks}`}>
                                    <Link href="/seo" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.seo}`}><Search size={14} /></span>
                                        SEO Services
                                    </Link>
                                    <Link href="/social-media" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.social}`}><Share2 size={14} /></span>
                                        Social Media Marketing
                                    </Link>
                                    <Link href="/content-marketing" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.content}`}><PenTool size={14} /></span>
                                        Content Marketing
                                    </Link>
                                    <Link href="/ppc" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.ppc}`}><Megaphone size={14} /></span>
                                        PPC Advertising
                                    </Link>
                                    <Link href="/digital-marketing" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.digital}`}><TrendingUp size={14} /></span>
                                        Digital Marketing
                                    </Link>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>
                                    <Phone size={18} className={styles.titleIcon} />
                                    Get In Touch
                                </h4>
                                <div className={styles.links}>
                                    <a href="mailto:help@globalwebify.com" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.email}`}><Mail size={14} /></span>
                                        help@globalwebify.com
                                    </a>
                                    <Link href="/market-area" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.location}`}><MapPin size={14} /></span>
                                        Our Market Areas
                                    </Link>
                                    {/* Placeholder Numbers based on PHP logic showing array loop */}
                                    <a href="tel:+911234567890" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.phone}`}><Phone size={14} /></span>
                                        Support: +91 123 456 7890
                                    </a>
                                    <a href="https://maps.google.com" target="_blank" className={styles.linkItem}>
                                        <span className={`${styles.iconBox} ${styles.location}`}><MapPin size={14} /></span>
                                        2nd Floor, Alam Complex, Ashok Nagar Road, Kadru Ranchi, Jharkhand, 834002
                                    </a>
                                    <div className={styles.subAddress}>
                                        <MapPin size={12} style={{ flexShrink: 0, marginTop: 4 }} />
                                        <span>36/1E/1L, Topsia Road, Kolkata - 700039</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Four Boxes Section */}
                <div className={styles.fourBoxesSection}>
                    <div className="container">
                        <div className={styles.boxGrid}>
                            {/* Box 1: Projects */}
                            <div className={`${styles.box} ${styles.statsBox1}`}>
                                <div className={styles.boxContent}>
                                    <div className={styles.statNumber}>500+</div>
                                    <div className={styles.statLabel}>PROJECTS DELIVERED</div>
                                </div>
                            </div>

                            {/* Box 2: Satisfaction */}
                            <div className={`${styles.box} ${styles.statsBox2}`}>
                                <div className={styles.boxContent}>
                                    <div className={styles.statNumber}>98%</div>
                                    <div className={styles.statLabel}>CLIENT SATISFACTION</div>
                                </div>
                            </div>

                            {/* Box 3: Socials */}
                            <div className={`${styles.box} ${styles.socialBox}`}>
                                <div className={styles.boxContent}>
                                    <h5 className={styles.boxTitle}>Follow Us</h5>
                                    <div className={styles.socialLinks}>
                                        <a href="#" className={styles.socialLink}><Facebook size={18} /></a>
                                        <a href="#" className={styles.socialLink}><Linkedin size={18} /></a>
                                        <a href="#" className={styles.socialLink}><Instagram size={18} /></a>
                                    </div>
                                </div>
                            </div>

                            {/* Box 4: Payment */}
                            <div className={`${styles.box} ${styles.paymentBox}`}>
                                <div className={styles.boxContent}>
                                    <h5 className={styles.boxTitle}>Secure Payment Methods</h5>
                                    <div className={styles.paymentMethods}>
                                        <span title="Bank Transfer"><CreditCard size={24} /></span>
                                        <span title="PayPal"><img src="/images/paypal-placeholder.png" alt="PP" style={{ height: 20, display: 'none' }} /> PayPal</span>
                                        <span title="UPI"><Smartphone size={24} /></span>
                                        <span className={styles.secureBadge}><ShieldCheck size={16} /> SSL Secured</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.bottomSection}>
                    <div className="container">
                        <div className={styles.bottomContent}>
                            <p className={styles.copyright}>
                                © {new Date().getFullYear()} Global Webify. All rights reserved.
                            </p>
                            <div className={styles.legalLinks}>
                                <Link href="/privacy-policy">Privacy Policy</Link>
                                <Link href="/terms-of-service">Terms of Service</Link>
                                <Link href="/cookie-policy">Cookie Policy</Link>
                                <Link href="/sitemap">Sitemap</Link>
                                <Link href="/market-area">Market Areas</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
