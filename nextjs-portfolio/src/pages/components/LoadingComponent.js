import React from "react";

function LoadingComponent() {
  console.log("LOADING");

  return (
    <>
      <div className="dark:bg-zinc-900 bg-zinc-100 min-h-screen transition-colors duration-1000 ease-in-out pb-24 cursor-default ">
        <h1 className="flex text-center mx-auto justify-center text-4xl md:text-4xl items-center">Loading...</h1>
      </div>
    </>
  );
}

export default LoadingComponent;
