import React from 'react'  
import { principles } from '../assets/assets'

const Model = () => {
  return (
    <div className='py-20 px-6 bg-gradient-to-b from-[#F5FAFF] via-white to-[#F8FAFC] ' id="Model">

      {/* Section background – light & cool */}
      <div className=" from-sky-100 via-blue-100 to-slate-100 py-20 px-6">
        <h2
          className="text-4xl font-semibold text-slate-800 text-center mb-20"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          The PARK Model
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="
                 relative bg-white rounded-2xl p-6 border border-[#CCE9FF] hover:-translate-y-1 hover:shadow-xl transition
              " 
            >
              <div className="absolute -top-5 left-5 w-15 h-15 rounded-full bg-[#0091FF] text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
              <img
                src={item.icon}
                alt={item.title}
                className="h-28 w-28 mx-auto mb-4"
              />

              <h3 className="text-xl font-bold text-slate-700 mb-2">
                {item.title}
              </h3>

              <p className="text-slate-500 font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Model
