"use client";
// import PodcastCard from "@/components/PodcastCard"; // Assume this is a component that displays podcast info
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";

const LandingPage = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  if (!trendingPodcasts) return <LoaderSpinner />;

  // Define the network data to be displayed
  const networksData = [
    {
      title: "Celo",
      description:
        "We pride ourselves as a boutique validator supporting networks that inspire real value. We have been in the staking business since 2018 and work extensively on Ethereum, Substrate, and Tendermint-based chains.",
      icon: "🌍",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      title: "Polygon",
      description:
        "Expanding our reach, we also collaborate with new and emerging blockchain platforms to foster innovation.",
      icon: "🔺",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      title: "Solana",
      description:
        "We continue to support diverse blockchain networks with unique value propositions and innovative solutions.",
      icon: "⚡",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
  ];

  return (
    <>
      <div className="bg-gradient-to-b from-[#ffe5b4] to-[#fff] min-h-screen flex flex-col items-center justify-center px-6">
        {/* Header */}
        <header className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">WORKX</h1>
          <div className="flex gap-4">
            <button className="text-sm font-medium text-gray-900 hover:underline">
              Sign in
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white text-sm rounded-full hover:bg-orange-600 transition duration-300">
              Sign up
            </button>
          </div>
        </header>

        {/* Main Section */}
        <main className="text-center flex-grow mt-32">
          <p className="uppercase text-sm font-medium text-gray-500 mb-2">
            Built-in apartment services
          </p>
          <h2 className="text-7xl font-bold text-gray-900 leading-tight mb-6">
            All the services
            <br />
            you need <span className="inline-block">→</span>, right
            <br />
            at <span className="inline-block text-orange-500">your app</span>
          </h2>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white text-lg rounded-full hover:bg-orange-600 transition duration-300">
            Get the App
          </button>
        </main>
      </div>

      {/* Network section */}
      <div className="flex justify-center items-center flex-col bg-gray-50 py-16">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Our Networks
        </h3>
        <section className="bg-white py-10 px-6 rounded-lg shadow-lg w-full max-w-5xl">

          <div className="container mx-auto flex flex-col gap-12">
            {networksData.map((network, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-12">
                {/* Left Content */}
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {network.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {network.description}
                  </p>
                  <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition duration-300">
                    Learn More about {network.title}
                  </button>
                </div>

                {/* Right Card */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-1 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 border border-gray-200">
                    <div className={`${network.bgColor} p-4 rounded-full`}>
                      <span
                        className={`${network.textColor} text-xl font-bold`}
                      >
                        {network.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {network.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section>
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Our Networks
        </h3>

        <section>
        {networksData.map((network, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-12">
                {/* Left Content */}
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {network.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {network.description}
                  </p>
                  <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition duration-300">
                    Learn More about {network.title}
                  </button>
                </div>

                {/* Right Card */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-1 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 border border-gray-200">
                    <div className={`${network.bgColor} p-4 rounded-full`}>
                      <span
                        className={`${network.textColor} text-xl font-bold`}
                      >
                        {network.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {network.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600">
        <p>&copy; 2024 WORKX. All rights reserved.</p>
      </footer>
    </>
  );
};

export default LandingPage;
