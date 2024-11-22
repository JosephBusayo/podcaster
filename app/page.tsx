"use client";
import PodcastCard from "@/components/PodcastCard";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from "@/components/LoaderSpinner";

const Landingpage = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);

  if (!trendingPodcasts) return <LoaderSpinner />;

  return (
    <div className="mt-9 text-white-1">
THE LANDING PAGE
    </div>
  );
};

export default Landingpage;
