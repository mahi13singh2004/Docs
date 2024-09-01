import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data , reference}) => {
  return (
    <motion.div drag dragConstraints={reference} dragElastic={0.2} whileDrag={{scale:1.2}}  className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden ">
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight ">{data.desc}</p>
      <div className="absolute bottom-0 w-full left-0">
        <div className="flex items-center py-3  px-8  justify-between mb-3">
          <h5>{data.filesize}</h5>

          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoCloseOutline />
            ) : (
              <MdOutlineFileDownload size=".7em" color="white" />
            )}
          </span>
        </div>
        {data.tag.isopen && (
          <div
            className={`w-full py-4 ${
              data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
