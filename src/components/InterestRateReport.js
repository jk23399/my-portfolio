import React from 'react';
import avatar from '../assets/your_avatar.jpg'; 
import binnedComparison from '../assets/interest_rate_prediction_pics/binned_comparison.png'; 
import featureImportance from '../assets/interest_rate_prediction_pics/feature_importance.png';
import lendingClub from '../assets/interest_rate_prediction_pics/LendingClub.png';

export default function InterestRateReport() {
  return (
    <section id="report" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* --- Hero Header --- */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
            Interest Rate <br/>Regression Model
          </h1>
          <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-gray-700">
            A Practical Approach to Automated Loan Pricing
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
            src={lendingClub}
            alt="Final Dashboard for Loan Approval Analysis"
            className="max-w-4xl mx-auto rounded-lg shadow-lg object-cover border"
          />
          <figcaption className="mt-3 text-center text-sm text-gray-500">
             Fig. 1 – Lending Club Dataset from Kaggle
          </figcaption>
        </figure>

        {/* --- 1. Project Overview --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto">
          <h2 className="text-3xl font-bold border-b-2 pb-2">1. Project Overview</h2>
          <p className="mt-4">
            This project addresses the limitations of a simple loan approval model by tackling a more practical challenge: predicting loan interest rates. The ultimate goal is to create a core engine for a loan recommendation system that estimates an appropriate interest rate based on user-provided information.
          </p>
          <p>
            Starting with a complex Kaggle dataset of over 150 features, I performed rapid data reduction, retaining only a handful of core features that a user could realistically provide, such as annual income, FICO score range, and loan purpose. This user-centric approach guided the entire data preparation and modeling process.
          </p>
        </article>
        
        {/* --- 2. Data Preprocessing & Feature Engineering --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">2. Data Preprocessing & Feature Engineering</h2>
          <p className="mt-4">
            Before modeling, the selected features required careful processing to be machine-readable. Categorical text features like `term` and `grade` were converted into numerical formats. For instance, `grade` was ordinally encoded (A=7, B=6, etc.) to preserve its inherent rank. The `purpose` and `home_ownership` features were one-hot encoded to prevent the model from assuming a false order.
          </p>
          <p>
            A key feature engineering step was handling the FICO score, which was provided as a range (e.g., 690-694). A new, single feature named `fico_score` was created by taking the average of this range. This single, representative value served as a crucial input for the model. Finally, the dataset was filtered to include only completed loans ('Fully Paid' or 'Charged Off') to ensure the model was trained on definitive outcomes.
          </p>
        </article>

        {/* --- 3. Modeling and Evaluation --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">3. Predictive Modeling & Results</h2>
          <p className="mt-4">
            A LightGBM Regressor model was chosen for its high performance and efficiency. After training on 80% of the data, the model's performance was evaluated on the remaining 20% test set. The initial model achieved a strong **R-squared (R²) score of 0.91**. This was further improved to **0.92** through hyperparameter tuning with RandomizedSearchCV, confirming the model's ability to explain 92% of the variance in interest rates.
          </p>
          <p>
            To intuitively visualize the model's accuracy, the average predicted rates were compared against the average actual rates across different segments. The bar chart below demonstrates that the predicted values (orange) almost perfectly match the actual values (blue), providing clear, easy-to-understand evidence of the model's reliability for a non-technical audience.
          </p>
          <figure className="my-8 text-center">
            <img src={binnedComparison} alt="Binned comparison of actual vs. predicted rates" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 2 – Comparison of Mean Predicted vs. Actual Rate by Segment</figcaption>
          </figure>

          <h3 className="text-2xl font-semibold mt-6">Feature Importance</h3>
          <p>
             The model's feature importance was analyzed to understand the key drivers of interest rates. As expected, the borrower's `grade` (credit rating) was the most dominant factor. The `term` of the loan and the `loan_amnt` were also highly influential. This confirms that the model's logic aligns with fundamental financial principles of risk-based pricing.
          </p>
          <figure className="my-8 text-center">
            <img src={featureImportance} alt="Feature Importance for the Interest Rate Model" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 3 – Key Drivers of Interest Rate Prediction</figcaption>
          </figure>
        </article>

        {/* --- 4. Conclusion --- */}
        <article className="prose lg:prose-xl w-full max-w-none mx-auto mt-12 mb-20">
          <h2 className="text-3xl font-bold border-b-2 pb-2">4. Conclusion</h2>
          <p className="mt-4">
            This project successfully developed a high-accuracy regression model (R²=0.92) capable of predicting loan interest rates based on a limited set of user-friendly inputs. The key takeaway is that a robust prediction can be made by focusing on core financial indicators, primarily the borrower's credit grade.
          </p>
          <p>
            This model serves as a validated proof-of-concept for the core engine of an automated loan recommendation system. The next logical step would be to build a simple front-end interface where a user can input their information, receive an estimated interest rate from the model, and then be shown a curated list of suitable (real or simulated) loan products.
          </p>
        </article>
      </div>
    </section>
  );
}