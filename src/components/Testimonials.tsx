import React from 'react'

const Testimonials = () => {
  return (
      <div>
    <section className="text-black body-font">
    <div className="container px-5 py-24 mx-auto flex flex-col items-center ">
      <div className=" w-3/4 product-title flex flex-col justify-center items-center mb-10 ">
        <h1 className='text-5xl font-bold mb-3'>Customer Testimonials</h1>
        <p className=' text-center mb-3 text-xl'>Discover how our top-quality medical equipment has transformed lives. Hear firsthand experiences from our satisfied customers who trust us for their healthcare needs and unparalleled support.</p>
      </div>
      <div className="flex justify-around flex-wrap -m-4 cursor-pointer  ">
        <div className="lg:w-1/5 lg:mb-0 mb-6 p-4 rounded-xl shadow-2xl bg-gray-100 ">
          <div className="h-full text-center flex flex-col items-center justify-center">
            <img alt="testimonial" className="w-28 h-28 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/photos/user1.png"/>
            <p className="leading-relaxed">Purchasing medical equipment from this website was a breeze! The user-friendly interface made it easy to find what I needed, and the fast checkout process was impressive. Highly recommended!</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
        <div className="lg:w-1/5 lg:mb-0 mb-6 p-4 rounded-xl shadow-2xl bg-gray-100 ">
          <div className="h-full text-center flex flex-col items-center justify-center">
            <img alt="testimonial" className="w-28 h-28 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/photos/user2.png"/>
            <p className="leading-relaxed">This website made buying medical equipment effortless. The process was incredibly smooth, with a fast and simple checkout. Excellent service and high-quality products—definitely my go-to for future needs!</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
        <div className="lg:w-1/5 lg:mb-0 mb-6 p-4 rounded-xl shadow-2xl bg-gray-100 ">
          <div className="h-full text-center flex flex-col items-center justify-center">
            <img alt="testimonial" className="w-28 h-28 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/photos/user3.png"/>
            <p className="leading-relaxed">I had a fantastic experience with this website. The user-friendly design ensured a hassle-free shopping experience, and the quick delivery exceeded my expectations. I'll be returning for all my medical equipment needs.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
        <div className="lg:w-1/5 lg:mb-0 mb-6 p-4 rounded-xl shadow-2xl bg-gray-100 ">
          <div className="h-full text-center flex flex-col items-center justify-center">
            <img alt="testimonial" className="w-28 h-28 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="/photos/user4.png"/>
            <p className="leading-relaxed">Shopping for medical equipment here was fantastic! The site is easy to navigate, the checkout process was quick, and I received my order in no time. The quality of the products is exceptional</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>

      </div>
    </div>
  </section>
      </div>
  )
}

export default Testimonials