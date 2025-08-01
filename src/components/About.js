import React from 'react';
import asuLogo from '../assets/asu_logo.jpeg';
import novaLogo from '../assets/nova_logo.jpeg';
import kangnamLogo from '../assets/kangnam_logo.jpeg';

export default function About() {
  return (
    <section id="About" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* --- About Me 섹션 --- */}
        <div className="mb-20"> {/* 아래 Skills 섹션과 간격을 더 줍니다 */}
          <h2 className="text-4xl font-bold mb-6 text-center md:text-left">About</h2>
          <p className="text-3xl text-gray-700 leading-relaxed">
            I am a passionate and driven Computer Science student at ASU with a strong interest in back-end development and data analysis. I thrive on solving complex problems and enjoy turning abstract ideas into tangible, efficient software solutions.
          </p>
        </div>

        {/* --- Education Section --- */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center md:text-left">Education</h2>
          <ul className="space-y-12">
            
            {/* Education Item 1: ASU */}
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

            {/* Education Item 2: NOVA */}
            <li className="flex items-start gap-6">
              <img src={novaLogo} alt="Northern Virginia Community College Logo" className="w-16 h-16 object-contain flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold">Northern Virginia Community College</h3>
                <p className="mt-1 text-lg text-gray-700">Associate of Science - AS, Computer Science</p>
                <p className="mt-1 text-base text-gray-600">Aug 2019 - May 2022</p>
                <p className="mt-2 text-lg text-gray-700">Grade: 3.8</p>
              </div>
            </li>

            {/* Education Item 3: Kangnam University */}
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

        {/* --- Experience 섹션 --- */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left">Experience</h2>
          <ul className="space-y-16">
            {/* ... 기존 경력 항목 li 태그들은 그대로 ... */}
            {/* 경력 항목 1 */}
            <li className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 text-gray-600 font-medium text-2xl">
                <p>World BankCard Services</p>
                <p className="text-base mt-1">Aug 2017 - Sep 2018</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold">Technical Support / Intern</h3>
                <ul className="mt-2 text-gray-700 leading-relaxed list-disc list-inside space-y-2 text-lg">
                </ul>
              </div>
            </li>
            {/* 경력 항목 2 */}
            <li className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 text-gray-600 font-medium text-2xl">
                <p>Republic of Korea Army</p>
                <p className="text-base mt-1">Apr 2012 - Jan 2014</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold">Operations & Intelligence Specialist</h3>
                <ul className="mt-2 text-gray-700 leading-relaxed list-disc list-inside space-y-2 text-lg">
                  {/* ... 기존 경력 설명 li 태그들 ... */}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}