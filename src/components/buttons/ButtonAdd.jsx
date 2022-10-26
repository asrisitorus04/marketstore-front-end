import React from "react";


export const Button = ({ addToCart }) => {
  return (
    <>
      <div>
        <button
          onClick={addToCart}
          className="px-12 py-1 bg-primary border-2 font-bold border-primary rounded-md text-white shadow-lg transform active:scale-75 transition-transform hover:bg-white hover:text-primary"
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export const EditProfile = () => {
  return (
    <div>
        <label htmlFor="my-modal-3" className="checkout px-4 py-2 bg-primary border-2 border-primary rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
            <span className="text-checkout ml-2" >Edit Profile</span>
        </label>
      </div>
  )
}

export const ChooseFile = () => {
  return (
    <div>
      <button className="checkout px-4 py-2 bg-primary border-2 border-primary rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
        <span className="text-checkout ml-2">Choose File</span>
      </button>
    </div>
  );
};

export const SellProduct = () => {
  return (
    <div>
        <label htmlFor="my-modal-2" className="checkout px-4 py-2 bg-primary border-2 border-primary rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
            <span className="text-checkout ml-2">Sell Product</span>
        </label>
    </div>
  );
};

export const Checkout = () => {
  return (
    <div>
      <button className="max-w-full px-24 py-2 bg-primary border-2 border-primary rounded-md font-bold text-xl text-white shadow-lg transform active:scale-75 transition-transformflex hover:bg-white hover:text-primary">
        Checkout
      </button>
    </div>
  );
};

export const Confirmed = () => {
  return (
    <div>
      <button className="checkout items-center justify-center font-extrabold px-4 py-2 bg-white border-2 border-primary rounded-md text-primary shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
        <span>Confirmed</span>
      </button>
    </div>
  );
};

export const Confirmedout = () => {
  return (
    <div>
      <button className="checkout items-center justify-center font-extrabold px-4 py-2 bg-[#D9D9D9] text-white shadow-lg transform active:scale-75 outline-none transition-transform mx-5 flex hover:bg-white hover:text-primary">
        <span>Confirmed</span>
      </button>
    </div>
  );
};

export const Sold = () => {
  return (
    <div>
      <button className="checkout items-center justify-center font-extrabold px-4 py-2 bg-white border-2 border-primary rounded-md text-primary shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
        <span>Sold</span>
      </button>
    </div>
  );
};

export const Soldout = () => {
  return (
    <div>
      <button className="checkout items-center justify-center font-extrabold px-4 py-2 bg-[#D9D9D9] text-white shadow-lg transform active:scale-75 outline-none transition-transform mx-5 flex hover:bg-white hover:text-primary">
        <span>Sold</span>
      </button>
    </div>
  );
};
