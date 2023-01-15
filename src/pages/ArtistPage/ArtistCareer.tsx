import React from "react";

import { ArtistCareerPropsType } from "./Interface";

function ArtistCareer({ career }: ArtistCareerPropsType) {
  return (
    <div className="hidden mx-20 text-xl font-medium lg:block xl:text-2xl">
      {career.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default React.memo(ArtistCareer);
