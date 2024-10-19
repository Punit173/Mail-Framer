import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='text-4xl font-bold text-center'>Drafted <span className='text-yellow-300'>Mail</span></h1>
      <div className='relative'>
        <h1 className='absolute left-14 top-14 text-white text-4xl font-bold z-10'>
          Hello
        </h1>
        <img
          className='rotate-90 w-[5500px] md:w-[1200px] md:rotate-0'
          src="https://images.freeimages.com/images/large-previews/f21/vintage-letter-paper-texture-0410-5699329.jpg?fmt=webp&w=500"
          alt="imgnotfound"
        />
      </div>
    </div>
  )
}

export default page
