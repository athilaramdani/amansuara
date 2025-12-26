"use client";

import { Check, X } from "lucide-react";

export default function ComparisonGuide() {
    return (
        <section id="guide" className="section-padding" style={{ background: "rgba(255,255,255,0.02)" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", marginBottom: "1rem" }}>
                        Visual Guide: Kritik vs Pidana
                    </h2>
                    <p style={{ opacity: 0.7 }}>Pahami bedanya agar tidak tergelincir.</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                    {/* Bad Example */}
                    <div className="glass" style={{ padding: "2rem", borderRadius: "16px", borderTop: "4px solid var(--error)" }}>
                        <div className="flex-center" style={{ justifyContent: "space-between", marginBottom: "1.5rem" }}>
                            <h3 style={{ color: "var(--error)" }}>Berisiko Tinggi</h3>
                            <X size={24} color="var(--error)" />
                        </div>
                        <div style={{ background: "rgba(255, 77, 77, 0.1)", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem", fontStyle: "italic" }}>
                            "Pejabat X itu bodoh sekali, mukanya seperti tikus, pantas saja korupsi!"
                        </div>
                        <ul style={{ listStyle: "none", opacity: 0.8 }}>
                            <li style={{ marginBottom: "0.5rem" }}>❌ Menyerang fisik/personal (Body Shaming)</li>
                            <li style={{ marginBottom: "0.5rem" }}>❌ Menggunakan kata makian (Pasal Penghinaan)</li>
                            <li>❌ Tidak ada data pendukung</li>
                        </ul>
                    </div>

                    {/* Good Example */}
                    <div className="glass" style={{ padding: "2rem", borderRadius: "16px", borderTop: "4px solid var(--success)" }}>
                        <div className="flex-center" style={{ justifyContent: "space-between", marginBottom: "1.5rem" }}>
                            <h3 style={{ color: "var(--success)" }}>Aman & Beretika</h3>
                            <Check size={24} color="var(--success)" />
                        </div>
                        <div style={{ background: "rgba(77, 255, 136, 0.1)", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem", fontStyle: "italic" }}>
                            "Kebijakan X tidak efektif karena data menunjukkan kerugian negera sebesar Y triliun."
                        </div>
                        <ul style={{ listStyle: "none", opacity: 0.8 }}>
                            <li style={{ marginBottom: "0.5rem" }}>✅ Fokus pada substansi kebijakan</li>
                            <li style={{ marginBottom: "0.5rem" }}>✅ Menggunakan data valid</li>
                            <li>✅ Diksi objektif dan intelektual</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
