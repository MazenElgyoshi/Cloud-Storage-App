import React from "react";

function FeaturesBox({ title, icon, desc }) {
  return (
    <div className="element-center flex-col text-white text-center">
      <img
        src={`/assets/images/${icon}`}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"
      />
      <h2 className="text-xl font-semibold my-[15px] ">{title}</h2>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
}

export default FeaturesBox;
