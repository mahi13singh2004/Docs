import React, { useRef, useState } from "react";
import Card from "./Card";


const Foreground = () => {
    const ref=useRef(null)
  const data = [
    {
      desc: "Hello",
      filesize: ".9mb",
      close: false,
      tag: { isopen: true, tagTitle: "Download now", tagcolor: "green" },
    },

    {
      desc: "Hello",
      filesize: ".9mb",
      close: true,
      tag: { isopen: true, tagTitle: "Download now", tagcolor: "blue" },
    },

    {
      desc: "Hello",
      filesize: ".9mb",
      close: true,
      tag: { isopen: false, tagTitle: "Download now", tagcolor: "blue" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-9 flex-wrap p-8">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
