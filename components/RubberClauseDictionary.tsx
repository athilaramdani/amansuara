"use client";

import { motion } from "framer-motion";
import { BookOpen, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function RubberClauseDictionary() {
    const clauses = [
        {
            article: "Pasal 27 ayat (3) UU ITE",
            title: "Pencemaran Nama Baik",
            desc: "Sering digunakan untuk menjerat kritik terhadap pejabat atau institusi.",
            tips: "Hindari kata sifat merendahkan (bodoh, gila). Fokus pada perilaku/kebijakan, bukan fisik/personal."
        },
        {
            article: "Pasal 28 ayat (2) UU ITE",
            title: "Ujaran Kebencian (SARA)",
            desc: "Pasal ini untuk mencegah konflik sosial, tapi bisa bias tafsir.",
            tips: "Jangan pernah mengaitkan kritik dengan Agama, Suku, Ras, atau Antargolongan objek kritik."
        },
        {
            article: "Pasal 207 KUHP",
            title: "Penghinaan Penguasa",
            desc: "Delik aduan yang melindungi martabat pejabat pemerintah.",
            tips: "Gunakan data dan argumen kausalitas. 'Kebijakan A menyebabkan kerugian B' lebih aman daripada 'Menteri A tidak becus'."
        }
    ];

    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    return (
        <section className="section-padding">
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", marginBottom: "1rem" }}>
                        Kamus Pasal Karet
                    </h2>
                    <p style={{ opacity: 0.7 }}>Kenali "senjata" yang sering membungkammu.</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                    {clauses.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass"
                            style={{ padding: "2rem", borderRadius: "16px", cursor: "pointer", transition: "all 0.3s ease" }}
                            onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex-center" style={{ justifyContent: "space-between", marginBottom: "1rem" }}>
                                <div style={{ background: "rgba(255, 140, 0, 0.1)", color: "var(--secondary)", padding: "0.25rem 0.75rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "bold" }}>
                                    {item.article}
                                </div>
                                <BookOpen size={20} style={{ opacity: 0.5 }} />
                            </div>

                            <h3 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>{item.title}</h3>
                            <p style={{ opacity: 0.8, marginBottom: "1rem" }}>{item.desc}</p>

                            <div style={{
                                height: activeIdx === idx ? "auto" : "0",
                                overflow: "hidden",
                                transition: "all 0.3s ease",
                                borderTop: activeIdx === idx ? "1px solid var(--glass-border)" : "none",
                                paddingTop: activeIdx === idx ? "1rem" : "0"
                            }}>
                                <div className="flex-center" style={{ justifyContent: "flex-start", gap: "0.5rem", color: "var(--success)" }}>
                                    <AlertCircle size={16} />
                                    <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>Tips Aman:</span>
                                </div>
                                <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>{item.tips}</p>
                            </div>

                            {activeIdx !== idx && (
                                <p style={{ fontSize: "0.8rem", textAlign: "center", opacity: 0.5, marginTop: "1rem" }}>Klik untuk lihat tips</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
