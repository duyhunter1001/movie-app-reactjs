import { Link } from "react-router-dom";

export const MovieCard = ({ poster, title, releaseDate, mediaType, id }) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="relative cursor-pointer rounded-lg border border-slate-900 shadow-sm">
        {mediaType === "tv" ? (
          <div className="absolute right-0 top-3 z-10 rounded-s bg-primary px-2 text-sm font-bold uppercase text-second shadow">
            {mediaType}
          </div>
        ) : (
          ""
        )}
        <div className="overflow-hidden">
          <img
            className="scale-110 rounded-lg transition-all duration-300 hover:scale-100"
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
          />
        </div>
        <div className="px-4 py-2">
          <p className="line-clamp-2 font-bold">{title}</p>
          <p className="text-sm">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};
