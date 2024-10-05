/* eslint-disable react/prop-types */
import { ImageComponent } from "@components/ImageComponent";
import { useModalContext } from "@contexts/ModalProvider";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchWithToken } from "@helpers/fetcher";
import { cn } from '@libs/utils';
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Movie = ({ data, isActive = false }) => {
  const { openPopup } = useModalContext();
  const [isLoadingTrailer, setIsLoadingTrailer] = useState(false);
  const [trailerVideoKey, setTrailerVideoKey] = useState("");

  useEffect(() => {
    if (isLoadingTrailer) {
      fetchWithToken({
        endpoint: `/movie/${data.id}/videos`,
      }).then(({ results }) => {
        setTrailerVideoKey(
          () =>
            (results || []).find(
              (item) => item.type === "Trailer" && item.site === "YouTube",
            )?.key,
        );
        setIsLoadingTrailer(false);
      });
    }
  }, [isLoadingTrailer, data]);

  useEffect(() => {
    trailerVideoKey && triggerOpenModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trailerVideoKey]);

  const triggerOpenModal = () => {
    openPopup(
      <iframe
      className='size-full'
        src={`https://www.youtube.com/embed/${trailerVideoKey}`}
        title="YouTube video player"
      ></iframe>,
    );
  };

  const onShowPreviewMovie = async () => {
    if (!trailerVideoKey) {
      setIsLoadingTrailer(true);
      return;
    }
    triggerOpenModal();
  };

  return (
    <>
      <ImageComponent
        className="absolute z-[0] size-full object-cover brightness-50 max-md:bg-center"
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        width={1400}
      />
      <div className="h-full w-full px-8 pb-5 pt-16 text-white">
        <div className={cn("absolute top-1/2 left-9 translate-y-[60px] opacity-0 blur-lg", isActive && "animate-show-text")} >
          <p className={cn("mt-4 font-bold text-2xl max-sm:line-clamp-2 md:text-4xl lg:text-6xl")}>{data.title}</p>
          <p className="text-sm">Release: {data.release_date}</p>
          <div className="hidden sm:block">
            <div className="my-4 mt-8 max-w-fit font-bold md:text-2xl">
              Overview
            </div>
            <p className="max-w-xl text-wrap text-justify text-[12px] md:text-base lg:text-lg max-md:line-clamp-2 max-lg:line-clamp-4">
              {data.overview}
            </p>
          </div>
          <div className="mt-4 flex">
            <button
              className="flex max-w-fit cursor-pointer items-center rounded-md bg-primary px-5 py-3 text-[12px] font-bold text-second md:text-base"
              onClick={onShowPreviewMovie}
            >
              {isLoadingTrailer ? (
                <Fragment>
                  <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span>Loading...</span>
                </Fragment>
              ) : (
                <Fragment>
                  <FontAwesomeIcon icon={faPlay} className="mr-2" />
                  <span>Trailer</span>
                </Fragment>
              )}
            </button>
            <Link to={`/movie/${data.id}`}>
              <button className="ml-4 max-w-fit cursor-pointer rounded-md bg-white/30 px-5 py-3 text-[12px] font-bold text-white md:text-base">
                Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
