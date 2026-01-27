import React from 'react'
import Footer from "../Components/Footer";
import Header from '../Components/Header';
import { assets, productFeatures, productServices } from '../assets/assets';
const Product_Management = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />


      <div className="pt-32 pb-10 px-6 lg:px-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Product Management Consulting
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              We help organizations transform ideas into successful products by
              aligning strategy, execution, and market needs.
            </p>
           <a
              href="#"
              className="inline-block bg-[#0091FF] hover:bg-[#0074CC] text-white px-7 py-3 rounded-2xl text-lg font-semibold transition"
            >
              Explore Solutions
            </a>
          </div>

          <div className="h-72  mt-20 mb-5 md:h-96  bg-gray-700 rounded-xl flex items-center justify-center text-gray-300">
            <img src={assets.productManagement} alt="Product Management" className="h-full rounded-xl"/>
          </div>
        </div>
      </div>

      <div className= "bg-gray-100 py-20 px-6 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">


          <div className="h-80 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
            <img src={assets.management} alt="" className="h-full rounded-xl"/>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">
              What is Product Management?
            </h2>
            <p className="text-gray-600 leading-7">
              Product Management is the strategic function responsible for
              guiding a product from concept to market success. It bridges
              business objectives, customer needs, and technical execution to
              deliver high-value products.
            </p>
            <p className="mt-4 text-gray-600 leading-7">
              Our consulting-driven approach ensures that every product decision
              is data-backed, customer-focused, and aligned with long-term
              organizational goals.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 px-6 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl text-white font-bold mb-12">Our Product Management Approach</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {productFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border rounded-xl p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-6 lg:px-32 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Product Management Services
          </h2>

        <div className="grid md:grid-cols-2 gap-10">
            {productServices.map((service, index) => (
                <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">
                {service.title}
                </h3>
                <p className="text-gray-600">
                {service.description}
                </p>
                </div>
            ))}
        </div>

        </div>
      </div>

      {/* <section className="bg-slate-900 text-white py-16 px-6 lg:px-32 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build Impactful Products?
        </h2>
        <p className="text-gray-300 mb-6">
          Partner with PARK Management to turn vision into market success.
        </p>
      <a href='/#Contact' className='bg-blue-800 text-white px-6 py-3 rounded-2xl mt-6 text-xl font-medium hover:text-black transition duration-300'>Contact Us</a>

      </section> */}

  
      <Footer />
    </div>
  )
}

export default Product_Management
