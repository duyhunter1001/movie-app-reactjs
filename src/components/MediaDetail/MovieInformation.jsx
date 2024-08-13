import { currencyFormatter } from '@libs/utils';

export const MovieInformation = ({ mediaInfo }) => {
  return (
    mediaInfo && <div>
      <p className="mb-4 font-bold lg:text-xl">Information</p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{mediaInfo.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        {(mediaInfo.origin_country || []).map((countryCode) => (
          <img
            key={countryCode}
            src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
            width="30"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p>{mediaInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p>
            {currencyFormatter(mediaInfo.budget)}
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p>{currencyFormatter(mediaInfo.revenue)}</p>
      </div>
    </div>
  );
};
