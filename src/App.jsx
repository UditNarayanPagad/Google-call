import React, { useState } from 'react'
import Icons from './components/Icons'

const App = () => {
  let active = ()=>{
    (height === '30%') ? setheight("60%") : setheight("30%");
    (display === 'none') ? setdisplay('flex') : setdisplay('none');
    (bgcolor === 'rgb(24 24 27 / var(--tw-bg-opacity))') ? setbgcolor('rgb(206 190 190 / var(--tw-bg-opacity))') : setbgcolor('rgb(24 24 27 / var(--tw-bg-opacity))');
  }
  const [height, setheight] = useState('30%');
  const [display, setdisplay] = useState('none');
  const [bgcolor, setbgcolor] = useState('rgb(24 24 27 / var(--tw-bg-opacity))');
  let features2 = [
    {
      icon: <i className="ri-pause-line"></i>,
      name: "Hold"
    },
    {
      icon: <i className="ri-record-circle-line"></i>,
      name: "Record"
    },
    {
      icon: <i className="ri-vidicon-line"></i>,
      name: "Video"
    },
    {
      icon: <i className="ri-user-add-line"></i>,
      name: "Add call"
    },
    {
      icon: <i className="ri-video-add-line"></i>,
      name: "Add my camera"
    },
  ]
  let features = [
    {
      icon: <i className="ri-keyboard-line"></i>,
      name: "Keypad"
    },
    {
      icon: <i className="ri-volume-mute-line"></i>,
      name: "Mute"
    },
    {
      icon: <i className="ri-bluetooth-connect-fill"></i>,
      name: "Bluetooth"
    },

  ]
  return (
    <>
      <div className='w-full h-screen m-0 p-0 bg-zinc-600 flex justify-center items-center'>
        <div className='min-w-80 w-[23%] h-[90%] relative bg-zinc-900 rounded-lg flex items-center p-5 flex-col overflow-hidden'>
          <div className='h-16 w-16 bg-yellow-400 rounded-full object-cover overflow-hidden'><img src="https://dpwalay.com/wp-content/uploads/2023/09/no-love-dp-14.jpg" alt="" /></div>
          <h1 className='text-zinc-200 mt-4 font-sans font-semibold text-2xl'>Name</h1>
          <p className='text-zinc-400 mt-1'><i class="ri-hd-line"></i> 01:33</p>
          <div id='mainbox' style={{height:height,transition:'all ease .3s'}} className='absolute rounded-t-3xl bg-[#2e211e] w-full p-4 bottom-0 flex flex-col items-center justify-between'>
            <div>
              <div id='more' style={{display:display}} className='flex-wrap-reverse gap-7 justify-between mb-6'>
                {features2.map((feature2, index2) => (
                  <Icons key={index2} {...feature2} />
                ))}
              </div>
              <div className='flex flex-wrap-reverse gap-7 justify-between mb-6'>
                {features.map((feature, index) => (
                  <Icons key={index} {...feature} />
                ))}
                  <div onClick={active} className='flex justify-between flex-col cursor-pointer'>
                    <div id='morebtn' style={{backgroundColor:bgcolor /*,':hover':{color:'white'}*/}} className='h-10 w-10 rounded-full text-lg hover:bg-[#cebebe] text-center text-white hover:text-black flex items-center justify-center'>
                    <i className="ri-more-2-line"></i>
                    </div>
                    <p className='text-zinc-400 text-xs w-11 text-center'>More</p>
                  </div>
              </div>
            </div>
            <div className='h-12 w-12 absolute bottom-0 m-4 bg-red-500 cursor-pointer hover:bg-red-700 rounded-full flex justify-center items-center'><img className='w-8 h-8' src="https://cdn-icons-png.flaticon.com/512/61/61223.png" alt="" /></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App