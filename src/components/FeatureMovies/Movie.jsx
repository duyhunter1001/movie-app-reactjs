import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Movie = () => {
  return (
    <>
      <img
        className="absolute z-[-1] size-full object-cover brightness-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/8422d9d8-56fe-4013-b98c-bd103c35d1d1/VN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_44d18a35-dc6a-4107-80e9-3bebbf46f026_large.jpg"
      />
      <div className="w-full px-4 pb-5 pt-16 text-white max-sm:absolute max-sm:bottom-0">
        <div className="container relative mx-auto">
          <p className="mt-4 font-bold lg:text-2xl">Inside Out 2</p>
          <p className="my-4 max-w-fit border px-2 py-4 text-sm font-light uppercase md:text-base">
            PG13
          </p>
          <p className="text-[12px] sm:text-sm">2024-06-11</p>
          <div className="hidden sm:block">
            <div className="my-4 mt-8 max-w-fit font-bold lg:text-lg">
              Overview
            </div>
            <p className="max-w-xl text-wrap text-justify text-[12px] md:text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here,
              content here, making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          <div className="mt-4">
            <button className="max-w-fit cursor-pointer rounded-md bg-white px-5 py-3 text-[12px] font-bold text-black md:text-base">
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Trailer
            </button>
            <button className="ml-4 max-w-fit cursor-pointer rounded-md bg-white/30 px-5 py-3 text-[12px] font-bold text-white md:text-base">
              Information
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
