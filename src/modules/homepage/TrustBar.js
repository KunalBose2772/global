'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './TrustBar.module.css';

const clients = [
    { name: 'Accugene Diagnostics', logo: '/images/logos/accugene.png' },
    { name: 'RPS Hospital', logo: '/images/logos/rps.jpg' },
    { name: 'AM Nuts & Spices', logo: '/images/logos/amnuts.webp' },
    { name: 'Elevate HR', logo: '/images/logos/elevate.png' },
    { name: 'ICG Retail Solutions', logo: '/images/logos/icg.png' },
    { name: 'Lignum Foundation', logo: '/images/logos/lignum.png' },
    { name: 'Omni Overseas', logo: '/images/logos/omni.png' },
    { name: 'Sonwe Solar', logo: '/images/logos/sonwe.png' },
    { name: 'AFICS India', logo: '/images/logos/afics.png' },
    { name: 'Kelvine Eco Products', logo: '/images/logos/kelvine.png' },
    { name: 'Holiday Horizons', logo: '/images/logos/holiday.png' },
    { name: 'Veltrivo', logo: '/images/logos/veltrivo.png' },
];

export default function TrustBar() {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <section className={styles.trustBar}>
            <div className="container">
                <motion.p
                    className={styles.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Trusted by 500+ businesses
                </motion.p>

                <div
                    className={styles.marquee}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <motion.div
                        className={styles.marqueeContent}
                        animate={{
                            x: isPaused ? undefined : ["0%", "-25%"],
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 60,
                                ease: 'linear',
                            },
                        }}
                    >
                        {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                            <div key={index} className={styles.clientCard}>
                                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        unoptimized
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
