// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="footer" className="py-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto flex justify-center items-center space-x-8">
        <a
          href="https://www.linkedin.com/in/joo-ho-kim-24386b295/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-400 transition-colors"
        >
          <FaLinkedin size={36} />
        </a>
        <a
          href="https://github.com/jhkasu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400 transition-colors"
        >
          <FaGithub size={36} />
        </a>
        <a
          href="mailto:wngj123@google.com"
          aria-label="Email"
          className="hover:text-red-400 transition-colors"
        >
          <FaEnvelope size={36} />
        </a>
        <a
          href="/files/Your_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download CV"
          className="hover:text-green-400 transition-colors"
        >
          <FaFilePdf size={36} />
        </a>
      </div>
    </footer>
  );
}
