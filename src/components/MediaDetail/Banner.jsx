import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";
import { CircularProgressBar } from "@components/CircularProgressBar";
import { ImageComponent } from "@components/ImageComponent";
import { useModalContext } from "@contexts/ModalProvider";

export const Banner = ({
  title,
  backdropPath,
  posterPath,
  crews,
  releaseDate,
  genres,
  voteAverage,
  overview,
  trailerVideoKey,
}) => {
  const { openPopup } = useModalContext();
  const groupedCrews = groupBy(crews, "job");

  const onShowPreviewMovie = () => {
    openPopup(
      <iframe
        className="size-full"
        src={`https://www.youtube.com/embed/${trailerVideoKey}`}
        title="YouTube video player"
      ></iframe>,
    );
  };

  return (
    <div className="relative h-svh text-white">
      <div className="absolute inset-0">
        <ImageComponent
          className="h-full w-full object-cover brightness-[.2]"
          src={`https://image.tmdb.org/t/p/original/${backdropPath}`}
        />
      </div>
      <div className="absolute inset-0 z-10 flex gap-6 px-8 pb-6 pt-24">
        <div className="hidden sm:block sm:flex-1">
          <ImageComponent
            className="h-full object-cover"
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterPath}`}
            alt={title}
            width={600}
          />
        </div>
        <div className="flex-[2]">
          <p className="mb-2 text-2xl font-bold lg:text-3xl">{title}</p>
          <div className="mb-2 flex items-center gap-4">
            <span className="border border-gray-400 px-2 py-1 text-gray-400">
              G
            </span>
            <p>{releaseDate}</p>
            <p>{genres.map((genre) => genre.name).join(", ")}</p>
          </div>
          <div className="mb-4 flex gap-10">
            <button
              className="rounded-md border-none bg-transparent px-5 py-3 transition-all duration-300 hover:bg-primary hover:text-second"
              onClick={onShowPreviewMovie}
            >
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Trailer
            </button>
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(voteAverage * 10)}
                strokeColor=""
              />
              <span>Rating</span>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="flex flex-wrap gap-10">
            {groupedCrews &&
              Object.keys(groupedCrews).map((job) => (
                <div key={job}>
                  <p className="font-bold">{job}</p>
                  <p>
                    {(groupedCrews[job].map((crew) => crew.name) || [])
                      .slice(0, 5)
                      .join(", ")}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
