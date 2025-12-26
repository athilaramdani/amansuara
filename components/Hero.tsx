"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '80px',
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 128, 128, 0.15) 0%, rgba(10, 10, 10, 0) 50%)'
        }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        background: 'rgba(255, 140, 0, 0.1)',
                        borderRadius: '50px',
                        border: '1px solid rgba(255, 140, 0, 0.3)',
                        marginBottom: '1.5rem',
                        color: 'var(--secondary)'
                    }}>
                        <Lock size={16} />
                        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Zero Waste Gagasan</span>
                    </div>

                    <h1 className="heading-gradient" style={{
                        fontSize: '4rem',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800
                    }}>
                        Perisai Digital untuk <br /> Aspirasi Mahasiswa
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        opacity: 0.7,
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem'
                    }}>
                        Jangan biarkan ide kritismu mati karena takut. Kami bantu periksa keamanan bahasamu agar aman dari pasal karet, namun tetap tajam bersuara.
                    </p>

                    <div className="flex-center" style={{ gap: '1rem' }}>
                        <a href="#shield" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                            Cek Tulisan Sekarang <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href="#guide" className="btn glass" style={{ fontSize: '1.1rem', padding: '1rem 2rem', color: 'white' }}>
                            Pelajari Kasus
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
