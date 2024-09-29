import { ImageComponent } from "@components/ImageComponent";
import { RelatedMediaList } from "@components/MediaDetail/RelatedMediaList";
import { useLoaderData } from "react-router-dom";

const GENDER_MAPPING = {
  0: "Not set / not specified",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};

export default function PeoplePage() {
  const peopleInfo = useLoaderData();

  return (
    <div className="w-full px-8 pt-24 text-white">
      <div className="flex gap-4 max-sm:flex-col">
        <div className="flex-1 max-sm:flex max-sm:gap-4">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/w276_and_h350_face${peopleInfo.profile_path}.jpg`}
            width={400}
            height={500}
            className="rounded-lg max-sm:w-[230px] max-sm:h-[280px]"
          />
          <div className="sm:mt-4 space-y-4">
            <p className="text-lg font-bold">Personal Info</p>
            <div>
              <p className="font-bold">Know For</p>
              <p>{peopleInfo.known_for_department}</p>
            </div>
            <div>
              <p className="font-bold">Gender</p>
              <p>{GENDER_MAPPING[peopleInfo.gender]}</p>
            </div>
            <div>
              <p className="font-bold">Place of Birth</p>
              <p>{peopleInfo.place_of_birth}</p>
            </div>
            <div>
              <p className="font-bold">Birthday</p>
              <p>{peopleInfo.birthday}</p>
            </div>
          </div>
        </div>
        <div className="flex-[4]">
          <p className="text-2xl font-bold">{peopleInfo.name}</p>
          <p className="mt-6 text-lg font-bold">Biography</p>
          <div className="mt-4 space-y-4">
            <p className='whitespace-pre-line'>{peopleInfo.biography}</p>
          </div>
          <RelatedMediaList mediaList={peopleInfo.combined_credits?.cast || []} title="Known For" />
        </div>
      </div>
    </div>
  );
}
