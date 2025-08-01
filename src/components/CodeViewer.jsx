// src/components/CodeViewer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CodeViewer() {
  const { filename } = useParams();
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/files/${filename}`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then(setCode)
      .catch(err => setError(err.message));
  }, [filename]);

  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{filename}</h1>
      <pre className="whitespace-pre-wrap bg-white p-4 rounded-lg overflow-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
