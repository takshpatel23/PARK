import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  assets,
  digitalFeatures,
  digitalServices,
  digitalUseCases,
} from "../assets/assets";

const DigitalMarketing = () => {
  return (
    <div className="bg-[#E5F4FF] text-[#003A66]">
      <div className="relative z-50">
        <Header />
      </div>

      {/* HERO – SPLIT + IMAGE STACK */}
      <section className="pt-36 pb-28 px-6 lg:px-32 bg-gradient-to-br from-[#001D33] to-[#001424]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#66BDFF] font-semibold uppercase tracking-wide">
              Digital Growth
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Smart Digital Marketing <br /> That Converts
            </h1>

            <p className="text-[#CCE9FF] text-lg leading-8 mb-10">
              We help brands attract, engage, and convert customers using
              performance-driven digital strategies backed by analytics.
            </p>

            <a
              href="#services"
              className="inline-block bg-[#0091FF] hover:bg-[#0074CC] text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Get Started
            </a>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl" />
            <img
              src={assets.digital1}
              alt="Digital Marketing"
              className="relative rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* FEATURES – HORIZONTAL FLOW */}
      <section className="py-24 px-6 bg-gray-100 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            How We Drive Digital Success
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {digitalFeatures.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-[#0091FF] text-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-6">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES – MARKETING STYLE */}
      <section className="py-24 px-6 lg:px-32 bg-[#001D33]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Where Digital Marketing Makes Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {digitalUseCases.map((item, index) => (
              <div
                key={index}
                className="bg-[#001424] border border-[#003A66] rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start hover:border-[#0091FF] transition"
              >
                <div className="text-[#66BDFF] font-bold text-2xl">
                  0{index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#E5F4FF] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#CCE9FF] leading-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES – CARD STACK */}
      <section
        id="services"
        className="py-24 px-6 lg:px-32 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Digital Marketing Services
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {digitalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4 text-[#005799]">
                  {service.title}
                </h3>
                <p className="text-[#003A66] leading-7">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
