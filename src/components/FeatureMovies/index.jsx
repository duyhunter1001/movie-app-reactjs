import { Movie } from "./Movie";
import { PaginateIndicator } from "./PaginateIndicator";

export const FeatureMovies = () => {
  return (
    <div className="relative min-h-[400px] w-screen">
      <Movie />
      <PaginateIndicator />
    </div>
  );
};
