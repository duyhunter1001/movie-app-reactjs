import { cn } from '@helpers/utils';

export const PaginateIndicator = ({
  data,
  onHandleSetMovieActive,
  activeMovieId,
}) => {
  return (
    <div className="absolute bottom-[5%] right-8 hidden md:block">
      <ul className="flex gap-2">
        {data.map((movie) => (
          <li
            key={movie.id}
            className={cn(
              "h-1 w-4 cursor-pointer transition-all duration-300",
              activeMovieId === movie.id ? "bg-slate-100 w-6" : "bg-slate-600",
            )}
            onClick={() => onHandleSetMovieActive(movie.id)}
          ></li>
        ))}
      </ul>
    </div>
  );
};
