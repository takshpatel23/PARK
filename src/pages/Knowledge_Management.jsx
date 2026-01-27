import React from "react"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { assets, knowledgeFeatures, knowledgeServices } from "../assets/assets"

const Knowledge_Management = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />

      {/* HERO */}
      <section className="pt-36 pb-24 px-6 lg:px-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-sm">
              Consulting Services
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Knowledge Management Consulting
            </h1>

            <p className="text-gray-300 text-lg leading-8 mb-8">
              We help organizations capture, organize, share, and leverage
              knowledge to improve decision-making and long-term performance.
            </p>

            <a
              href="#"
              className="inline-block bg-[#0091FF] hover:bg-[#0074CC] px-8 py-3 rounded-2xl font-semibold transition"
            >
              Explore Solutions
            </a>
          </div>

          <img
            src={assets.knowledge1}
            alt="Knowledge Management"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* WHAT IS KM */}
      <section className="py-24 px-6 lg:px-32 bg-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <img
            src={assets.knowledge2}
            alt="Knowledge Strategy"
            className="rounded-3xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6">
              What is Knowledge Management?
            </h2>
            <p className="text-gray-600 leading-8">
              Knowledge Management (KM) is the process of creating, sharing,
              using, and managing an organization’s knowledge and information.
              It ensures the right knowledge reaches the right people at the
              right time.
            </p>
          </div>

        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 px-6 lg:px-32 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Our Knowledge Management Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {knowledgeFeatures.map((item, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-2xl p-8
                  border border-gray-200
                  hover:-translate-y-2 hover:shadow-lg
                  transition
                "
              >
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 lg:px-32 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Knowledge Management Services
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {knowledgeServices.map((service, index) => (
              <div
                key={index}
                className="
                  bg-white rounded-2xl p-8
                  border border-gray-200
                  hover:shadow-lg transition
                "
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Knowledge_Management
