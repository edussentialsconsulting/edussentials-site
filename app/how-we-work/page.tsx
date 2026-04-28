import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const bodyFont = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "How We Work | Edussentials Consulting",
  description:
    "A grade-by-grade view of how Edussentials engages with students from Grade 9 through application submission and beyond. Built around the timeline families are actually living through.",
};

export default function HowWeWorkPage() {
  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>
      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12 lg:py-20">
          <div className="py-16 lg:py-24">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                How We Work
              </p>
              <h1
                className={`${displayFont.className} max-w-4xl text-4xl font-semibold leading-[0.95] text-[#f6f0e8] sm:text-5xl lg:text-6xl xl:text-7xl`}
              >
                A process built around the timeline families are actually living through.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78 sm:text-xl">
                Most admissions support is sold as a single product. We think about it differently. The work that matters in Grade 9 is not the work that matters in Grade 12, and pretending otherwise is how families end up paying for activity rather than direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#002147]/10 bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              The premise
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              Decisions made earlier shape what later decisions are even possible.
            </h2>
          </div>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[#6B6258]">
            <p>
              Stream selection at the end of Grade 10 determines access to entire categories of university programmes. By Grade 11, students applying internationally are expected to have demonstrated sustained engagement outside the classroom. By Grade 12, the process is execution-heavy with limited room for correction.
            </p>
            <p>
              That is the actual structure of the journey. It is not a single application sprint at the end of school. It is a sequence of choices made over four years, where the quality of one choice shapes the range of options available for the next.
            </p>
            <p>
              How we work follows that structure. Different stages call for different work. We try to do the work that is right for the stage the student is actually in, rather than running every family through the same template.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              Grade 9 to Grade 10
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              Foundations.
            </h2>
          </div>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[#6B6258]">
            <p>
              The early years of secondary school are not when applications are filed. They are when the foundation is laid for everything that follows. The work at this stage is exploratory, and that is the point.
            </p>
            <p>
              We help students examine their interests honestly, understand how academic fields connect to industries and careers, and start identifying areas where they might want to engage more deeply. The aim is not to lock in a decision about a future career. It is to make sure that by the time real decisions arrive, the student has thought about them rather than guessed.
            </p>
            <p>
              For families engaging with us at this stage, the work usually includes early career conversations, structured exploration of fields the student finds interesting, and guidance on how to use Grade 9 and 10 productively without overloading.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#002147]/10 bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              Grade 11
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              The serious work begins.
            </h2>
          </div>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[#6B6258]">
            <p>
              Grade 11 is where admissions work shifts from preparation to execution. Subject combinations get finalised. Profile-building moves from exploratory to deliberate. Standardised testing enters the picture for international applicants. University lists start taking shape.
            </p>
            <p>
              We work closely with students through this year because it is where most of the durable thinking gets done. A good Grade 11 makes Grade 12 manageable. A weak Grade 11 makes Grade 12 frantic.
            </p>
            <p>
              The work at this stage typically includes building a coherent profile around genuine areas of engagement, planning the test calendar so it lines up with application deadlines, beginning university research seriously, and having the early conversations about academic direction that make essay writing easier when it begins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              Grade 12
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              Execution.
            </h2>
          </div>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[#6B6258]">
            <p>
              Grade 12 is when the application takes its final shape. By this point, the foundational thinking should already be done. The work now is translating that thinking into applications that hold up under scrutiny.
            </p>
            <p>
              This is where essays go through multiple rounds. Where supplemental questions get the same attention as primary ones. Where activity descriptions get rewritten until they say something specific. Where the university list gets pressure-tested against fit, fees, and feasibility. Where deadlines get tracked rigorously, not approximately.
            </p>
            <p>
              We stay close to the work through this entire phase. There are no handoffs to junior associates. The same person who has known the student through Grade 11 stays involved through every essay revision and every application submitted. That continuity matters more in Grade 12 than at any other point in the process.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#002147]/10 bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              After the application
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              Closing the loop.
            </h2>
          </div>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[#6B6258]">
            <p>
              The work does not end when applications are submitted. Decisions arrive over weeks or months. Financial aid offers need to be evaluated against full cost of attendance. Multiple admits need to be compared on dimensions that matter for the specific student, not on rankings.
            </p>
            <p>
              We stay involved through this phase as well. Conversations about which offer makes sense, how to weigh aid against fit, how to think about deferrals, how to handle waitlists. These are decisions that shape the next four years, and they deserve the same care as the application itself.
            </p>
            <p>
              For students applying internationally, we also coordinate with our visa counselling partner so the post-admit logistics do not become their own crisis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#002147] text-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 sm:p-10">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                Where you are now
              </p>
              <h2
                className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight sm:text-5xl`}
              >
                The right starting point depends on where you are in the journey.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#f6f0e8]">
                Some families come to us in Grade 9 because they want to start early. Others come in the middle of Grade 12 because something feels off. Both are useful starting points. The first conversation is where we figure out which kind of engagement makes sense for your situation.
              </p>
              <a
                href="https://cal.com/aniruddha-sapru-6kmawu/initial-call-with-founder"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#b65232]"
              >
                Book a 45-minute call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
