import React, { use } from 'react'
import { assets } from '../assets/assets'
const Header = () => {
 const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  React.useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto"
    return () => (document.body.style.overflow = "auto")
  }, [showMobileMenu])
  return (
    <div className='fixed absolute  top-0 left-0 w-full z-10 bg-white shadow-2xl rounded-b-full' id='Home'>
      <div className='max-w-7xl mx-auto flex  text-white items-center justify-between px-6 py-4'>
        <img className='h-15 w-auto mx-2 ' src={assets.parkLogo} alt="Park Logo" />
        <ul className='text-black hidden md:flex text-black items-center '>
            <a href="/" className='relative group inline-block mx-4  text-xl hover:text-cyan-400 hover:border-b-2 border-cyan-400  font-semi-bold'>Home</a>
              <div className="relative group inline-block">
                <a href="/about" className="mx-4 text-xl font-semi-bold transition text-black hover:text-cyan-400 hover:border-b-2 border-cyan-400">
                  About
                </a>
                <div className="absolute left-0 top-full p-2 mt-4 w-44 bg-gray-900 text-white text-lg font-semi-bold shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href='/about/our-story' className="block px-4 py-2 mb-1 hover:bg-cyan-600 hover:text-white rounded-md transition duration-300">
                    Our Story
                  </a>
                  <a href='/about/our-difference' className="block px-4 py-2 hover:bg-cyan-600 hover:text-white rounded-md transition duration-300">
                    Our Difference
                  </a>
                </div>
              </div>

              <div className="relative group inline-block">
                <a href="/#Solution" className="mx-4 text-xl  font-semi-bold transition hover:border-b-2 border-cyan-400 text-black hover:text-cyan-400">
                  Solution
                </a>
                <div className="absolute left-0 top-full p-2  mt-4 w-52 bg-gray-900 text-white text-lg font-semi-bold shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href='/solutions/product-management' className="block px-4 py-2 mb-2  hover:bg-cyan-600 hover:text-white rounded-md transition duration-300">
                    Product Management
                  </a>
                  <a href='/solutions/Asset' className="block px-4 py-2 mb-1 hover:bg-cyan-600 hover:text-white rounded-md transition duration-300" >
                    Asset Management
                  </a>
                  <a href='/solutions/Resource' className="block px-4 py-2 mb-1 hover:bg-cyan-600 hover:text-white rounded-md transition duration-300">
                    Resource Management
                  </a>
                  <a href='/solutions/Knowledge' className="block px-4 py-2 hover:bg-cyan-600 hover:text-white rounded-md transition duration-300">
                    Knowledge Management
                  </a>
                </div>
              </div>

              <div className="relative group inline-block">
                <a href="/#Services" className="mx-4 text-xl font-semi-bold transition hover:border-b-2 border-cyan-400 text-black hover:text-cyan-400">
                  Services
                </a>
                  <div className=" absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[600px] bg-gray-900 text-white text-lg font-semi-bold
                                   shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                   transition-all duration-300
                                   grid grid-cols-3 gap-2 p-3">
                    <a href='/services/AI' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">AI and Machine Learning</a>
                    <a href='/services/Blockchain' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Blockchain and Big Data</a>
                    <a href='/services/Cloud' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Cloud Computing</a>

                    <a href='/services/DigitalMarketing' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Digital Marketing</a>
                    <a href='/services/GraphicsDesign' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Graphics and Design</a>
                    <a href='/services/Iot' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Iot and Connected Devices</a>

                    <a href='/services/Mobile' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Mobile and Wearable's</a>
                    <a href='/services/Programming' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Programming and Tech</a>
                    <a href='/services/UIUX' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">UI/UX</a>
                  </div>
              </div>


            <a href='/career' className='mx-4 text-xl font-semi-bold transition hover:border-b-2 border-cyan-400 hover:text-cyan-400'>Career</a>
            <a href="/login" className="inline-block bg-[#0091FF] mx-4 hover:bg-[#0074CC] text-black px-5 py-3 rounded-2xl text-lg font-semibold transition">
              Login
            </a>
        </ul>
 {/* MOBILE MENU ICON */}
        <button
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden text-3xl font-bold"
        >
          <img className='h-15 w-auto mx-2 bg-black rounded-full' src={assets.menu_icon} alt="" />
        </button>
      </div>
      <div
  className={`fixed inset-0 bg-white z-50 transition-transform duration-300 md:hidden
  ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}
>
  <div className="flex justify-end p-6">
    <button
      onClick={() => setShowMobileMenu(false)}
      className="text-3xl"
    >
      <img className='' src={assets.cross_icon} alt="" />
    </button>
  </div>

  <ul className="flex flex-col items-center gap-6 mt-10 text-xl">
    <a onClick={() => setShowMobileMenu(false)} href="/">Home</a>
    <a onClick={() => setShowMobileMenu(false)} href="#About">About</a>
    <a onClick={() => setShowMobileMenu(false)} href="/#Solution">Solution</a>
    <div className="relative group inline-block">
  <a
    href="/#Services"
    className="mx-4 text-xl font-semi-bold transition hover:border-b-2 border-cyan-400 text-black hover:text-cyan-400"
  >
    Services
  </a>

  <div
    className="
      absolute left-1/2 -translate-x-1/2 top-full mt-4
      w-[600px]
      bg-gray-900 text-white text-lg font-semi-bold
      shadow-lg rounded-md
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300
      grid grid-cols-3 gap-2 p-3
    "
  >
    <a href='/services/AI' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">AI and Machine Learning</a>
    <a href='/services/Blockchain' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Blockchain and Big Data</a>
    <a href='/services/Cloud' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Cloud Computing</a>

    <a href='/services/DigitalMarketing' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Digital Marketing</a>
    <a href='/services/GraphicsDesign' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Graphics and Design</a>
    <a href='/services/Iot' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Iot and Connected Devices</a>

    <a href='/services/Mobile' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Mobile and Wearable's</a>
    <a href='/services/Programming' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">Programming and Tech</a>
    <a href='/services/UIUX' className="px-4 py-2 hover:bg-cyan-600 rounded-md transition">UI/UX</a>
  </div>
</div>
    <a onClick={() => setShowMobileMenu(false)} href="/career">Career</a>
    <a
      onClick={() => setShowMobileMenu(false)}
      href="/login"
      className="bg-[#0091FF] text-white px-8 py-3 rounded-xl"
    >
      Login
    </a>
  </ul>
</div>

    </div>
  )
}

export default Header
