import React from 'react'
import Header from '../Components/Header'
import Footer from "../Components/Footer";
import { assets, resourceFeatures, resourceServices } from '../assets/assets';
const Resource_Management = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      <Header />

      <div className="pt-32 pb-20 px-6 lg:px-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Resource Management Consulting
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              We help organizations efficiently allocate, track, and optimize their human and material resources for maximum productivity.
            </p>
            <a
              href="#"
              className="inline-block bg-[#0091FF] hover:bg-[#0074CC] text-white px-7 py-3 rounded-2xl text-lg font-semibold transition"
            >
              Explore Solutions
            </a>
          </div>

          <div className="h-72 md:h-96 mt-20 bg-gray-700 rounded-xl flex items-center justify-center text-gray-300">
            <img src={assets.resources1} alt="Resource Management" className="h-full rounded-xl"/>
          </div>

        </div>
      </div>

      <div className="py-20 bg-gray-100 px-6 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="h-100 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            <img src={assets.resources2} alt="Resource Strategy" className="h-full rounded-xl"/>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              What is Resource Management?
            </h2>
            <p className="text-gray-600 leading-7">
              Resource Management is the practice of efficiently using organizational resources like staff, equipment, and time to achieve project and business objectives. 
              Proper resource management maximizes productivity and reduces waste.
            </p>
          </div>

        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 px-6 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">Our Resource Management Approach</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {resourceFeatures.map((item, index) => (
              <div key={index} className="bg-white border rounded-xl p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 bg-gray-100 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Resource Management Services</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {resourceServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

        
      <Footer />
    </div>
  )
}

export default Resource_Management
