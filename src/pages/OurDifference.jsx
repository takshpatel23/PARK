import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const OurDifference = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />

      {/* HERO – DARK */}
      <section className="pt-32 pb-24 px-6 lg:px-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What Makes Us Different
          </h1>
          <p className="text-slate-300 text-lg leading-8">
            Anyone can deliver services.  
            We focus on delivering **clarity, confidence, and long-term impact**.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 lg:px-32 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            More Than Just a Service Provider
          </h2>
          <p className="text-slate-600 text-lg leading-8">
            We don’t work like traditional vendors.  
            We act as strategic partners who understand your business,
            align with your goals, and build solutions that scale with you.
          </p>
        </div>
      </section>

      {/* DIFFERENCE CARDS – DARK */}
      <section className="py-20 px-6 lg:px-32 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Strategy First",
                desc: "We don’t jump into execution blindly. Every solution starts with clear strategy and purpose."
              },
              {
                title: "Business + Technology",
                desc: "Our approach bridges business thinking with modern technology — not just code, but outcomes."
              },
              {
                title: "User-Centric Mindset",
                desc: "We design and build around real user needs, ensuring adoption and long-term success."
              },
              {
                title: "Scalable Thinking",
                desc: "We plan for growth from day one, so solutions evolve as your business grows."
              },
              {
                title: "Transparent Collaboration",
                desc: "Clear communication, shared ownership, and no black-box processes."
              },
              {
                title: "Long-Term Partnership",
                desc: "We focus on relationships, not one-time projects."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#0f172a]
                  border border-slate-700
                  rounded-2xl p-6
                  hover:border-cyan-400
                  hover:-translate-y-1
                  transition-all
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

      {/* COMPARISON */}
      <section className="py-20 px-6 lg:px-32 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Traditional vs Our Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow">
              <h3 className="text-xl font-semibold mb-4">Traditional Approach</h3>
              <ul className="space-y-3 text-slate-600">
                <li>✖ Feature-focused delivery</li>
                <li>✖ Limited business context</li>
                <li>✖ Short-term execution</li>
                <li>✖ Reactive problem solving</li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 shadow text-white">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Our Approach
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>✔ Outcome-driven solutions</li>
                <li>✔ Deep business understanding</li>
                <li>✔ Long-term scalability</li>
                <li>✔ Proactive decision making</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      {/* <section className="py-20 px-6 lg:px-32 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            The Difference You Can Feel
          </h2>
          <p className="text-slate-600 text-lg leading-8">
            When you work with us, you gain more than a service —
            you gain a team that thinks with you, challenges assumptions,
            and builds solutions that truly matter.
          </p>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}

export default OurDifference
