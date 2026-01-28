// import React from "react";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import { assets } from "../assets/assets";

// const About = () => {
//   return (
//     <div className="bg-slate-50 text-slate-800 overflow-x-hidden">
//       <Header />
//       {/* HERO */}
//       <section className="pt-32 pb-24 px-6 lg:px-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
//           <div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               About Our Company
//             </h1>
//             <p className="text-slate-300 text-lg leading-7">
//               We are a technology consulting company helping businesses
//               grow through smart digital solutions, modern engineering,
//               and strategic thinking.
//             </p>
//           </div>
//           <div className="hidden md:block">
//             <img
//               src={assets.about1}
//               alt="About us"
//               className="rounded-2xl shadow-xl"
//             />
//           </div>
//         </div>
//       </section>
//       {/* OUR STORY */}
//       <section id="OurStory" className="py-20 px-6 lg:px-32 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">Our Story</h2>
//           <p className="text-slate-600 text-lg leading-8">
//             Our journey started with a simple idea — to build technology
//             that solves real business problems. Over time, we evolved into
//             a multidisciplinary team delivering scalable, secure, and
//             future-ready digital solutions across industries.
//           </p>
//         </div>
//       </section>
//       {/* OUR DIFFERENCE – DARK */}
// <section
//   id="OurDifference"
//   className="py-20 px-6 lg:px-32 bg-gradient-to-br from-slate-900 to-slate-800"
// >
//   <div className="max-w-6xl mx-auto">
//     <h2 className="text-3xl font-bold text-center mb-14 text-white">
//       What Makes Us Different
//     </h2>

//     <div className="grid md:grid-cols-3 gap-8">
//       {[
//         {
//           title: "Business-First Approach",
//           desc: "We focus on outcomes, not just technology. Every solution aligns with business goals."
//         },
//         {
//           title: "Modern Tech Stack",
//           desc: "We work with modern frameworks, cloud platforms, and scalable architectures."
//         },
//         {
//           title: "Long-Term Partnership",
//           desc: "We don’t just deliver projects, we build long-term relationships."
//         }
//       ].map((item, index) => (
//         <div
//           key={index}
//           className="
//             bg-[#0f172a]
//             border border-slate-700
//             rounded-2xl p-6
//             hover:border-cyan-400
//             hover:-translate-y-1
//             transition
//           "
//         >
//           <h3 className="text-xl font-semibold mb-3 text-cyan-400">
//             {item.title}
//           </h3>
//           <p className="text-slate-300 leading-7">
//             {item.desc}
//           </p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//       {/* VALUES */}
//       <section className="py-20 px-6 lg:px-32 bg-gradient-to-r from-sky-50 to-white">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-6">
//               Our Core Values
//             </h2>
//             <ul className="space-y-4 text-slate-600 text-lg">
//               <li>✔ Transparency & trust</li>
//               <li>✔ Continuous learning</li>
//               <li>✔ Ownership & accountability</li>
//               <li>✔ Customer-centric thinking</li>
//               <li>✔ Quality over quantity</li>
//             </ul>
//           </div>

//           <div className="bg-white rounded-2xl p-8 shadow-lg">
//             <p className="text-slate-600 leading-7">
//               We believe strong values create strong products. Our culture
//               encourages innovation, responsibility, and long-term thinking —
//               ensuring sustainable growth for both clients and teams.
//             </p>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default About;
