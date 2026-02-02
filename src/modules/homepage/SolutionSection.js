'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './SolutionSection.module.css';

export default function SolutionSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // --- SCROLL TRANSFORMATIONS ---

    // 1. Background Shift: Light (#f8fafc) -> Dark (#0f172a)
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.1, 0.5],
        ["#f8fafc", "#0f172a"]
    );

    // 2. Text Color: Dark (#0f172a) -> Light (#ffffff)
    // Applied DIRECTLY to elements to ensure overriding
    const mainTextColor = useTransform(
        scrollYProgress,
        [0.15, 0.35], // Aggressively turns white before BG gets too dark
        ["#0f172a", "#ffffff"]
    );

    const subTextColor = useTransform(
        scrollYProgress,
        [0.15, 0.35],
        ["#475569", "#cbd5e1"]
    );

    // 3. Clarity (Blur & Scale): Blurry/Small -> Sharp/Normal
    const textBlur = useTransform(scrollYProgress, [0.1, 0.45], ["10px", "0px"]);
    const textScale = useTransform(scrollYProgress, [0.1, 0.45], [0.9, 1]);
    const textOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0.3, 1]);

    // 4. Highlight Color Pulse
    const highlightColor = useTransform(
        scrollYProgress,
        [0.2, 0.5],
        ["#94a3b8", "#3b82f6"] // Gray -> Brand Blue
    );

    return (
        <motion.section
            ref={containerRef}
            className={styles.section}
            style={{ backgroundColor }}
        >
            <div className={styles.stickyWrapper}>
                <motion.div
                    className={styles.contentContainer}
                    style={{
                        // Removed color here, applied directly to children
                        filter: useTransform(textBlur, (v) => `blur(${v})`),
                        scale: textScale,
                        opacity: textOpacity
                    }}
                >
                    <motion.div className={styles.label} style={{ color: highlightColor }}>
                        THE ROOT CAUSE
                    </motion.div>

                    <motion.h2
                        className={styles.headline}
                        style={{ color: mainTextColor }}
                    >
                        The Problem Isn’t Your Business.<br />
                        It’s the <motion.span style={{ color: highlightColor }}>System</motion.span> Behind Your Website.
                    </motion.h2>

                    <motion.p
                        className={styles.explanation}
                        style={{ color: subTextColor }}
                    >
                        Most agencies focus on visuals.
                        We focus on behavior, performance, and conversion logic.
                    </motion.p>
                </motion.div>
            </div>
        </motion.section>
    );
}
