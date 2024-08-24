import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWithToken } from "@helpers/fetcher";
import useSWR from "swr";
import { Loading } from "@components/Loading";
import { Banner } from "@components/MediaDetail/Banner";
import { ActorList } from "@components/MediaDetail/ActorList";
import { RelatedMediaList } from "@components/MediaDetail/RelatedMediaList";
import { TVShowInformation } from '@components/MediaDetail/TVShowInformation';

export const TVShowDetailPage = () => {
  const { id } = useParams();
  const [tvShow, setTVShow] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);

  const { error, isLoading } = useSWR(
    `/tv/${id}?append_to_response=release_dates,credits,content_ratings,aggregate_credits`,
    (endpoint) => fetchWithToken({ endpoint }),
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        setTVShow(data);
      },
    },
  );

  const { isLoading: isRelatedMoviesLoading } = useSWR(
    `/tv/${id}/recommendations`,
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
  const crews = (tvShow?.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ["Director", "Writer"].some((job) => jobs.find((j) => j === job));
    })
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));

  return tvShow && (
    <>
      <Banner
        title={tvShow.name}
        backdropPath={
          tvShow.belongs_to_collection?.backdrop_path || tvShow.backdrop_path
        }
        posterPath={
          tvShow.belongs_to_collection?.poster_path || tvShow.poster_path
        }
        crews={crews}
        releaseDate={tvShow.first_air_date}
        genres={tvShow.genres || []}
        voteAverage={tvShow.vote_average}
        overview={tvShow.overview}
      />
      <div className="bg-black">
        <div className="mx-auto flex max-w-screen-2xl gap-8 p-8">
          <div className="flex-[2]">
            <ActorList
              actors={(tvShow?.aggregate_credits?.cast || []).map((cast) => ({
                ...cast,
                character: cast.roles[0]?.character,
                episodeCount: cast.roles[0]?.episode_count,
              }))}
            />
            {isRelatedMoviesLoading ? (
              <Loading />
            ) : (
              <RelatedMediaList mediaList={relatedMovies} />
            )}
          </div>
          <div className="flex-1 text-white">
            <TVShowInformation tvInfo={tvShow} />
          </div>
        </div>
      </div>
    </>
  );
};
