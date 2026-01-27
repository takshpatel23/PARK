import React from "react";
import { recent } from "../assets/assets";

const Recent = () => {
  return (
    <section
      id="Recent"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-white mb-16">
          Recent Posts
        </h2>

        <div className="space-y-10">
          {recent.map((post, idx) => (
            <div
              key={idx}
              className="
                group grid md:grid-cols-3 gap-8 items-center
                bg-slate-800/70 border border-slate-700
                rounded-2xl overflow-hidden
                hover:border-[#0091FF]
                hover:shadow-2xl transition-all duration-300
              "
            >
              {/* IMAGE */}
              <div className="relative h-56 md:h-full">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* CONTENT */}
              <div className="md:col-span-2 p-6 flex flex-col justify-between h-full">
                <div>
                  <p className="text-sm text-slate-400 mb-2">
                    {post.date}
                  </p>

                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {post.title}
                  </h3>

                  <p className="text-slate-300 leading-7">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={post.link}
                    className="
                      inline-flex items-center gap-2
                      text-cyan-400 font-semibold
                      group-hover:gap-4 transition-all
                    "
                  >
                    Read Article
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;
