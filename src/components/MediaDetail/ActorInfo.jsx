
export const ActorInfo = ({ id, name, character, profilePath }) => {
  return (
    <div className="relative h-full rounded-lg border border-slate-300 shadow-sm">
      <div className="overflow-hidden">
        <img
          className="rounded-t-lg"
          src={`https://image.tmdb.org/t/p/w276_and_h350_face${profilePath}`}
          alt={name}
          onError={(e) => e.target.src = "/assets/actor_no_image.svg"}
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
