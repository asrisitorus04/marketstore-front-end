import React from "react";
import { ChooseFile } from "./buttons/ButtonAdd";

export const CardModal = () => {
  return (
    <>
      <div className="mt-6 ml-6 w-60 p-4 flex flex-col items-center gap-2 hover:brightness-110 cursor-pointer">
        <img
          src="https://placeimg.com/400/300/arch"
          alt="Clothes"
          className="object-containt h-60 rounded-lg"
        />
        <div className="text-center">
          <div className="w-full">
            <div className="items-center">
              <ChooseFile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
