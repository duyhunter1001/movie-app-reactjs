import { useState } from "react";
import { MovieCard } from "./MovieCard";
import useSWR from "swr";
import { fetchWithToken } from "../../helpers/fetcher";
import { cn } from "../../helpers/utils";

export const MediaList = ({ title, tabs }) => {


  const [mediaList, setMediaList] = useState([]);
  const [activeTabName, setActiveTabName] = useState(tabs[0]?.type);

  const { error, isLoading } = useSWR(
    [tabs.find(tab => tab.type === activeTabName).url, activeTabName],
    fetchWithToken,
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        if (data?.results.length) {
          const trendingMediaList = data.results.slice(0, 12);
          setMediaList(trendingMediaList);
        }
      },
    },
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="px-8 py-8 text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-xl font-bold">{title}</p>
        <ul className="flex rounded border border-white">
          {tabs.map((tab, index) => (
            <li
              key={tab.type + index}
              className={cn(
                "cursor-pointer rounded px-4 py-2 transition-all duration-300",
                activeTabName === tab.type ? "bg-white text-black" : "",
              )}
              onClick={() => setActiveTabName(tab.type)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            poster={media.poster_path}
            title={media.title || media.original_name}
            releaseDate={media.release_date || media.first_air_date}
            mediaType={media.media_type || activeTabName}
          />
        ))}
      </div>
    </div>
  );
};
