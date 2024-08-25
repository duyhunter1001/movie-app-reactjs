import { ImageComponent } from '@components/ImageComponent';
import { Link } from "react-router-dom";

const MediaType = ({ type }) => {
  return type === "tv" ? (
    <div className="absolute right-0 top-3 z-10 rounded-s bg-primary px-2 text-sm font-bold uppercase text-second shadow">
      {type}
    </div>
  ) : (
    ""
  );
};

export const MovieCard = ({ poster, title, releaseDate, mediaType, id }) => {
  return (
    <Link to={mediaType === "tv" ? `/tv-show/${id}` : `/movie/${id}`}>
      <div className="relative h-full cursor-pointer rounded-lg border border-slate-900 shadow-sm flex flex-col">
        <MediaType type={mediaType} />
        <div className="overflow-hidden rounded-t-lg">
          {/* <img
            className="scale-110 rounded-t-lg transition-all duration-300 hover:scale-100"
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
            width={230}
            height={300}
          /> */}
          <ImageComponent
            className="scale-110 rounded-t-lg transition-all duration-300 hover:scale-100"
            width={230}
            height={330}
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
          />
        </div>
        <div className="px-4 py-2 h-1/6 flex-auto">
          <p className="line-clamp-2 font-bold">{title}</p>
          <p className="text-sm">{releaseDate || ""}</p>
        </div>
      </div>
    </Link>
  );
};
