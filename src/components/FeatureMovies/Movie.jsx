/* eslint-disable react/prop-types */
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Movie = ({ data }) => {
  // console.log('item: ', data);

  return (
    <>
      <img
        className="absolute z-[0] size-full object-cover brightness-50"
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
      />
      <div className="w-full h-full px-8 pb-5 pt-16 text-white">
        <div className="absolute bottom-[1.25rem]">
          <p className="mt-4 font-bold lg:text-2xl">{data.title}</p>
          <p className="my-4 max-w-fit border px-2 py-4 text-sm font-light uppercase md:text-base">
            PG13
          </p>
          <p className="text-[12px] sm:text-sm">Release: {data.release_date}</p>
          <div className="hidden sm:block">
            <div className="my-4 mt-8 max-w-fit font-bold lg:text-lg">
              Overview
            </div>
            <p className="max-w-xl text-wrap text-justify text-[12px] md:text-sm">
              {data.overview}
            </p>
          </div>
          <div className="mt-4">
            <button className="max-w-fit cursor-pointer rounded-md bg-white px-5 py-3 text-[12px] font-bold text-black md:text-base">
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Trailer
            </button>
            <button className="ml-4 max-w-fit cursor-pointer rounded-md bg-white/30 px-5 py-3 text-[12px] font-bold text-white md:text-base">
              Information
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
