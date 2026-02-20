import React from 'react'
import Footer from "../Components/Footer";
import Header from '../Components/Header';
import { assets,AIFeatures, AIServices } from '../assets/assets';

const AI_Machine = () => {
  return (
    <div className="bg-[#E5F4FF] text-[#003A66]">

      <div className="relative z-50">
        <Header />
      </div>

      {/* HERO */}
      <div className="pt-32 pb-24 px-6 lg:px-32 bg-gradient-to-br from-[#001D33] to-[#001424] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI & Machine Learning Consulting
            </h1>
            <p className="text-[#CCE9FF] text-lg mb-8">
              Empower your business with intelligent systems, data-driven
              insights, and scalable AI solutions designed for real-world impact.
            </p>

            <a
              href="/#Contact"
              className="inline-block bg-[#0091FF] hover:bg-[#0074CC] text-white px-7 py-3 rounded-2xl text-lg font-semibold transition"
            >
              Talk to AI Experts
            </a>
          </div>

          <div className="h-72 md:h-96 mt-20 bg-[#003A66]/20 backdrop-blur rounded-2xl flex items-center justify-center">
            <img src={assets.ai2} alt="AI Illustration" className="h-full rounded-2xl object-cover" />
          </div>

        </div>
      </div>

      {/* AI INFO */}
      <div className="py-20 px-6 lg:px-32 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="h-100 bg-gray-100 rounded-2xl flex items-center justify-center">
            <img src={assets.ai1} alt="AI Concept Image" className="h-100 rounded-2xl object-cover" />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#003A66]">
              What is Artificial Intelligence?
            </h2>
            <p className="text-[#003A66] leading-7">
              Artificial Intelligence enables machines to simulate human
              intelligence by learning from data, recognizing patterns, and
              making decisions with minimal human intervention.
            </p>
            <p className="mt-4 text-[#003A66] leading-7">
              Our AI consulting bridges business strategy with advanced machine
              learning models to deliver automation, prediction, and innovation
              at scale.
            </p>
          </div>

        </div>
      </div>

      {/* AI FEATURES */}
      <div className="py-20 px-6 lg:px-32 bg-[#001D33]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl text-[#E5F4FF] font-bold mb-12">
            Our AI & ML Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {AIFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-[#001424] p-6 rounded-xl border border-[#003A66] hover:border-[#0091FF] transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#66BDFF]">{item.title}</h3>
                <p className="text-[#CCE9FF] text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI SERVICES */}
      <div className="py-20 px-6 lg:px-32 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#003A66]">
            AI & Machine Learning Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {AIServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-[#99D3FF] rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-black">
                  {service.title}
                </h3>
                <p className="text-[#003A66]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AI_Machine
