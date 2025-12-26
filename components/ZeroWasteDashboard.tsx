"use client";

import { motion } from "framer-motion";

export default function ZeroWasteDashboard() {
    const stats = [
        { label: "Aspirasi Diselamatkan", value: "1,240" },
        { label: "Mahasiswa Terbantu", value: "850+" },
        { label: "Potensi Kasus Dicegah", value: "320" },
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", marginBottom: "1rem" }}>
                        Dampak Kami
                    </h2>
                </div>

                <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: "2rem", borderRadius: "16px", minWidth: "250px", textAlign: "center" }}
                        >
                            <h3 className="heading-gradient" style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                                {stat.value}
                            </h3>
                            <p style={{ opacity: 0.8, fontSize: "1.1rem" }}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
