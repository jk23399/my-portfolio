import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Career & Courses</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* 경력 컬럼 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Career</h3>
            {/* LinkedIn 프로필 플러그인이 이곳에 렌더링됩니다 */}
            <div id="linkedin-profile" className="mx-auto"></div>
          </div>
          {/* 과목 컬럼 */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Courses Taken</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Data Structures & Algorithms (CSE 310)</li>
              <li>Operating Systems (CSE 330)</li>
              <li>Software Engineering (CSE 360)</li>
              {/* 여기에 취득 과목들을 추가하세요 */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
