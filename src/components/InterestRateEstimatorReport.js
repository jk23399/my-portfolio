import avatar from '../assets/your_avatar.jpg';
import interestRateEstimator from '../assets/interestEstimator.gif';
import loanAnalysisGif from '../assets/loan_approval_prediction_pics/loan_analysis.gif';
import interestRateBarchart from '../assets/interest_rate_prediction_pics/binned_comparison.png';
import systemArchitecture from '../assets/interest_rate_estimator/sys_arc.png';
import flow from '../assets/flow.png';

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
        This project bridges the gap between data science and real-world application. It’s an end-to-end web app that predicts loan approval odds and estimates interest rates based on user financial profiles.

Instead of just analyzing data in a notebook, I deployed a production-ready pipeline where users get instant feedback. The system chains a Classifier (Approve/Reject) and a Regressor (Interest Rate) to deliver a seamless financial consultation experience.
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

        <img
          src={systemArchitecture}
          alt=""
          className="w-full rounded-lg shadow-lg object-cover mt-12"
        />
        <figcaption className="mt-3 text-center text-sm text-gray-500">
          Fig. 2 – System Architecture Overview
        </figcaption>

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

        <h3 className="text-2xl font-semibold mt-6">2.2 Backend</h3>
        <ul>
            <li>Backend (Flask): Serves two pre-trained Scikit-learn models from memory for low-latency inference.</li>
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
        <br></br>
        <ul>
            Simple 5-Step Process: Users just click through 5 screens to get a result.
            No Typing Needed: We used buttons and sliders so users don't make typing mistakes.
            Fast & Easy: A progress bar shows how much is left, making it quick to finish.
            <img
              src={flow}
              alt=""
              className="w-full rounded-lg shadow-lg object-cover mt-12"
            />
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              Fig. 3 – Simple 5-Step Process
            </figcaption>
        </ul>
        </section>

        
        {/* 4. Limitations & Next Steps */}
        <section className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16">
        <h2 className="text-3xl font-bold border-b-2 pb-2">4. Future Roadmap &amp; Next Steps</h2>
        <h3 className="text-2xl font-semibold mt-6">4.1 Model Explainability</h3>
        <p>
        Currently, the decision is a "black box." I plan to implement SHAP values to visualize exactly why an applicant was approved or rejected (e.g., "Credit score contributed 30% to the decision").
        </p>

        <h3 className="text-2xl font-semibold mt-6">4.2 Feature Enrichment</h3>
        <p>
        To improve real-world accuracy, I will incorporate advanced financial metrics like Debt-to-Income (DTI) ratio and employment history.
        </p>

        <h3 className="text-2xl font-semibold mt-6">4.3 MLOps & Monitoring</h3>
        <p>
        Interest rates fluctuate constantly. I aim to build a Drift Detection system that monitors market trends and triggers model retraining automatically.
        </p>

        <h3 className="text-2xl font-semibold mt-6">4.4 API Security</h3>
        <p>
        Implement Rate Limiting and API Keys to prevent abuse and manage traffic effectively.
        </p>
        </section>


      </article>
    </main>
  );
}
