import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { assets, pmDigitalEra } from "../assets/assets";

const ResourceManagementDigitalEra = () => {
  return (
    <div className="bg-[#F4FAFF] text-slate-800">
      <Header />

      {/* HERO – Dark stays same */}
      <section className="pt-36 pb-28 px-6 lg:px-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block mb-5 px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold">
              Digital Resource Strategy
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Overcoming Resource Management Challenges
              <span className="block text-cyan-400">
                in the Digital Era
              </span>
            </h1>

            <p className="text-slate-300 text-lg leading-8 mb-10">
              Managing people, skills, and time in a digital-first world
              demands agility, visibility, and smarter decision-making.
            </p>

            <a
              href="#challenges"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              View Challenges →
            </a>
          </div>

          <div className="hidden md:flex justify-center">
            <img
              src={assets.resources2}
              alt="Resource Management"
              className="rounded-2xl shadow-2xl max-h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* INTRO – Soft Light */}
      <section className="py-24 px-6 lg:px-32 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Resource Management Has Evolved
          </h2>

          <p className="text-slate-600 text-lg leading-8">
            Static planning no longer works. Digital organizations require
            flexible systems that respond quickly to change and distributed teams.
          </p>
        </div>
      </section>
       <section className="py-24 px-6 lg:px-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              How Organizations Can Adapt
            </h2>

            <ul className="space-y-4 text-slate-300 leading-7">
              <li>✔ Real-time dashboards for visibility</li>
              <li>✔ Priority-driven resource allocation</li>
              <li>✔ Skill mapping & continuous learning</li>
              <li>✔ Data-based forecasting</li>
              <li>✔ Transparent collaboration</li>
              <li>✔ Smart automation tools</li>
            </ul>
          </div>

          <div className="bg-[#F4FAFF] text-slate-800 rounded-2xl p-10 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              The Digital Mindset Shift
            </h3>
            <p className="leading-7 text-slate-600">
              Modern resource management focuses on adaptability rather
              than control, enabling teams to scale with confidence.
            </p>
          </div>
        </div>
      </section>
      {/* CHALLENGES – Soft Cards */}
      <section
        id="challenges"
        className="py-24 px-6 lg:px-32 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-20 text-slate-800">
            Key Challenges in the Digital Era
          </h2>

          <div className="space-y-10">
            {pmDigitalEra.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="text-cyan-500 font-extrabold text-4xl">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>

                <div className="bg-white rounded-2xl p-8 border border-cyan-100 hover:shadow-xl transition w-full">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS – Dark + Soft Card */}
     

      <Footer />
    </div>
  );
};

export default ResourceManagementDigitalEra;
