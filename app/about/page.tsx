import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Edussentials Consulting",
  description: "Edussentials Consulting was founded by Aniruddha Sapru after years of advisory work at The Red Pen, Collegepond, The Right Coll, and Eduabroad. Built to optimise for outcomes, one student at a time.",
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

export default function AboutPage() {
  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>
      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                About Edussentials
              </p>
              <h1
                className={`${displayFont.className} max-w-4xl text-4xl font-semibold leading-[0.95] text-[#f6f0e8] sm:text-5xl lg:text-6xl xl:text-7xl`}
              >
                Built on a simple frustration.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78 sm:text-xl">
                Edussentials exists because too much of admissions consulting runs on autopilot. Students get shuffled through systems. Families get reassured instead of informed. Applications get polished on the surface but never questioned underneath.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/66">
                We thought there was room for something more deliberate. A consultancy that treats every student&apos;s application as a problem worth thinking through, not a template worth filling in. One that values the quality of the work over the number of students it can handle in a cycle.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/66">
                That&apos;s what Edussentials was built to be. Not the biggest. Not the loudest. Just careful, honest, and good at what it does.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:self-center">
              <div className="mx-auto flex min-h-[15rem] max-w-md flex-col justify-center space-y-5 text-center">
                <p className={`${displayFont.className} text-3xl font-medium leading-tight text-[#f6f0e8]`}>
                  Careful, honest, and good at what it does.
                </p>
                <p className="text-base leading-8 text-white/72">
                  A focused consultancy built for students and families who want the work taken seriously.
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
              About the founder
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              Aniruddha Sapru
            </h2>
            <p className="mt-2 text-base font-semibold uppercase tracking-[0.18em] text-[#d2b48c]">
              Founder and Principal Counsellor
            </p>
          </div>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[#6B6258]">
            <p>
              Aniruddha founded Edussentials after several years of working with families navigating the global admissions process at four of India&apos;s established advisory firms: The Red Pen, Collegepond, The Right Coll, and Eduabroad (Dr. Pratibha Jain&apos;s practice).
            </p>
            <p>
              He holds a postgraduate degree from the Indian Institute of Management, Indore.
            </p>
            <p>
              The premise behind Edussentials is straightforward. Most admissions support in India is built to optimise for volume. Edussentials was built to optimise for outcomes, one student at a time. That choice runs through everything the firm does, from how engagements are scoped to how essays are reviewed.
            </p>
            <p>
              Every student who works with Edussentials gets the founder&apos;s direct attention. No handoffs, no junior associates, no recycled templates.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#002147]/10 bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              Two commitments
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              What this consultancy is really about.
            </h2>
          </div>

          <div className="mt-12 max-w-4xl space-y-6 text-lg leading-8 text-[#6B6258]">
            <p>Two things sit at the centre of everything we do.</p>
            <p>
              The first is honest guidance. We will tell a student when their list needs rethinking. We will flag when an essay isn&apos;t working. We will have the conversations that are uncomfortable but necessary, because that is what produces better outcomes than polite encouragement ever could.
            </p>
            <p>
              The second is strong execution. Ideas without follow-through don&apos;t mean much in admissions. Deadlines are real. Details matter. We stay close to the work, and we hold ourselves to the same standard we ask of our students.
            </p>
            <p>Everything else at Edussentials follows from those two commitments.</p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
              Working at our size
            </p>
            <h2
              className={`${displayFont.className} mt-4 text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              Boutique is not a buzzword here.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#6B6258]">
            <p>
              There is a meaningful difference between a consultancy that works with hundreds of students and one that works with a few. It shows up in how well someone knows your application. It shows up in how quickly problems get caught. It shows up in whether your advisor has the bandwidth to think carefully about your profile or is stretched across too many others to notice what&apos;s missing.
            </p>
            <p>
              We keep our numbers small on purpose. Not because exclusivity is the point, but because the work demands it. Admissions consulting done well is labour-intensive. It requires attention, iteration, and the willingness to redo things that aren&apos;t right. That&apos;s difficult to deliver at scale, so we don&apos;t try.
            </p>
            <p>
              What we offer instead is a working relationship where nothing falls through the cracks. Where feedback is specific, not generic. Where someone is paying close attention.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#002147] text-[#f6f0e8]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 lg:col-span-2">
            <div className="mx-auto flex min-h-[18rem] max-w-4xl flex-col items-center justify-center text-center">
              <h2 className={`${displayFont.className} text-4xl font-medium leading-tight sm:text-5xl`}>
                This is the consultancy we wanted to build.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#f6f0e8]">
                Edussentials is not trying to be everything to everyone. It is a small, focused practice built around doing this work properly. If that sounds like what you&apos;ve been looking for, we should talk.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
