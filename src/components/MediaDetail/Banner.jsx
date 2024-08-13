import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";
import { CircularProgressBar } from '@components/CircularProgressBar';
import { ImageComponent } from '@components/ImageComponent';

export const Banner = ({ mediaInfo }) => {
  const filterCrews = (mediaInfo?.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));
  const groupedCrews = groupBy(filterCrews, "job");

  return mediaInfo && (
    <div className="relative overflow-hidden pb-6 pt-24 text-white">
      <div className="absolute top-0">
        <ImageComponent
          className="w-full object-contain brightness-[.2]"
          src={`https://image.tmdb.org/t/p/original/${mediaInfo.belongs_to_collection?.backdrop_path || mediaInfo.backdrop_path}`}
          width={1400}
          height={800}
        />
      </div>
      <div className="relative flex gap-6 px-8">
        <div className="flex-1">
          <ImageComponent
            className="object-contain"
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${mediaInfo.belongs_to_collection?.poster_path || mediaInfo.poster_path}`}
            alt={mediaInfo.belongs_to_collection?.name || mediaInfo.title}
            width={600}
            height={900}
          />
        </div>
        <div className="flex-[2]">
          <p className="mb-2 text-lg font-bold lg:text-2xl">
            {mediaInfo.title}
          </p>
          <div className="mb-2 flex items-center gap-4">
            <span className="border border-gray-400 px-2 py-1 text-gray-400">
              G
            </span>
            <p>{mediaInfo.release_date}</p>
            <p>
              {(mediaInfo.genres || []).map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div className="mb-4 flex gap-10">
            <button className="rounded-md border-none bg-transparent px-5 py-3 transition-all duration-300 hover:bg-primary hover:text-second">
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Trailer
            </button>
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(mediaInfo.vote_average * 10)}
                strokeColor=""
              />
              <span>Rating</span>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold">Overview</p>
            <p>{mediaInfo.overview}</p>
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
  );
};
