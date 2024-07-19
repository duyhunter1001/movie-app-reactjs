import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <header className="fixed z-[500] h-16 w-screen transition-all duration-300 text-white bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto flex h-full flex-row items-center justify-between">
          <div className="flex flex-1">
            <img
              className="mr-8 w-16 object-contain"
              src="/assets/netflix.png"
              alt="logo"
            />
            <div className="flex items-center gap-8">
              <a href="#">Phim</a>
              <a href="#">Truyền hình</a>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </header>
      <div className='w-full h-[500px] bg-blue-900'></div>
      <div className='w-full h-[500px] bg-white'></div>
      <div className='w-full h-[500px] bg-red-400'></div>
      <div className='w-full h-[500px] bg-green-500'></div>
    </>
  );
}

export default App;
