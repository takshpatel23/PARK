import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { assets, mobileFeatures, mobileUseCases, mobileServices } from '../assets/assets'

const Mobile = () => {
  return (
    <div className="bg-[#E5F4FF] text-[#003A66]">
  <div className="relative z-50">
        <Header />
      </div>
      {/* HERO – Overlapping Cards with Floating Circles */}
      <section className="pt-36 pb-28 px-6 lg:px-32 bg-gradient-to-br from-[#001D33] to-[#001424] relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mobile & Wearables
            </h1>
            <p className="text-[#CCE9FF] text-lg mb-8">
              Build intelligent mobile applications and wearable experiences
              that seamlessly connect users with technology.
            </p>

            <a
              href="#services"
              className="inline-block bg-[#0091FF] hover:bg-[#0074CC] text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Build Smart Experiences
            </a>
          </div>

          <div className="relative flex justify-center items-center">
           
            <div className=" rounded-2xl p-4 shadow-lg">
              <img
                src={assets.mobile1}
                alt="Mobile Devices"
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES – Slide-Up Cards */}
      <section className="py-24 px-6 bg-gray-100 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 text-[#003A66]">
            Our Mobile & Wearables Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {mobileFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#99D3FF] rounded-2xl p-6 transform transition hover:-translate-y-3 hover:shadow-2xl"
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

      {/* USE CASES – Number Badge Carousel */}
      <section className="py-24 px-6 lg:px-32 bg-[#001D33]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-20">
            Mobile & Wearables Use-Cases
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {mobileUseCases.map((item, index) => (
              <div
                key={index}
                className= "flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0091FF] text-white font-bold text-xl flex items-center justify-center">
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

      {/* SERVICES – Diagonal Staggered Cards */}
      <section id="services" className="py-24 bg-gray-100 px-6 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#003A66]">
            Mobile & Wearables Services
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {mobileServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl border border-[#CCE9FF] hover:shadow-xl transform transition ${
                  index % 2 === 0 ? '-translate-y-4' : 'translate-y-4'
                }`}
              >
                <h3 className="text-xl font-semibold mb-4 text-[#005799]">
                  {service.title}
                </h3>
                <p className="text-[#003A66]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Mobile
