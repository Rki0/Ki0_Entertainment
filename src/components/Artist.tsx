import React, { useState } from "react";

import LikeControlButton from "./LikeControlButton";
import { AiOutlineClose } from "react-icons/ai";

interface ArtistType {
  src: string;
  name: string | null;
  artistId: string | null;
  clickHandler: () => void;
  likeArtist: boolean;
  toggleLike: boolean;
  toggleShowLike: () => void;
}

function Artist(props: ArtistType) {
  return (
    <div className="lg:overflow-hidden lg:w-[300px] lg:h-auto mb-2 xl:w-[400px] hover:cursor-pointer relative">
      <img
        onClick={props.toggleShowLike}
        src={process.env.PUBLIC_URL + `${props.src}`}
        alt="artist"
        className="lg:hover:scale-110 transition-transform ease-in-out duration-500 xl:w-[400px]"
      />

      {props.toggleLike ? (
        <div className="bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
          <AiOutlineClose
            size={25}
            className="absolute top-1 right-1"
            onClick={props.toggleShowLike}
          />

          {props.artistId ? (
            <div className="flex-col">
              <p className="mb-4 text-xl font-bold text-center md:text-3xl lg:text-2xl xl:text-3xl">
                {props.name}
              </p>

              <LikeControlButton
                likeArtist={props.likeArtist}
                artistId={props.artistId}
                clickHandler={props.clickHandler}
              />
            </div>
          ) : (
            <LikeControlButton
              likeArtist={props.likeArtist}
              artistId={null}
              clickHandler={props.clickHandler}
            />
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Artist;
