import React from 'react'

const DealsandOffers = () => {
  return (
    <div>
      <section className="text-gray-800 body-font  flex flex-col px-16 py-10  ">
        <div className="upper-container flex">
          <div className="container rounded-2xl mx-auto flex px-5 py-5 md:flex-row flex-col items-center lg:w-[55%] border-2 border-teal-400 ">
            <div className="lg:h-[100%] lg:flex-grow md:w-full lg:pr-5 md:pr-16 flex flex-col justify-evenly md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">CPAP Masks
              </h1>
              <p className="mb-8 leading-relaxed font-bold">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-teal-400  border-0 py-2 px-6 focus:outline-none hover:bg-teal-500  rounded text-lg">Button</button>
              </div>
            </div>
            <img className="object-contain object-center  lg:w-1/4 md:w-1/4 sm:w-1/3" alt="CPAPMasks" src="/photos/CPAPMasks/CPAPMasks.png" />
          </div>
          <div className="container rounded-2xl mx-auto flex px-5 py-5 md:flex-row flex-col items-center  bg-teal-400 lg:w-[45%] ml-10 font-bold text-white ">
            <div className="lg:h-[100%] lg:flex-grow md:w-full lg:pr-5 md:pr-16 flex flex-col justify-evenly md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">Free Shipping
              </h1>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">45% OFF
              </h1>
              <p className=" leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            </div>

          </div>
        </div>
        <div className="lower-container flex flex-row-reverse mt-10">
          <div className="container rounded-2xl mx-auto flex px-5 py-5 md:flex-row flex-col items-center  lg:w-[55%] border-2 border-teal-400 ">
            <div className="lg:h-[100%] lg:flex-grow md:w-full lg:pr-5 md:pr-16 flex flex-col justify-evenly md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold">CPAP Masks
              </h1>
              <p className="mb-8 leading-relaxed font-bold">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-teal-400  border-0 py-2 px-6 focus:outline-none hover:bg-teal-500  rounded text-lg">Button</button>
              </div>
            </div>
            <img className="object-contain object-center  lg:w-1/4 md:w-1/4 sm:w-1/3" alt="CPAPMasks" src="/photos/CPAPMasks/CPAPMasks.png" />
          </div>
          <div className="container rounded-2xl mx-auto flex px-5 py-5 md:flex-row flex-col items-center  bg-teal-400 lg:w-[45%] mr-10 font-bold text-white border-2 border-red-950">
            <div className="lg:h-[100%] lg:flex-grow md:w-full lg:pr-5 md:pr-16 flex flex-col  md:items-start md:text-left mb-16 md:mb-0 items-center text-center border-2 border-red-950">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold border-2 border-red-950">Trusted Brands</h1>
              <p className=" leading-relaxed border-2 border-red-950">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</p>
              <ul className='mt-3'>
                <li className='list-disc'>Huge Selection</li>
                <li className='list-disc'>Always Low Price</li>
                <li className='list-disc'>Fast Shipping</li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default DealsandOffers