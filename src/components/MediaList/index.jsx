import { useEffect, useRef, useState } from "react";
import { MovieCard } from "@components/MovieCard";
import useSWR from "swr";
import { fetchWithToken } from "@helpers/fetcher";
import { cn } from "@libs/utils";
import { Loading } from "@components/Loading";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

export const MediaList = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState([]);
  const [activeTabName, setActiveTabName] = useState(tabs[0]?.type);
  const idRefLayoutPill = useRef();

  useEffect(() => {
    idRefLayoutPill.current = uuidv4();
  }, []);

  const { error, isLoading } = useSWR(
    [tabs.find((tab) => tab.type === activeTabName).url],
    (endpoint) => fetchWithToken({ endpoint }),
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

  return (
    <div className="px-8 py-8 text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="md:text-xl font-bold">{title}</p>
        <div className="flex gap-2">
          {tabs.map((tab, index) => {
            return (
              <button
                key={tab.type + index}
                className={cn(
                  "relative cursor-pointer rounded px-4 py-2 text-white transition",
                  activeTabName === tab.type ? "" : "hover:text-white/60",
                )}
                onClick={() => {
                  setActiveTabName(tab.type);
                }}
              >
                {activeTabName === tab.type && (
                  <motion.span
                    layoutId={`active-pill-${idRefLayoutPill.current}`}
                    className="absolute inset-0 bg-primary"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 max-sm:text-sm">{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center">
          <Loading />
        </div>
      ) : (
        <div className="grid h-max grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
          {mediaList.map((media) => (
            <MovieCard
              key={media.id}
              poster={media.poster_path}
              title={media.title || media.original_name}
              releaseDate={media.release_date || media.first_air_date}
              mediaType={media.media_type || activeTabName}
              id={media.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};
