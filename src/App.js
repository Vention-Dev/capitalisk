import React from "react";
import { Carousel } from "./Components/Carousel";
import { Dashboard } from "./Components/Dashboard";

function App() {
  return (
    <div className="h-screen w-screen grid grid-rows-4 md:grid-cols-2 md:grid-rows-none">
      <div><Dashboard /></div>
      <div className="row-span-3 md:row-span-1"><Carousel /></div>
    </div>
  );
}

export default App;
