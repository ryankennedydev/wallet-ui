import React from 'react'
import { UserIcon } from 'lucide-react'
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
      
      <div className='overflow-y-auto pb-5 h-45 flex flex-col gap-3  stroke-0 '>
        {peoples.filter((e) => `${e.name} ${e.lastname} ${e.username}`.toLowerCase().includes(senduser.toLowerCase()) ).map((contact) => (
            <div onClick={() => newsendclick(contact)  } key={contact.id} className='flex justify-between stroke-0'>
                <div    className='flex gap-2 items-center cursor-pointer'>
                    <div className='flex  bg-stone-800/50 p-2 h-12 w-12 rounded-full justify-center'>
                      <h1  className='text-2xl text-stone-500 items-center  '>
                    {contact.username[1].toUpperCase()}
                    </h1>
                    </div>
                    
                    <div className='flex flex-col text-stone-100'>
                    <h1 className='text-stone-100'>{contact.name}</h1>
                    <h1 className='text-[13px] text-stone-500'>{contact.username}</h1>
                    </div>
                </div>

                <div className='p-2 text-stone-700 items-center'>
                  <UserIcon />
                </div>
                
            </div>
        ))}
      </div>
    </div>
  )
}

export default Contacts
