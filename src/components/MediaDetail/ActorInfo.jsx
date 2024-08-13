import { ImageComponent } from '@components/ImageComponent';

export const ActorInfo = ({ name, character, profilePath }) => {
  return (
    <div className="relative h-full rounded-lg border border-slate-300 shadow-sm">
      <div className="overflow-hidden">
        <ImageComponent
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/w276_and_h350_face${profilePath}`}
          alt={name}
          srcError={"/assets/actor_no_image.svg"}
          width={276}
          height={350}
        />
      </div>
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        <p>18 Chap</p>
      </div>
    </div>
  );
};
