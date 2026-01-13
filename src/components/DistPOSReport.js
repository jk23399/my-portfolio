import React from 'react';
import avatar from '../assets/your_avatar.jpg';
import distPOS from '../assets/distPOS.png';

export default function SimplePOSReport() {
    return (
      <section id="report" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
  
          {/* --- Hero Header --- */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
                Distributed POS System Migration (In Progress)
            </h1>
            <div className="mt-6 flex items-center justify-center text-gray-500 text-sm space-x-3">
              <img
                src={avatar}
                alt="Author avatar"
                className="w-8 h-8 rounded-full"
              />
              <span><strong>Jooho Kim</strong></span>
              <span>·</span>
              <span>Arizona State University</span>
              <span>·</span>
              <span>Computer Science</span>
              <span>·</span>
              <span>Jan 12, 2026</span>
            </div>
          </header>

        {/* --- Cover Image --- */}
        <figure className="mb-16">
          <img
            src={distPOS}
            alt="Final Dashboard for Semiconductor Stock Analysis"
            className="max-w-3xl mx-auto rounded-lg shadow-lg object-cover border"
          />
          <figcaption className="mt-3 text-center text-sm text-gray-500">
             Fig. 1 – Cloud-Based Distributed POS Architecture
          </figcaption>
        </figure>

        {/* --- Project Roadmap --- */}
        <section className="mb-12">
        <h3 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-6">
            1. Project Roadmap
        </h3>

        {/* Phase 1 */}
        <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Phase 1: System Architecture & Schema Design
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
            <li>
                Designing MySQL Database Schema to replace legacy SQLite structure.
            </li>
            <li>
                Defining RESTful API Specifications for order transmission and state synchronization.
            </li>
            <li>
                Analyzing potential Race Conditions in multi-device environments.
            </li>
            </ul>
        </div>

        {/* Phase 2 */}
        <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Phase 2: Backend Development & Concurrency Control
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
            <li>
                Designing MySQL Database Schema to replace legacy SQLite structure.
            </li>
            <li>
            Implementing Transaction Management and Locking Strategies (Optimistic/Pessimistic) <br></br> to ensure data integrity during simultaneous updates.
            </li>
            </ul>
        </div>

        {/* Phase 3 */}
        <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Phase 3: Client Migration & Synchronization Logic
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
            <li>
               Refactoring Android App (Kotlin) to switch from local storage to network-based API calls.
            </li>
            <li>
               Implementing Retrofit for network communication and error handling.
            </li>
            <li>
               Verifying real-time data synchronization between Device A and Device B.
            </li>
            </ul>
        </div>

        {/* Phase 4 */}
        <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
            Phase 4: Cloud Deployment & Distributed Testing
            </h4>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-2">
            <li>
            Configuring AWS EC2 (Server) and RDS (Database) environments.
            </li>
            <li>
            Deploying the system to the cloud.
            </li>
            <li>
            Conducting Latency & Stress Tests with multiple devices connected via cellular/Wi-Fi networks.            </li>
            </ul>
        </div>
        </section>
        </div>
      </section>
    );
  }