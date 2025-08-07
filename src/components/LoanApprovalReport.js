import React from 'react';

import avatar from '../assets/your_avatar.jpg';
import loanDashboard from '../assets/loan_approval_prediction_pics/loan_analysis.gif'; 
import approvalPieChart from '../assets/loan_approval_prediction_pics/loan_status_dist.png';
import cibilBarChart from '../assets/loan_approval_prediction_pics/cibil_score_dist.png';
import cibilScatterPlot from '../assets/loan_approval_prediction_pics/cibil_scatter_plot.png';
import featureImportance from '../assets/loan_approval_prediction_pics/rb_feature_importance.png';
import loanTermChart from '../assets/loan_approval_prediction_pics/approval_by_loan_term.png';
import rocCurve from '../assets/loan_approval_prediction_pics/ROC_curve.png';

export default function LoanApprovalReport() {
  return (
    <section id="report" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* --- Hero Header --- */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
            Loan Approval Prediction
          </h1>
          <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-gray-700">
            A Data-Driven Approach to Credit Risk Assessment
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

        {/* --- 1. Introduction (수정된 내용) --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto">
          <h2 className="text-3xl font-bold border-b-2 pb-2">1. Introduction</h2>
          <p className="mt-4">
            This project builds a loan approval prediction model using a publicly available dataset from Kaggle. The ultimate goal is for the model to be used in a loan approval automation program that will be developed in the future. The primary focus of this project was to identify the most significant factors influencing the success or failure of a loan application.
          </p>
          <p>
            Since the dataset obtained from Kaggle was already pre-processed, the data processing stage was omitted. Through this project, the objectives were: first, to strive to understand the data through data wrangling and analysis; second, to gain machine learning experience by building a predictive model; and finally, to learn and experience data visualization techniques using Tableau.
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

        {/* --- 3. Predictive Modeling --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">3. Predictive Modeling</h2>
          <p className="mt-4">
            To quantify the predictive power of the features, a Random Forest Classifier was trained on all numerical data. This model achieved a near-perfect AUC score of 0.998 on the test set, confirming that the features in the dataset are highly predictive of loan outcomes.
          </p>
          <p>
             The model's feature importance was analyzed to validate the findings from the EDA. The results were definitive: `cibil_score` accounted for over 82% of the model's predictive power. This confirms that while other factors like loan term and assets contribute, they are minor compared to the applicant's credit history.
          </p>
          <figure className="my-8 text-center">
            <img src={featureImportance} alt="Random Forest Feature Importances" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 5 – CIBIL Score is the overwhelmingly dominant feature</figcaption>
          </figure>
        </article>

        {/* --- ROC Curve --- */}
          <figure className="my-8 text-center">
            <img src={rocCurve} alt="ROC Curve for Logistic Regression Model" className="max-w-2xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 6 – ROC Curve (AUC = 0.998)</figcaption>
          </figure>

        {/* --- 4. Conclusion --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12 mb-20">
          <h2 className="text-3xl font-bold border-b-2 pb-2">4. Conclusion</h2>
          <p className="mt-4">
            This analysis clearly confirmed that the **CIBIL credit score is the most decisive variable** in predicting loan approval. A distinct **"approval threshold" was identified around a score of 550**; applicants surpassing this score saw their approval rates surge to over 90%, largely regardless of the requested loan amount.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Business Insight & Future Work</h3>
          <p>
            These findings suggest the lender employs a **two-stage risk assessment process**: a primary automated screening based almost entirely on CIBIL score, followed by a secondary review of other factors. It can be inferred that for creditworthy applicants seeking large loans, the institution likely manages risk not by outright rejection, but by **pricing the risk into the loan terms**—most likely by adjusting the interest rate, a variable not present in this dataset.
          </p>
          <p>
            The ultimate vision for this project is to serve as the core logic for a fully automated loan underwriting system. Acknowledging that a real-world application cannot directly ask for a user's credit score, the next phase is to build a **dual-model pipeline**:
          </p>
          <ul className="mt-4">
            <li><strong>Proxy Score Model:</strong> A regression model trained on a richer dataset to predict a proxy credit score using non-sensitive inputs like income, assets, and dependents.</li>
            <li><strong>Approval Model:</strong> The predicted proxy score would then be fed into the classification model developed in this project to determine the final approval status.</li>
          </ul>
          <p>
            Ultimately, this pipeline could be extended with a third model that predicts an optimal interest rate, completing the transition from a simple classification task to a sophisticated, end-to-end system capable of making nuanced, risk-based loan decisions.
          </p>
        </article>
      </div>
    </section>
  );
}