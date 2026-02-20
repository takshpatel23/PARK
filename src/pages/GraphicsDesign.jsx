import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  assets,
  graphicsFeatures,
  graphicsServices,
  graphicsUseCases,
} from "../assets/assets";

const GraphicsDesign = () => {
  return (
    <div className="bg-[#E5F4FF] text-[#003A66]">
      <div className="relative z-50">
        <Header />
      </div>

      {/* HERO – CREATIVE SPLIT */}
      <section className="pt-36 pb-28 px-6 lg:px-32 bg-gradient-to-br from-[#001D33] to-[#001424]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#66BDFF] uppercase tracking-widest font-semibold">
              Creative Studio
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Graphic Design <br /> That Speaks Visually
            </h1>

            <p className="text-[#CCE9FF] text-lg leading-8 mb-10">
              We design visuals that don’t just look good — they communicate,
              connect emotionally, and elevate brand identity.
            </p>

            <a
              href="#services"
              className="inline-block bg-[#0091FF] hover:bg-[#0074CC] text-white px-8 py-3 rounded-full font-semibold transition"
            >
              View Our Work
            </a>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-full h-full rounded-[2rem]" />
            <img
              src={assets.graphics1}
              alt="Creative Design"
              className="relative rounded-[2rem] shadow-2xl h-90"
            />
          </div>
        </div>
      </section>

      {/* FEATURES – CREATIVE BLOCKS */}
      <section className="py-24 px-6 bg-gray-100 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Creative Design Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {graphicsFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="h-12 w-12 mb-6 rounded-xl bg-[#0091FF]/10 text-[#0091FF] flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold mb-3">
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

      {/* USE CASES – TIMELINE STYLE */}
      <section className="py-24 px-6 lg:px-32 bg-[#001D33]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-20">
            Where Our Designs Shine
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {graphicsUseCases.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="text-[#66BDFF] font-extrabold text-4xl">
                  0{index + 1 }
                </div>

                <div className="bg-[#001424] border border-[#003A66] rounded-2xl p-8 hover:border-[#0091FF] transition w-full">
                  <h3 className="text-xl font-semibold text-[#E5F4FF] mb-3">
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

      {/* SERVICES – PORTFOLIO STYLE */}
      <section
        id="services"
        className="py-24 px-6 lg:px-32 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Graphic Design Services
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {graphicsServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-10 hover:shadow-xl transition"
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

export default GraphicsDesign;
