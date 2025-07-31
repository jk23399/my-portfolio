import React, { useState, useEffect } from 'react';

// NOTE: Replace 'jk23399' with your actual LeetCode username.
const LEETCODE_USERNAME = "jhkasu"; 
const API_URL = `https://leetcode-api-faisalshohag.vercel.app/${LEETCODE_USERNAME}`;

export default function LeetCodeStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.status === "success") {
          setStats(data);
        } else {
          throw new Error(data.message || 'Failed to fetch stats');
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []); // The empty array ensures this effect runs only once

  if (loading) {
    return <p className="text-lg text-gray-500">Loading LeetCode Stats...</p>;
  }

  if (error || !stats) {
    return <p className="text-lg text-red-500">Could not load LeetCode stats.</p>;
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-4 text-center">LeetCode Stats</h3>
      <div className="flex justify-around text-center">
        <div>
          <p className="text-3xl font-bold text-green-500">{stats.easySolved}</p>
          <p className="text-md text-gray-600">Easy</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-yellow-500">{stats.mediumSolved}</p>
          <p className="text-md text-gray-600">Medium</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-red-500">{stats.hardSolved}</p>
          <p className="text-md text-gray-600">Hard</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-indigo-500">{stats.totalSolved}</p>
          <p className="text-md text-gray-600">Total Solved</p>
        </div>
      </div>
      <p className="text-center mt-4 text-gray-500">
        Ranking: {stats.ranking.toLocaleString()}
      </p>
    </div>
  );
}