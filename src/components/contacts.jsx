import React from 'react'
import { UserIcon,Check } from 'lucide-react'
const Contacts = ({senduser,setsendUser,newsend, setNewsend}) => {

const newsendclick = (peoplesend) => {
  setNewsend(peoplesend)
}


const peoples = [
  {
    id: 1,
    name: "kennedy",
    lastname: "costa",
    username: "@kennedy"
  },
  {
    id: 2,
    name: "james",
    lastname: "bond",
    username: "@jamesbond"
  },
  {
    id: 3,
    name: "ryan",
    lastname: "walker",
    username: "@ryanwalker"
  },
  {
    id: 4,
    name: "olivia",
    lastname: "martins",
    username: "@oliviam"
  },
  {
    id: 5,
    name: "lucas",
    lastname: "silva",
    username: "@lucassilva"
  },
  {
    id: 6,
    name: "emma",
    lastname: "rodrigues",
    username: "@emmar"
  },
  {
    id: 7,
    name: "gabriel",
    lastname: "santos",
    username: "@gabriels"
  },
  {
    id: 8,
    name: "sophia",
    lastname: "oliveira",
    username: "@sophiao"
  },
  {
    id: 9,
    name: "daniel",
    lastname: "almeida",
    username: "@danielal"
  },
  {
    id: 10,
    name: "isabella",
    lastname: "ferreira",
    username: "@isabellaf"
  }
]
  return (
    <div className='flex flex-col'>
      
      <div className='overflow-y-auto pb-5 h-76 flex flex-col gap-5   stroke-0 '>
        {peoples.filter((e) => `${e.name} ${e.lastname} ${e.username}`.toLowerCase().includes(senduser.toLowerCase()) ).map((contact) => (
            <div onClick={() => {newsendclick(contact);}  } key={contact.id} className={`flex justify-between cursor-pointer p-4 items-center stroke-0 border-1 border-stone-600/10 bg-stone-700/10  rounded-2xl ${newsend.id === contact.id ? "bg-yellow-400/10 border-yellow-400/20" : "" }`} >
                <div    className='flex gap-2 items-center '>
                    <div className={`flex  bg-stone-800/50 border-1 border-stone-700/40 p-2 h-12 w-12 rounded-2xl justify-center border-1 ${newsend.id === contact.id ? "bg-yellow-400/10 border-yellow-400/20" : "" }`}>
                      <h1  className={`text-2xl text-stone-500 items-center ${newsend.id === contact.id ? "text-yellow-400" : ""} `}>
                    {contact.username[1].toUpperCase()}
                    </h1>
                    </div>
                    
                    <div className='flex flex-col text-stone-100'>
                    <h1 className='text-stone-100'>{contact.name}</h1>
                    <h1 className='text-[13px] text-stone-500'>{contact.username}</h1>
                    </div>
                </div>

                <div className={`p-2 text-stone-600 items-center bg-stone-400/10 rounded-lg ${newsend.id === contact.id ? "bg-yellow-400 text-stone-950" : ""}`}>
                  {newsend.id === contact.id ? <Check /> : <UserIcon/>}
                </div>
                
            </div>
        ))}
      </div>
    </div>
  )
}

export default Contacts
