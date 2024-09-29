import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWithToken } from "@helpers/fetcher";
import useSWR from "swr";
import { Loading } from "@components/Loading";
import { Banner } from "@components/MediaDetail/Banner";
import { ActorList } from "@components/MediaDetail/ActorList";
import { RelatedMediaList } from "@components/MediaDetail/RelatedMediaList";
import { MovieInformation } from "@components/MediaDetail/MovieInformation";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);

  const { error, isLoading } = useSWR(
    `/movie/${id}?append_to_response=release_dates,credits,videos`,
    (endpoint) => fetchWithToken({ endpoint }),
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        setMovie(data);
      },
    },
  );

  const { isLoading: isRelatedMoviesLoading } = useSWR(
    `/movie/${id}/recommendations`,
    (endpoint) => fetchWithToken({ endpoint }),
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        if (data?.results.length) {
          setRelatedMovies(data.results.slice(0, 12));
        }
      },
    },
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) {
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Loading />
      </div>
    );
  }
  const crews = (movie?.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  return movie && (
    <>
      <Banner
        title={movie.title}
        backdropPath={
          movie.belongs_to_collection?.backdrop_path || movie.backdrop_path
        }
        posterPath={
          movie.belongs_to_collection?.poster_path || movie.poster_path
        }
        crews={crews}
        releaseDate={movie.release_date}
        genres={movie.genres || []}
        voteAverage={movie.vote_average}
        overview={movie.overview}
        trailerVideoKey={(movie.videos?.results || []).find(video => video.type === "Trailer")?.key}
      />
      <div className="bg-black">
        <div className="mx-auto flex max-w-screen-2xl gap-8 p-8 max-md:flex-col-reverse">
          <div className="flex-[2]">
            <ActorList actors={movie?.credits?.cast || []} />
            {isRelatedMoviesLoading ? (
              <Loading />
            ) : (
              <RelatedMediaList mediaList={relatedMovies} title="More like this" /> 
            )}
          </div>
          <div className="flex-1 text-white">
            <MovieInformation mediaInfo={movie} />
          </div>
        </div>
      </div>
    </>
  );
}
