import { FeatureMovies } from "../components/FeatureMovies";
import { Header } from "../components/Header";
import { MediaList } from "../components/MediaList";
import { TRENDING_TABS, TOP_RATED_TABS } from "../libs/constants";

function HomePage() {
  return (
    <div className="bg-overview">
      <Header />
      <main className="mx-auto min-h-svh max-w-screen-2xl shadow-md">
        <FeatureMovies />
        <MediaList title="Trending" tabs={TRENDING_TABS} />
        <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
      </main>
    </div>
  );
}

export default HomePage;
