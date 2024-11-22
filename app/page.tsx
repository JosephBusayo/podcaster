"use client";
// import PodcastCard from "@/components/PodcastCard"; // Assume this is a component that displays podcast info
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";

const LandingPage = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  if (!trendingPodcasts) return <LoaderSpinner />;

  return (
    <>
      <div className="bg-[#ffe5b4] min-h-screen flex flex-col items-center justify-center px-6">
        {/* Header */}
        <header className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-900">PODCASTER</h1>
          <div className="flex gap-4">
            <button className="text-sm font-medium text-gray-900 hover:underline">
              Sign in
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white text-sm rounded-full hover:bg-orange-600">
              Sign up
            </button>
          </div>
        </header>

        {/* Main Section */}
        <main className="text-center">
          <p className="uppercase text-sm font-medium text-gray-500 mb-2">
            Built-in apartment services
          </p>
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            All the services
            <br />
            you need <span className="inline-block">→</span>, right
            <br />
            at <span className="inline-block text-orange-500">your app</span>
          </h2>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg rounded-full hover:bg-orange-600">
            Get the App
          </button>
        </main>
      </div>

      {/*Network section*/}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 px-6">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">Networks</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We pride ourselves as a boutique validator supporting networks
              that inspire real value. We have been in the staking business
              since 2018 and work extensively on Ethereum, Substrate, and
              Tendermint-based chains.
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg rounded-full hover:bg-orange-600 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Right Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform transform hover:scale-105">
              <div className="bg-indigo-200 p-4 rounded-full">
                <span className="text-indigo-600 text-xl font-bold">🌍</span>{" "}
                {/* Icon/Emoji */}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">Celo</h4>
                <p className="text-gray-600 mt-1">
                  A blockchain platform focused on mobile usage.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center gap-4 transition-transform transform hover:scale-105">
              <div className="bg-indigo-200 p-4 rounded-full">
                <span className="text-blue-600 text-xl font-bold">📘</span>{" "}
                {/* Icon/Emoji */}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  The Graph Protocol
                </h4>
                <p className="text-gray-600 mt-1">
                  An indexing protocol for querying networks like Ethereum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
