import { exploreSubjects } from "../lib/explore";
import type { Metadata } from "next";
import StructuredData from "../components/StructuredData";
import { displayFont, bodyFont } from "../lib/fonts";
import { buildBreadcrumbSchema, BASE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Career Labs Explore | Free subject exploration | Edussentials",
  description: "Explore academic disciplines through structured investigations. Work through a free case in economics and finance, law, computing, behavioural science, engineering or architecture.",
  alternates: { canonical: `${BASE_URL}/career-labs` },
};
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
            <a href="#disciplines" className="mt-8 inline-flex rounded-lg bg-[#d2b48c] px-6 py-3.5 text-sm font-semibold text-[#002147] hover:bg-[#e1c9a9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Choose a discipline ↓</a>
            <p className="mt-5 text-sm text-white/70">Free access. No account or payment required.</p>
          </div>
          <aside className="self-center border-l-2 border-[#d2b48c] pl-7">
            <p className={`${displayFont.className} text-3xl leading-snug`}>An introduction to academic enquiry</p>
            <p className="mt-5 max-w-sm leading-7 text-white/75">Engaging with a subject means examining evidence and explaining your reasoning. Career Labs creates space for that experience, so you can consider both the appeal of a discipline and the intellectual effort it requires.</p>
          </aside>
        </div>
      </section>
      <section id="disciplines" className="scroll-mt-6 mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
        <h2 className={`${displayFont.className} text-4xl text-[#002147]`}>Where would you like to begin?</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {exploreSubjects.map(subject => <article key={subject.slug} className="flex flex-col rounded-2xl border border-[#002147]/15 bg-[#fffdf8] p-7">
            <h3 className={`${displayFont.className} text-3xl text-[#002147]`}>{subject.name}</h3>
            <p className="mt-4 font-semibold">{subject.caseTitle}</p>
            <p className="mt-2 mb-6 leading-7 text-[#6B6258]">{subject.description}</p>
            <a className={`${button} mt-auto self-start`} href={`/career-labs/explore/${subject.slug}`} aria-label={`Open ${subject.name} workbook`}>Open workbook →</a>
          </article>)}
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
          <p className="mt-4 leading-8 text-[#6B6258]">Each case samples a particular kind of work. Use your completed investigation to identify what held your attention, what challenged you and which questions you would like to pursue in the discipline.</p>
          <a className={`${button} mt-6`} href="#disciplines">Choose a discipline ↑</a>
        </div>
      </section>
    </main>
  </>;
}
