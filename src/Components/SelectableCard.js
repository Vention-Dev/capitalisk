import React from "react";

export const SelectableCard = (params) => {
  return (
    <div
      onClick={() => params.action(params.index)}
      className={`bg-white border-card border-2 m-4 pt-2 pl-4 pb-4 rounded-2xl drop-shadow-sm cursor-pointer hover:bg-button-grey ${
        params.currIndex === params.index ? "outline outline-4 outline-card-selected" : ""
      }`}
    >
      <img src={params.content.icon} alt="" className="bg-button-grey rounded-full p-2 m-2" />
      <h1 className="">{params.content.title}</h1>
      <p className="text-description w-2/3 pb-0">{params.content.description}</p>
    </div>
  );
};
