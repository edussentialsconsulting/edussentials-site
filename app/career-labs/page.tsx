import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Labs | Edussentials Consulting",
  description: "Structured exploration sessions that help students examine their interests, understand how academic fields and industries connect, and make decisions that hold up beyond the application.",
};

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

const bodyFont = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function CareerLabsPage() {
  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>
      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12 lg:py-20">
          <div className="py-16 lg:py-24">
            <div className="max-w-4xl">
              <h1
                className={`${displayFont.className} max-w-4xl text-4xl font-semibold leading-[0.95] text-[#f6f0e8] sm:text-5xl lg:text-6xl xl:text-7xl`}
              >
                Career Labs
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78 sm:text-xl">
                Before the university list, before the essays, before the application even takes shape, there is a question most students skip over too quickly. What am I actually interested in, and what does that look like as a field of study or a career?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#002147]/10 bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl space-y-6 text-left text-lg leading-8 text-[#6B6258]">
            <p>
              Some students have a vague answer. Others have none at all. Both need a better way to figure it out than guesswork and Google searches.
            </p>
            <p>
              Career Labs is where that question gets taken seriously. It is designed for students who want more than surface-level guidance and need a clearer way to understand what a field actually asks of them.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-[#002147]/10 bg-white p-8 shadow-[0_18px_60px_rgba(42,36,32,0.06)] sm:p-10">
            <div className="max-w-4xl">
              <h2
                className={`${displayFont.className} text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
              >
                Structured exploration, not career advice.
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B6258]">
                <p>
                  Career Labs is a focused programme designed to help students engage with real fields of work before making academic decisions around them. It is not a personality quiz. It is not a one-off conversation about strengths and interests. It is applied, structured, and built to produce clarity rather than reassurance.
                </p>
                <p>
                  For a student who already has a direction in mind, Career Labs tests that interest against reality. For a student who feels genuinely unsure, it provides a structured way to discover what resonates and what doesn&apos;t. In both cases, students work through activities tied to actual industries and disciplines. They encounter real problems, realistic scenarios, and the kind of thinking these fields demand. The goal is the same regardless of where the student starts. Enough meaningful contact with a field that they can speak about it with understanding, not just enthusiasm.
                </p>
                <p>
                  Each completed programme comes with a certificate of completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#002147]/10 bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-[#d2b48c]/25 bg-[#f8f4ee] p-8 shadow-[0_18px_60px_rgba(42,36,32,0.06)] sm:p-10">
            <div className="max-w-4xl">
              <h2
                className={`${displayFont.className} text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
              >
                Because most career guidance happens too late and says too little.
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B6258]">
                <p>
                  The typical path often follows the same pattern. A student starts moving toward a subject or field based on a mix of parental input, peer influence, and surface-level research, then builds important academic decisions around that choice before they have properly tested it. If the foundation is shaky, everything built on top of it is harder to defend.
                </p>
                <p>
                  We created Career Labs because we kept seeing the same problem repeat. Some students were building applications around fields they had never actually tested. Others were holding back from choosing anything at all because nothing had been made concrete enough to evaluate. In both cases, the decision-making was thin. That gap makes applications weaker. More importantly, it leads to choices that are much harder to revisit once university begins.
                </p>
                <p>
                  Career Labs exists to close that gap well before the pressure of deadlines takes over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              Two formats, depending on the depth of exploration needed.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#002147]/10 bg-white p-8 shadow-[0_18px_60px_rgba(42,36,32,0.06)] sm:p-10">
              <div className="max-w-4xl">
                <h3
                  className={`${displayFont.className} text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
                >
                  Career Labs Guided
                </h3>
                <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B6258]">
                  <p>
                    Career Labs Guided is a three-month, self-paced but guided programme designed for students who want to explore one field in depth.
                  </p>
                  <p>
                    Students move through structured activities, selected reading material, and sustained exploration that helps them understand how the field works in practice, not just how it appears from the outside. A guide supports the process throughout, answers questions, and helps the student think through what they are learning at each stage.
                  </p>
                  <p>
                    The programme ends with a final project that brings the exploration together. If done well, that project can become a meaningful addition to the student&apos;s resume.
                  </p>
                </div>
              </div>
            </article>

            <article className="rounded-[2rem] border border-[#d2b48c]/25 bg-[#f8f4ee] p-8 shadow-[0_18px_60px_rgba(42,36,32,0.06)] sm:p-10">
              <div className="max-w-4xl">
                <h3
                  className={`${displayFont.className} text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
                >
                  Career Labs Explore
                </h3>
                <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B6258]">
                  <p>
                    Career Labs Explore is a 3–5 hour experience designed to give students a practical window into a specific field.
                  </p>
                  <p>
                    Through a short case, activity set, or simulation-style task, students get a feel for the kind of work, questions, and thinking the field involves. It is a focused first look, useful for students who want to test an area before deciding whether they want to explore it more deeply.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-[#002147]/10 bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-[#002147]/10 bg-white p-8 shadow-[0_18px_60px_rgba(42,36,32,0.06)] sm:p-10">
            <div className="max-w-4xl">
              <h2
                className={`${displayFont.className} text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
              >
                What students actually walk away with.
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B6258]">
                <p>
                  Students who go through Career Labs tend to arrive at the application process with something most others lack. A working understanding of the field they say they want to enter.
                </p>
                <p>
                  That changes the quality of everything that follows. Their university list is more intentional because they understand what programmes in that field actually offer. Their essays carry more weight because they can draw on real engagement instead of surface-level interest. Their interviews feel more grounded because they have something concrete to talk about.
                </p>
                <p>
                  Career Labs does not guarantee a perfect choice. But it does make the choice more informed, more defensible, and far less likely to unravel once the student is already committed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-[#d2b48c]/25 bg-[#f8f4ee] p-8 shadow-[0_18px_60px_rgba(42,36,32,0.06)] sm:p-10">
            <div className="max-w-4xl">
              <h2
                className={`${displayFont.className} text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
              >
                Not a workshop. Not a webinar. Not a quiz.
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B6258]">
                <p>
                  Most career exploration for students falls into one of two categories. There are broad, motivational sessions that ask students what they enjoy and suggest fields based on vague alignment. And there are aptitude-style assessments that sort people into categories without ever letting them test what those categories actually feel like in practice.
                </p>
                <p>
                  Career Labs does neither. It puts students in contact with fields through activities that reflect what working in or studying that field actually involves. The exploration is specific, grounded, and designed to produce understanding rather than excitement. It treats students as capable of doing real intellectual work and gives them the structure to do it.
                </p>
                <p>
                  That is the difference between thinking you might like something and knowing what it actually asks of you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#002147] text-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 sm:p-10">
            <div className="max-w-4xl">
              <h2
                className={`${displayFont.className} text-4xl font-medium leading-tight sm:text-5xl`}
              >
                The best time to explore is before you have to decide.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#f6f0e8]">
                If a student is approaching the stage where subject choices, university preferences, and application narratives are beginning to take shape, Career Labs is worth considering. A conversation with us will help you understand which format fits and when to begin.
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
