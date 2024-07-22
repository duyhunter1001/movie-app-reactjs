import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header = () => {
  return (
    <header className="fixed z-[500] h-16 w-screen bg-black/50 text-white backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto flex h-full flex-row items-center justify-between max-sm:px-4">
        <div className="flex flex-1">
          <img
            className="mr-8 w-24 object-contain"
            src="/assets/netflix.png"
            alt="logo"
          />
          <div className="hidden gap-8 sm:flex sm:items-center">
            <a href="#">Phim</a>
            <a href="#">Truyền hình</a>
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
