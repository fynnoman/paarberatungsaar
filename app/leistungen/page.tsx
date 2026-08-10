import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen · Julia & Tom Hecken",
};

const sections = [
  {
    id: "paarberatung",
    n: "01",
    title: "Paarberatung",
    lead: "Wieder ins Gespräch kommen.",
    body: [
      "Mit einem Menschen über lange Zeit hinweg das Leben zu teilen ist nicht immer einfach. Man teilt einen Kühlschrank, ein Bad, Ängste, Hoffnungen und Wünsche. Damit Paare langfristig glücklich bleiben können, braucht es immer wieder kleinere Wartungsarbeiten an der Beziehung.",
      "Konflikte sind gesund — wenn sie sich jedoch im Kreis drehen und der Streit stagniert, wird das destruktiv. Häufig liegt der Grund darin, dass Paare sich nicht einig sind, worum es eigentlich geht. Der erste Schritt ist, exakt auszudrücken, was gemeint ist. Hier hilft ein geschützter Raum und ein Vermittler, der eine gemeinsame Perspektive ermöglicht.",
      "In der Paarberatung können Sie lernen, Fronten aufzubrechen, eigene Bedürfnisse ohne Angriff auszudrücken und die Ihres Partners zu hören, ohne sich angegriffen zu fühlen. Oft sind es unbewusste Muster — wie die Verfolger-Vermeider-Dynamik — die Konflikte erzeugen. Wir helfen, sie zu erkennen und zu verändern.",
    ],
  },
  {
    id: "einzelberatung",
    n: "02",
    title: "Einzelberatung",
    lead: "Klarheit für sich selbst.",
    body: [
      "Im Gegensatz zur Paarberatung ermöglicht die Einzelberatung Ihnen, individuelle Sichtweisen frei darzustellen — ohne Sorge, den Partner zu verletzen. In vielen Partnerschaften herrscht darüber hinaus ein Macht- oder Hierarchiegefälle, das offenes Sprechen erschwert.",
      "In der Einzelberatung erforschen Sie eigene Bedürfnisse, ordnen Emotionen ein und schärfen Ihre Position. Auch wenn nur ein:e Partner:in externe Unterstützung sucht, ist die Einzelberatung ein guter Weg, um sich Hilfe zu holen.",
      "Da wir als Berater sowohl gemeinsam als auch einzeln zur Verfügung stehen, können Sie entscheiden, ob Sie lieber mit Julia oder mit Tom sprechen möchten. Eine Einzelberatung schließt eine spätere Paarberatung oder Mediation nicht aus — im Idealfall wird sie sogar ergänzt.",
    ],
  },
  {
    id: "trennungsbegleitung",
    n: "03",
    title: "Trennungsbegleitung",
    lead: "Wenn Wege sich trennen.",
    body: [
      "Nicht jede Partnerschaft ist auf eine lange gemeinsame Zeit ausgelegt. Wir alle haben das Recht, mit einem geliebten Menschen glücklich zu sein — und wir haben auch das Recht, uns zu trennen, wenn eine Beziehung nicht mehr erfüllt.",
      "Eine Partnerschaft, die endet, sollte nicht mit einem Rosenkrieg zu Ende gehen. Gerade nach langen Beziehungen sind wir emotional, familiär, oft auch finanziell verstrickt. Wir stehen an Ihrer Seite — als Vermittler oder Berater — um die gemeinsame Zeit in guter Erinnerung zu verankern.",
      "Sind Kinder involviert, spüren sie oft feinfühlig die Schwingungen zwischen den Eltern. Gerade hier ist es uns besonders wichtig, beratend tätig sein zu dürfen — für beide Partner, die Familie, bis hin zur Scheidungs- oder Trennungsmediation.",
    ],
  },
  {
    id: "walk-and-talk",
    n: "04",
    title: "Walk & Talk",
    lead: "Reden in Bewegung.",
    image: "/walk-and-talk.png",
    body: [
      "Durch die Natur zu gehen und dabei einen Konflikt zu besprechen kann eine wunderbare Möglichkeit sein, um eine ruhige und inspirierende Umgebung zu nutzen. Die Natur wirkt beruhigend und macht es leichter, sich zu öffnen und ehrlich zu sein.",
      "Beim Walk & Talk fließen Gedanken und Gefühle freier, weil Bewegung neue Perspektiven eröffnet. Die Schönheit und Ruhe der Natur baut Stress ab und verbessert die Stimmung — beides trägt zu einer konstruktiven Konfliktlösung bei.",
      "Wir nutzen diese alternative Herangehensweise regional in Naherholungsgebieten. Hier ist buchstäblich der Weg das Ziel.",
    ],
  },
  {
    id: "mediation",
    n: "05",
    title: "Mediation",
    lead: "Konflikte gemeinsam lösen.",
    body: [
      "Mediation ist eine effektive Methode zur Konfliktlösung, bei der ein neutraler Vermittler die Konfliktparteien dabei unterstützt, ihre unterschiedlichen Standpunkte zu verstehen und gemeinsam Lösungen zu finden. Oft liegen die Hintergründe eines Konfliktes verdeckt — wie der größte Teil eines Eisbergs. Hinter Interessen stehen Gefühle und Bedürfnisse, die zuvor kein Gehör fanden.",
      "In der Mediation treffen gleichberechtigte Parteien aufeinander. Es gibt weder Kläger noch Angeklagten. Die Beteiligten erarbeiten eine eigene Lösung, wir begleiten systemisch und kommunikativ.",
      "Die Ergebnisse können in einer Mediationsvereinbarung schriftlich festgehalten werden und sind nach dem Mediationsgesetz für beide Parteien rechtsverbindlich. Mediation richtet sich nicht nach einem Streitwert — sie spart Kosten, Zeit und Nerven und verbessert das Verhältnis der Parteien langfristig.",
      "Mediation eignet sich in vielen Lebenssituationen: präventiv in Erbengemeinschaften, vor der Eheschließung, innerbetrieblich, in Trennungs- und Scheidungsmediation, Eltern-Kind-Mediation, bei Nachbarschafts- und Eigentumsstreitigkeiten und mehr.",
    ],
  },
  {
    id: "wegbegleitung",
    n: "06",
    title: "Wegbegleitung",
    lead: "Über einen längeren Zeitraum.",
    body: [
      "Wenn einzelne Termine für Ihre Bedürfnisse nicht ausreichen, begleiten wir Sie kontinuierlich vom Ausgangspunkt bis zu Ihrem selbst gewählten Ziel.",
      "In dieser Zeit stehen wir durchgehend an Ihrer Seite — mit regelmäßigen Terminen, Zwischenreflexionen und flexibler Erreichbarkeit für die Momente, die zwischen den Sitzungen entstehen.",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <main className="relative bg-paper-100">
      <PageHeader
        eyebrow="Unsere Angebote"
        title={
          <>
            Wie wir Sie{" "}
            <span className="italic text-moss-700">begleiten.</span>
          </>
        }
        intro="Konkrete und nachhaltige Lösungen für Beziehungsthemen. Vor Ort in Saarbrücken oder online — je nachdem, was gerade passt."
      />

      <div className="mx-auto max-w-[1000px] px-6 lg:px-10 pb-24 lg:pb-32 space-y-24 lg:space-y-32">
        {sections.map((s, i) => (
          <article key={s.id} id={s.id} className="scroll-mt-24">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-28">
                  <div className="text-display text-6xl lg:text-7xl text-moss-500 leading-none tabular-nums mb-4">
                    {s.n}
                  </div>
                  <div className="eyebrow">Angebot {s.n}</div>
                </div>
              </div>
              <div className="lg:col-span-9">
                <h2 className="text-display text-[clamp(2rem,4vw,3.5rem)] text-ink-950 leading-[1.02] balance mb-3">
                  {s.title}
                </h2>
                <p className="text-display italic text-[19px] lg:text-2xl text-moss-700 mb-8">
                  {s.lead}
                </p>
                {s.image && (
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden bg-paper-200 mb-8">
                    <Image
                      src={s.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 65vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="space-y-5 text-[16px] leading-[1.8] text-ink-700 pretty max-w-[60ch]">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-ink-900/10 flex flex-wrap items-center gap-3">
                  <a
                    href="/#termine"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-moss-700 text-paper-50 text-[14px] hover:bg-moss-800 transition-colors"
                  >
                    Termin anfragen
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="tel:+491726344734"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink-900/15 text-ink-800 text-[14px] hover:border-ink-900/40 transition-colors tabular-nums"
                  >
                    0172 6344734
                  </a>
                </div>
              </div>
            </div>
            {i < sections.length - 1 && (
              <div className="hairline mt-24 lg:mt-32" />
            )}
          </article>
        ))}
      </div>

      <Footer />
    </main>
  );
}
