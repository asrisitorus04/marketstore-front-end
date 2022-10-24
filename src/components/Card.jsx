import React from "react";

function ProductCard() {
  return (
    <div
      onClick=""
      className="w-52 p-4 flex flex-col items-center gap-2 border-2 border-primary rounded-2xl shadow-lg bg-white hover:brightness-110 cursor-pointer"
    >
      <img
        src="https://placeimg.com/400/300/arch"
        alt="Clothes"
        className="object-containt w-40 h-40 rounded-lg"
      />
      <div className="flex flex-col gap-0 text-center">
        <p className="font-semibold">T-Shirt Supreme</p>
        <p className="text-sm text-secondary">S, M, L, XL</p>
        <p className="text-lg font-bold">Rp 52.399</p>
      </div>
      <button className="w-full p-1 rounded-md font-bold text-white bg-primary border-2 border-primary hover:bg-white hover:text-primary ">
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
