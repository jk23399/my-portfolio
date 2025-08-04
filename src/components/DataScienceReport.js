import React from 'react';
import coverImage from '../assets/cover_mobile_tax.jpg';
import avatar from '../assets/your_avatar.jpg'; // <-- add your avatar image here
import dataSkimming from '../assets/data_skimming.jpg';
import missingValues from '../assets/missing_values_check.png'; // Placeholder for missing values image
import taxRevenueDist from '../assets/tax_revenue_distribution_by_region.png';
import yearCoverageIntervals from '../assets/year_coverage_intervals.png'; // Placeholder for year coverage intervals image
import completePanelPlot from '../assets/final_complete_dataset.png'; // Placeholder for complete panel plot
import digitalFinancePotentialPlot from '../assets/digital_finance_potential.png'; // Placeholder for digital finance potential plot
import finalHeatmap from '../assets/final_correlation_heatmap.png'; // Placeholder for final heatmap
import scatterByRegion from '../assets/scatter_by_region.png'; // Placeholder for scatter plot by region

export default function DataScienceReport() {
  return (
    <section id="report" className="py-20 px-16 sm:px-24 lg:px-32 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* --- Hero Header --- */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto text-center">
            The Impact of Digital Finance on National Treasury
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
            <span>Aug 3, 2025</span>
          </div>
        </header>

        {/* --- Cover Image --- */}
        <figure className="mb-16">
          <img
            src={coverImage}
            alt="Cover: Mobile finance and tax revenue analysis"
            className="max-w-2xl mx-auto rounded-lg shadow-lg object-cover"
          />
          <figcaption className="mt-3 text-center text-sm text-gray-500">
             Fig.1 – Enhancing Tax Revenue          </figcaption>
        </figure>

        {/* --- 1. Introduction --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold border-b-2 pb-2">1. Introduction</h2>

          <p className="mt-4">
            This article provides policymakers and development experts with practical tips on using mobile finance to boost national tax systems. As digital payments become more common, understanding their impact on government budgets emerges as a key concern.
          </p>

          <p>
            Drawing on data from the World Bank, the study explores how the rise of mobile subscriptions is transforming tax revenue, particularly in developing countries. Through careful data sorting and analysis, the article highlights intriguing ways that digital finance might strengthen national treasuries.
          </p>
        </article>

        {/* --- 2. Dataset --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">2. Dataset</h2>
          <p className="mt-4">
            This project draws on datasets from the World Bank, focusing on mobile subscriptions and tax revenue to explore their impact on national treasuries in developing economies. The data is compiled from multiple CSV files, including mobile cellular subscription rates and government revenue indicators, merged using common identifiers such as country codes to enable comprehensive analysis.
          </p>

          <h3 className="text-2xl font-semibold mt-6">Mobile Subscription Dataset</h3>
          <p>
            The mobile subscription data covers annual figures from 2000 to 2023 across various countries, with approximately 150 rows per year and 5 columns. The features include:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Numerical Continuous (2):</strong> Mobile subscriptions per 100 people, Year</li>
            <li><strong>Categorical Nominal (3):</strong> Country Name, Country Code, Region</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">Tax Revenue Dataset</h3>
          <p>
            The tax revenue dataset spans the same period, with around 120 rows per year and 6 columns. The features are categorized as:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li><strong>Numerical Continuous (2):</strong> Tax revenue (% of GDP), Year</li>
            <li><strong>Categorical Nominal (4):</strong> Country Name, Country Code, Region, Income Group</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6">Data Preparation</h3>
          <p>
            Data preparation begins with cleaning the datasets, handling missing values, and standardizing formats. The datasets are then merged based on country and year, followed by filtering to focus on developing economies for targeted analysis.
          </p>
        </article>

        {/* --- 3. Data Skimming --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">3. Data Skimming</h2>
          <p className="mt-4">
            Data skimming is a quick process of taking a rough look at data with the aim of obtaining initial insights to understand the general overview of the data before deeper analysis.
          </p>

          <figure className="mb-8 text-center">
            <img
              src={dataSkimming}
              alt="Data Skimming Overview"
              className="max-w-md mx-auto rounded-lg shadow-lg object-cover"
            />
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              Figure 2. Data Skimming
            </figcaption>
          </figure>

          <p>
            Based on data skimming, it becomes clear that the data contains missing values, zero values, and negative values. Therefore, it is necessary to clean the data to ensure accurate analysis.
          </p>
        </article>

        {/* --- 4. Data Cleaning and Reshaping --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2 ml-0">4. Data Cleaning and Reshaping</h2>

          <p className="mt-4">
            A custom preprocessing function was used to:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Standardize column names and convert from “wide” to “long” format using <code>pd.melt</code>.</li>
            <li>Remove unnecessary metadata columns (e.g. <code>Indicator Name</code>, <code>Indicator Code</code>).</li>
            <li>Drop all rows with missing values so that no NaNs remain in any of the four indicators.</li>
          </ul>

          <figure className="mb-8 text-center">
            <img
              src={missingValues}
              alt="Missing Values After Data Cleaning"
              className="max-w-md mx-auto rounded-lg shadow-lg object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-gray-500">
              Figure 3. Missing Values After Data Cleaning (all indicators have 0 missing values)
            </figcaption>
          </figure>

          <p>
            The bar chart above confirms that total missing values for <strong>AccountOwnership</strong>, <strong>TaxRevenue</strong>, <strong>GDP_per_capita</strong>, and <strong>MobileSubscriptions</strong> each fall to zero after preprocessing, demonstrating the success of the cleaning step.
          </p>
        </article>
        
        {/* --- 5. Identifying Panel Inconsistencies --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-12">
          <h2 className="text-3xl font-bold border-b-2 pb-2">5. Identifying Panel Inconsistencies</h2>

          <p className="mt-4">
            A quick year‐coverage audit revealed that <code>AccountOwnership</code> only has data for five discrete years (2011, 2014, 2017, 2021, 2022), whereas the other three indicators report values annually. This patchy coverage would lead to many incomplete country–year observations.
          </p>

          <figure className="mb-8 text-center">
            <img
              src={yearCoverageIntervals}  // assume you've imported this asset
              alt="Year coverage intervals per indicator"
              className="max-w-md mx-auto rounded-lg shadow-lg object-contain"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              Figure 4. Year coverage and interval check: AccountOwnership is recorded only every 3–4 years.
            </figcaption>
          </figure>

          <p>
            To create a balanced panel, only countries with non‐null values in <strong>2011, 2014, 2017,</strong> and <strong>2021</strong> for all four indicators were retained in the final dataset.
          </p>
        </article>

        {/* --- 6. Merging and Final Filtering --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16">
          <h2 className="text-3xl font-bold border-b-2 pb-2">6. Merging and Final Filtering</h2>

          <p className="mt-4">
            After cleaning and reshaping, the four indicator tables are merged into a master DataFrame using an <code>inner</code> join on <code>Country Code</code>, <code>Year</code>, and <code>Country Name</code>. This ensures that only country–year combinations present in all four datasets are retained.
          </p>
          <p>
            A new <code>Region</code> label is assigned—either <strong>OECD</strong> or <strong>Developing</strong>—based on predefined ISO3 code lists, and the data is filtered to include only observations from 2010 onward for those two groups. The result is a complete panel ideal for side-by-side comparison.
          </p>

          <figure className="my-8 text-center">
            <img
              src={taxRevenueDist}
              alt="Tax Revenue Distribution by Region"
              className="max-w-md mx-auto rounded-lg shadow-lg object-contain"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              Figure 5. Tax Revenue Distribution by Region (OECD vs Developing)
            </figcaption>
          </figure>
          <p>
            The box plot illustrates that <strong>Developing</strong> countries have a lower median tax revenue (around 15% of GDP) with a wider interquartile range, indicating more variability, whereas <strong>OECD</strong> members exhibit a higher and more consistent median (above 20% of GDP), reflecting more stable fiscal bases in advanced economies.
          </p>          
        </article>

        {/* --- 7. Filtering for Complete Panel --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16">
          <h2 className="text-3xl font-bold border-b-2 pb-2">7. Filtering for a Complete Panel</h2>

          <p className="mt-4">
            Only countries with non-null observations in all four target years (<strong>2011</strong>, <strong>2014</strong>, <strong>2017</strong>, <strong>2021</strong>) were retained. This step ensures that each country contributes equally to the panel analysis.
          </p>

          <figure className="my-8 text-center">
            <img
              src={completePanelPlot}  // e.g. 'record_counts_per_year.png'
              alt="Record Counts per Year — Final Complete Dataset"
              className="max-w-md mx-auto rounded-lg shadow-lg object-contain"
            />
            <figcaption className="mt-3 text-sm text-gray-500">
              Figure 6. Record Counts per Year — Final Complete Dataset
            </figcaption>
          </figure>

          <p>
            The bar chart shows an equal number of observations (<strong>15</strong>) for each analysis year, confirming a balanced panel of <strong>15 developing countries</strong> over four time points.
          </p>
        </article>

        {/* --- 8. Feature Engineering --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16">
          <h2 className="text-3xl font-bold border-b-2 pb-2">8. Feature Engineering</h2>

          <p className="mt-4">
            With a clean and balanced panel in place, new features were engineered to capture deeper insights:
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              <code>log_GDP_per_capita</code>: Applied a natural log transform to GDP per capita to analyze relative growth rates instead of absolute levels.
            </li>
            <li>
              <code>DigitalFinancePotential</code>: Defined as <code>MobileSubscriptions − AccountOwnership</code> to quantify the “mobile-ready but unbanked” population—a key fintech opportunity.
            </li>
          </ul>

          {/* First half of the columns */}
          <figure className="my-8">
            <table className="table-auto border-separate border-spacing-x-4 border-spacing-y-2 mx-auto mb-6">
              <thead>
                <tr>
                  <th>Country Name</th>
                  <th>Country Code</th>
                  <th>Year</th>
                  <th>AccountOwnership</th>
                  <th>TaxRevenue</th>
                  <th>GDP_per_capita</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Argentina</td><td>ARG</td><td>2011</td><td>33.13</td><td>12.66</td><td>12,704.28</td>
                </tr>
                <tr>
                  <td>Australia</td><td>AUS</td><td>2011</td><td>99.06</td><td>20.32</td><td>62,605.60</td>
                </tr>
                <tr>
                  <td>Austria</td><td>AUT</td><td>2011</td><td>97.08</td><td>25.65</td><td>51,116.90</td>
                </tr>
                <tr>
                  <td>Belgium</td><td>BEL</td><td>2011</td><td>96.31</td><td>24.75</td><td>47,760.83</td>
                </tr>
                <tr>
                  <td>Bangladesh</td><td>BGD</td><td>2011</td><td>31.74</td><td>8.69</td><td>837.34</td>
                </tr>
              </tbody>
            </table>
            <figcaption className="mt-2 mb-6 text-center text-sm text-gray-500">
              Table 1a. Basic Indicators
            </figcaption>
          </figure>

          {/* Second half of the columns */}
          <figure className="mt-12 mb-8 text-center">
            <table className="table-auto border-separate border-spacing-x-4 border-spacing-y-2 mx-auto mb-4">
              <thead>
                <tr>
                  <th>MobileSubscriptions</th>
                  <th>Region</th>
                  <th>log_GDP_per_capita</th>
                  <th>DigitalFinancePotential</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>145.51</td><td>OECD</td><td>9.45</td><td>112.38</td>
                </tr>
                <tr>
                  <td>105.82</td><td>OECD</td><td>11.04</td><td>6.76</td>
                </tr>
                <tr>
                  <td>155.15</td><td>OECD</td><td>10.84</td><td>58.08</td>
                </tr>
                <tr>
                  <td>113.20</td><td>OECD</td><td>10.77</td><td>16.89</td>
                </tr>
                <tr>
                  <td>54.93</td><td>Developing</td><td>6.73</td><td>23.19</td>
                </tr>
              </tbody>
            </table>
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              Table 1b. Engineered Features
            </figcaption>
          </figure>
        </article>

        {/* --- 9. Key Insight: Digital Finance Potential by Region --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16">
          <h2 className="text-3xl font-bold border-b-2 pb-2">9. Key Insight: Digital Finance Potential</h2>

          <figure className="my-8 text-center">
            <img
              src={digitalFinancePotentialPlot}  // import this asset at top
              alt="Digital Finance Potential by Region"
              className="max-w-3xl mx-auto rounded-lg shadow-lg object-contain"
            />
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              Figure 7. Digital Finance Potential by Region
            </figcaption>
          </figure>

          <p>
            The box-and-whiskers plot shows the DigitalFinancePotential, defined as
MobileSubscriptions – AccountOwnership. OECD countries exhibit a small median difference (~27 per 100), indicating that most mobile users already have formal accounts. Developing economies, however, have a much larger median gap (~65 per 100) with greater spread—highlighting a sizable “mobile-ready but unbanked” segment and a significant fintech opportunity.
          </p>
        </article>

        {/* --- 10. Final Analysis: Correlation Heatmap --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16">
          <h2 className="text-3xl font-bold border-b-2 pb-2">
            10. Analysis
          </h2>

          <p className="mt-4">
            Now that both original and engineered features are in place, a comprehensive correlation heatmap
            brings everything together. This definitive visualization summarizes all pairwise relationships,
            highlighting the strongest connections and guiding our final conclusions.
          </p>

          <figure className="my-8 text-center">
            <img
              src={finalHeatmap}
              alt="Comparison of Correlation Structures by Region"
              className="max-w-full mx-auto rounded-lg shadow-lg object-contain"
            />
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              Figure 8. Comparison of Correlation Structures by Region
            </figcaption>
          </figure>

          <p>
            The left panel shows the OECD correlation structure, where <strong>DigitalFinancePotential</strong> is
            strongly negatively correlated with <strong>AccountOwnership</strong> (−0.72), reflecting saturated markets.
            The right panel for Developing economies reveals a robust positive link (0.63) between
            <strong> MobileSubscriptions</strong> and <strong>DigitalFinancePotential</strong>, underscoring that
            expanding mobile access in these regions translates directly into unbanked populations gaining financial
            inclusion—and ultimately higher tax revenues.
          </p>
        </article>

        {/* --- 11. Visualizing the Key Findings --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16">
          <h2 className="text-3xl font-bold border-b-2 pb-2">
            11. Visualizing the Key Findings
          </h2>

          <p className="mt-4">
            The correlation heatmap offers a statistical overview, but scatter plots bring the relationships to life.
            Below is a breakdown of Mobile Subscriptions vs. Tax Revenue by region, showing the steeper slope for developing countries.
          </p>

          <figure className="my-8 text-center">
            <img
              src={scatterByRegion}    // import this asset at the top
              alt="Mobile Subscriptions vs. Tax Revenue by Region"
              className="max-w-full mx-auto rounded-lg shadow-lg object-contain"
            />
            <figcaption className="mt-2 text-center text-sm text-gray-500">
              Figure 9. Mobile Subscriptions vs. Tax Revenue by Region
            </figcaption>
          </figure>

          <p>
            In Developing economies, the slope (~0.09) is significantly steeper (p &lt; 0.001), indicating that each additional 10 mobile subscriptions per 100 people
            correlates with roughly a 0.9% increase in tax revenue. The weaker, non‐significant slope in OECD countries 
            (p = 0.17) confirms that mature markets see diminishing returns from further mobile penetration.
          </p>

          <table className="mx-auto text-sm mb-8 border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border px-2 py-1">Region</th>
                <th className="border px-2 py-1">Variable</th>
                <th className="border px-2 py-1">Coef</th>
                <th className="border px-2 py-1">t-stat</th>
                <th className="border px-2 py-1">p-value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Developing</td>
                <td className="border px-2 py-1">Intercept</td>
                <td className="border px-2 py-1">3.5623</td>
                <td className="border px-2 py-1">1.585</td>
                <td className="border px-2 py-1">0.120</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Developing</td>
                <td className="border px-2 py-1">MobileSubscriptions</td>
                <td className="border px-2 py-1">0.0872</td>
                <td className="border px-2 py-1">4.711</td>
                <td className="border px-2 py-1">&lt;0.001</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">OECD</td>
                <td className="border px-2 py-1">Intercept</td>
                <td className="border px-2 py-1">15.3440</td>
                <td className="border px-2 py-1">4.287</td>
                <td className="border px-2 py-1">&lt;0.001</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">OECD</td>
                <td className="border px-2 py-1">MobileSubscriptions</td>
                <td className="border px-2 py-1">0.0403</td>
                <td className="border px-2 py-1">1.369</td>
                <td className="border px-2 py-1">0.173</td>
              </tr>
            </tbody>
          </table>
        </article>

        {/* --- 12. Conclusion --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto mt-16 mb-20">
          <h2 className="text-3xl font-bold border-b-2 pb-2">12. Conclusion</h2>

          {/* Research Question & Hypothesis */}
          <h3 className="text-2xl font-semibold mt-6">Research Question &amp; Hypothesis</h3>
          <p>
            The study tested whether growth in mobile subscriptions supports higher tax revenue
            through improved payment transparency.
          </p>

          {/* Key Findings */}
          <h3 className="text-2xl font-semibold mt-6">Key Findings</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>
              In <strong>Developing</strong> countries, the scatter‐plot regression slope is steep (≈0.087)
              and statistically significant (<em>p</em> &lt; 0.001), indicating each additional 10 mobile
              subscriptions correlates with ~0.9% GDP increase in tax revenue.
            </li>
            <li>
              In <strong>OECD</strong> countries, the slope is shallower (≈0.040) and not significant
              (<em>p</em> = 0.173), reflecting market saturation of mobile finance.
            </li>
            <li>
              A pooled model shows a positive overall link, but a within‐country fixed‐effects specification
              suggests that year‐to‐year mobile growth alone does not drive tax changes once country‐level
              constants are controlled.
            </li>
          </ul>

          {/* Policy Implications */}
          <h3 className="text-2xl font-semibold mt-6">Policy Implications</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Emerging economies can boost fiscal revenue by scaling up mobile‐based financial services
              and targeting the “mobile‐ready but unbanked” population.
            </li>
            <li>
              Advanced economies will see limited additional fiscal gains from further mobile penetration,
              suggesting policy focus should shift to other drivers of revenue.
            </li>
          </ul>

          {/* Limitations */}
          <h3 className="text-2xl font-semibold mt-6">Limitations</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Only four time points (2011, 2014, 2017, 2021) were available for each country,
              which may underpower within‐country tests.
            </li>
            <li>
              Correlation does not imply causation—unobserved policy shifts or macro shocks may confound
              the observed relationships.
            </li>
          </ul>

          <p className="mt-6">
            Overall, the visual and regression analyses highlight a clear, significant link between
            mobile finance expansion and government revenue in developing markets, while advanced
            economies exhibit diminishing returns on further mobile rollout.
          </p>
        </article>
      </div>
    </section>
  );
}