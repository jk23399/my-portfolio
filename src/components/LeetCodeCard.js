import React from 'react';

export default function LeetCodeCard() {
  const username = 'jhkasu';
  
  const imageUrl = `https://leetcode.card.workers.dev/${username}?theme=light&font=Roboto_Mono&ext=heatmap&hide_rank=true&site=leetcode`;

  return (
    <div className="bg-white border-2 border-gray-200 p-6 rounded-xl shadow-sm h-full hover:shadow-lg transition-shadow duration-300">
      {/* --- LeetCode 동적 이미지 --- */}
      <a 
        href={`https://leetcode.com/u/${username}/`}
        target="_blank" 
        rel="noopener noreferrer" 
        title="Click to view my LeetCode profile"
      >
        <img 
          src={imageUrl} 
          alt="Jooho Kim's LeetCode Stats Card"
          className="w-full rounded-lg shadow-md border border-gray-200"
        />
      </a>

      {/* --- 2. 수동으로 추가된 Languages 섹션 --- */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-xl font-bold mb-4 text-left">Languages</h4>
        <div className="space-y-3 text-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Python 3</span>
            <span className="text-gray-600">70 problems solved</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">C++</span>
            <span className="text-gray-600">1 problem solved</span>
          </div>
        </div>
      </div>
    </div>
  );
}