import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { CircularProgressBar } from "../components/CircularProgressBar";
import { useParams } from 'react-router-dom';
import { fetchWithToken } from '../helpers/fetcher';
import useSWR from "swr";

export const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  const { error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    fetchWithToken,
    {
      revalidateOnFocus: false,
      onSuccess: (data) => {
        setMovie(data)
        console.log(data);
      },
    },
  );
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return movie && (
    <div className="relative mx-auto max-w-screen-2xl overflow-hidden text-white">
      <div className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
        <img
          className="object-contain brightness-[.2]"
          src={`https://image.tmdb.org/t/p/original/${movie.belongs_to_collection.backdrop_path}`}
        />
      </div>

      <div className="relative mx-auto flex max-w-screen-xl gap-6 p-6">
        <div className="flex-1">
          <img className='object-contain' src={`https://image.tmdb.org/t/p/w500/${movie.belongs_to_collection.poster_path}`} alt={movie.belongs_to_collection.name} />
        </div>
        <div className="flex-[2]">
          <p className="mb-2 text-lg font-bold lg:text-2xl">
            {movie.title}
          </p>
          <div className="mb-2 flex items-center gap-4">
            <span className="border border-gray-400 px-2 py-1 text-gray-400">
              G
            </span>
            <p>{movie.release_date}</p>
            <p>{(movie.genres || []).map(genre => genre.name).join(', ')}</p>
          </div>
          <div className='flex gap-10 mb-4'>
            <button className='bg-transparent transition-all duration-300 border-none rounded-md px-2 hover:bg-primary hover:text-second'>
              <FontAwesomeIcon icon={faPlay} className='mr-2' />
              Trailer
            </button>
            <div className='flex items-center gap-2'>
              <CircularProgressBar percent={Math.round(movie.vote_average * 10)} strokeColor='' />
              <span>Rating</span>
            </div>
          </div>
          <div className='mb-4'>
            <p className='font-bold'>Overview</p>
            <p>{movie.overview}</p>
          </div>
          <div className='flex gap-10'>
            <div>
              <p className='font-bold'>Director</p>
              <p>Jenifer Phang</p>
            </div>
            <div>
              <p className='font-bold'>Writer</p>
              <p>Dan Frey, Russeil Sommer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
