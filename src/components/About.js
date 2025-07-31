import React from 'react';
import LeetCodeStats from './LeetCodeStats';

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

        {/* --- My Skills 섹션 --- */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">My Skills</h2>
          <div className="flex flex-wrap items-center gap-4"> {/* items-center 추가 */}
            {/* --- 기존 스킬 뱃지들 --- */}
            <span className="bg-indigo-100 text-indigo-800 text-xl font-medium px-4 py-2 rounded-full">Java</span>
            <span className="bg-indigo-100 text-indigo-800 text-xl font-medium px-4 py-2 rounded-full">Python</span>
            <span className="bg-indigo-100 text-indigo-800 text-xl font-medium px-4 py-2 rounded-full">C++</span>
            <span className="bg-gray-200 text-gray-800 text-xl font-medium px-4 py-2 rounded-full">Data Analysis</span>
          </div>
        </div>

        {/* --- LeetCode Section ---*/}
        <div className="mb-20">
          <LeetCodeStats />
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