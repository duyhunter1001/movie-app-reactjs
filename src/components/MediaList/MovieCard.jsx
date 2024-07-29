
export const MovieCard = ({ poster, title, releaseDate, mediaType }) => {
  return (
    <div className="relative rounded-lg border border-slate-900 shadow-sm cursor-pointer">
      {mediaType === "tv" ? (
        <div className="absolute z-10 right-0 top-3 rounded-s bg-primary px-2 text-sm font-bold uppercase text-second shadow">
          {mediaType}
        </div>
      ) : (
        ""
      )}
      <div className='overflow-hidden'>
        <img
          className="rounded-lg scale-110 hover:scale-100 transition-all duration-300"
          src={`https://image.tmdb.org/t/p/original/${poster}`}
        />
      </div>
      <div className="px-4 py-2">
        <p className="line-clamp-2 font-bold">{title}</p>
        <p className="text-sm">{releaseDate}</p>
      </div>
    </div>
  );
};
