// --- Import all necessary assets ---
import avatar from '../assets/your_avatar.jpg'; // Your avatar image
import foundryEffectImage from '../assets/foundry_benchmark/tableau.jpg';

export default function FoundryEffectReport() {
  return (
    <section id="report" className="py-20 px-16 sm:px-24 lg:px-32 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* --- Hero Header --- */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
            Predicting CPU Benchmarks 
          </h1>
          <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-gray-700">
            The Foundry Effect
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
            <span>Aug 11, 2025</span>
          </div>
        </header>

        {/* --- Cover Image --- */}
        <figure className="mb-16">
          <img
            src={foundryEffectImage}
            alt="Final Dashboard for Semiconductor Stock Analysis"
            className="max-w-3xl mx-auto rounded-lg shadow-lg object-cover border"
          />
          <figcaption className="mt-3 text-center text-sm text-gray-500">
             Fig. 1 – benchmark by foundry
          </figcaption>
        </figure>

        {/* --- 1. Introduction --- */}
        <article className="prose lg:prose-xl w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <h2 className="text-3xl font-bold border-b-2 pb-2">1. Introduction</h2>
          <p className="mt-4">
          </p>
          <p>
          </p>
        </article>
    </div>
  </section>
  );
}

