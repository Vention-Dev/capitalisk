import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="flex items-center h-full w-full bg-dashboard bg-cover bg-center text-white">
      <div className="w-full items-center m-12 drop-shadow-md">
        <div className="absolute float-left ml-44 text-5xl md:text-7xl md:ml-60">
          <h1 className="absolute text-outline-stroke">Windwalk</h1>
          <h1 className="absolute text-gradient -ml-1 -mt-1 ">Windwalk</h1>
        </div>
        <h1 className="text-outline-stroke text-5xl md:text-7xl ">
          A very <br /> Carousel
        </h1>
        <p className="mt-4 text-xl font-thin md:mt-8 md:text-3xl">
          {" "}
          Created with React, TailwindCSS and a sharp eye for details.
        </p>
      </div>
    </div>
  );
};
