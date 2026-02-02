'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    AlertCircle, XCircle, TrendingDown, EyeOff, // Bad icons
    CheckCircle, Zap, TrendingUp, Search // Good icons
} from 'lucide-react';
import styles from './AboutSection.module.css';

// COMBINED DATA PAIRS (Liability -> Asset)
const cardPairs = [
    {
        id: 1,
        liability: {
            icon: EyeOff,
            title: "Invisible on Google",
            desc: "Customers can't find you."
        },
        asset: {
            icon: Search,
            title: "SEO Domination",
            desc: "Rank #1 for high-intent keywords."
        }
    },
    {
        id: 2,
        liability: {
            icon: TrendingDown,
            title: "High Bounce Rates",
            desc: "Slow sites lose 50% of visitors."
        },
        asset: {
            icon: Zap,
            title: "Blazing Fast",
            desc: "Sub-second loads keep them hooked."
        }
    },
    {
        id: 3,
        liability: {
            icon: XCircle,
            title: "Zero Conversions",
            desc: "Traffic but no phone calls."
        },
        asset: {
            icon: TrendingUp,
            title: "Conversion Engine",
            desc: "Turn visitors into paying clients."
        }
    },
    {
        id: 4,
        liability: {
            icon: AlertCircle,
            title: "Tech Nightmares",
            desc: "Broken plugins & security risks."
        },
        asset: {
            icon: CheckCircle,
            title: "Bulletproof Tech",
            desc: "Secure, scalable, and sleep-ready."
        }
    }
];

export default function AboutSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- ANIMATION MAPPINGS ---

    // 1. TIMELINE OVERVIEW (Scroll Progress 0.0 -> 1.0)
    // 0.00 -> 0.35: ABSOLUTE HOLD (Liability State - "Stop like 1st image")
    // 0.35 -> 0.65: TRANSITION (Background darkens, Text swaps, Cards flip)
    // 0.65 -> 0.90: HOLD Asset State
    // 0.90 -> 1.00: Unpin

    // Background Color: White -> Deep Navy
    // Starts at 0.35 so user has plenty of time to read "Liability" view
    // Starts later so text contrast is preserved
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.45, 0.65],
        ["#ffffff", "#0f172a"]
    );

    // Headlines
    // Liability text fades OUT
    const liabilityOpacity = useTransform(scrollYProgress, [0.35, 0.45], [1, 0]);
    const liabilityX = useTransform(scrollYProgress, [0.35, 0.45], [0, -100]);
    const liabilityDisplay = useTransform(scrollYProgress, (v) => v > 0.45 ? 'none' : 'block');

    // Asset text fades IN
    const assetDisplay = useTransform(scrollYProgress, (v) => v < 0.45 ? 'none' : 'block');
    const assetX = useTransform(scrollYProgress, [0.5, 0.65], [100, 0]);
    const assetOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);

    // Text color variable
    const textColor = useTransform(scrollYProgress, [0.35, 0.55], ["#0f172a", "#ffffff"]);


    return (
        <motion.section
            ref={containerRef}
            className={styles.scrollSection}
            style={{ backgroundColor }}
        >
            <div className={styles.stickyContainer}>
                <div className={styles.contentWrapper}>

                    {/* --- HEADLINES --- */}
                    <div className={styles.headlineContainer}>
                        {/* Liability Headline */}
                        <motion.div
                            className={styles.headlineWrapper}
                            style={{
                                x: liabilityX,
                                opacity: liabilityOpacity,
                                display: liabilityDisplay,
                                color: "#0f172a" // HARDCODED DARK COLOR for first phase transparency
                            }}
                        >
                            <span className={styles.eyebrow} style={{ color: '#ef4444' }}>THE REALITY</span>
                            <h2 className={styles.mainHeadline}>
                                Most Websites Are <span className={styles.redHighlight}>Liabilities</span>.
                            </h2>
                            <p className={styles.subHeadline}>
                                Stop pouring money into a digital presence that drains your budget.
                            </p>
                        </motion.div>

                        {/* Asset Headline */}
                        <motion.div
                            className={styles.headlineWrapper}
                            style={{
                                display: assetDisplay,
                                x: assetX,
                                opacity: assetOpacity,
                                color: '#ffffff'
                            }}
                        >
                            <span className={styles.eyebrow} style={{ color: '#3b82f6' }}>THE TRANSFORMATION</span>
                            <h2 className={styles.mainHeadline} style={{ color: '#ffffff' }}>
                                We Turn Yours Into an <span className={styles.blueHighlight}>Asset</span>.
                            </h2>
                            <p className={styles.subHeadline} style={{ color: '#e2e8f0' }}>
                                Precision-engineered for growth, speed, and massive ROI.
                            </p>
                        </motion.div>
                    </div>

                    {/* --- 3D FLIP CARDS (4x1 Grid) --- */}
                    <div className={styles.cardsStage}>
                        <div className={styles.grid}>
                            {cardPairs.map((pair, index) => (
                                <FlipCard
                                    key={pair.id}
                                    pair={pair}
                                    index={index}
                                    progress={scrollYProgress}
                                />
                            ))}
                        </div>
                    </div>

                    {/* --- FINAL CTA --- */}
                    <motion.div
                        className={styles.ctaContainer}
                        style={{
                            opacity: useTransform(scrollYProgress, [0.8, 0.9], [0, 1]),
                            y: useTransform(scrollYProgress, [0.8, 0.9], [20, 0])
                        }}
                    >
                        <a href="/audit" className={styles.glowingBtn}>
                            GET YOUR FREE AUDIT
                        </a>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
}

// Sub-component for individual rotating card
function FlipCard({ pair, index, progress }) {
    // Stagger the rotation based on index
    // New Range: 0.45 -> 0.75 (Syncs with BG darkening starting at 0.35)
    // This delayed start ensures the user is well deep into the "Transition" phase
    const start = 0.45 + (index * 0.08);
    const end = start + 0.15;

    // Rotate from 0 to 180 degrees
    const rotateX = useTransform(progress, [start, end], [0, 180]);
    const isFlipped = useTransform(progress, (v) => v > (start + end) / 2);

    return (
        <div className={styles.flipScene}>
            <motion.div
                className={styles.flipCardInner}
                style={{ rotateX }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* FRONT FACE (Liability) */}
                <div className={styles.flipCardFront}>
                    <div className={styles.iconLiability}>
                        <pair.liability.icon size={28} />
                    </div>
                    <h3 className={styles.cardTitle}>{pair.liability.title}</h3>
                    <p className={styles.cardDesc}>{pair.liability.desc}</p>
                </div>

                {/* BACK FACE (Asset) */}
                <div className={styles.flipCardBack}>
                    <div className={styles.iconAsset}>
                        <pair.asset.icon size={28} />
                    </div>
                    <h3 className={styles.cardTitle}>{pair.asset.title}</h3>
                    <p className={styles.cardDesc}>{pair.asset.desc}</p>
                </div>
            </motion.div>
        </div>
    );
}
