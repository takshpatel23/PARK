import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { pmIntro, pmBeginnerTopics, assets } from "../assets/assets";

const ProductManagementBasics = () => {
  return (
    <div className="bg-[#F4FAFF] text-slate-800">
      <Header />

      {/* HERO */}
      <section className="pt-36 pb-28 px-6 lg:px-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-5 px-5 py-1 rounded-full bg-sky-500/20 text-sky-400 text-sm font-semibold">
              {pmIntro.version}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {pmIntro.title}
            </h1>

            <p className="text-slate-300 text-lg leading-8 mb-10">
              {pmIntro.desc}
            </p>

            <a
              href="#pm-foundation"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Start Learning →
            </a>
          </div>

          <div className="hidden md:flex justify-center">
            <img
              src={assets.productManagement}
              alt="Product Management"
              className="rounded-3xl shadow-2xl max-h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section id="pm-foundation" className="py-24 px-6 lg:px-32 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Product Management Foundations
          </h2>

          <p className="text-slate-600 text-lg leading-8">
            Product Management is about making the <strong>right decisions</strong>{" "}
            at the right time. It balances customer value, business goals, and
            technical feasibility to build meaningful products.
          </p>
        </div>
      </section>

      {/* CORE TOPICS – Modern Cards */}
      <section className="py-24 px-6 lg:px-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-20">
            Core Skills You Will Develop
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {pmBeginnerTopics.map((topic, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 border border-sky-100 hover:shadow-xl transition"
              >
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-800">
                  {topic.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {topic.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-24 px-6 lg:px-32 bg-gradient-to-br from-sky-50 to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Why Product Management Matters
            </h2>

            <p className="text-slate-600 leading-8 mb-4">
              Great products are built when teams focus on outcomes—not just
              features. Product Management brings clarity, alignment, and impact.
            </p>

            <p className="text-slate-600 leading-8">
              Learning PM early builds a mindset valuable across startups,
              enterprises, and leadership roles.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-xl border border-sky-100">
            <ul className="space-y-4 text-slate-700">
              <li>✔ Strategic thinking</li>
              <li>✔ Customer empathy</li>
              <li>✔ Confident decision-making</li>
              <li>✔ Data-backed execution</li>
              <li>✔ Long-term product vision</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductManagementBasics;
                