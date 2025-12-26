"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle, ShieldAlert, Loader2 } from "lucide-react";

export default function AspirationShield() {
    const [text, setText] = useState("");
    const [isChecking, setIsChecking] = useState(false);
    const [result, setResult] = useState<null | { score: number; issues: string[]; safe: boolean }>(null);

    const handleCheck = () => {
        if (!text) return;
        setIsChecking(true);
        // Simulate AI check
        setTimeout(() => {
            const isRisky = text.toLowerCase().includes("bodoh") || text.toLowerCase().includes("anjing");
            setResult({
                score: isRisky ? 45 : 92,
                safe: !isRisky,
                issues: isRisky
                    ? ["Terdeteksi kata kasar (Pasal 27 ayat 3 UU ITE)", "Serangan personal terdeteksi"]
                    : ["Bahasa tergolong aman", "Kritik substantif", "Tidak ada unsur SARA"],
            });
            setIsChecking(false);
        }, 1500);
    };

    return (
        <section id="shield" className="section-padding">
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", marginBottom: "1rem" }}>
                        Aspiration Shield
                    </h2>
                    <p style={{ opacity: 0.7 }}>Tempelkan draf tulisanmu di sini. Kami akan memindai potensi jerat hukum.</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>
                    {/* Input Area */}
                    <div className="glass" style={{ padding: "2rem", borderRadius: "16px" }}>
                        <label style={{ display: "block", marginBottom: "1rem", fontWeight: 600 }}>Draf Aspirasi</label>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Tuliskan keresahan atau kritikmu di sini..."
                            style={{
                                width: "100%",
                                height: "300px",
                                background: "rgba(0,0,0,0.3)",
                                border: "1px solid var(--card-border)",
                                borderRadius: "8px",
                                padding: "1rem",
                                color: "var(--foreground)",
                                fontSize: "1rem",
                                resize: "none",
                                fontFamily: "var(--font-sans)",
                            }}
                        />
                        <div style={{ marginTop: "1.5rem", textAlign: "right" }}>
                            <button
                                className="btn btn-primary"
                                onClick={handleCheck}
                                disabled={isChecking || !text}
                            >
                                {isChecking ? <><Loader2 className="animate-spin" size={20} style={{ marginRight: 8 }} /> Menganalisis...</> : "Periksa Keamanan"}
                            </button>
                        </div>
                    </div>

                    {/* Result Area */}
                    <div>
                        {!result && !isChecking && (
                            <div className="glass" style={{ padding: "3rem 2rem", borderRadius: "16px", textAlign: "center", opacity: 0.5, borderStyle: 'dashed' }}>
                                <ShieldAlert size={48} style={{ marginBottom: "1rem" }} />
                                <h3>Menunggu Input</h3>
                                <p>Hasil analisis hukum dan etika akan muncul di sini.</p>
                            </div>
                        )}

                        {isChecking && (
                            <div className="glass" style={{ padding: "3rem 2rem", borderRadius: "16px", textAlign: "center" }}>
                                <Loader2 className="animate-spin" size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                                <h3>Sedang Memindai...</h3>
                                <p>Mengecek database UU ITE dan KUHP...</p>
                            </div>
                        )}

                        {result && (
                            <div
                                className="glass animate-fade-in"
                                style={{
                                    padding: "2rem",
                                    borderRadius: "16px",
                                    borderLeft: `4px solid ${result.safe ? "var(--success)" : "var(--error)"}`
                                }}
                            >
                                <div className="flex-center" style={{ justifyContent: "space-between", marginBottom: "1.5rem" }}>
                                    <h3 style={{ fontSize: "1.5rem" }}>Hasil Diagnosis</h3>
                                    <div style={{
                                        padding: "0.5rem 1rem",
                                        borderRadius: "8px",
                                        background: result.safe ? "rgba(77, 255, 136, 0.1)" : "rgba(255, 77, 77, 0.1)",
                                        color: result.safe ? "var(--success)" : "var(--error)",
                                        fontWeight: "bold"
                                    }}>
                                        Skor Keamanan: {result.score}/100
                                    </div>
                                </div>

                                <div style={{ marginBottom: "2rem" }}>
                                    <h4 style={{ marginBottom: "0.5rem", opacity: 0.8 }}>Analisis Isu:</h4>
                                    <ul style={{ listStyle: "none" }}>
                                        {result.issues.map((issue, idx) => (
                                            <li key={idx} className="flex-center" style={{ justifyContent: "flex-start", gap: "0.5rem", marginBottom: "0.5rem", color: result.safe ? "var(--foreground)" : "var(--error)" }}>
                                                {result.safe ? <CheckCircle size={16} /> : <AlertTriangle size={16} />}
                                                {issue}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div style={{ padding: "1rem", background: "rgba(255,255,255,0.03)", borderRadius: "8px", marginBottom: "1.5rem" }}>
                                    <h4 style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>Rekomendasi AI:</h4>
                                    <p style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                                        {result.safe
                                            ? "Tulisan Anda sudah cukup aman dan substantif. Siap untuk dipublikasikan!"
                                            : "Ganti kata-kata kasar dengan diksi yang lebih intelektual. Fokus pada argumen, bukan serangan personal."}
                                    </p>
                                </div>

                                <div className="flex-center">
                                    <button
                                        className="btn btn-secondary"
                                        style={{ width: "100%" }}
                                        onClick={() => {
                                            navigator.clipboard.writeText(`Saya baru saja memeriksa aspirasi di AmanSuara.id! Skor Keamanan: ${result.score}/100.`);
                                            alert("Hasil disalin ke clipboard!");
                                        }}
                                    >
                                        Bagikan Hasil
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
