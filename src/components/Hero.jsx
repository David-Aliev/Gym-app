import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
    <div className='flex flex-col gap-4'>
      <p>IT'S TIME TO BECOME</p>
      <h1 className='uppercase font-semibold text-4xl sm:text6xl md:text-1xl lg:text-7xl'>FIT</h1>
    </div>
      <p className='text-sm md:text-base font-light'>Change your life and make things happen the way <span className='text-blue-400'>you</span> want</p>
      <Button text={'Accept & Begin'}></Button>
  </div>
  )
}
