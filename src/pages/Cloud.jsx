import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  assets,
  cloudFeatures,
  cloudServices,
  cloudUseCases,
} from "../assets/assets";

const Cloud = () => {
  return (
    <div className="bg-[#E5F4FF] text-[#003A66]">
      <Header />

      {/* HERO */}
      <section className="pt-36 pb-28 px-6 lg:px-32 bg-gradient-to-r from-[#001D33] to-[#001424]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-5 px-4 py-1 rounded-full bg-[#0091FF]/20 text-[#66BDFF] text-sm">
              Cloud Infrastructure & DevOps
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#E5F4FF] mb-6 leading-tight">
              Modern Cloud Computing Services
            </h1>

            <p className="text-[#CCE9FF] text-lg mb-10">
              Design, deploy, and manage secure cloud platforms built for
              scalability, performance, and reliability.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#0091FF] hover:bg-[#0074CC] text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              View Cloud Solutions →
            </a>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#0091FF]/20 rounded-3xl blur-3xl" />
            <div className="">
              <img
                src={assets.cloud1}
                alt="Cloud Services"
                className="rounded-2xl w-full h-full "
              />
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 px-6 bg-gray-100 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            How We Build Cloud Systems
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {cloudFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#CCE9FF] hover:shadow-lg transition"
              >
                <div className="w-10 h-10 mb-4 rounded-lg bg-[#0091FF]/20 text-[#0091FF] flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h3 className="text-lg font-semibold mb-2 text-[#005799]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#003A66] leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6 lg:px-32 bg-[#001D33]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#E5F4FF] mb-16">
            Cloud Use Cases
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudUseCases.map((item, index) => (
              <div
                key={index}
                className="bg-[#001424] rounded-2xl p-6 border border-[#003A66] hover:bg-[#00284A] transition"
              >
                <h3 className="text-lg font-semibold mb-3 text-[#66BDFF]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#CCE9FF] leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-gray-100 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Cloud Offerings
          </h2>

          <div className="space-y-8">
            {cloudServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-8 border border-[#CCE9FF] hover:shadow-lg transition"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0091FF]/20 text-[#0091FF] flex items-center justify-center font-bold text-xl">
                  ☁️
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#005799]">
                    {service.title}
                  </h3>
                  <p className="text-[#003A66] leading-7">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cloud;
