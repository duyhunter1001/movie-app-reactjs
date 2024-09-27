import { MovieCard } from "@components/MovieCard";
import { cn } from '@libs/utils';

export const RelatedMediaList = ({ mediaList = [], title }) => {
  return (
    <div className="mt-8 text-white">
      <p className={cn("mb-4 font-bold text-lg", mediaList.length ? "block" : "hidden")}>{title}</p>
      <div className="grid h-max grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            poster={media.poster_path}
            id={media.id}
            title={media.title || media.name}
            releaseDate={media.release_date || media.first_air_date}
            mediaType={media.media_type}
          />
        ))}
      </div>
    </div>
  );
};
