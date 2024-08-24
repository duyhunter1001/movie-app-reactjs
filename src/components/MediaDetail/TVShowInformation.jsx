export const TVShowInformation = ({ tvInfo }) => {
  return (
    tvInfo && (
      <div>
        <p className="mb-4 font-bold lg:text-xl">Information</p>
        <div className="mb-4">
          <p className="font-bold">Original Name</p>
          <p>{tvInfo.original_name}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Original Country</p>
          {(tvInfo.origin_country || []).map((countryCode) => (
            <img
              key={countryCode}
              src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
              width="30"
            />
          ))}
        </div>
        <div className="mb-4">
          <p className="font-bold">Status</p>
          <p>{tvInfo.status}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Network</p>
          {(tvInfo.networks || []).map((network) => (
            <img
              className="invert"
              key={network.id}
              src={`https://themoviedb.org/t/p/h30${network.logo_path}`}
            />
          ))}
        </div>
      </div>
    )
  );
};
