import React from 'react';

import avatar from '../assets/your_avatar.jpg';
import carCover from '../assets/ai_car/AI_CAR.gif'; // Replace with a GIF/screenshot of the app if available
import modular_pipeline from '../assets/ai_car/modular_pipeline.jpg'; // Replace with the actual path to your image

export default function CarValuationReport() {
  return (
    <section id="report" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-8xl mx-auto">

        {/* --- Hero Header --- */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">Car Valuation</h1>
          <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-gray-700">
            A Hybrid Pipeline: Gemini Extraction → CIS Baseline → Adjusted Price Band
          </h2>
          <div className="mt-6 flex items-center justify-center text-gray-500 text-sm space-x-3">
            <img src={avatar} alt="Author avatar" className="w-8 h-8 rounded-full" />
            <span><strong>Jooho Kim</strong></span>
            <span>·</span>
            <span>Arizona State University</span>
            <span>·</span>
            <span>Computer Science</span>
            <span>·</span>
            <span>Aug 12, 2025</span>
          </div>
        </header>

        {/* --- Cover Image --- */}
        <figure className="mb-16">
          <img
            src={carCover}
            alt="Car Valuation web app screenshot"
            className="max-w-4xl mx-auto rounded-lg shadow-lg object-cover border"
          />
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            Fig. 1 – Web app: paste a listing URL or upload a photo; returns a fair price range with comparable listings
          </figcaption>
        </figure>

        <div className="flex justify-center gap-3 mb-8">
          <a
            href="https://car-valuation-lyart.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-base font-medium rounded bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Visit Website
          </a>
          <a
            href="https://github.com/jk23399/car_valuation"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 text-base font-medium rounded bg-gray-600 hover:bg-gray-700 text-white"
          >
            View Code
          </a>
        </div>

        {/* --- 1. Introduction --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto">
          <h2 className="text-3xl font-bold border-b-2 pb-2">1. Introduction</h2>
          <p className="mt-4">
            This project delivers a lightweight valuation tool that accepts either a car listing URL or an uploaded image. 
            The pipeline uses the <strong>Gemini API</strong> to extract vehicle attributes (year, make, model, trim, mileage),
            queries the <strong>CIS Automotive API</strong> for a baseline price and comparable listings, and applies backend
            logic to produce a transparent <em>low / mid / high</em> fair price band. Built with React and FastAPI, deployed on Vercel.
          </p>
        </article>

        {/* --- 2. System Architecture & Data Flow --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">2. System Architecture & Data Flow</h2>
          <p className="mt-6">
            The app follows a modular pipeline. Each block is independently testable and swappable without breaking the contract.
          </p>
            <figure className="my-6">
            <div className="max-w-6xl mx-auto rounded-lg border shadow-lg p-6 bg-white">
                <img
                src={modular_pipeline}
                alt="System pipeline diagram"
                className="w-full h-auto rounded-md"
                />
            </div>
            <figcaption className="mt-6 text-center text-sm text-gray-500">
                Fig. 2 – The app follows a modular pipeline. Each block is independently testable and swappable without breaking the contract.
            </figcaption>
            </figure>
        </article>

        {/* 3. API Contract (Optional) */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12">
        <h2 className="text-3xl font-bold border-b-2 pb-2">
            3. API Contract <span className="text-sm text-gray-500">(optional)</span>
        </h2>

        {/* At a glance */}
        <ul className="mt-4">
            <li><strong>Input</strong>: either <code>url</code> or <code>image_base64</code> (+ optional <code>zip</code>)</li>
            <li><strong>Process</strong>: Gemini → CIS baseline → backend adjustments</li>
            <li><strong>Output</strong>: <code>vehicle</code>, <code>baseline_price</code>, <code>fair_price</code> (low/mid/high), <code>comps[]</code>, <code>adjustments</code>, <code>notes[]</code></li>
        </ul>

        {/* Full example (collapsed) */}
        <details className="mt-4">
            <summary className="cursor-pointer font-semibold">
            See full request/response example
            </summary>
            <div className="mt-3">
            <h3 className="text-2xl font-semibold mt-2">Request</h3>
            <pre className="text-sm bg-gray-50 p-3 rounded-lg overflow-x-auto border"><code>{`POST /evaluate
        Content-Type: application/json

        {
        "url": "https://phoenix.craigslist.org/...",
        "image_base64": null,
        "zip": "85281"
        }`}</code></pre>

            <h3 className="text-2xl font-semibold mt-6">Response</h3>
            <pre className="text-sm bg-gray-50 p-3 rounded-lg overflow-x-auto border"><code>{`200 OK
        {
        "vehicle": {"year": 2014, "make": "Audi", "model": "S5", "trim": "Premium Plus", "mileage": 86500},
        "baseline_price": 19500,
        "fair_price": {"low": 18200, "mid": 19750, "high": 21300},
        "comps": [
            {"source": "CIS", "title": "2014 Audi S5", "price": 20250, "mileage": 83000, "url": "..."},
            {"source": "CIS", "title": "2013 Audi S5", "price": 18500, "mileage": 91000, "url": "..."}
        ],
        "adjustments": {"mileage": -800, "condition": 300, "trim": -150, "region": 200},
        "notes": ["trim fuzzy match: 0.86", "minor curb-rash detected"]
        }`}</code></pre>
            </div>
        </details>
        </article>
        {/* --- 4. Estimation Logic & Adjustments --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">4. Estimation Logic & Adjustments</h2>
          <p className="mt-4">The backend converts the baseline into an adjusted low/mid/high range using transparent rules.</p>
          <pre className="text-sm bg-gray-50 p-3 rounded-lg overflow-x-auto border"><code>{`inputs = {year, make, model, trim, mileage, zip}
baseline, comps = cis.get_baseline_and_comps(inputs)

# 1) Mileage adjustment (piecewise or log decay)
adj_mileage = per_10k(make, model) * (mileage - segment_avg) / 10000

# 2) Condition adjustment (text/image cues)
adj_condition = cond_coef * cond_score

# 3) Trim confidence penalty
adj_trim = - trim_penalty * (1 - trim_confidence)

# 4) Regional factor
adj_region = region_coef * region_index(zip)

mid = baseline + adj_mileage + adj_condition + adj_trim + adj_region
spread = max(0.06 * mid, iqr(comps.price)/2)
range = { 'low': mid - spread, 'mid': mid, 'high': mid + spread }`}</code></pre>
        </article>

        {/* --- 5. Error Handling & Limits --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">5. Error Handling & Limits</h2>
          <ul>
            <li><strong>Rate limits</strong>: CIS quotas and model limits are surfaced with clear UI errors and retry guidance.</li>
            <li><strong>Mismatched vehicles</strong>: Trim/make/model conflicts trigger a review banner with the extraction string.</li>
            <li><strong>Sparse comps</strong>: Falls back to a conservative spread when IQR is unstable or comps are few.</li>
            <li><strong>Salvage/accidents</strong>: Heuristic penalties when detected in title/description; flagged in notes.</li>
            <li><strong>International listings</strong>: Units/currencies normalized when possible; helpful errors otherwise.</li>
          </ul>
        </article>

        {/* --- 6. Privacy & Security --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">6. Privacy & Security</h2>
          <p>No user accounts. Inputs are processed only for extraction and valuation; no personal data is stored. Logs avoid raw images and full HTML. API keys are server-side.</p>
        </article>

        {/* --- 7. Future Work --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12 mb-20">
          <h2 className="text-3xl font-bold border-b-2 pb-2">7. Future Work</h2>
          <ul>
            <li>Augment comparables with additional marketplaces and de‑duplication.</li>
            <li>Refine mileage/condition coefficients per vehicle segment using recent comps.</li>
            <li>Add confidence scores for extraction, baseline, and final range.</li>
            <li>Batch valuation for CSV uploads.</li>
            <li>Image-based damage detection to improve condition adjustment.</li>
          </ul>
        </article>

      </div>
    </section>
  );
}
