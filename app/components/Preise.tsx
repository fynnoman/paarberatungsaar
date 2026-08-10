export default function Preise() {
  return (
    <section
      id="preise"
      className="relative py-28 lg:py-44 bg-paper-50 border-y border-ink-900/8 overflow-hidden"
    >
      <div className="blob w-[500px] h-[500px] bg-oak-100/50 top-40 -left-40" aria-hidden />

      <div className="relative mx-auto max-w-[1360px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[13px] tabular-nums text-moss-600">04</span>
              <span className="w-8 h-px bg-ink-900/20" />
              <span className="eyebrow">Der Wert unserer Arbeit</span>
            </div>
            <h2 className="text-display text-[clamp(2.5rem,6vw,5.5rem)] text-ink-950 leading-[1] balance">
              Klar &amp; transparent —{" "}
              <span className="pull-quote text-moss-600">immer.</span>
            </h2>
          </div>
          <p className="lg:col-span-3 lg:col-start-10 text-[16px] leading-[1.7] text-ink-700 self-end pretty">
            Kein Kleingedrucktes. Auch wenn Sie sich in einer finanziell
            schwierigen Situation befinden — melden Sie sich. Wir finden
            gemeinsam eine Lösung.
          </p>
        </div>

        {/* Price grid */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5">
          <PriceCard
            label="Kennenlernen"
            main="0 €"
            base="20 Minuten"
            more="telefonisch oder per Video"
            hint="Unverbindlich — für den ersten Eindruck."
          />
          <PriceCard
            featured
            label="Einzel · Paarberatung"
            main="150 €"
            base="90 Minuten"
            more="jede weitere Stunde 100 €"
            hint="Vor Ort oder online. Ein oder zwei Berater."
          />
          <PriceCard
            label="Paartherapie · Mediation"
            main="200 €"
            base="120 Minuten"
            more="jede weitere Stunde 100 €"
            hint="Mediator und Co-Mediator bei Bedarf."
          />
        </div>

        {/* Warm invitation */}
        <div className="mt-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-1">
            <div className="pull-quote text-6xl text-moss-500 leading-none">
              ✽
            </div>
          </div>
          <div className="lg:col-span-11">
            <p className="text-[19px] leading-[1.65] text-ink-800 pretty text-display-med max-w-3xl">
              Bitte zögern Sie nicht, uns zu kontaktieren — auch dann, wenn
              die Finanzen gerade eng sind.{" "}
              <span className="italic text-moss-700">
                Für jede Situation lässt sich ein fairer Weg finden.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  featured,
  label,
  main,
  base,
  more,
  hint,
}: {
  featured?: boolean;
  label: string;
  main: string;
  base: string;
  more: string;
  hint: string;
}) {
  return (
    <article
      className={`relative rounded-apple p-8 lg:p-10 border apple-shadow-lift flex flex-col ${
        featured
          ? "bg-moss-700 text-paper-50 border-moss-700 lg:-my-6 apple-shadow-dark"
          : "bg-paper-100 border-ink-900/8 hover:border-moss-500"
      } overflow-hidden`}
    >
      {featured && (
        <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-oak-200/40 blur-3xl pointer-events-none" />
      )}

      <div className="relative">
        <div
          className={`text-[11px] font-medium tracking-[0.16em] uppercase mb-8 ${
            featured ? "text-paper-100/75" : "text-ink-600"
          }`}
        >
          {label}
        </div>

        <div className="mb-8">
          <div
            className={`text-display text-[clamp(3rem,5vw,4.5rem)] leading-none mb-2 ${
              featured ? "text-paper-50" : "text-ink-950"
            }`}
          >
            {main}
          </div>
          <div
            className={`text-[14.5px] tabular-nums ${
              featured ? "text-paper-100/80" : "text-ink-600"
            }`}
          >
            {base}
          </div>
        </div>

        <div
          className={`text-[13.5px] tabular-nums mb-8 pb-8 border-b ${
            featured
              ? "text-paper-100/75 border-paper-100/15"
              : "text-ink-600 border-ink-900/10"
          }`}
        >
          {more}
        </div>

        <p
          className={`text-[14.5px] leading-[1.65] pretty ${
            featured ? "text-paper-100/85" : "text-ink-700"
          }`}
        >
          {hint}
        </p>
      </div>
    </article>
  );
}
