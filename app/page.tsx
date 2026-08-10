import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import AboutTeaser from "./components/AboutTeaser";
import CinematicBand from "./components/CinematicBand";
import Angebote from "./components/Angebote";
import Termine from "./components/Termine";
import Preise from "./components/Preise";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-paper-100">
      <Nav />
      <Hero />
      <Marquee />
      <AboutTeaser />

      <CinematicBand
        image="/paar-sonnenuntergang.png"
        eyebrow="Was wir glauben"
        quote={
          <>
            „Konflikte sind kein Ende — sie sind eine{" "}
            <span className="not-italic text-moss-300">Einladung,</span>{" "}
            genauer hinzuschauen."
          </>
        }
        attribution="Julia &amp; Tom"
        minHeight="min-h-[70vh]"
      />

      <Angebote />

      <CinematicBand
        image="/walk-and-talk.png"
        eyebrow="Walk & Talk · Beratung in der Natur"
        quote={
          <>
            Hier ist buchstäblich <br />
            der <span className="not-italic text-moss-300">Weg</span> das Ziel.
          </>
        }
        cta={{ label: "Walk & Talk entdecken", href: "/leistungen#walk-and-talk" }}
        minHeight="min-h-[80vh]"
        align="left"
      />

      <Termine />
      <Preise />
      <Kontakt />
      <Footer />
    </main>
  );
}
