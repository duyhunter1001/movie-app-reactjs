import { MovieCard } from "@components/MovieCard";

export const RelatedMediaList = ({ mediaList }) => {
  return (
    <div className="mt-8 text-white">
      <p className="mb-4 font-bold lg:text-lg">More like this</p>
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
