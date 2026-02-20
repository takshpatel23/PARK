import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { FaChevronDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // More "Classic" icons

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for a "Classic" sticky feel
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
  }, [showMobileMenu]);

  const navLinkStyles = "relative px-4 py-2 text-[17px] font-medium text-slate-700 hover:text-cyan-600 transition-all duration-300 flex items-center gap-1 group";

  return (
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
    }`}>
      <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
        
        {/* LOGO */}
        <div className="flex-shrink-0">
          <img className='h-10 md:h-12 w-auto' src={assets.parkLogo} alt="Logo" />
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className='hidden md:flex items-center space-x-2'>
          <a href="/" className={navLinkStyles}>Home</a>

          {/* About Dropdown */}
          <div className="relative group">
            <button className={navLinkStyles}>
              About <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-48 bg-slate-900 rounded-xl shadow-xl overflow-hidden p-2">
                <a href='/about/our-story' className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-cyan-600 rounded-lg transition">Our Story</a>
                <a href='/about/our-difference' className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-cyan-600 rounded-lg transition">Our Difference</a>
              </div>
            </div>
          </div>

          {/* Solution Dropdown */}
          <div className="relative group">
            <button className={navLinkStyles}>
              Solutions <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-56 bg-slate-900 rounded-xl shadow-xl overflow-hidden p-2">
                {['Product Management', 'Asset Management', 'Resource Management', 'Knowledge Management'].map((item) => (
                  <a key={item} href={`/solutions/${item.replace(/\s+/g, '-').toLowerCase()}`} className="block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-cyan-600 rounded-lg transition">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Mega Menu */}
          <div className="relative group">
            <button className={navLinkStyles}>
              Services <FaChevronDown className="text-[10px] transition-transform duration-300 group-hover:rotate-180" />
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="w-[640px] bg-slate-900 rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-4 border border-slate-800">
                {[
                  { n: 'AI & ML', l: 'AI' }, { n: 'Blockchain', l: 'Blockchain' }, { n: 'Cloud Computing', l: 'Cloud' },
                  { n: 'Digital Marketing', l: 'DigitalMarketing' }, { n: 'Graphics & Design', l: 'GraphicsDesign' }, { n: 'IoT Devices', l: 'Iot' },
                  { n: 'Mobile App', l: 'Mobile' }, { n: 'Tech Support', l: 'Programming' }, { n: 'UI/UX Design', l: 'UIUX' }
                ].map((s) => (
                  <a key={s.l} href={`/services/${s.l}`} className="p-3 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-slate-700">
                    {s.n}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href='/career' className={navLinkStyles}>Career</a>
        </nav>

        {/* LOGIN BUTTON */}
        <div className="hidden md:block">
          <a href="/login" className="px-7 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-full shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5">
            Login
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setShowMobileMenu(true)} className="md:hidden text-slate-800 p-2">
          <HiMenuAlt3 size={30} />
        </button>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[2000] transition-opacity duration-300 ${showMobileMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${showMobileMenu ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between p-6 border-b">
            <img className='h-8' src={assets.parkLogo} alt="Logo" />
            <button onClick={() => setShowMobileMenu(false)} className="text-slate-500"><HiX size={28}/></button>
          </div>

          <ul className="p-6 flex flex-col gap-4 overflow-y-auto h-[calc(100vh-100px)]">
            <a href="/" className="text-lg font-semibold text-slate-800">Home</a>
            
            {/* Mobile Dropdowns */}
            {['About', 'Solution', 'Services'].map((section) => (
              <div key={section} className="border-b border-slate-50 pb-2">
                <button 
                  onClick={() => setOpenMobileDropdown(openMobileDropdown === section ? null : section)}
                  className="w-full flex items-center justify-between text-lg font-semibold text-slate-800 py-2"
                >
                  {section} <FaChevronDown className={`text-xs transition-transform ${openMobileDropdown === section ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openMobileDropdown === section ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                  <div className="bg-slate-50 rounded-xl p-2 flex flex-col gap-2">
                    {/* Simplified for brevity - Map your specific links here */}
                    <a href="#" className="px-4 py-2 text-slate-600 text-sm">Overview</a>
                    <a href="#" className="px-4 py-2 text-slate-600 text-sm">View All</a>
                  </div>
                </div>
              </div>
            ))}

            <a href="/career" className="text-lg font-semibold text-slate-800">Career</a>
            <div className="mt-auto pt-6">
              <a href="/login" className="block w-full text-center py-4 bg-cyan-600 text-white rounded-2xl font-bold shadow-lg shadow-cyan-500/30">Login</a>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;