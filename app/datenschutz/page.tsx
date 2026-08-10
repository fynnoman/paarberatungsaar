import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz · Julia & Tom Hecken",
};

export default function DatenschutzPage() {
  return (
    <main className="relative bg-paper-100">
      <PageHeader eyebrow="Rechtliches" title={<>Datenschutz.</>} />

      <article className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[720px] px-6 lg:px-10 space-y-14">
          <Section title="Präambel">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Mit dieser Datenschutzerklärung möchten wir Sie darüber aufklären,
              welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz
              als „Daten") wir zu welchen Zwecken und in welchem Umfang
              verarbeiten. Sie gilt für alle von uns durchgeführten
              Verarbeitungen personenbezogener Daten — sowohl im Rahmen unserer
              Leistungen als auch auf dieser Website. Die verwendeten Begriffe
              sind nicht geschlechtsspezifisch.
            </p>
            <p className="mt-4 text-[14px] text-ink-500 tabular-nums">
              Stand: September 2023
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Verantwortlicher">
            <address className="not-italic text-[16px] leading-[1.75] text-ink-900">
              Thomas Michael Hecken
              <br />
              Mediation-Lichtblick
              <br />
              Schulstraße 28
              <br />
              66125 Saarbrücken
            </address>
            <div className="mt-4 space-y-1.5 text-[15px] text-ink-700">
              <div>
                <span className="eyebrow mr-3">Tel</span>
                <a
                  href="tel:+491726344734"
                  className="link-underline tabular-nums text-ink-900"
                >
                  0172 6344734
                </a>
              </div>
              <div>
                <span className="eyebrow mr-3">Mail</span>
                <a
                  href="mailto:info@mediation-hecken.de"
                  className="link-underline text-ink-900"
                >
                  info@mediation-hecken.de
                </a>
              </div>
            </div>
          </Section>

          <div className="hairline" />

          <Section title="Rechtsgrundlagen">
            <p className="text-[16px] leading-[1.75] text-ink-800 mb-4">
              Wir verarbeiten personenbezogene Daten auf Grundlage der DSGVO,
              insbesondere:
            </p>
            <ul className="space-y-3 text-[16px] leading-[1.7] text-ink-800">
              <RightItem
                n="a"
                title="Einwilligung"
                body="Art. 6 Abs. 1 S. 1 lit. a) DSGVO — Sie haben Ihre Einwilligung in die Verarbeitung Ihrer personenbezogenen Daten für einen oder mehrere bestimmte Zwecke gegeben."
              />
              <RightItem
                n="f"
                title="Berechtigte Interessen"
                body="Art. 6 Abs. 1 S. 1 lit. f) DSGVO — die Verarbeitung ist zur Wahrung berechtigter Interessen erforderlich, sofern Ihre Grundrechte nicht überwiegen."
              />
            </ul>
            <p className="mt-6 text-[15px] leading-[1.75] text-ink-700">
              Zusätzlich gelten in Deutschland nationale Datenschutzregelungen —
              insbesondere das Bundesdatenschutzgesetz (BDSG).
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Ihre Rechte">
            <p className="text-[16px] leading-[1.75] text-ink-800 mb-4">
              Sie haben nach der DSGVO insbesondere folgende Rechte:
            </p>
            <ul className="space-y-3 text-[16px] leading-[1.7] text-ink-800">
              {[
                ["Auskunft", "über Ihre bei uns gespeicherten Daten"],
                ["Berichtigung", "unrichtiger personenbezogener Daten"],
                ["Löschung", "Ihrer bei uns gespeicherten Daten"],
                ["Einschränkung", "der Verarbeitung Ihrer Daten"],
                ["Widerspruch", "gegen die Verarbeitung"],
                ["Datenübertragbarkeit", "in einem strukturierten Format"],
                ["Widerruf", "erteilter Einwilligungen mit Wirkung für die Zukunft"],
                ["Beschwerde", "bei der zuständigen Aufsichtsbehörde"],
              ].map(([t, b], i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[13px] text-moss-700 tabular-nums pt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <span>
                    <span className="text-ink-950">{t}</span> — {b}
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <div className="hairline" />

          <Section title="Sicherheitsmaßnahmen">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Wir setzen technische und organisatorische Maßnahmen ein, um ein
              dem Risiko angemessenes Schutzniveau zu gewährleisten. Zur
              Übertragung Ihrer Daten nutzen wir eine{" "}
              <span className="text-ink-950">TLS-Verschlüsselung</span> (erkennbar
              am „https://" in der Adresszeile Ihres Browsers).
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Cookies">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Cookies sind kleine Textdateien, die Informationen auf Ihrem
              Endgerät speichern. Wir setzen Cookies nur ein, soweit sie
              technisch notwendig sind — oder wenn Sie zuvor eingewilligt
              haben. Nicht notwendige Cookies (z. B. für Reichweitenmessung)
              werden nur nach Ihrer Einwilligung aktiviert.
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Bereitstellung des Onlineangebotes">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Zur Bereitstellung dieser Website verarbeiten wir technisch
              notwendige Daten wie die IP-Adresse. Die Auslieferung der Website
              erfolgt über unseren Hosting-Anbieter{" "}
              <span className="text-ink-950">1&amp;1 IONOS SE</span> (Elgendorfer
              Str. 57, 56410 Montabaur). Server-Logfiles werden nach maximal
              30 Tagen gelöscht oder anonymisiert.
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Videokonferenzen">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Für Online-Termine setzen wir Konferenz-Plattformen wie{" "}
              <span className="text-ink-950">Zoom</span> oder{" "}
              <span className="text-ink-950">Cisco WebEx</span> ein. Dabei
              werden Ihre Zugangsdaten, technische Angaben (IP-Adresse,
              Endgerät) und die Kommunikationsinhalte in dem durch die Anbieter
              verschlüsselten Umfang verarbeitet. Details entnehmen Sie den
              jeweiligen Datenschutzhinweisen der Anbieter.
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Änderungen">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Wir passen diese Datenschutzerklärung an, sobald Änderungen der
              Datenverarbeitung dies erforderlich machen. Für Ihren erneuten
              Besuch gilt dann die aktuelle Fassung.
            </p>
          </Section>

          <div className="hairline" />

          <Section title="Fragen">
            <p className="text-[16px] leading-[1.75] text-ink-800">
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte
              eine E-Mail oder wenden Sie sich direkt an den Verantwortlichen:
            </p>
            <div className="mt-5 space-y-1 text-[16px] text-ink-900">
              <div>Thomas Michael Hecken</div>
              <a
                href="mailto:info@mediation-hecken.de"
                className="link-underline"
              >
                info@mediation-hecken.de
              </a>
            </div>
          </Section>
        </div>
      </article>

      <Footer />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-display text-2xl lg:text-3xl text-ink-950 leading-tight mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}

function RightItem({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <li className="flex gap-3">
      <span className="text-[13px] text-moss-700 tabular-nums pt-1 shrink-0">
        {n})
      </span>
      <span>
        <span className="text-ink-950">{title}</span> — {body}
      </span>
    </li>
  );
}
