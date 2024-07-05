import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
    <div className='flex flex-col gap-4'>
      <p>IT'S TIME TO BECOME</p>
      <h1 className='uppercase font-semibold text-4xl sm:text6xl md:text-1xl lg:text-7xl'>FIT</h1>
    </div>
      <p className='text-sm md:text-base font-light'>this is the text that i maybeeee would change in someday,buttest today i dont have enough strange or power to did it,so its kinda random words with no contex in it heh</p>
      <button className='px-8 py-4 border-[2px] border-blue-400 bg-slate-950 border-solid blueShadow duration-200'>
        <p>Accept & Begin</p>
      </button>
    </div>
  )
}
