import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns · Julia & Tom Hecken",
};

export default function UeberUnsPage() {
  return (
    <main className="relative bg-paper-100">
      <PageHeader
        eyebrow="Wir über uns"
        title={
          <>
            Julia <span className="italic text-moss-700">&amp;</span> Tom.
          </>
        }
        intro="Wir sind Julia und Tom Hecken. Als Ehepaar, Eltern von vier Kindern und ausgebildete Berater begleiten wir Menschen durch die schönen und schweren Seiten des gemeinsamen Lebens."
      />

      {/* Julia */}
      <Section id="julia">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-moss-100">
              <Image
                src="/julia.png"
                alt="Julia Hecken"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-5 flex items-center justify-between px-1">
              <div className="text-display italic text-xl text-moss-800">
                Julia Hecken
              </div>
              <span className="eyebrow">Paarberaterin</span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <div className="eyebrow mb-4">Über Julia</div>
            <h2 className="text-display text-[clamp(2rem,4vw,3.5rem)] text-ink-950 leading-[1.02] balance mb-8">
              Als Frau und Mutter kenne ich das Leben mit all seinen{" "}
              <span className="italic text-moss-700">Facetten.</span>
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.75] text-ink-700 pretty max-w-[58ch]">
              <p>
                An Ihrer Seite werde ich Sie empathisch, wertschätzend und
                optimistisch mit vielseitiger Expertise begleiten. Systemisch-integrative und
                ganzheitliche Methoden — emotionsfokussiert und zugleich
                konkret anwendbar — bilden meine Arbeitsgrundlage.
              </p>
              <p>
                Ich stehe Ihnen als ehrlicher und vertraulicher Berater
                in allen Lebensfragen zur Verfügung.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-ink-900/10">
              <div className="eyebrow mb-4">Qualifikationen</div>
              <ul className="flex flex-wrap gap-2">
                {["Paarberaterin", "Theologin", "Pädagogin", "Kommunikationscoach"].map((q) => (
                  <li key={q}>
                    <span className="text-[13px] px-3.5 py-1.5 rounded-full border border-ink-900/15 bg-paper-50 text-ink-700">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <div className="eyebrow mb-4">Ich unterstütze Sie darin</div>
              <SupportList
                items={[
                  "Klarheit zu gewinnen, was Sie wollen",
                  "einen Weg zu finden, Ihre Wünsche und Ziele zu erreichen",
                  "eine glückliche Beziehung leben zu können",
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Tom */}
      <Section id="tom">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:order-2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-paper-200">
              <Image
                src="/tom.png"
                alt="Thomas Hecken"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-5 flex items-center justify-between px-1">
              <div className="text-display italic text-xl text-moss-800">
                Thomas Hecken
              </div>
              <span className="eyebrow">Mediator · Coach</span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-4">
            <div className="eyebrow mb-4">Über Tom</div>
            <h2 className="text-display text-[clamp(2rem,4vw,3.5rem)] text-ink-950 leading-[1.02] balance mb-8">
              Bodenständig, ehrlich, zielführend —{" "}
              <span className="italic text-moss-700">an Ihrer Seite.</span>
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.75] text-ink-700 pretty max-w-[58ch]">
              <p>
                Das Leben hat viele Seiten und kann uns Menschen sehr
                mitspielen. Freude und Leid geben sich oft die Klinke in
                die Hand — neben den wunderschönen Seiten wird unser
                Leben zeitweise durch Konflikte getrübt.
              </p>
              <p>
                Ich unterstütze Sie durch die Summe meiner Erfahrungen
                als Mediator, Berater und Coach — auf eine bodenständige,
                ehrliche und zielführende Art.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-ink-900/10">
              <div className="eyebrow mb-4">Qualifikationen</div>
              <ul className="flex flex-wrap gap-2">
                {["Zertifizierter Mediator", "Paarberater", "Coach", "Kommunikationstrainer", "Erzieher"].map((q) => (
                  <li key={q}>
                    <span className="text-[13px] px-3.5 py-1.5 rounded-full border border-ink-900/15 bg-paper-50 text-ink-700">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <div className="eyebrow mb-4">Ich unterstütze Sie darin</div>
              <SupportList
                items={[
                  "Lösungen für bestehende Konflikte zu finden",
                  "kommunikative Strategien für Ihre Situation zu entdecken",
                  "Ihren Kompass Richtung Glück und Erfolg auszurichten",
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      <Divider />

      {/* Ehrenamt */}
      <Section id="ehrenamt">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-4">Ehrenamt · Kooperation</div>
            <h2 className="text-display text-[clamp(1.75rem,3.5vw,3rem)] text-ink-950 leading-[1.02] balance">
              Für Einsatzkräfte und{" "}
              <span className="italic text-moss-700">ihre Familien.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-[16px] leading-[1.75] text-ink-700 pretty max-w-[58ch]">
            <p>
              In Kooperation mit dem Verein <span className="text-ink-950">A.T.E.K. e.V.</span>{" "}
              bieten wir belasteten Einsatzkräften und deren Angehörigen unsere
              ehrenamtliche Unterstützung an.
            </p>
            <p>
              Einsatzkräfte und ihre Partner:innen sehen sich besonderen
              Herausforderungen ausgesetzt — das spiegelt sich häufig in der
              Paarbeziehung und der Familie wider. Diese Situationen kennen
              wir auch aus eigener Erfahrung. Gemeinsam finden wir einen Pfad
              heraus aus der Konfliktspirale hin zu einer gestärkten,
              glücklichen und friedvollen Zukunft.
            </p>
            <p>
              <span className="text-display italic text-moss-700">Benötigen Sie Hilfe?</span>{" "}
              Lassen Sie uns ein unverbindliches Gespräch führen.
            </p>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}

function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 lg:px-10">{children}</div>
    </section>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-[1240px] px-6 lg:px-10">
      <div className="hairline" />
    </div>
  );
}

function SupportList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-[15.5px] leading-[1.6] text-ink-800">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-[13px] text-moss-700 tabular-nums pt-1 shrink-0">
            0{i + 1}
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
