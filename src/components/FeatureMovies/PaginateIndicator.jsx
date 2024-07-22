export const PaginateIndicator = () => {
  return (
    <div className="absolute bottom-[5%] right-16 hidden md:block">
      <ul className="flex gap-1">
        <li className="h-1 w-6 cursor-pointer bg-slate-100"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
        <li className="h-1 w-6 cursor-pointer bg-slate-600"></li>
      </ul>
    </div>
  );
};
