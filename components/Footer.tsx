export default function Footer() {
    return (
        <footer style={{ padding: "2rem 0", borderTop: "1px solid var(--glass-border)", marginTop: "4rem" }}>
            <div className="container" style={{ textAlign: "center", opacity: 0.6, fontSize: "0.9rem" }}>
                <p style={{ marginBottom: "0.5rem" }}>&copy; {new Date().getFullYear()} AmanSuara.id. All rights reserved.</p>
                <p>Informatika Telkom University &bull; Zero Waste Gagasan</p>
            </div>
        </footer>
    );
}
