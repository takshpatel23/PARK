import React from 'react'
import { solutions } from '../assets/assets'

const Solution = () => {
  return (
    <div
      className="py-20 bg-gradient-to-b from-[#F5FAFF] via-white to-[#F8FAFC] px-6 lg:px-32"
      id="Solution"
    >
      <h2
        className="text-4xl font-semibold text-center mt-10 text-slate-700"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        Our Solutions
      </h2>

      <p className="text-center mt-5 py-5 px-40 text-slate-500 text-lg">
        Take your business to the next level with our specially crafted solutions
        that enable you to manage resources, assets, knowledge and products in the
        most organized manner. Our years of experience and skilled resources help
        us deliver only the best.
      </p>

      <div className="space-y-4 mt-5 px-32 text-center">
        <a
          href="/#Contact"
          className="inline-block bg-[#0091FF] hover:bg-[#0077D9] text-white px-7 py-3 rounded-2xl text-lg font-semibold transition"
        >
          Learn More
        </a>
      </div>

      <div className="py-12 px-6">
        <div className="grid md:grid-cols-4 gap-8 pt-10 max-w-7xl mx-auto">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className=" relative
                bg-white border border-slate-200
                rounded-2xl p-6
                flex flex-col items-start
                shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <div className="absolute -top-5 -left-5 h-12 w-12 rounded-full bg-[#0091FF] text-white flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
              <div className="mb-4">
                <img src={item.icon} alt={item.title} className="w-16 h-16" />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-slate-700">
                {item.title}
              </h3>

              <p className="text-slate-500 mb-4">
                {item.text}
              </p>

              <a
                href={item.link}
                className="text-[#0091FF] text-lg font-medium hover:text-[#0077D9] transition"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Solution
