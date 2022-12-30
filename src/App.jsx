import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-r from-black via-red-800 to-black">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex flex-col">
          <div className="relative top-0 h-fit">
            <TopPlay />
          </div>

          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/music-app/" element={<Discover />} />
              <Route path="/music-app" element={<Discover />} />
              <Route path="/music-app/top-artists" element={<TopArtists />} />
              <Route path="/music-app/top-charts" element={<TopCharts />} />
              <Route path="/music-app/around-you" element={<AroundYou />} />
              <Route
                path="/music-app/artists/:id"
                element={<ArtistDetails />}
              />
              <Route
                path="/music-app/songs/:songid"
                element={<SongDetails />}
              />
              <Route
                path="/music-app/search/:searchTerm"
                element={<Search />}
              />
            </Routes>
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#802a2a] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
