import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { assets, pmResponsibilities } from "../assets/assets"

const ProductManagement_Beginners = () => {
  return (
    <div className="bg-slate-100 text-slate-800">
      <Header />

      {/* HERO – DARK */}
      <section className="pt-36 pb-28 px-6 lg:px-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-sky-500/20 text-sky-300 text-sm font-semibold">
              Beginner Friendly
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Product Management
              <span className="text-sky-400"> Basics</span>
            </h1>

            <p className="text-slate-300 text-lg leading-8 mb-8">
              Learn how successful products are built by understanding users,
              priorities, and real-world execution.
            </p>

            <button className="bg-sky-500 hover:bg-sky-600 px-8 py-3 rounded-xl font-semibold transition">
              Start Learning
            </button>
          </div>

          <img
            src={assets.Beginners}
            alt="PM"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* WHAT IS PM – LIGHT */}
      <section className="py-24 px-6 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src={assets.management}
            alt="What is PM"
            className="rounded-3xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              What is Product Management?
            </h2>
            <p className="text-slate-600 leading-8">
              Product Management focuses on deciding what to build, why it
              matters, and how it creates value for users and businesses.
            </p>
            <p className="mt-4 text-slate-600 leading-8">
              A Product Manager connects business goals with user needs and
              engineering execution.
            </p>
          </div>
        </div>
      </section>
       {/* SKILLS – DARK */}
      <section className="py-24 px-6 lg:px-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Skills You Need
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-slate-800 rounded-3xl p-10 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-sky-400">
                Soft Skills
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>✔ Communication</li>
                <li>✔ Problem solving</li>
                <li>✔ Decision making</li>
                <li>✔ Leadership</li>
                <li>✔ Stakeholder management</li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-3xl p-10 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-sky-400">
                Hard Skills
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>✔ Agile & Scrum</li>
                <li>✔ User stories</li>
                <li>✔ Product metrics</li>
                <li>✔ Wireframing</li>
                <li>✔ Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* RESPONSIBILITIES – SOFT DARK */}
      <section className="py-24 px-6 lg:px-32 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
            Core Responsibilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {pmResponsibilities.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-8 shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-sky-600">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CAREER PATH – LIGHT */}
      {/* <section className="py-24 px-6 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-slate-900">
            Career Path
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Associate PM",
              "Product Manager",
              "Senior PM",
              "Head of Product"
            ].map((role, index) => (
              <div
                key={index}
                className="px-8 py-4 rounded-full bg-sky-50 text-sky-700 font-semibold border border-sky-200"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}

export default ProductManagement_Beginners
