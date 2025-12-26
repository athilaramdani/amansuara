"use client";

import Link from "next/link";
import { ShieldCheck, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1rem 0' }}>
            <div className="container flex-center" style={{ justifyContent: 'space-between' }}>
                <div className="flex-center" style={{ gap: '0.5rem' }}>
                    <ShieldCheck size={32} color="var(--primary)" />
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700 }}>
                        AmanSuara<span style={{ color: 'var(--primary)' }}>.id</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem' }} className="hidden-mobile">
                    <Link href="#hero">Beranda</Link>
                    <Link href="#shield">Perisai Aspirasi</Link>
                    <Link href="#guide">Panduan</Link>
                    <Link href="#about">Tentang</Link>
                </div>

                <a href="#shield" className="btn btn-primary hidden-mobile">
                    Mulai Bersuara
                </a>

                {/* Mobile Menu Toggle */}
                <div className="show-mobile" style={{ display: 'none' }}>
                    <Menu />
                </div>
            </div>
        </nav>
    );
}
