import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed w-full h-screen z-[2]">
        <div className="absolute top-[5%] w-full py-10 flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-extrabold text-4xl sm:text-5xl tracking-wider drop-shadow-xl">
          Documents
        </div>

        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] sm:text-[10vw] leading-none tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 drop-shadow-2xl animate-pulse">
          Docs.
        </h1>

        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] sm:text-[10vw] leading-none tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 drop-shadow-2xl animate-pulse">
          <span className="absolute inset-0 blur-lg opacity-70 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"></span>
        </div>
      </div>
    </>
  );
};

export default Background;
