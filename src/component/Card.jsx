/* eslint-disable react/prop-types */
import{ FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} className="relative  flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt/>
      <p className="text-sm leading-tigher mt-5 font-semibold text-white">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full py-3 px-8 left-0 text-white"></div>
      <div className="flex items-center justify-between  absolute bottom-20">
        <h5>{data.filesize}</h5>
        <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ml-20">
       {data.close ? <IoClose/> :<LuDownload size= '.7rem' color="#fff"/>}
        
        </span>
      </div>
      {data.tag?.isOpen &&(

          <div className={`tag w-full py-5 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center absolute bottom-0 right-0`} >
          <h3 className="text-md">{data.tag.tagtTittle}</h3>
  
        </div>
      )}
    
    </motion.div>
  )
}

export default Card
