import{ FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5"

function Card(data) {
  return (
    <div className="relative  flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
      <FaRegFileAlt/>
      <p className="text-sm leading-tigher mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full py-3 px-8 left-0"></div>
      <div className="flex items-center justify-between   absolute bottom-20">
        <h5>{data.filesize}</h5>
        <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center ml-20">
       {data.close ? <IoClose/> :<LuDownload size= '.7rem' color="#fff"/>}
        
        </span>
      </div>
      {data.tag?.isOpen &&(+

          <div className="tag w-full py-5 bg-green-600 flex items-center justify-center absolute bottom-0 right-0" >
          <h3 className="text-md ">{data.tagTittle}</h3>
  
        </div>
      )}
    
    </div>
  )
}

export default Card
