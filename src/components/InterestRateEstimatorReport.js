import React from 'react';

import avatar from '../assets/your_avatar.jpg';
import interestRateEstimator from '../assets/interestEstimator.gif';
import loanAnalysisGif from '../assets/loan_approval_prediction_pics/loan_analysis.gif';
import interestRateBarchart from '../assets/interest_rate_prediction_pics/binned_comparison.png';

export default function InterestRateEstimatorReport() {
  return (
    <main id="report" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <article className="max-w-4xl mx-auto">

        {/* Hero Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
            Loan Approval and Interest Rate Estimator
          </h1>
          <div className="mt-6 flex items-center justify-center text-gray-500 text-sm space-x-3">
            <img src={avatar} alt="Author avatar" className="w-8 h-8 rounded-full" />
            <span><strong>Jooho Kim</strong></span>
            <span>·</span>
            <span>Arizona State University</span>
            <span>·</span>
            <span>Computer Science</span>
            <span>·</span>
            <time dateTime="2025-08-08">Aug 8, 2025</time>
          </div>
        </header>

        {/* Cover Image */}
        <figure className="mb-16">
          <img
            src={interestRateEstimator}
            alt="Animated demo of the app showing loan approval and predicted interest rate"
            className="w-full rounded-lg shadow-lg object-cover border"
          />
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            Fig. 1 – Loan Approval and Interest Rate Estimator
          </figcaption>
        </figure>

        {/* CTA */}
        <div className="flex justify-center mb-12">
          <a
            href="https://credit-risk-analyzer-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Visit Website
          </a>
        </div>

        {/* 1. Introduction */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl font-bold border-b-2 pb-2">1. Introduction</h2>
        <p className="mt-4">
            This application accepts core financial inputs—loan purpose, loan amount, annual income,
            credit score, and loan term—and returns both a credit decision and an interest rate
            estimate. The backend stitches together two models in an end-to-end pipeline: a
            <em> loan approval prediction </em> model that classifies approve vs reject, and, upon
            approval, an <em>interest rate prediction</em> model that estimates a suitable APR for
            the applicant. Both models originated from prior data-science work, using datasets that
            were manually cleaned and refined before training. The goal here goes beyond modeling:
            to package the models into a production-ready web app and deploy it for real, hands-on
            usage.
          </p>
        </article>

        {/* 2. Source Projects */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Loan Approval Card */}
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
            <img
                src={loanAnalysisGif}
                alt="Interactive Loan Approval Dashboard"
                className="w-full h-48 object-cover rounded-md mb-4 border"
            />
            <div className="p-6">
            <h3 className="text-xl font-bold mb-2">
                Loan Approval Prediction & Interactive Dashboard
            </h3>
            <div className="flex justify-center">
                <a href="/loan-approval-report" className="bg-gray-700 text-white text-sm px-3 py-1 rounded hover:bg-gray-800">View Report</a>
            </div>
            </div>
        </div>

        {/* Interest Rate Card */}
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
            <img
                src={interestRateBarchart}
                alt="Bar chart comparing actual vs. predicted interest rates"
                className="w-full h-48 object-cover rounded-md mb-4 border"
            />
            <div className="p-6">
            <h3 className="text-xl font-bold mb-2 flex">
                Predictive Modeling of Loan Interest Rates
            </h3>
            <div className="flex justify-center">
                <a href="/interest-rate-report" className="bg-gray-700 text-white text-sm px-3 py-1 rounded hover:bg-gray-800">View Report</a>
            </div>
            </div>
        </div>
        </section>

        {/* 2. System Architecture */}
        <section className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16">
        <h2 className="text-3xl font-bold border-b-2 pb-2">
            2. System Architecture
        </h2>

        {/* Diagram */}
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="320" viewBox="0 0 900 320">
            {/* Frontend */}
            <g transform="translate(16,16)">
            <rect width="200" height="80" rx="10" className="stroke-indigo-400 fill-white" />
            <text x="100" y="24" textAnchor="middle" className="fill-gray-800 text-[14px] font-bold">Frontend</text>
            <text x="100" y="44" textAnchor="middle" className="fill-gray-500 text-[12px]">React + Tailwind (Vercel)</text>
            </g>

            {/* API */}
            <g transform="translate(260,30)">
            <rect width="160" height="60" rx="10" className="stroke-amber-400 fill-white" />
            <text x="80" y="24" textAnchor="middle" className="fill-gray-800 text-[12px] font-semibold">API (Flask)</text>
            <text x="80" y="44" textAnchor="middle" className="fill-gray-500 text-[11px]">POST /predict</text>
            </g>

            {/* Classifier */}
            <g transform="translate(460,10)">
            <rect width="120" height="50" rx="10" className="stroke-emerald-400 fill-white" />
            <text x="60" y="22" textAnchor="middle" className="fill-gray-800 text-[12px] font-semibold">Classifier</text>
            </g>

            {/* Regressor */}
            <g transform="translate(460,80)">
            <rect width="120" height="50" rx="10" className="stroke-rose-400 fill-white" />
            <text x="60" y="22" textAnchor="middle" className="fill-gray-800 text-[12px] font-semibold">Regressor</text>
            </g>

            {/* Model Server */}
            <g transform="translate(620,40)">
            <rect width="200" height="80" rx="10" className="stroke-purple-400 fill-white" />
            <text x="100" y="24" textAnchor="middle" className="fill-gray-800 text-[14px] font-bold">Model Serving</text>
            <text x="100" y="44" textAnchor="middle" className="fill-gray-500 text-[12px]">Scikit-learn Models</text>
            </g>

            {/* Deployment */}
            <g transform="translate(16,140)">
            <rect width="804" height="60" rx="10" className="stroke-gray-400 fill-white" />
            <text x="402" y="24" textAnchor="middle" className="fill-gray-800 text-[14px] font-bold">Deployment</text>
            <text x="402" y="44" textAnchor="middle" className="fill-gray-500 text-[12px]">Frontend: Vercel | Backend: Render</text>
            </g>

            {/* Arrows */}
            <line x1="216" y1="56" x2="260" y2="60" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="420" y1="60" x2="460" y2="35" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="420" y1="60" x2="460" y2="105" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="580" y1="35" x2="620" y2="80" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="580" y1="105" x2="620" y2="80" stroke="#666" strokeWidth="2" markerEnd="url(#arrow)" />

            <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#666" />
            </marker>
            </defs>
        </svg>

        {/* Summary */}
        <p className="mt-4">
            The system connects a Vercel-hosted React frontend with a Python Flask API. 
            The API first uses a classifier to predict loan approval, and if approved, 
            a regressor estimates the interest rate. Both models are served from memory 
            for low-latency inference. Frontend and backend are deployed separately but 
            communicate over HTTPS.
        </p>

        {/* Key Points */}
        <h3 className="text-2xl font-semibold mt-6">2.1 Frontend</h3>
        <ul>
            <li>React + Tailwind, deployed on Vercel for fast global delivery.</li>
            <li>Submits a single JSON payload to backend and renders the combined result.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">2.2 API</h3>
        <ul>
            <li>Flask REST API with input validation and CORS restricted to Vercel domain.</li>
            <li>Main endpoint: <code>POST /predict</code>, returns decision + APR.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">2.3 Model Serving</h3>
        <ul>
            <li>Two pre-trained scikit-learn models loaded at process start.</li>
            <li>Shared preprocessing pipeline ensures parity between training and inference.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">2.4 Deployment</h3>
        <ul>
            <li>Frontend on Vercel, backend on Render (autoscaling, health checks enabled).</li>
            <li>Optional Vercel proxy rewrites for clean API URLs.</li>
        </ul>
        </section>

        {/* 3. User Flow & UX */}
        <section className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16">
        <h2 className="text-3xl font-bold border-b-2 pb-2">
            3. User Flow & UX
        </h2>

        {/* Summary */}
        <p>
            The interface guides users through a short, five-step form and immediately returns 
            an approval decision. If approved, the predicted APR and chosen term are displayed. 
            The design prioritizes speed, clarity, and mobile responsiveness.
        </p>

        <h3 className="text-2xl font-semibold mt-6">3.1 Flow</h3>
        <ul>
            <li>Loan Purpose → Loan Amount → Credit Score → Annual Income → Term → Result</li>
            <li>Prefilled options & discrete inputs to minimize user error.</li>
            <li>Progress bar and keyboard navigation for quick entry.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">3.2 UX Principles</h3>
        <ul>
            <li>Optimistic UI with instant step transitions.</li>
            <li>“Calculating…” loading state; clear error messages with retry option.</li>
            <li>Mobile-first responsive design, accessible controls, and clear focus states.</li>
            <li>Privacy assurance banner: “No personal data stored”.</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">3.3 API Contract</h3>
        <ul>
            <li>Single JSON request, single combined response from backend.</li>
            <li>Client-side validation mirrors backend rules to reduce round-trips.</li>
        </ul>
        </section>

        
        {/* 4. Limitations & Next Steps */}
        <section className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16">
        <h2 className="text-3xl font-bold border-b-2 pb-2">4. Limitations &amp; Next Steps</h2>

        <h3>4.1 Current Limitations</h3>
        <ul>
            <li>
            <strong>Data representativeness:</strong> training data may not capture all borrower segments
            (region, income distributions, macro cycles); out-of-distribution inputs can degrade accuracy.
            </li>
            <li>
            <strong>Approval proxy:</strong> “approval” is modeled from historical outcomes, not a real
            underwriting policy; use for educational/demo purposes only.
            </li>
            <li>
            <strong>Drift &amp; recalibration:</strong> APRs and approval thresholds can drift as markets change;
            no automatic drift detection is enabled yet.
            </li>
            <li>
            <strong>Explainability:</strong> feature attributions are not surfaced in the UI; users cannot
            see <em>why</em> a decision was made.
            </li>
            <li>
            <strong>Inputs:</strong> limited to a compact set (purpose, amount, income, score, term); missing
            debt-to-income, employment length, delinquencies, etc.
            </li>
            <li>
            <strong>Operational guardrails:</strong> basic rate limiting only; no per-client API keys or quotas.
            </li>
        </ul>

        <h3>4.2 Next Steps</h3>
        <ul>
            <li>
            <strong>Monitoring:</strong> add input/feature drift alerts, model performance dashboards, and
            shadow testing for new versions.
            </li>
            <li>
            <strong>Calibration &amp; fairness:</strong> periodic probability/APR calibration; bias checks across
            relevant subgroups (where legally/ethically appropriate).
            </li>
            <li>
            <strong>Explainability:</strong> expose SHAP-style attributions and “what-if” sliders for amount/term/score.
            </li>
            <li>
            <strong>Richer features:</strong> incorporate DTI, employment length, loan history; secure collection with
            client-side masking and server-side validation.
            </li>
            <li>
            <strong>Productization:</strong> API keys, per-tenant limits, audit logging, and canary deploys; PDF
            “pre-qualification” summary download.
            </li>
            <li>
            <strong>UX enhancements:</strong> localization (i18n), multiple currencies, scenario comparison (e.g., 36 vs 48 months),
            and accessibility audits.
            </li>
        </ul>
        </section>


      </article>
    </main>
  );
}
