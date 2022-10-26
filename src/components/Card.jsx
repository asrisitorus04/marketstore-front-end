import React from "react";

function ProductCard({name, stock, price, images, onNavigate, onCart, onDisabled}) {
  return  (
    <div
      className="w-52 p-4 flex flex-col items-center gap-2 border-2 border-primary rounded-2xl shadow-lg bg-white hover:brightness-110 cursor-pointer"
    >
      <img
        src={"https://placeimg.com/400/300/arch"}
        alt="Clothes"
        className="object-containt w-40 h-40 rounded-lg"
        onClick={onNavigate}
      />
      
      <div className="flex flex-col gap-0 text-center">
        <p className="font-semibold"
        onClick={onNavigate}
        >{name}</p>
        <p className="text-sm text-primary">{stock} Pcs</p>
        <p className="text-lg font-bold">Rp {price}</p>
      </div>
      <button className="w-full p-1 rounded-md font-bold text-white bg-primary border-2 border-primary hover:bg-white hover:text-primary "
      onClick={onCart || onDisabled} >
        Add To Cart
      </button>
    </div>
  );
}

function PurchaseHisCard() {
  return (
    <div className="w-full flex justify-center">
      <div className="p-2 flex items-center justify-center gap-10">
        <img
          src="https://placeimg.com/400/300/arch"
          alt="Clothes"
          className="object-containt w-36 h-36 border-2 border-secondary rounded-lg"
        />
        <div className="flex flex-col gap-3 text-center">
          <p className="text-lg font-bold">Product Name</p>
          <p className="text-2xl font-bold text-primary">T-Shirt Supreme</p>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-lg font-bold">Quantity</p>
          <p className="text-2xl font-bold text-primary">4</p>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-lg font-bold">Date</p>
          <p className="text-2xl font-bold text-primary">22/10/2022</p>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-lg font-bold">Total Price</p>
          <p className="text-2xl font-bold text-primary">Rp 209.596</p>
        </div>
      </div>
    </div>
  );
}

function SellHisCard() {
  return (
    <div className="w-full flex justify-center">
      <div className="p-2 flex items-center justify-center gap-10">
        <img
          src="https://placeimg.com/400/300/arch"
          alt="Clothes"
          className="object-containt w-36 h-36 border-2 border-secondary rounded-lg"
        />
        <div className="flex flex-col gap-3 text-center">
          <p className="text-lg font-bold">Product Name</p>
          <p className="text-2xl font-bold text-primary">T-Shirt Supreme</p>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-lg font-bold">Quantity</p>
          <p className="text-2xl font-bold text-primary">4</p>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-lg font-bold">Date</p>
          <p className="text-2xl font-bold text-primary">22/10/2022</p>
        </div>
        <div className="flex flex-col gap-3 text-center">
          <p className="text-lg font-bold">Total Price</p>
          <p className="text-2xl font-bold text-primary">Rp 209.596</p>
        </div>
      </div>
    </div>
  );
}
function ItemCart({ product, price }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-auto flex items-center p-2 gap-6 border-2 rounded-lg shadow-md">
        <img
          src="https://placeimg.com/400/300/arch"
          alt="Item"
          className="object-containt w-24 h-24 border-2 border-secondary rounded-lg"
        />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold">{product}</p>
          <p className="text-xl font-bold text-primary">{price}</p>
        </div>
        <svg
          onClick=""
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#F41111"
          className="w-6 h-6 cursor-pointer hover:brightness-75 ml-24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
    </div>
  );
}

export { ProductCard, PurchaseHisCard, SellHisCard, ItemCart };
