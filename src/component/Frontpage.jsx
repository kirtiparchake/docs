
import Card from "./Card"


const Frontpage = () => {
    const data = [
      {desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
      filesize: '.9mb',
      close: true,
      tag:{isOpen : true, tagtTittle:' Download Now', tagColor:'green'},
          
      }, {desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
      filesize: '.9mb',
      close: true,
      tag:{isOpen : true, tagtTittle:' Download Now', tagColor:'green'},
          
      }, {desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
      filesize: '.9mb',
      close: true,
      tag:{isOpen : true, tagtTittle:' Download Now', tagColor:'green'},
          
      }
    ]
  return (
    <div className="fixed top-0 left-0 z-[5] w-full h-full flex gap-5 flex-wrap">
      {data.map ((item 
        
      )=>{
        <Card data={item} />
      })}
    </div>
  )
}

export default Frontpage
