import { CircularProgressBar } from "@components/CircularProgressBar";
import { ImageComponent } from "@components/ImageComponent";
import { cn } from '@libs/utils';
import { useState } from 'react';

export const SessionList = ({ sessions }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const curSession = isShowMore ? sessions : sessions.slice(0, 4);

  return (
    <div className="mt-8 text-white">
      <p className="mb-4 font-bold text-lg">Seasons</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {curSession.map((season) => (
          <div
            key={season.id}
            className="flex gap-4 rounded border p-4 shadow-sm"
          >
            <div>
              <ImageComponent
                className="h-auto rounded-lg"
                width={130}
                height={195}
                src={`https://media.themoviedb.org/t/p/w130_and_h195_face/${season.poster_path}`}
              />
            </div>
            <div className="w-2/3">
              <p className="font-bold">{season.name}</p>
              <div className="flex items-center gap-2">
                Rating:
                <CircularProgressBar
                  percent={Math.round(season.vote_average * 10)}
                  sizeCustom={35}
                />
              </div>
              <p className="lg:text-sm">Release date: {season.air_date}</p>
              <p className="lg:text-sm">{season.episode_count} Episode</p>
              <p className="mt-2 line-clamp-4 lg:text-sm">{season.overview}</p>
            </div>
          </div>
        ))}
        <p
          className={cn("cursor-pointer italic", sessions.length > 4 ? "block": "hidden")}
          onClick={() => setIsShowMore(!isShowMore)}
        >
          {isShowMore ? "Show less" : "Show more"}
        </p>
      </div>
    </div>
  );
};
