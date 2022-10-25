import React from "react";

export const ListSelling = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-2">
          <div>
            <div className="w-20 rounded bordered={true}">
              <img className="rounded-md" src="https://placeimg.com/192/192/people" />
            </div>
          </div>

          <div>
            <div className="font-semibold text-sm">
                <h5>Sepatu</h5>
                <span>Rp 64.000</span>
            </div>
            <div className="text-xs">
                <p>Keterangan:</p>
                <p>Sepatu ini baru...</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="w-20 rounded bordered={true}">
              <img className="rounded-md" src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="mt-10">
          <div>
            <div className="font-semibold text-sm">
                <h5>Baju</h5>
                <span>Rp 23.000</span>
            </div>
            <div className="text-xs">
                <p>Keterangan:</p>
                <p>Baju ini baru...</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
