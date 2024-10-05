import { FeatureMovies } from '@components/FeatureMovies';
import { MediaList } from '@components/MediaList';
import { TRENDING_TABS, TOP_RATED_TABS } from '@libs/constants';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS} category="trending" />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} category="top_rated" />
    </>
  );
}