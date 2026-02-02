'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './ProcessSection.module.css';

const steps = [
    {
        id: '01',
        title: 'Diagnose',
        desc: 'We deep dive into your current metrics, identify bottlenecks, and audit your existing infrastructure.',
    },
    {
        id: '02',
        title: 'Strategize',
        desc: 'We blueprint the exact path to your revenue goals, calculating risks and engineering the solution.',
    },
    {
        id: '03',
        title: 'Engineer',
        desc: 'We build robust, scalable systems that handle growth without breaking, using enterprise-grade code.',
    },
    {
        id: '04',
        title: 'Optimize',
        desc: 'We launch, gather data, and continuously refine the system for peak performance and conversion.',
    }
];

export default function ProcessSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Animate the line drawing from left to right
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.span
                        className={styles.eyebrow}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Risk Reduction Engine
                    </motion.span>
                    <motion.h2
                        className={styles.headline}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Our Proven <span className={styles.highlight}>4-Step Growth Framework</span>
                    </motion.h2>
                </div>

                <div className={styles.timelineWrapper}>
                    {/* Background Line */}
                    <div className={styles.backgroundLine} />

                    {/* Progress Line */}
                    <motion.div
                        className={styles.progressLine}
                        style={{ scaleX }}
                    />

                    <div className={styles.stepsGrid}>
                        {steps.map((step, index) => (
                            <StepItem
                                key={step.id}
                                step={step}
                                index={index}
                                progress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Sub-component for individual steps involving complex scroll-trigger logic
function StepItem({ step, index, progress }) {
    // Each step activates when scroll progress passes its threshold
    // 0.25 per step approx
    const triggerStart = index * 0.25;
    const triggerEnd = triggerStart + 0.25;

    const opacity = useTransform(progress, [triggerStart, triggerStart + 0.1], [0.5, 1]);
    const y = useTransform(progress, [triggerStart, triggerStart + 0.1], [20, 0]);
    const scale = useTransform(progress, [triggerStart, triggerStart + 0.1], [0.95, 1]);
    const isActive = useTransform(progress, (v) => v > triggerStart);
    // Original motion values for opacity, y, scale (not used directly in new animate prop, but kept for reference if needed)
    // const opacity = useTransform(progress, [triggerStart, triggerStart + 0.1], [0.5, 1]);
    // const y = useTransform(progress, [triggerStart, triggerStart + 0.1], [20, 0]);
    // const scale = useTransform(progress, [triggerStart, triggerStart + 0.1], [0.95, 1]);

    // Determine if the step is active based on scroll progress
    const isActiveMotionValue = useTransform(progress, (v) => v > triggerStart);
    const [isActiveValue, setIsActiveValue] = useState(false);

    useEffect(() => {
        return isActiveMotionValue.onChange((latest) => {
            setIsActiveValue(latest);
        });
    }, [isActiveMotionValue]);

    // Convert isActive detailed check (not strictly needed for basic visuals mostly CSS can handle via props/classes if state managed, but here frame-motion handles styles)

    return (
        <motion.div className={styles.stepItem}>
            <div className={styles.markerWrapper}>
                <motion.div
                    className={`${styles.markerCircle} ${isActiveValue ? styles.markerCircleActive : ''}`}
                    animate={{
                        backgroundColor: isActiveValue ? "#3b82f6" : "#ffffff",
                        borderColor: isActiveValue ? "#dbeafe" : "#cbd5e1",
                        scale: isActiveValue ? 1.3 : 1
                    }}
                    transition={{ duration: 0.4 }}
                >
                    <span className={styles.stepNumber}>{step.id}</span>
                </motion.div>
            </div>

            <motion.div
                className={`${styles.card} ${isActiveValue ? styles.cardActive : ''}`}
                initial={{ opacity: 0.5, y: 20 }}
                animate={{
                    opacity: isActiveValue ? 1 : 0.5,
                    y: isActiveValue ? 0 : 20,
                    borderColor: isActiveValue ? "rgba(59, 130, 246, 0.5)" : "rgba(226, 232, 240, 0.8)"
                }}
                transition={{ duration: 0.5 }}
            >
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
        </motion.div>
    );
}
