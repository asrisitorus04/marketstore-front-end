import React from "react";

export const Button = () => {
  return (
    <>
      <div>
        <button className="add px-4 py-2 bg-primary border-2 border-primary absolute rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
        <span className="text-add ml-2" >Add To Cart</span>
        </button>
      </div>
    </>
  );
};

export const EditProfile = () => {
  return (
    <div>
        <button className="checkout px-4 py-2 bg-primary border-2 border-primary absolute rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
            <span className="text-checkout ml-2">Edit Profile</span>
        </button>
      </div>
  )
}

export const ChooseFile = () => {
  return (
    <div>
        <button className="checkout px-4 py-2 bg-primary border-2 border-primary absolute rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
            <span className="text-checkout ml-2">Choose File</span>
        </button>
      </div>
  )
}

export const SellProduct = () => {
    return (
    <div>
        <button className="checkout px-4 py-2 bg-primary border-2 border-primary absolute rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
            <span className="text-checkout ml-2">Sell Product</span>
        </button>
    </div>
    )
  }


export const Checkout = () => {
    return (
        <div>
        <button className="checkout px-4 py-2 bg-primary border-2 border-primary absolute rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
            <span className="text-checkout ml-2">Checkout</span>
        </button>
      </div>
    )
  }


export const Confirmed = () => {
    return (
        <div>
        <button className="checkout px-4 py-2 bg-primary border-2 border-primary absolute rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
            <span className="text-checkout ml-2">Confirmed</span>
        </button>
      </div>
    )
  }


  export const Confirmedout = () => {
    return (
        <div>
        <button className="checkout font-bold px-4 py-2 bg-[#D9D9D9] absolute text-white shadow-lg transform active:scale-75 outline-none transition-transform mx-5 flex hover:bg-white hover:text-primary">
            <span className="text-checkout ml-2">Confirmed</span>
        </button>
      </div>
    )
  }


export const Sold = () => {
    return (
        <div>
        <button className="checkout px-4 py-2 bg-primary border-2 border-primary absolute rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
            <span className="text-checkout ml-2">Sold</span>
        </button>
      </div>
    )
  }


  export const Soldout = () => {
    return (
        <div>
        <button className="checkout font-bold px-4 py-2 bg-[#D9D9D9] absolute text-white shadow-lg transform active:scale-75 outline-none transition-transform mx-5 flex hover:bg-white hover:text-primary">
            <span className="text-checkout ml-2">Sold</span>
        </button>
      </div>
    )
  }
