'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  // First paragraph section
  const [ref1, inView1] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Second paragraph section
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="relative min-h-[200vh] bg-black py-24">
      {/* First Section */}
      <div ref={ref1} className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-cyan-500 mb-12">
              About Campus On Chain
            </h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-xl text-neutral-300 leading-relaxed mb-8">
                Campus On Chain is a nonprofit initiative connecting Latin American university students with real opportunities in Web3.
              </p>
              <div className="space-y-4 text-lg text-neutral-400">
                <p>We help students:</p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3">•</span>
                    Learn by doing, through hackathons, grants, and curated workshops.
                  </li>
                  <li className="flex items-start">
                    <span className="text-white mr-3">•</span>
                    Earn by building, via bounties, internships, and open-source contributions.
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 mr-3">•</span>
                    Belong to a global network, joining other builders across borders and disciplines.
                  </li>
                </ul>
              </div>
              <p className="text-xl text-neutral-300 leading-relaxed mt-8">
                We're building a bridge between the on-chain world and the on-campus world — making sure students don't miss the future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div ref={ref2} className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white to-cyan-500 mb-12">
              What We're Doing Now
            </h2>
            <div className="space-y-6 text-lg text-neutral-400">
              <ul className="list-none space-y-6 pl-0">
                <li className="flex items-start group">
                  <span className="text-orange-500 mr-3 transition-transform duration-300 group-hover:scale-125">✅</span>
                  <span className="group-hover:text-neutral-200 transition-colors duration-300">
                    Supporting university-based Web3 clubs across LATAM.
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-white mr-3 transition-transform duration-300 group-hover:scale-125">✅</span>
                  <span className="group-hover:text-neutral-200 transition-colors duration-300">
                    Running the Campus Points program to reward learning and participation.
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-cyan-500 mr-3 transition-transform duration-300 group-hover:scale-125">✅</span>
                  <span className="group-hover:text-neutral-200 transition-colors duration-300">
                    Partnering with leading ecosystems to offer access to hackathons, jobs, and grants.
                  </span>
                </li>
                <li className="flex items-start group">
                  <span className="text-orange-500 mr-3 transition-transform duration-300 group-hover:scale-125">✅</span>
                  <span className="group-hover:text-neutral-200 transition-colors duration-300">
                    Launching the Campus On Chain App to track your progress, connect with others, and unlock rewards.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 