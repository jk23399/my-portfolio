import React from 'react';
import gfgLogo from '../assets/gfg_logo.svg';

export default function GeeksforGeeksCard() {
  const username = 'jhkasucs';
  const codingScore = 394;
  const problemsSolved = 271;

  return (
    <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-sm h-full hover:shadow-lg transition-shadow duration-300">
      <a 
        href={`https://www.geeksforgeeks.org/user/${username}/`}
        target="_blank" 
        rel="noopener noreferrer" 
        className="block h-full flex flex-col"
      >
        {/* --- 카드 상단 --- */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <img src={gfgLogo} alt="GeeksforGeeks Logo" className="h-8" />
            <h3 className="text-2xl font-bold">GeeksforGeeks</h3>
          </div>
          <span className="text-blue-600 hover:underline">View Profile →</span>
        </div>

        {/* --- 카드 중간 (수정된 부분) --- */}
        {/* 이 div가 남는 공간을 모두 차지하고, 그 안에서 내용을 수직 중앙 정렬합니다. */}
        <div className="flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-4xl font-bold text-gray-800">{codingScore}</p>
              <p className="text-md text-gray-500">Coding Score</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-800">{problemsSolved}</p>
              <p className="text-md text-gray-500">Problems Solved</p>
            </div>
          </div>
        </div>

        {/* --- 카드 하단 --- */}
        <hr className="my-6" />
        <div className="flex justify-between text-left">
          <div>
            <p className="text-sm text-gray-500">Institution</p>
            <p className="font-bold text-lg">Arizona State University</p>
            <p className="text-sm font-medium text-yellow-600">🏅 24 Rank</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Language Used</p>
            <p className="font-bold text-lg">Java, C++, Python</p>
          </div>
        </div>
      </a>
    </div>
  );
}