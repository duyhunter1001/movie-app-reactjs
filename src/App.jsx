import { FeatureMovies } from "./components/FeatureMovies";
import { Header } from "./components/Header";
import { MediaList } from './components/MediaList';
import { TRENDING_TABS, TOP_RATED_TABS } from './libs/constants';

function App() {
  return (
    <>
        <Header />
        <main className='max-w-screen-2xl mx-auto shadow-md min-h-svh'>
          <FeatureMovies />
          <MediaList title="Trending" tabs={TRENDING_TABS} />
          <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
        </main>
    </>
  );
}

export default App;
