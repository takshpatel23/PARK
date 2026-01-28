import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { assets } from '../assets/assets'
import { BiFontFamily } from 'react-icons/bi'
const Footer = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white" id='Footer'>
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h1 className='mb-2 text-cyan-500 text-bold text-3xl' style={{fontFamily:'Poppins'}}>PARK Management</h1>
          <p className="text-sm leading-6 text-white">
            PARK Management delivers innovative solutions in product, asset,
            resource, and knowledge management for modern businesses.
          </p>
          
        </div>

        <div className='mx-20'>
          <h3 className=" font-semibold text-cyan-500 text-lg mb-4">Quick Links</h3>
          <ul className="flex text-white  flex-col gap-2 text-white">
            <a href="/#Home" className="hover:text-red-400 cursor-pointer ">Home</a>
            <a href="/#About" className="hover:text-red-400 cursor-pointer ">About</a>
            <a href="/#Recent" className="hover:text-red-400 cursor-pointer ">Recent Post</a>
            <a href="/career" className="hover:text-red-400 cursor-pointer">Careers</a>
          </ul>
        </div>
        <div className=''>
          <h3 className=" font-semibold text-cyan-500 text-lg mb-4">Solutions</h3>
          <ul className="flex flex-col gap-2 ">
            <a href="/solutions/product-management" className="hover:text-red-400  text-white">Product Management</a>
            <a href='/solutions/Asset' className="hover:text-red-400 cursor-pointer  text-white">Asset Management</a>
            <a href='/solutions/Resource' className="hover:text-red-400 cursor-pointer text-white">Resource Management</a>
            <a href='/solutions/Knowledge' className="hover:text-red-400 cursor-pointer text-white">Knowledge Management</a>
          </ul>
        </div>

        <div className='text-white '>
          <h3 className="font-semibold text-cyan-500  text-lg mb-4">Contact</h3>
          <p className="text-sm mt-2">📍 Ahmedabad, India</p>
          <p className="text-sm mt-2">📞 +91 6355212113</p>
          <p className="text-sm mt-2">✉️ parkmanagement@gmail.com</p>
          <div className="flex gap-4 mt-5">
            <a href="#" className="p-2 rounded-full bg-gray-500 hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-500 hover:bg-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-500 hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 py-4 text-center text-white text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
        <p>© 2026 <span className=" font-medium">PARK Management</span>. All Rights Reserved.</p>

  <div className="flex gap-4 mt-2 md:mt-0 text-white">
    <a href="#privacy-policy" className="hover:text-red-400 transition">
      Privacy Policy
    </a>
    <a href="#terms" className="hover:text-red-400 transition">
      Terms & Conditions
    </a>
  </div>

</div>
    </div>
  )
}

export default Footer
