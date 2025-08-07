import React from 'react';

// --- Import all necessary assets ---
import avatar from '../assets/your_avatar.jpg'; // Your avatar image
import stockPrediction from '../assets/dashboard.gif'; // The animated GIF of the dashboard
import dataAcquisitionProcessing from '../assets/Data_Acquisition_Processing.png'; // The data pipeline flowchart
import normalizedPerformance from '../assets/normalized.png'; // Normalized performance graph
import rollingVolatility from '../assets/rolling.png'; // Rolling volatility graph
import correlationHeatmap from '../assets/correlation.png'; // Correlation heatmap
import arimaForecast from '../assets/ARIMA1.png'; // ARIMA forecast graph
import arimaForecast2 from '../assets/ARIMA2.png';
import lstmForecast from '../assets/LSTM1.png'; // LSTM forecast graph
import lstmForecast2 from '../assets/LSTM2.png';

export default function SemiconductorReport() {
  return (
    <section id="report" className="py-20 px-16 sm:px-24 lg:px-32 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* --- Hero Header --- */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
            ARIMA vs LSTM
          </h1>
          <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-gray-700">
            A Performance Comparison of Forecasting <br/> Models on Semiconductor Stocks
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
            <span>Aug 4, 2025</span>
          </div>
        </header>

        {/* --- Cover Image --- */}
        <figure className="mb-16">
          <img
            src={stockPrediction}
            alt="Final Dashboard for Semiconductor Stock Analysis"
            className="max-w-3xl mx-auto rounded-lg shadow-lg object-cover border"
          />
          <figcaption className="mt-3 text-center text-sm text-gray-500">
             Fig. 1 – Interactive Dashboard for NVIDIA Stock Analysis and Forecasting
          </figcaption>
        </figure>

        {/* --- 1. Introduction --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold border-b-2 pb-2">1. Introduction</h2>
          <p className="mt-4">
            This project aims to compare the performance of a classical statistical model (ARIMA) and a modern deep learning model (LSTM) for forecasting volatile semiconductor stock prices. In an industry characterized by rapid innovation and high market volatility, accurate forecasting models are crucial for risk management and strategic decision-making.
          </p>
          <p>
            Using historical price data for key industry players—NVIDIA, AMD, Intel, and the SMH semiconductor ETF as a market benchmark—this report details an end-to-end data science workflow. The process includes data acquisition from a financial API, comprehensive exploratory data analysis (EDA), comparative modeling, and the final deployment of an interactive Dash dashboard. The central finding reveals the superior capability of the LSTM model in capturing the complex, non-linear dynamics of stock price movements.
          </p>
        </article>

        {/* --- 2. Data Acquisition & Processing --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">2. Data Acquisition & Processing</h2>
          <p className="mt-4">
            The historical daily stock price data (time-series) for NVDA, AMD, INTC, and SMH was sourced from the Alpha Vantage API. To ensure efficient development and to respect API rate limits, a "get once, use many times" strategy was employed. Initial API calls were made to fetch the full historical data for each symbol, which was then saved as raw JSON files.
          </p>
          <p>
            These raw files were subsequently processed using the Pandas library. The relevant fields (Open, High, Low, Close, Adjusted Close, Volume) were extracted, cleaned, and transformed into structured CSV files. This pre-processing step created a clean and reliable local dataset for all subsequent analysis and modeling.
          </p>
          {/* --- Image Added Here --- */}
          <figure className="my-8 text-center">
            <img src={dataAcquisitionProcessing} alt="Data Acquisition and Processing Pipeline" className="max-w-3xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 2 – Data Processing Pipeline Flowchart</figcaption>
          </figure>
        </article>
        
        {/* --- 3. Exploratory Data Analysis (EDA) --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">3. Exploratory Data Analysis (EDA)</h2>
          <p className="mt-4">
            Before modeling, a comprehensive EDA was conducted to understand the characteristics and relationships within the data.
          </p>
          <h3 className="text-2xl font-semibold mt-6">3.1 Performance Comparison</h3>
          <p>
            To fairly compare long-term performance, stock prices were normalized to a starting value of 100 from January 2015. The visualization clearly shows the explosive growth of NVIDIA and AMD, significantly outperforming Intel and the broader semiconductor market ETF (SMH).
          </p>
          <figure className="my-8 text-center">
            <img src={normalizedPerformance} alt="Normalized Stock Performance since 2015" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 3 – Normalized Stock Performance (Start = $100)</figcaption>
          </figure>

          <h3 className="text-2xl font-semibold mt-6">3.2 Volatility and Risk Analysis</h3>
          <p>
            The 30-day rolling volatility was calculated based on daily returns to measure risk. The analysis indicates that the higher returns of NVIDIA and AMD were accompanied by significantly higher periods of volatility compared to Intel, illustrating a classic risk-return tradeoff.
          </p>
          <figure className="my-8 text-center">
            <img src={rollingVolatility} alt="30-Day Rolling Volatility" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 4 – 30-Day Rolling Volatility (Risk)</figcaption>
          </figure>
          
          <h3 className="text-2xl font-semibold mt-6">3.3 Correlation Analysis</h3>
          <p>
            A correlation matrix of daily returns was visualized as a heatmap. It revealed a moderate positive correlation between competitors NVIDIA and AMD (0.51), suggesting they often react to similar market news. All stocks showed a strong correlation with the market benchmark (SMH), confirming their movement is heavily influenced by the overall industry trend.
          </p>
          <figure className="my-8 text-center">
            <img src={correlationHeatmap} alt="Correlation Heatmap of Daily Returns" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 5 – Correlation Matrix of Daily Returns</figcaption>
          </figure>
        </article>

        {/* --- 4. Predictive Modeling Comparison --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">4. Predictive Modeling Comparison</h2>
          <p className="mt-4">
            Following the EDA, NVIDIA was selected as a case study for a head-to-head comparison of ARIMA and LSTM forecasting models.
          </p>
          <h3 className="text-2xl font-semibold mt-6">4.1 Baseline Model: ARIMA</h3>
          <p>
            A standard ARIMA(5,1,0) model was fitted to the historical price data. While the model successfully captured statistical properties, its forecast quickly flattened, failing to project the recent strong upward trend. This served as a valuable baseline, highlighting the limitations of linear models on volatile financial data.
          </p>
          <figure className="my-8 text-center">
            <img src={arimaForecast} alt="ARIMA Model Forecast" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 6.1 – ARIMA Forecast (Next 30 Days)</figcaption>
          </figure>

          <figure className="my-8 text-center">
            <img src={arimaForecast2} alt="ARIMA Model Forecast" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 6.2 – ARIMA Forecast (Next 30 Days closed up)</figcaption>
          </figure>

          <h3 className="text-2xl font-semibold mt-6">4.2 Deep Learning Model: LSTM</h3>
          <p>
            A stacked LSTM model was built using TensorFlow/Keras. After scaling the data and creating 60-day sequences for training, the model was evaluated on an unseen test set. The LSTM model successfully tracked the trajectory of the actual price, demonstrating its ability to learn complex, non-linear patterns. The resulting Root Mean Squared Error (RMSE) was approximately $10.04.
          </p>
          <figure className="my-8 text-center">
            <img src={lstmForecast} alt="LSTM Model Forecast vs. Actual" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 7.1 – LSTM Model: Actual vs. Predicted Price</figcaption>
          </figure>

          <figure className="my-8 text-center">
            <img src={lstmForecast2} alt="LSTM Model Forecast vs. Actual" className="max-w-4xl mx-auto rounded-lg shadow-lg object-contain border"/>
            <figcaption className="mt-3 text-sm text-gray-500">Fig. 7.2 – LSTM Model: Actual vs. Predicted Price (closed up)</figcaption>
          </figure>

        </article>

        {/* --- 5. Conclusion --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-12 mb-20">
          <h2 className="text-3xl font-bold border-b-2 pb-2">5. Conclusion</h2>
          <p className="mt-4">
            This project successfully demonstrated an end-to-end data science workflow for analyzing and forecasting stock prices. The comparative analysis between ARIMA and LSTM models yielded a clear conclusion: for volatile semiconductor stock data, the LSTM model is significantly more effective at capturing underlying patterns and producing meaningful short-term forecasts.
          </p>
          <h3 className="text-2xl font-semibold mt-6">Limitations & Future Work</h3>
          <p>
            It is crucial to note that this model is based solely on historical price data and serves as a short-term forecasting tool, not as long-term investment advice. Future iterations could enhance predictive accuracy by incorporating external variables, such as market news sentiment, macroeconomic indicators, or company-specific financial metrics.
          </p>
        </article>
      </div>
    </section>
  );
}