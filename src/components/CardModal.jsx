import React, { useState } from "react";
import { ChooseFile } from "./buttons/ButtonAdd";

export const CardModal = () => {
  const [image, setImage] = useState("https://fakeimg.pl/350x200/");
  const [saveImage, setSaveImage] = useState(null);

  function handleUploadChange(e) {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  }

  function uploadImage() {
    if (saveImage) {
      let formData = new FormData();
      formData.append("photo", saveImage);
      fetch("https://virtserver.swaggerhub.com/9tw/ALTA-commerce/1.0.0/users", {
        method: "PUT",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.href = data.image;
        });
    } else {
      alert("Choose Your Image from files");
    }
  }

  return (
    <>
      <div className="mt-6 ml-6 w-60 p-4 flex flex-col items-center gap-2 hover:brightness-110 cursor-pointer">
        <img
          src={image}
          alt="Clothes"
          className="object-containt h-60 rounded-lg"
        />
        <div className="text-center">
          <div className="w-full">
            <div className="items-center" onChange={handleUploadChange}>
              <div className="ml-32">
                <input
                  type="file"
                  className="form-control"
                  id="formFile"
                  onChange={handleUploadChange}
                  accept="image/"
                ></input>
              </div>
            </div>
            <button
              onClick={uploadImage}
              className="login mt-8 ml-96 px-4 py-2 rounded-md text-white font-semibold border-2 border-[#358600] shadow-lg transform active:scale-75 transition-transform mx-5 flex"
            >
              <span className="text-login text-[#358600] text-center">
                SUBMIT
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
