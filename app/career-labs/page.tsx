import type { Metadata } from "next";
import StructuredData from "../components/StructuredData";
import { displayFont, bodyFont } from "../lib/fonts";
import { buildBreadcrumbSchema, BASE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Career Labs Explore | Free subject exploration | Edussentials",
  description: "Explore academic disciplines through structured investigations. Begin with a free Economics and Finance Lab on pricing, cash flow and financial viability.",
  alternates: { canonical: `${BASE_URL}/career-labs` },
};
const workbook = "/career-labs/explore/economics";
const button = "inline-flex items-center justify-center rounded-lg bg-[#002147] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#16416a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E6F6D]";

export default function CareerLabsPage() {
  return <>
    <StructuredData data={buildBreadcrumbSchema([{ name: "Career Labs Explore", path: "/career-labs" }])} />
    <main className={`${bodyFont.className} bg-[#f6f0e8] text-[#2A2420]`}>
      <section className="bg-[#002147] text-[#f6f0e8]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d2b48c]">Career Labs Explore</p>
            <h1 className={`${displayFont.className} mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] sm:text-6xl`}>Understand a discipline<br />before choosing a direction.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/80">An interest in a subject is a starting point. Career Labs Explore offers the opportunity to examine it more closely, through the questions it investigates and the methods it uses. Each Lab combines an introduction to the discipline with a guided case, helping you make academic choices with a clearer understanding of what the work involves.</p>
            <a href="#available-lab" className="mt-8 inline-flex rounded-lg bg-[#d2b48c] px-6 py-3.5 text-sm font-semibold text-[#002147] hover:bg-[#e1c9a9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Explore the available Lab ↓</a>
            <p className="mt-5 text-sm text-white/70">Free access. No account or payment required.</p>
          </div>
          <aside className="self-center border-l-2 border-[#d2b48c] pl-7">
            <p className={`${displayFont.className} text-3xl leading-snug`}>An introduction to academic enquiry</p>
            <p className="mt-5 max-w-sm leading-7 text-white/75">Engaging with a subject means examining evidence and explaining your reasoning. Career Labs creates space for that experience, so you can consider both the appeal of a discipline and the intellectual effort it requires.</p>
          </aside>
        </div>
      </section>
      <section id="available-lab" className="scroll-mt-6 mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1E6F6D]">Available subject</p>
        <div className="mt-5 grid overflow-hidden rounded-2xl border border-[#002147]/15 bg-[#fffdf8] lg:grid-cols-[1.35fr_1fr]">
          <div className="p-7 sm:p-10">
            <h2 className={`${displayFont.className} text-4xl leading-tight text-[#002147] sm:text-5xl`}>Economics &amp; Finance</h2>
            <p className="mt-5 max-w-xl leading-8 text-[#6B6258]">Examine how economic choices interact with financial constraints. This Lab introduces the discipline before asking you to assess a community workshop proposal, weighing participation against financial viability and distinguishing an operating surplus from the cash needed to deliver it.</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-[#002147]">{["Free access", "Guided case investigation", "Self-paced"].map(label => <span key={label} className="rounded-full border border-[#d2b48c] px-3 py-1.5">{label}</span>)}</div>
            {/* Full navigation loads the standalone workbook and its browser saving. */}
            <a className={`${button} mt-8`} href={workbook}>Begin the Economics & Finance Lab →</a>
            <p className="mt-4 text-sm leading-6 text-[#6B6258]">Begin with an introduction to the subject, then proceed through the investigation. Your progress is retained in this browser.</p>
          </div>
          <div className="border-t border-[#002147]/10 bg-[#ede0cc]/55 p-7 sm:p-10 lg:border-l lg:border-t-0">
            <h3 className={`${displayFont.className} text-2xl text-[#002147]`}>About this Lab</h3>
            <dl className="mt-5 space-y-5 text-sm leading-7">
              <div><dt className="font-semibold text-[#002147]">Prior knowledge</dt><dd>No prior study of economics or finance is required. You should be comfortable with percentages and basic arithmetic. The workbook introduces the concepts needed for the case; a calculator is welcome.</dd></div>
              <div><dt className="font-semibold text-[#002147]">Suggested commitment</dt><dd>Allow approximately 3–5 hours for the reading, analysis and written response. Work across several sessions if that gives you more time to consider the material.</dd></div>
              <div><dt className="font-semibold text-[#002147]">Your completed work</dt><dd>A financial comparison and a reasoned recommendation, accompanied by your reflection on the investigation. You can export the complete record.</dd></div>
              <div><dt className="font-semibold text-[#002147]">Feedback</dt><dd>Numerical and fixed-choice answers receive immediate checks. A separate checklist supports review of your written reasoning. Individual mentor feedback is not included.</dd></div>
            </dl>
          </div>
        </div>
      </section>
      <section className="border-y border-[#002147]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-12">
          <h2 className={`${displayFont.className} text-4xl text-[#002147]`}>How the investigation develops</h2>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{[
            ["Establish the context", "Begin with an introduction to the discipline, then examine the brief and the conditions governing the case."],
            ["Analyse the evidence", "Use the supplied material to compare alternatives. Worked examples explain unfamiliar methods before you apply them."],
            ["Develop a recommendation", "Bring your findings into a written argument, making the basis for your decision and its limitations explicit."],
            ["Review your experience", "Consider which aspects of the work sustained your interest and what you would need to investigate further."],
          ].map(([title, text], i) => <li key={title}><span className="text-sm font-semibold text-[#1E6F6D]">{i + 1}</span><h3 className={`${displayFont.className} mt-3 text-2xl text-[#002147]`}>{title}</h3><p className="mt-3 text-sm leading-7 text-[#6B6258]">{text}</p></li>)}</ol>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-2 lg:px-12">
        <div><h2 className={`${displayFont.className} text-3xl text-[#002147]`}>Access and saving your work</h2>
          <p className="mt-4 leading-8 text-[#6B6258]">Answers save in this browser on this device. They are not submitted to Edussentials or synced to another device. Download your work before clearing browser data, using a shared device or switching browsers. Private browsing may not retain it.</p>
          <p className="mt-4 leading-8 text-[#6B6258]">Access is free and requires no registration. The Lab provides a record of your work for personal reflection; it does not issue an automatic certificate.</p>
        </div>
        <div><h2 className={`${displayFont.className} text-3xl text-[#002147]`}>The scope of this introduction</h2>
          <p className="mt-4 leading-8 text-[#6B6258]">The Economics and Finance Lab concentrates on a defined set of decisions within a much wider field. It introduces analytical methods you can explore further, rather than attempting to reproduce a degree programme. Your experience provides material for reflection, not a verdict on career suitability.</p>
          <a className={`${button} mt-6`} href={workbook}>Begin the Economics & Finance Lab →</a>
        </div>
      </section>
    </main>
  </>;
}
