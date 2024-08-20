import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed z-[500] w-full bg-black/50 text-white backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-full max-w-screen-2xl flex-row items-center justify-between px-8">
        <div className="flex">
          <Link to="/">
            <img
              className="mr-8 w-28 h-16 cursor-pointer object-contain"
              src="/assets/logo-film.png"
              alt="logo"
            />
          </Link>

          <div className="hidden gap-8 sm:flex sm:items-center">
            <a href="#">Movie</a>
            <a href="#">TV Show</a>
          </div>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="hidden sm:block"
          />
          <FontAwesomeIcon icon={faBars} className="block sm:hidden" />
        </div>
      </div>
    </header>
  );
};
