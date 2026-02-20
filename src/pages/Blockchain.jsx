import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  assets,
  blockchainUseCases,
  blockchainFeatures,
  blockchainServices,
} from "../assets/assets";

const Blockchain = () => {
  return (
    <div className="bg-[#E5F4FF] text-[#003A66]">
      <div className="relative z-50">
        <Header />
      </div>

      {/* HERO */}
      <section className="pt-36 pb-28 px-6 lg:px-32 bg-gradient-to-br from-[#001D33] to-[#001424]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-[#0091FF]/20 text-[#66BDFF] text-sm">
              Blockchain • Big Data • Analytics
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-[#E5F4FF] leading-tight mb-6">
              Enterprise-Grade Blockchain & Data Solutions
            </h1>

            <p className="text-[#CCE9FF] text-lg mb-10">
              Secure decentralized platforms and advanced analytics that help
              organizations scale faster, smarter, and safer.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#0091FF] hover:bg-[#0074CC] text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Get Started →
            </a>
          </div>

          <div className="relative grid grid-cols-2 gap-6">
            <div className=" rounded-2xl p-4">
              <img src={assets.block1} alt="" className="rounded-xl" />
            </div>
            <div className=" rounded-2xl p-4">
              <img src={assets.block2} alt="" className="rounded-xl" />
            </div>
            <div className="col-span-2  rounded-2xl p-4">
              <img src={assets.block3} alt="" className="rounded-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 px-6 bg-gray-100 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            Our Strategic Approach
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {blockchainFeatures.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-6 border border-[#CCE9FF] hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-[#0091FF] text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-[#005799]">
                  {item.title}
                </h3>
                <p className="text-[#003A66] text-sm leading-6">
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
            Industry Use Cases
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blockchainUseCases.map((item, index) => (
              <div
                key={index}
                className="group bg-[#001424] rounded-2xl p-6 border border-[#003A66] hover:border-[#0091FF] transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#66BDFF] group-hover:text-[#0091FF]">
                  {item.title}
                </h3>
                <p className="text-[#CCE9FF] text-sm leading-6">
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
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {blockchainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-l-4 border-[#0091FF] hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#005799]">
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

export default Blockchain;
