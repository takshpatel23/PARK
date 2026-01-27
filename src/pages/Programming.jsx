import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { assets, programmingFeatures, programmingServices, programmingUseCases } from '../assets/assets'

const Programming = () => {
  return (
    <div className="bg-[#E5F4FF] text-[#003A66]">
      <Header />

      {/* HERO – Simple Dark */}
      <section className="pt-36 pb-28 px-6 lg:px-32 bg-gradient-to-br from-[#001D33] to-[#001424]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E5F4FF] mb-6">
              Programming & Technology
            </h1>
            <p className="text-[#CCE9FF] text-lg mb-8">
              Build scalable, secure, and high-performance software solutions
              using modern programming technologies.
            </p>

            <a
              href="#services"
              className="inline-block bg-[#0091FF] hover:bg-[#0074CC] text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Build With Code
            </a>
          </div>

          <div className="h-72 md:h-96 mt-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
            <img
              src={assets.programming1}
              alt="Programming"
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURES – Staggered / Rotated */}
      <section className="py-24 px-6 bg-gray-100 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Our Programming Approach</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {programmingFeatures.map((item, index) => (
              <div
                key={index}
                className={`bg-white border border-[#99D3FF] rounded-2xl p-6 transform transition hover:scale-105 ${
                  index % 2 === 0 ? "rotate-1" : "-rotate-1"
                }`}
              >
                <h3 className="text-xl font-semibold mb-3 text-[#005799]">
                  {item.title}
                </h3>
                <p className="text-[#003A66] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES – Timeline Style */}
      <section className="py-24 px-6 lg:px-32 bg-[#001D33]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#E5F4FF] mb-20">
            Programming Use-Cases
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programmingUseCases.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="text-[#66BDFF]  font-extrabold text-4xl">
                  {index + 1}
                </div>

                <div className="bg-[#001424] border border-[#003A66] rounded-2xl p-8 hover:border-[#0091FF] transition w-full">
                  <h3 className="text-xl font-semibold text-[#E5F4FF] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#CCE9FF] leading-7">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES – Modern Card Layout */}
      <section id="services" className="py-24 px-6 lg:px-32 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Programming Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {programmingServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-10 hover:shadow-2xl transition relative overflow-hidden"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#0091FF]/20 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-semibold mb-4 text-[#005799]">
                  {service.title}
                </h3>
                <p className="text-[#003A66] leading-7">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Programming
