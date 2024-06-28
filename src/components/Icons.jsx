import React from 'react'

const Icons = ({ icon, name }) => {
  return (
    <>
    <div className='flex justify-between flex-col cursor-pointer'>
    <div className='h-10 w-10 rounded-full text-lg bg-zinc-900 hover:bg-[#cebebe] text-center text-white hover:text-black flex items-center justify-center'>
    {icon}
    </div>
    <p className='text-zinc-400 text-xs w-11 text-center'>{name}</p>
    </div>
    </>
  )
}

export default Icons