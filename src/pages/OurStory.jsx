import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { assets } from "../assets/assets"

const OurStory = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />

      {/* HERO – DARK */}
      <section className="pt-32 pb-24 px-6 lg:px-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-slate-300 text-lg leading-8">
            Every great company starts with a clear purpose.  
            Ours began with a belief that technology should simplify,
            empower, and scale businesses — not complicate them.
          </p>
        </div>
      </section>

      {/* STORY CONTENT */}
      <section className="py-20 px-6 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              How It All Started
            </h2>
            <p className="text-slate-600 leading-8 mb-5">
              Our journey started with a small team of problem-solvers
              who were passionate about building meaningful digital
              solutions. We noticed that many organizations struggled
              not because of lack of ideas, but because of unclear
              strategy and fragmented execution.
            </p>
            <p className="text-slate-600 leading-8">
              That insight shaped our approach — combining strategy,
              design, and technology to deliver solutions that are
              practical, scalable, and future-ready.
            </p>
          </div>

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={assets.aboutStory || assets.knowledge1}
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* VALUES – DARK */}
      <section className="py-20 px-6 lg:px-32 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-white">
            What Drives Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clarity",
                desc: "We simplify complexity and bring clarity to every decision."
              },
              {
                title: "Impact",
                desc: "Our focus is on real-world outcomes, not just deliverables."
              },
              {
                title: "Growth",
                desc: "We grow with our clients through long-term partnerships."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#0f172a]
                  border border-slate-700
                  rounded-2xl p-6
                  hover:border-cyan-400
                  transition
                "
              >
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="py-20 px-6 lg:px-32 bg-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Looking Ahead
          </h2>
          <p className="text-slate-600 text-lg leading-8">
            As technology evolves, so do we. Our mission remains the same —
            to help businesses adapt, innovate, and lead confidently
            in a digital-first world.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OurStory
