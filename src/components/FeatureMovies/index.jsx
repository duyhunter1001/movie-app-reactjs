import { Movie } from '@components/FeatureMovies/Movie';
import { PaginateIndicator } from '@components/FeatureMovies/PaginateIndicator';
import useSWR from "swr";
import { fetchWithToken } from '@helpers/fetcher';
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from '@libs/utils';

// 0b3c3e4fc511459cbb1525e209c60e12

export const FeatureMovies = () => {
  const timeoutSlideMovie = useRef();

  const [movies, setMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState("");

  useEffect(() => {
    clearInterval(timeoutSlideMovie.current);

    timeoutSlideMovie.current = setInterval(() => {
      const indexCurMovie = movies.findIndex(
        (movie) => movie.id === activeMovieId,
      );
      const indexNextMovie =
        indexCurMovie === movies.length - 1 ? 0 : indexCurMovie + 1;
      setActiveMovieId(movies[indexNextMovie].id);
    }, 5000);

    return () => {
      clearInterval(timeoutSlideMovie.current);
    };
  }, [activeMovieId, movies]);

  const { error } = useSWR(
    "/discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&include_video=true",
    (endpoint) => fetchWithToken({ endpoint }),
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        if (data?.results.length) {
          const popularData = data.results.reverse().slice(0, 4);
          setMovies(() => popularData);
          setActiveMovieId(popularData[0].id);
        }
      },
    },
  );
  if (error) return <div>failed to load</div>;

  const onHandleSetMovieActive = (id) => {
    setActiveMovieId(id);
  };

  return (
    <div className="relative max-md:min-h-[50vh] md:min-h-svh">
      {movies.map((movie) => (
        <AnimatePresence key={movie.id}>
          <motion.div
            className={cn(activeMovieId === movie.id ? "block" : "hidden")}
            initial={{ opacity: 0 }}
            animate={{ opacity: activeMovieId === movie.id ? 1 : 0 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Movie data={movie} />
          </motion.div>
        </AnimatePresence>
      ))}
      <PaginateIndicator
        data={movies}
        onHandleSetMovieActive={onHandleSetMovieActive}
        activeMovieId={activeMovieId}
      />
    </div>
  );
};
