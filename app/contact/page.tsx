import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Edussentials Consulting",
  description: "Book a complimentary 45-minute call with Aniruddha Sapru, founder of Edussentials Consulting. No pitch, no pressure. Just an honest conversation about where you stand.",
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

export default function ContactPage() {
  return (
    <main className={`${bodyFont.className} min-h-screen bg-[#f6f0e8] text-[#2A2420]`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#002147] text-[#f6f0e8]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(210,180,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_left,_rgba(198,93,58,0.14),_transparent_28%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 lg:px-12 lg:py-20">
          <div className="py-16 lg:py-24">
            <div className="max-w-4xl">
              <h1
                className={`${displayFont.className} max-w-4xl text-4xl font-semibold leading-[0.95] text-[#f6f0e8] sm:text-5xl lg:text-6xl xl:text-7xl`}
              >
                Contact
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78 sm:text-xl">
                If you have been reading through the site and thinking this sounds like what you need, the next step is simple. Get in touch and we will take it from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When it makes sense to get in touch */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <h2
              className={`${displayFont.className} text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
            >
              When it makes sense to get in touch
            </h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B6258]">
              <p>
                Some families reach out early because they want to plan well ahead of application season. Others come in when things are already underway and something feels unclear or rushed. Both are good starting points. What matters more than timing is the willingness to engage seriously with the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What the first conversation looks like */}
      <section className="border-b border-[#002147]/10 bg-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-[#d2b48c]/25 bg-[#f8f4ee] p-8 shadow-[0_18px_60px_rgba(42,36,32,0.06)] sm:p-10">
            <div className="max-w-4xl">
              <h2
                className={`${displayFont.className} text-4xl font-medium leading-tight text-[#002147] sm:text-5xl`}
              >
                What the first conversation looks like
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-[#6B6258]">
                <p>
                  The first conversation is informal but focused. We want to understand where the student stands, what kind of support might be useful, and whether there is a natural fit between what you need and how we work.
                </p>
                <p>
                  Sometimes that means talking through admissions planning. Sometimes it means discussing Career Labs or profile building. Sometimes it simply means helping you figure out where to begin. There is no obligation attached to reaching out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing note and contact details */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-lg leading-8 text-[#6B6258]">
              You can book a 45-minute call directly using the link below, or write to us if you would prefer to share context first.
            </p>

            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-12">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
                  Email
                </p>
                <a
                  href="mailto:founder@edussentialsconsulting.com"
                  className="mt-2 text-lg text-[#002147] hover:text-[#C65D3A] transition-colors"
                >
                  founder@edussentialsconsulting.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D3A]">
                  Phone
                </p>
                <a
                  href="tel:+917990082246"
                  className="mt-2 text-lg text-[#002147] hover:text-[#C65D3A] transition-colors"
                >
                  +91 7990082246
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <section className="bg-[#002147] text-[#f6f0e8]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 sm:p-10">
            <div className="max-w-4xl">
              <h2
                className={`${displayFont.className} text-4xl font-medium leading-tight sm:text-5xl`}
              >
                Let&apos;s talk about what&apos;s next.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#f6f0e8]">
                We are here to help you think through the right approach for your situation.
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
