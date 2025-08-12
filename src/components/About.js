import React from 'react';
import asuLogo from '../assets/asu_logo.jpeg';
import novaLogo from '../assets/nova_logo.jpeg';
import kangnamLogo from '../assets/kangnam_logo.jpeg';

export default function About() {
  return (
    <section id="About" className="mt-0">
      {/* ===== Band 1: About (GRAY) ===== */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 bg-gray-50">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">About</h2>
          <p className="text-3xl text-gray-700 leading-relaxed">
            I’m a CS student at ASU with a strong interest in ML and data analysis applied to real products. I enjoy feature engineering, model evaluation, and wiring models into scalable backends.          </p>
        </div>
      </div>

      {/* ===== Band 2: Education (WHITE) ===== */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 bg-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center md:text-left">Education</h2>
          <ul className="space-y-12">
            {/* ASU */}
            <li className="flex items-start gap-6">
              <img src={asuLogo} alt="Arizona State University Logo" className="w-16 h-16 object-contain flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold">Arizona State University</h3>
                <p className="mt-1 text-lg text-gray-700">Bachelor's degree, Computer Science</p>
                <p className="mt-1 text-base text-gray-600">Aug 2023 - May 2026</p>
                <p className="mt-2 text-lg text-gray-700">Grade: 3.99</p>
                <strong>Skills:</strong> Java · Python · C/C++
              </div>
            </li>
            {/* NOVA */}
            <li className="flex items-start gap-6">
              <img src={novaLogo} alt="Northern Virginia Community College Logo" className="w-16 h-16 object-contain flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold">Northern Virginia Community College</h3>
                <p className="mt-1 text-lg text-gray-700">Associate of Science - AS, Computer Science</p>
                <p className="mt-1 text-base text-gray-600">Aug 2019 - May 2022</p>
                <p className="mt-2 text-lg text-gray-700">Grade: 3.8</p>
              </div>
            </li>
            {/* Kangnam */}
            <li className="flex items-start gap-6">
              <img src={kangnamLogo} alt="Kangnam University Logo" className="w-16 h-16 object-contain flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold">Kangnam University</h3>
                <p className="mt-1 text-lg text-gray-700">Business Administration and Management, General</p>
                <p className="mt-1 text-base text-gray-600">Jan 2011 - Aug 2017</p>
                <p className="mt-2 text-lg text-gray-700">Grade: 3.7</p>
                <strong>Skills:</strong> Excel · PowerPoint
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== Band 3: Experience (GRAY) ===== */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8 bg-gray-50">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Experience</h2>
          <ul className="space-y-16">
            <li className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 text-gray-600 font-medium text-2xl">
                <p>World BankCard Services</p>
                <p className="text-base mt-1">Aug 2017 - Sep 2018</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold">Technical Support / Intern</h3>
                <ul className="mt-2 text-gray-700 leading-relaxed list-disc list-inside space-y-2 text-lg">
                  {/* bullet points optional */}
                </ul>
              </div>
            </li>
            <li className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 text-gray-600 font-medium text-2xl">
                <p>Republic of Korea Army</p>
                <p className="text-base mt-1">Apr 2012 - Jan 2014</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold">Operations & Intelligence Specialist</h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
