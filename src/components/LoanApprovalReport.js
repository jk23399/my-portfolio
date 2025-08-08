import React from 'react';

import avatar from '../assets/your_avatar.jpg';
import loanDashboard from '../assets/loan_approval_prediction_pics/loan_analysis.gif'; 
import approvalPieChart from '../assets/loan_approval_prediction_pics/loan_status_dist.png';
import cibilBarChart from '../assets/loan_approval_prediction_pics/cibil_score_dist.png';
import cibilScatterPlot from '../assets/loan_approval_prediction_pics/cibil_scatter_plot.png';
import featureImportance from '../assets/loan_approval_prediction_pics/rb_feature_importance.png';
import loanTermChart from '../assets/loan_approval_prediction_pics/approval_by_loan_term.png';
import rocCurve from '../assets/loan_approval_prediction_pics/ROC_curve.png';
import rocCurveLow from '../assets/loan_approval_prediction_pics/roc_curve_low_cibil.png';
import featureImportanceLow from '../assets/loan_approval_prediction_pics/feature_importance_low_credit.jpg';
import approvalByloanTerm from '../assets/loan_approval_prediction_pics/approval_rate_by_loan_term_low_cibil.jpg';

export default function LoanApprovalReport() {
  return (
    <section id="report" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-8xl mx-auto">

        {/* --- Hero Header --- */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
            Loan Approval Prediction
          </h1>
          <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-gray-700">
            A Loan Pricing Engine, Part I: Segmented Risk & Approval Modeling
          </h2>
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
            <span>Aug 6, 2025</span>
          </div>
        </header>

        {/* --- Cover Image --- */}
        <figure className="mb-16">
          <img
            src={loanDashboard}
            alt="Final Dashboard for Loan Approval Analysis"
            className="max-w-4xl mx-auto rounded-lg shadow-lg object-cover border"
          />
          <figcaption className="mt-3 text-center text-sm text-gray-500">
             Fig. 1 – Interactive Tableau Dashboard for Loan Approval Analysis
          </figcaption>
        </figure>

        <div className="flex justify-center mb-8">
          <a
            href="https://public.tableau.com/app/profile/jooho.kim4124/viz/loan_status_prediction/Dashboard1?publish=yes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-3 py-2 text-base font-medium rounded bg-gray-600 hover:bg-gray-700 text-white">
              View Interactive Dashboard
            </button>
          </a>
        </div>

        {/* --- 1. Introduction --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto">
          <h2 className="text-3xl font-bold border-b-2 pb-2">1. Introduction</h2>
          <p className="mt-4">
            This project analyzes a loan approval dataset to build a predictive model, with the ultimate goal of designing a sophisticated, automated underwriting system. The primary focus was to move beyond a simple, single-policy model and uncover the nuanced factors that influence credit decisions for different borrower segments.
          </p>
          <p>
            Using a pre-processed dataset from Kaggle, the workflow centered on in-depth exploratory data analysis (EDA) and the development of segmented machine learning models. The key discovery was a dual-strategy risk assessment employed by the lender, which led to the creation of a specialized model for low-credit-score applicants.
          </p>
        </article>
        
        {/* --- 2. Exploratory Data Analysis (EDA) --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">2. Exploratory Data Analysis (EDA)</h2>
          <p className="mt-4">
            The EDA phase, primarily conducted in Tableau, focused on visualizing the relationships between applicant attributes and loan outcomes.
          </p>
          <h3 className="text-2xl font-semibold mt-6">2.1 Loan Approval Distribution</h3>
          <p>
            An initial analysis of the target variable showed that approximately 62% of the applications in the dataset were approved, while 38% were rejected. This provides a baseline understanding of the overall approval rate.
          </p>
          <figure className="my-8 text-center">
            <img src={approvalPieChart} alt="Loan Approval Status Pie Chart" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 2 – Overall Distribution of Loan Approval Status</figcaption>
          </figure>

          <h3 className="text-2xl font-semibold mt-6">2.2 The Decisive Factor: CIBIL Score</h3>
          <p>
            The most significant insight from the EDA came from analyzing the CIBIL credit score. A bar chart visualizing the approval rate by CIBIL score range revealed a clear threshold effect. Applicants with a score below ~550 had a very low chance of approval. However, once the score surpassed this threshold, the approval rate dramatically increased to over 99%, regardless of other factors.
          </p>
          <figure className="my-8 text-center">
            <img src={cibilBarChart} alt="Approval Rate by CIBIL Score" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 3 – A clear approval threshold is visible around a score of 550</figcaption>
          </figure>
          
          <h3 className="text-2xl font-semibold mt-6">2.3 Credit Score vs. Loan Amount</h3>
          <p>
            A hypothesis was formed: "Are high-credit-score applicants approved more often because they apply for reasonably smaller loan amounts?" A scatter plot was created to investigate the relationship between CIBIL score and the requested loan amount. The analysis showed no strong correlation, disproving the initial hypothesis. Instead, the chart suggests a different risk management strategy: it can be inferred that for applicants with a CIBIL score above the 550~ threshold, the institution is willing to approve even large loan amounts. This implies a policy where the lender manages potential risk not by rejecting the application, but perhaps by adjusting other terms of the loan, such as the interest rate, which are not present in this dataset.
          </p>
          <figure className="my-8 text-center">
            <img src={cibilScatterPlot} alt="Scatter Plot of Loan Amount vs. CIBIL Score" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 4 – A reference line at 550 highlights the approval threshold</figcaption>
          </figure>

          {/* --- 2.4 Analysis by Loan Term --- */}
          <h3 className="text-2xl font-semibold mt-6">2.4 Analysis by Loan Term</h3>
          <p>
            The relationship between the loan term and approval rate was also analyzed. The data shows that the approval rate peaks for short-term loans, specifically at 4 years. For longer terms (6 years and beyond), the approval rate stabilizes at a slightly lower but consistent level. This may suggest that lenders view shorter-term loans as inherently lower risk, or that applicants seeking these loans tend to have stronger financial profiles.
          </p>
          <figure className="my-8 text-center">
            <img src={loanTermChart} alt="Line chart of approval rate by loan term" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 5 – Approval Rate by Loan Term (in Years)</figcaption>
          </figure>
        </article>

        {/* --- 3. Predictive Modeling & Segmentation Analysis --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">3. Predictive Modeling & Segmentation Analysis</h2>
          <p className="mt-4">
            A Random Forest Classifier trained on the full dataset achieved a near-perfect AUC score of 0.998. The model's feature importance was definitive: `cibil_score` accounted for over 82% of the model's predictive power, confirming that a high credit score is the primary driver of loan approval.
          </p>
          {/* This figure now uses the 'rocCurve' from your import list */}
          <figure className="my-8 text-center">
            <img src={rocCurve} alt="ROC Curve for the Low-Credit Cohort Model" className="max-w-2xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 6 – ROC Curve (AUC = 0.998)</figcaption>
          </figure>
          {/* This figure now uses the 'featureImportance' from your import list */}
           <figure className="my-8 text-center">
            <img src={featureImportance} alt="Random Forest Feature Importances for Low-Credit Cohort" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 7 – CIBIL Score is the overwhelmingly dominant feature</figcaption>
          </figure>
        </article>

          <p>
            However, this initial model revealed a limitation: with a near-certain approval rate for applicants with CIBIL scores above 580, it offered little meaningful insight into more nuanced credit decisions. To address this, the analysis was refocused on the low-credit-score segment (CIBIL &lt; 580).
          </p>
          <p>
            A new, specialized Random Forest model was built for this cohort. This segmented model achieved exceptional performance, with an **ROC-AUC of 0.994** and an **F1-Score of 0.932**. The feature importance for this new model revealed a different decision logic: for the low-credit segment, both credit score and loan term are the most critical factors. A strong tendency to approve only short-term loans was observed, suggesting a distinct risk management strategy for this group.
          </p>
          {/* This figure now uses the 'rocCurve' from your import list */}
          <figure className="my-8 text-center">
            <img src={rocCurveLow} alt="ROC Curve for the Low-Credit Cohort Model" className="max-w-2xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 8 – ROC Curve for the specialized low-credit cohort model (AUC = 0.994)</figcaption>
          </figure>
          {/* This figure now uses the 'featureImportance' from your import list */}
           <figure className="my-8 text-center">
            <img src={featureImportanceLow} alt="Random Forest Feature Importances for Low-Credit Cohort" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 9 – Feature Importance for the low-credit cohort model</figcaption>
          </figure>

        {/* --- 4. Conclusion & Future Application --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12 mb-20">
          <h2 className="text-3xl font-bold border-b-2 pb-2">4. Conclusion & Future Application</h2>
          <p className="mt-4">
            This analysis concludes that the lender employs a dual-strategy approach to risk. For high-credit applicants (&gt;580), risk is likely managed by pricing it into the interest rate. For low-credit applicants (&lt;580), risk is managed by strictly limiting approvals to short-term loans only.
          </p>

          {/* This figure shows the loan approval for low-credit applicants */}
           <figure className="my-8 text-center">
            <img src={approvalByloanTerm} alt="Random Forest Feature Importances for Low-Credit Cohort" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 10 – Approval Rate by Loan Term for the low-credit cohort model</figcaption>
          </figure>

          <p>
            Based on these findings, a sophisticated, two-tiered approval model has been developed. This segmented model is intended to be used as the core approval engine for a future program that will predict custom interest rates and recommend optimal loan products to qualified applicants.
          </p>
        </article>
      </div>
    </section>
  );
}