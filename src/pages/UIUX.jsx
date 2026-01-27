import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { assets, uiuxFeatures, uiuxServices, uiuxUseCases } from '../assets/assets'

const UIUX = () => {
  return (
    <div className="bg-[#E5F4FF] text-[#003A66]">
      <Header />

      {/* HERO – Dark Gradient */}
      <section className="pt-36 pb-28 px-6 lg:px-32 bg-gradient-to-br  from-[#001D33] to-[#001424]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 mt items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#E5F4FF] mb-6">
              UI / UX Design
            </h1>
            <p className="text-[#CCE9FF] text-lg mb-8">
              Design intuitive, engaging, and user-centric experiences
              that bring clarity and comfort to users.
            </p>
            <a
              href="#services"
              className="inline-block bg-[#0091FF] hover:bg-[#0074CC] text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Design Better Experiences
            </a>
          </div>

          <div className="h-72 md:h-96 mt-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
            <img
              src={assets.uiux1}
              alt="UI UX Design"
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FEATURES – Rotated Cards */}
      <section className="py-24 px-6 bg-gray-100 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16">Our UI / UX Approach</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {uiuxFeatures.map((item, index) => (
              <div
                key={index}
                className={`bg-white border border-[#99D3FF] rounded-2xl p-6 transform transition hover:scale-105 ${
                  index % 2 === 0 ? 'rotate-1' : '-rotate-1'
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

      {/* USE CASES – Alternating Timeline */}
      <section className="py-24 px-6 lg:px-32 bg-[#001D33]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#E5F4FF] mb-20">
            UI / UX Use-Cases
          </h2>

          <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
            {uiuxUseCases.map((item, index) => (
              <div
                key={index}
               className={`bg-[#001D33] p-8 rounded-2xl  hover:shadow-xl transform transition ${
                  index % 2 === 0 ? '-translate-y-4' : 'translate-y-4'
                }`}
              >
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-[#0091FF] text-white flex items-center justify-center font-bold">
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
          <h2 className="text-3xl font-bold text-center mb-16">UI / UX Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {uiuxServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-10 hover:shadow-2xl transition relative overflow-hidden"
              >
                {/* Floating pulse circle */}
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

export default UIUX
