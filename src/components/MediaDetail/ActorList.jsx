import { useState } from "react";
import { ActorInfo } from '@components/MediaDetail/ActorInfo';

export const ActorList = ({ actors = [] }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const curActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);

  return (
    <div className="text-white">
      <p className="mb-4 text-lg font-bold">Actors</p>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {curActors.map((actor) => (
          <ActorInfo
            key={actor.id}
            id={actor.id}
            name={actor.name}
            character={actor.character}
            profilePath={actor.profile_path}
            episodeCount={actor.episodeCount}
          />
        ))}
      </div>
      <p className="mt-4 cursor-pointer italic" onClick={() => setIsShowMore(!isShowMore)}>
        {isShowMore ? "Show less" : "Show more"}
      </p>
    </div>
  );
};
