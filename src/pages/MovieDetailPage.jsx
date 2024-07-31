import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CircularProgressBar } from "../components/CircularProgressBar";
import { useParams } from "react-router-dom";
import { fetchWithToken } from "../helpers/fetcher";
import useSWR from "swr";
import { groupBy } from "lodash";
import { Loading } from "../components/Loading";

export const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [groupedCrews, setGroupedCrews] = useState();

  const { error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
    fetchWithToken,
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        setMovie(data);
        const filterCrews = (data.credits?.crew || [])
          .filter((crew) =>
            ["Director", "Screenplay", "Writer"].includes(crew.job),
          )
          .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));
        const groupedCrews = groupBy(filterCrews, "job");
        setGroupedCrews(groupedCrews);
      },
    },
  );
  if (error) return <div>failed to load</div>;

  return isLoading ? (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loading />
    </div>
  ) : (
    movie && (
      <div className="relative overflow-hidden pb-6 pt-24 text-white">
        <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
          <img
            className="object-contain brightness-[.2]"
            src={`https://image.tmdb.org/t/p/original/${movie.belongs_to_collection?.backdrop_path || movie.backdrop_path}`}
          />
        </div>

        <div className="relative mx-auto flex max-w-screen-xl gap-6">
          <div className="flex-1">
            <img
              className="object-contain"
              src={`https://image.tmdb.org/t/p/w500/${movie.belongs_to_collection?.poster_path || movie.poster_path}`}
              alt={movie.belongs_to_collection?.name || movie.title}
            />
          </div>
          <div className="flex-[2]">
            <p className="mb-2 text-lg font-bold lg:text-2xl">{movie.title}</p>
            <div className="mb-2 flex items-center gap-4">
              <span className="border border-gray-400 px-2 py-1 text-gray-400">
                G
              </span>
              <p>{movie.release_date}</p>
              <p>
                {(movie.genres || []).map((genre) => genre.name).join(", ")}
              </p>
            </div>
            <div className="mb-4 flex gap-10">
              <button className="rounded-md border-none bg-transparent px-5 py-3 transition-all duration-300 hover:bg-primary hover:text-second">
                <FontAwesomeIcon icon={faPlay} className="mr-2" />
                Trailer
              </button>
              <div className="flex items-center gap-2">
                <CircularProgressBar
                  percent={Math.round(movie.vote_average * 10)}
                  strokeColor=""
                />
                <span>Rating</span>
              </div>
            </div>
            <div className="mb-4">
              <p className="font-bold">Overview</p>
              <p>{movie.overview}</p>
            </div>
            <div className="flex gap-10">
              {groupedCrews &&
                Object.keys(groupedCrews).map((job) => (
                  <div key={job}>
                    <p className="font-bold">{job}</p>
                    <p>
                      {(groupedCrews[job].map((crew) => crew.name) || []).join(
                        ", ",
                      )}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
