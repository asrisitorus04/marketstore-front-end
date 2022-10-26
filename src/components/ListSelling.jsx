import React from "react";

export const ListSelling = ({data}) => {
  return (
    <>
      <div>
      {
          data.map((sell) => {
            return (
              <div className="grid grid-cols-2">
          <div>
            <div className="w-20 rounded bordered={true}">
              <img className="rounded-md" src="https://placeimg.com/192/192/people" />
            </div>
          </div>

          <div>
            <div className="font-semibold text-sm">
                <h5>{sell.name}</h5>
                <span>{sell.price}</span>
            </div>
            <div className="text-xs">
                <p>{sell.detail}</p>
            </div>
          </div>
        </div>
            )
          })
        }
        
      </div>
    </>
  );
};
