import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWithToken } from "@helpers/fetcher";
import useSWR from "swr";
import { Loading } from "@components/Loading";
import { Banner } from "@components/MediaDetail/Banner";
import { ActorList } from "@components/MediaDetail/ActorList";
import { RelatedMediaList } from "@components/MediaDetail/RelatedMediaList";
import { MovieInformation } from '@components/MediaDetail/MovieInformation';

export const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);

  const { error, isLoading } = useSWR(
    `/movie/${id}?append_to_response=release_dates,credits`,
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
  if (isLoading)
    return (
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Loading />
      </div>
    );

  return (
    <>
      <Banner mediaInfo={movie} />
      <div className="bg-black">
        <div className="mx-auto flex max-w-screen-2xl p-8 gap-8">
          <div className="flex-[2]">
            <ActorList actors={movie?.credits?.cast || []} />
            {isRelatedMoviesLoading ? (
              <Loading />
            ) : (
              <RelatedMediaList mediaList={relatedMovies} />
            )}
          </div>
          <div className="flex-1 text-white">
            <MovieInformation mediaInfo={movie} />
          </div>
        </div>
      </div>
    </>
  );
};
