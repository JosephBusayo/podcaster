"use client";
// import PodcastCard from "@/components/PodcastCard"; // Assume this is a component that displays podcast info
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";
import Image from "next/image";
// import Link from

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
      <div className="bg-[#ffe5b4] min-h-screen flex flex-col items-center justify-center px-6">
        {/* Header */}
        <header className="absolute top-6 left-6 right-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">PODCASTER</h1>
          <div className="flex gap-4">
            <button className="text-sm font-medium text-gray-900 hover:underline">
              Sign in
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white-1 text-sm rounded-full hover:bg-orange-600 transition duration-300">
              Sign up
            </button>
          </div>
        </header>

        {/* Main Section */}
        <main className="text-center flex-grow mt-32">
          <p className="uppercase text-sm font-medium text-gray-500 mb-2">
            Your AI-powered podcast companion
          </p>
          <h2 className="text-7xl font-bold text-gray-900 leading-tight mb-6">
            Discover, Create, and Share
            <br />
            Podcasts <span className="inline-block">with Ease</span>
            <br />
            using <span className="inline-block text-orange-500">AI</span>
          </h2>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white-1 text-lg rounded-full hover:bg-orange-600 transition duration-300">
            Get Started with AI
          </button>
        </main>
      </div>

      {/* Network section */}
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* First Row */}
          <div className="bg-gray-200 rounded-lg shadow-md p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center h-screen">
              {/* Left Section: Text */}
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  Dive Into Engaging Stories and Insights
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Discover the latest episodes of our podcast, where we discuss
                  topics ranging from technology and lifestyle to personal
                  growth and culture. Our thought-provoking conversations will
                  keep you informed and entertained.
                </p>
              </div>

              {/* Right Section: Image */}
              <div className="flex justify-center">
                <Image
                  src="/images/lightbox.jpg"
                  alt="Podcast Microphone"
                  className="rounded-xl shadow-md"
                  width={500}
                  height={600}
                />
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="bg-gray-200 rounded-lg shadow-md p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center h-screen">
              {/* Left Section: Image */}
              <div className="flex justify-center">
                <Image
                  src="/images/podcast-home.jpg"
                  alt="Podcast Setup"
                  className="rounded-xl shadow-md"
                  width={500}
                  height={300}
                />
              </div>

              {/* Right Section: Text */}
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  Behind the Scenes
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ever wondered what goes into creating a podcast? Join us for
                  an exclusive look at our recording sessions, equipment, and
                  creative process. Learn how we bring compelling stories to
                  life with every episode.
                </p>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="bg-gray-200 rounded-lg shadow-md p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center h-screen">
              {/* Left Section: Text */}
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  Dive Into Engaging Stories and Insights
                </h1>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Discover the latest episodes of our podcast, where we discuss
                  topics ranging from technology and lifestyle to personal
                  growth and culture. Our thought-provoking conversations will
                  keep you informed and entertained.
                </p>
              </div>

              {/* Right Section: Image */}
              <div className="flex justify-center">
                <Image
                  src="/images/microphone.jpg"
                  alt="Podcast Microphone"
                  className="rounded-xl shadow-md"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-600">
        <p>&copy; 2024 PODCASTER. All rights reserved.</p>
      </footer>
    </>
  );
};

export default LandingPage;
