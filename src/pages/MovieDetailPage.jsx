import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const MovieDetailPage = () => {
  return (
    <div className="relative mx-auto max-w-screen-2xl text-white">
      <img
        className="absolute inset-0 brightness-[.2]"
        src="https://image.tmdb.org/t/p/original//stKGOm8UyhuLPR9sZLjs5AkmncA.jpg"
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 p-6">
        <div className="flex-1">
          <img src="https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg" />
        </div>
        <div className="flex-[2]">
          <p className='font-bold mb-2 text-lg lg:text-2xl'>Descendants: The Rise of Red</p>
          <div className='flex items-center gap-4'>
            <span className='border border-gray-400 text-gray-400 py-1 px-2'>G</span>
            <p>2024-07-11</p>
            <p>Fantasy, Adventure</p>
          </div>
          <div>
            <div>73 Rating</div>
            <button>
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
          </div>
          <div>
            <p>Overview</p>
            <p>Description ...</p>
          </div>
          <div>
            <div>
              <p>Director</p>
              <p>Jenifer Phang</p>
            </div>
            <div>
              <p>Writer</p>
              <p>Dan Frey, Russeil Sommer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
