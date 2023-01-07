import React from "react";

import { useSelector } from "react-redux";

import { Loader, Error, ArtistCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Loader title="Loading top charts" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-center w-full">
          Top Artists
        </h2>
      </div>

      <div className="flex flex-wrap sm:justify-center justify-center gap-8">
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};
export default TopArtists;
