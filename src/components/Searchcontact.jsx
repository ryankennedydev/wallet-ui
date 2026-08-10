import React from 'react'

const Searchcontact = () => {
  return (
    <div>
      <div className="flex items-center relative gap-2">
              <Search className="text-stone-500 "/>
              <input placeholder="Search here" type="text" className="text-stone-100 text-[17px] w-full placeholder:text-stone-500  bg-stone-800/50 outline-none border-1 border-stone-800/100 p-2 rounded-2xl " />
        </div>
    </div>
  )
}

export default Searchcontact
