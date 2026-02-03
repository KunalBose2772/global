'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    Facebook, Linkedin, Instagram, X,
    Code, Palette, Megaphone, Server,
    Smartphone, Globe, ShoppingCart, Zap,
    ArrowRight, ChevronDown, Monitor, Layers,
    Search, BarChart, Mail, Cloud, Shield,
    Package, Briefcase, Users, Settings
} from 'lucide-react';
import styles from './Header.module.css';
import { getMegaMenuData } from '../../lib/menu';

const initialMenuData = [
    {
        id: 'services',
        title: 'Services',
        href: '/services',
        children: [
            { id: 'web', title: 'Web Development', description: 'Custom high-performance websites', iconName: 'Code', href: '/services/web-development' },
            { id: 'app', title: 'Mobile Apps', description: 'iOS & Android solutions', iconName: 'Smartphone', href: '/services/mobile-apps' },
            { id: 'seo', title: 'SEO & Marketing', description: ' Drive organic traffic', iconName: 'Search', href: '/services/seo' },
            { id: 'brand', title: 'Branding', description: 'Identity & Strategy', iconName: 'Palette', href: '/services/branding' },
            { id: 'cloud', title: 'Cloud Solutions', description: 'AWS & Azure Infrastructure', iconName: 'Cloud', href: '/services/cloud' },
            { id: 'ecommerce', title: 'E-commerce', description: 'Shopify & Custom Stores', iconName: 'ShoppingCart', href: '/services/ecommerce' },
        ]
    },
    {
        id: 'agency',
        title: 'Agency',
        href: '/agency',
        children: [
            { id: 'about', title: 'About Us', description: 'Our story & values', iconName: 'Users', href: '/about' },
            { id: 'team', title: 'Our Team', description: 'Meet the experts', iconName: 'Briefcase', href: '/team' },
            { id: 'careers', title: 'Careers', description: 'Join our mission', iconName: 'Zap', href: '/careers' },
        ]
    },
    {
        id: 'resources',
        title: 'Resources',
        href: '/resources',
        children: [
            { id: 'blog', title: 'Blog', description: 'Latest insights', iconName: 'Megaphone', href: '/blog' },
            { id: 'case-studies', title: 'Case Studies', description: 'Success stories', iconName: 'BarChart', href: '/case-studies' },
        ]
    },
    { id: 'contact', title: 'Contact', href: '/contact', children: [] }
];

// Map string names from API to React Components
const iconMap = {
    Facebook, Linkedin, Instagram, X,
    Code, Palette, Megaphone, Server,
    Smartphone, Globe, ShoppingCart, Zap,
    ArrowRight, ChevronDown, Monitor, Layers,
    Search, BarChart, Mail, Cloud, Shield,
    Package, Briefcase, Users, Settings
};

