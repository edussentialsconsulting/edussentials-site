import Image from "next/image";
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

const lightLogoPath = "/Edulogo-Light.png";

export default function CareerLabsPage() {
  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>
      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d2b48c]/25 bg-[#f6f0e8]/10 p-2">
                <Image
                  src={lightLogoPath}
                  alt="Edussentials Consulting logo"
                  width={500}
                  height={500}
                  unoptimized
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                  Edussentials Consulting
                </p>
                <p className={`${displayFont.className} mt-1 text-lg font-medium italic text-white/75`}>
                  Career Labs
                </p>
              </div>
            </div>
            <div className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 lg:block">
              Premium Academic Guidance
            </div>
          </div>

          <div className="py-16 lg:py-24">
            <div className="max-w-4xl">
              <h1
                className={`${displayFont.className} max-w-4xl text-5xl font-semibold leading-[0.95] text-[#f6f0e8] sm:text-6xl lg:text-7xl`}
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
              Career Labs is where that question gets taken seriously. It is designed for students in grades 8 through 12, whether they are just beginning to think about direction or already narrowing down and want to be sure.
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
                  For a student who already has a direction in mind, Career Labs tests that interest against reality. For a student who feels genuinely unsure, it provides a structured way to discover what resonates and what doesn't. In both cases, students work through activities tied to actual industries and disciplines. They encounter real problems, realistic scenarios, and the kind of thinking these fields demand. The goal is the same regardless of where the student starts. Enough meaningful contact with a field that they can speak about it with understanding, not just enthusiasm.
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
                  The typical path looks something like this. A student reaches their final two years of school, picks a subject or major based on a mix of parental input, peer influence, and surface-level research, then builds an entire application around that choice. If the foundation is shaky, everything built on top of it is harder to defend.
                </p>
                <p>
                  We created Career Labs because we kept seeing two patterns repeat. Students in their senior years locked into a field they had never actually tested, unable to describe the work beyond a job title. And students a few years younger, paralysed by optionality, unable to commit to a direction because nothing had been made concrete enough to evaluate. Both groups were making decisions on incomplete information. That gap makes applications weaker. More importantly, it leads to choices that are hard to walk back once university begins.
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
              Two ways in, depending on what the student needs.
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
                    This is the deeper format. A mentored, flexible programme that runs over roughly three months and focuses on one field in depth. A dedicated guide works with the student throughout, walking them through each stage, answering questions, and helping them engage with the field in a way that goes well beyond reading about it.
                  </p>
                  <p>
                    The programme includes a learning module designed to help the student build a stronger working foundation in the field. If they later choose to pursue it academically or professionally, they come in with context most applicants do not have.
                  </p>
                  <p>
                    Guided works well for students in grades 10 through 12 who have a strong leaning toward a particular area and want to pressure-test that interest with real substance. It is equally valuable for students at the same stage who have no leaning at all but are willing to invest the time to find one. The key requirement is commitment. This format asks students to show up consistently and do the thinking.
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
                    Explore is a lighter, self-guided format. It is built around short case studies, simulation-style tasks, and structured activities that give students a practical window into a field without the time commitment of the mentored version.
                  </p>
                  <p>
                    It works well for students in grades 8 and 9 who are still years away from applications but benefit from starting the conversation early. It is also a strong fit for older students in grades 10 through 12 who want to survey a few areas before committing to the depth of Guided. The format is still rigorous in design. The difference is pacing, depth, and the level of one-on-one involvement.
                  </p>
                  <p>
                    Explore is not a watered-down version of Guided. It is a different tool for a different stage of readiness.
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
                Whether your child is in grade 8 and just starting to think about what interests them, or in grade 11 and already building a university list without much conviction behind it, Career Labs is worth considering. A conversation with us will help you understand which format fits and when to begin.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C65D3A] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#b65232]"
              >
                Book a consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
