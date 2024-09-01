import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <>
    <Analytics/>
    <div className="relative w-full h-screen bg-white">
      <Background />
      <Foreground/>
    </div>
    </>
  );
};

export default App;
