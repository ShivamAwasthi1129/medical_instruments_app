'use client'
import React, { memo, useCallback, useState } from 'react'
import { Button } from './ui/moving-border'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-0 md:py-0'>
      {/* video Element */}
      <div className='w-full h-full absolute '>
        <video
          className='w-[100%]'
          controls={false}
          autoPlay
          loop
          muted
          src='/video/BackgroundVid.mp4'
        ></video>
      </div>
      <div className='mask w-full h-[100%] absolute z-40 bg-black opacity-55'></div>

      {/* Text Element */}
      <div className='p-4 relative  w-full h-[60%] flex flex-col justify-between text-center z-40 '>
        <h1 className='mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text'>
          Perfect Medical Equipment From Your
        </h1>    
        <h1 className=' md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text '>
          Favourite Brand
        </h1>
        <p className='mt-4 font-normal text-base md:text-2xl text-white max-w-6xl mx-auto'>
          At SPEC Medical, we provide high-quality medical equipment designed to
          support healthcare professionals in delivering exceptional patient
          care. Discover our innovative solutions and elevate your medical
          practice.
        </p>
        <div className='mt-4 '>
          <Link href={'/courses'}>
            <Button
              borderRadius='1rem'
              className=' text-white bg-black-800/30 backdrop-blur-3xl font-semibold text-lg '
            >
              Our Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
