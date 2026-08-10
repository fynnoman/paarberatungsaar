import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum · Julia & Tom Hecken",
};

export default function ImpressumPage() {
  return (
    <main className="relative bg-paper-100">
      <PageHeader eyebrow="Rechtliches" title={<>Impressum.</>} />

      <article className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[720px] px-6 lg:px-10 space-y-14">
          <Section title="Diensteanbieter">
            <address className="not-italic text-[16px] leading-[1.75] text-ink-800">
              Thomas Michael Hecken &amp; Julia Kurz
              <br />
              Julia &amp; Tom Paarberatung
              <br />
              Schulstraße 28
              <br />
              66125 Saarbrücken, OT Jägersfreude
              <br />
              Deutschland
            </address>
          </Section>

          <div className="hairline" />

          <Section title="Kontaktmöglichkeiten">
            <div className="space-y-3 text-[15px] text-ink-700">
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
              <div>
                <span className="eyebrow mr-3">WhatsApp</span>
                <a
                  href="https://wa.me/491726344734"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-ink-900"
                >
                  wa.me/491726344734
                </a>
              </div>
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
