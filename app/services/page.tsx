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

const services = [
  {
    title: "Admissions Counselling",
    paragraphs: [
      "The decisions that shape an application happen long before the forms are filled. Which universities belong on the list and which are there out of habit. How to read what a programme is actually looking for. When to be ambitious and when to be practical.",
      "We work through all of this with students and families. University selection, application positioning, timeline planning, and the ongoing back-and-forth that keeps everything on track as deadlines approach. This is not a service where we hand over a list and step back. We stay involved in the details because that is where applications are won or lost.",
    ],
  },
  {
    title: "Profile Building",
    paragraphs: [
      "A strong profile is not a stack of extracurriculars assembled in the final year. It is something that develops over time when a student is engaged in areas that genuinely matter to them.",
      "We help students identify those areas early. Not by handing them a list of impressive-sounding activities, but by working through what they care about and where they can contribute meaningfully. The goal is a profile that admissions committees can read as coherent and credible, not one that looks assembled for the sake of an application.",
      "This service works best when families engage with us well before application season. The earlier the conversation starts, the more room there is to build something real.",
    ],
  },
  {
    title: "Essays and Applications",
    paragraphs: [
      "Most students know the essay matters. Fewer understand what makes one land. It is rarely the most dramatic story or the most polished prose. It is clarity of thought. A sense that the person writing has reflected on something honestly and can communicate it without reaching for effect.",
      "We spend significant time on this part of the process. We help students identify what is worth writing about, develop their ideas through structured conversation, and revise with precision until the essay does what it needs to do. Drafts go through multiple rounds. Feedback is direct. We do not sign off on work that reads like it could belong to anyone.",
      "The same attention applies to the rest of the application. Supplemental questions, activity descriptions, additional information sections. Every piece of writing that carries your name gets treated with the same seriousness.",
    ],
  },
  {
    title: "Career Labs",
    paragraphs: [
      "One of the least discussed problems in admissions is that many students are choosing universities without a clear sense of direction. They pick a major because it sounds right or because someone suggested it. The application moves forward, but the thinking behind it stays thin.",
      "Our Career Labs exist to address that gap. These are structured exploration sessions designed to help students examine their interests, understand how industries and academic fields connect, and make decisions that hold up beyond the application. We are not career counsellors in the traditional sense. We are not placing students in jobs. What we are doing is making sure the choices they make about their education are grounded in something more than assumption.",
      "For many families, this is where the process should begin.",
    ],
  },
];

export default function ServicesPage() {
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
                  Our Services
                </p>
              </div>
            </div>
            <div className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 lg:block">
              Premium Academic Guidance
            </div>
          </div>

          <div className="py-16 lg:py-24">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d2b48c]">
                Our Services
              </p>
              <h1
                className={`${displayFont.className} max-w-4xl text-5xl font-semibold leading-[0.95] text-[#f6f0e8] sm:text-6xl lg:text-7xl`}
              >
                Our Services
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78 sm:text-xl">
                Admissions is not one problem. It is several, and they overlap. Choosing where to apply, building a profile that holds up under scrutiny, writing essays that say something real, figuring out what you actually want to study and why. Each of these demands a different kind of attention. We treat them that way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`rounded-[2rem] border p-8 shadow-[0_18px_60px_rgba(42,36,32,0.06)] sm:p-10 ${
                  index % 2 === 0
                    ? "border-[#002147]/10 bg-white"
                    : "border-[#d2b48c]/25 bg-[#f8f4ee]"
                }`}
              >
                <div className="max-w-4xl">
                  <h2
                    className={`${displayFont.className} text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
                  >
                    {service.title}
                  </h2>
                  <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B6258]">
                    {service.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#002147] text-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 sm:p-10">
            <div className="max-w-4xl">
              <p className="text-lg leading-8 text-[#f6f0e8]">
                Every service we offer connects back to the same principle. Do the
                thinking first. Then do the work well. If you want to understand how
                any of this applies to your situation specifically, the best starting
                point is a conversation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
