import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AspirationShield from "@/components/AspirationShield";
import ComparisonGuide from "@/components/ComparisonGuide";
import ZeroWasteDashboard from "@/components/ZeroWasteDashboard";
import RubberClauseDictionary from "@/components/RubberClauseDictionary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", overflow: "hidden" }}>
      <Navbar />
      <Hero />
      <ZeroWasteDashboard />
      <AspirationShield />
      <ComparisonGuide />

      <section id="about" className="section-padding">
        <div className="container glass" style={{ padding: "4rem", borderRadius: "24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", marginBottom: "1.5rem" }}>
            Tentang AmanSuara
          </h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", opacity: 0.8, lineHeight: 1.8 }}>
            AmanSuara adalah inisiatif mahasiswa Informatika Telkom University untuk menjawab fenomena "Chilling Effect".
            Kami percaya bahwa demokrasi yang sehat membutuhkan kritik yang berkualitas, bukan ketakutan yang membungkam.
            Zero Waste Gagasan adalah misi kami untuk memastikan tidak ada ide brilian yang terbuang sia-sia.
          </p>
        </div>
      </section>

      <RubberClauseDictionary />

      <Footer />
    </main>
  );
}