export default function Header() {
    const pathname = usePathname();
    const isHomepage = pathname === '/';
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);
    const [megaMenuData, setMegaMenuData] = useState(initialMenuData);



    useEffect(() => {
        async function fetchMenu() {
            const data = await getMegaMenuData();
            if (data) {
                setMegaMenuData(data);
            }
        }
        fetchMenu();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [mobileMenuOpen]);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <>
            <header id="main-header" className={`${styles.header} ${(scrolled || isHomepage) ? styles.scrolled : ''}`}>
                <div className={styles.container}>

                    {/* Logo Wrapper */}
                    <div className={styles.logoWrapper}>
                        <Link href="/" className={styles.logoContainer}>
                            <div className={styles.logo} style={{ position: 'relative', width: '150px', height: '40px' }}>
                                <Image
                                    src="/images/logo.png"
                                    alt="Global Webify Logo"
                                    fill
                                    className={styles.logoImage}
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className={styles.nav}>
                        {Array.isArray(megaMenuData) && megaMenuData.map((rootItem) => {
                            const hasChildren = rootItem.children && rootItem.children.length > 0;

                            return (
                                <li
                                    key={rootItem.id}
                                    className={styles.navItem}
                                    onMouseEnter={() => setActiveMegaMenu(rootItem.id)}
                                    onMouseLeave={() => setActiveMegaMenu(null)}
                                >
                                    {hasChildren ? (
                                        <>
                                            <button className={styles.navLink}>
                                                {rootItem.title}
                                                <ChevronDown size={16} className={styles.chevron} />
                                            </button>
                                            {activeMegaMenu === rootItem.id && (
                                                <div className={styles.megaMenuFullWidth}>
                                                    <div className={styles.megaMenuInner}>
                                                        <div className={styles.megaMenuColumns}>
                                                            {/* Image Column with CTA */}
                                                            <div className={`${styles.megaMenuColumn} ${styles.megaMenuImageCol}`}>
                                                                <div className={styles.megaMenuBgWrapper}>
                                                                    <Image
                                                                        src="/images/mega-menu-feature.jpg"
                                                                        alt="Featured"
                                                                        fill
                                                                        className={styles.megaMenuBgImage}
                                                                        style={{ objectFit: 'cover' }}
                                                                    />
                                                                    <div className={styles.megaMenuOverlay} />
                                                                </div>
                                                                <div className={styles.megaMenuCtaCard}>
                                                                    <h4 className={styles.ctaTitle}>Featured</h4>
                                                                    <p className={styles.ctaDesc}>Explore our {rootItem.title.toLowerCase()} solutions</p>
                                                                    <Link href="/contact" className={styles.ctaBtn}>
                                                                        Get Started
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            {/* Menu Items Grid */}
                                                            <div className={styles.megaMenuItemsGrid}>
                                                                {rootItem.children.map((child) => {
                                                                    const ChildIcon = iconMap[child.iconName] || ArrowRight;
                                                                    return (
                                                                        <Link key={child.id} href={child.href} className={styles.megaMenuLink}>
                                                                            <div className={styles.megaMenuLinkIcon}>
                                                                                <ChildIcon size={20} />
                                                                            </div>
                                                                            <div className={styles.megaMenuLinkContent}>
                                                                                <span className={styles.megaMenuLinkTitle}>{child.title}</span>
                                                                                <span className={styles.megaMenuLinkDesc}>{child.description}</span>
                                                                            </div>
                                                                        </Link>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link href={rootItem.href} className={styles.navLink}>
                                            {rootItem.title}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </nav>

                    {/* Right Side: Socials, Theme Toggle & CTA */}
                    <div className={styles.rightUtils}>
                        <div className={styles.headerDivider}></div>

                        <div className={styles.headerSocials}>
                            <a href="https://facebook.com/globalwebify" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <Facebook size={16} />
                            </a>
                            <a href="https://linkedin.com/company/globalwebify" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <Linkedin size={16} />
                            </a>
                            <a href="https://instagram.com/globalwebify" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                <Instagram size={16} />
                            </a>
                        </div>



                        <Link href="/contact" className={styles.btnCustom}>Get Started</Link>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button className={styles.mobileToggler} onClick={toggleMenu} aria-label="Toggle navigation">
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </button>
                </div>
            </header>

            {/* Mobile Offcanvas Menu */}
            <div className={`${styles.backdrop} ${mobileMenuOpen ? styles.open : ''}`} onClick={toggleMenu}></div>
            <div className={`${styles.offcanvas} ${mobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.offcanvasHeader}>
                    <h5 className={styles.offcanvasTitle}>Menu</h5>
                    <button type="button" className={styles.btnClose} onClick={toggleMenu} aria-label="Close">
                        <X size={24} />
                    </button>
                </div>
                <div className={styles.offcanvasBody}>
                    <ul className={styles.mobileList}>
                        <li className={styles.mobileListItem}>
                            <Link href="/" className={styles.mobileLink} onClick={toggleMenu}>Home</Link>
                        </li>
                        {Array.isArray(megaMenuData) ? megaMenuData.map((item) => (
                            <li key={item.id} className={styles.mobileListItem}>
                                <Link href={item.href || '#'} className={styles.mobileLink} onClick={toggleMenu}>{item.title}</Link>
                            </li>
                        )) : null}
                        <li className={styles.mobileListItem}>
                            <Link href="/blog" className={styles.mobileLink} onClick={toggleMenu}>Blog</Link>
                        </li>
                        <li className={styles.mobileListItem}>
                            <Link href="/contact" className={styles.mobileLink} onClick={toggleMenu}>Contact</Link>
                        </li>
                    </ul>
                    <div className={styles.mobileBtnWrapper}>
                        <Link href="/contact" className={styles.btnCustom} style={{ display: 'block', textAlign: 'center' }} onClick={toggleMenu}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
