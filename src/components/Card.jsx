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

function PurchaseHisCard() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 p-4 flex items-center justify-center gap-10 border-2 border-secondary shadow-lg rounded-lg bg-white">
        <img
          src="https://placeimg.com/400/300/arch"
          alt="Clothes"
          className="object-containt w-36 h-36 border-2 border-secondary rounded-lg"
        />
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xl font-bold">Product Name</p>
          <p className="text-3xl font-bold text-primary">T-Shirt Supreme</p>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xl font-bold">Quantity</p>
          <p className="text-3xl font-bold text-primary">4</p>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xl font-bold">Date</p>
          <p className="text-3xl font-bold text-primary">22/10/2022</p>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xl font-bold">Total Price</p>
          <p className="text-3xl font-bold text-primary">Rp 209.596</p>
        </div>
      </div>
    </div>
  );
}

export { ProductCard, PurchaseHisCard };
