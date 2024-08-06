import React from 'react'
import { Component , Activity , School as sc, AlignJustify, X} from 'lucide-react';
import Logo from "../assets/logo.svg"

const SideBar = () => {

    const eventList = [
        {
            id: 1,
            name: "Symposium",
            icon: Component,
            path: "/event/symposium"

        },
        {
            id: 2,
            name: "Paper Presentation",
            icon: Activity,
            path: "/event/pp"

        },
        {
            id: 3,
            name: "Hackathon",
            icon: sc,
            path: "/event/hackathon"

        },
    ]


  return (
    <div>
        <div className='flex flex-row items-center justify-around bg-slate-900 p-2' >
            <img src={Logo} alt="logo" className='w-18' />
            <h2 className='font-bold text-xl text-white'>EEE Events</h2>
            <X color= 'white' size='20'/>

        </div>
        <div className='flex flex-col float-left p-2 gap-3 text-lg ml-4 mt-7'>
            {eventList.map((item,index)=>(
            <button className={`flex gap-3 font-medium ${item.id === 2 ? 'hover:text-blue-900' : 'hover:text-sky-900'}`}>
                    <item.icon/>
                <h2>{item.name}</h2>
                </button>
            ))}
        </div>
    </div>
  )
}

export default SideBar