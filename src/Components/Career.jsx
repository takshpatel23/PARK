import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const Career = () => {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 lg:px-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block mb-4 px-5 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold">
            Careers
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Career With Us
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-8">
            We are always looking for curious minds, problem solvers, and
            passionate professionals who want to create meaningful digital
            products and solutions.
          </p>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="py-20 px-6 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Work With Us?
            </h2>

            <p className="text-slate-600 leading-7 mb-4">
              At our company, we believe that great products are built by great
              people. We foster a culture of learning, ownership, and innovation
              where every team member has a voice.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>✔ Collaborative & friendly work culture</li>
              <li>✔ Real-world impactful projects</li>
              <li>✔ Continuous learning & growth</li>
              <li>✔ Flexible and supportive environment</li>
            </ul>
          </div>

          <div className="bg-slate-100 rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Our Work Philosophy
            </h3>
            <p className="text-slate-600 leading-7">
              We focus on clarity over chaos, outcomes over output, and teamwork
              over hierarchy. Your ideas matter, and your growth matters even
              more.
            </p>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="py-20 px-6 lg:px-32 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-white font-bold text-center mb-14">
            Open Positions
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Developer",
                desc: "Work with React, Tailwind and modern UI patterns to build high-quality user interfaces."
              },
              {
                title: "Backend Developer",
                desc: "Design scalable APIs, databases, and server-side logic using modern backend technologies."
              },
              {
                title: "UI / UX Designer",
                desc: "Create intuitive, user-focused designs that enhance experience and usability."
              },
              {
                title: "Product Manager",
                desc: "Define product vision, roadmap, and collaborate with cross-functional teams."
              },
              {
                title: "Digital Marketing Executive",
                desc: "Drive growth through SEO, content, performance marketing and analytics."
              },
              {
                title: "Internships",
                desc: "Learn by working on real projects under guidance of experienced professionals."
              }
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {job.title}
                </h3>
                <p className="text-slate-600 leading-7 mb-6">
                  {job.desc}
                </p>

                <button className="text-cyan-600 font-semibold hover:text-cyan-500 transition">
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-32 bg-gray-100 text-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Didn’t Find a Role That Fits?
          </h2>

          <p className="text-black leading-7 mb-8">
            We’re always open to meeting talented people.  
            Send us your profile and we’ll reach out when there’s a match.
          </p>

          <a
            href="/#Contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-2xl font-semibold transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Career
