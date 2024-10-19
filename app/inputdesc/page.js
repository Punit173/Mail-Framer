import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex flex-col gap-5 p-6'>
        <h1 className='text-2xl font-medium text-center'>No more boring <span className='text-yellow-400'>mails</span> just write down your content</h1>
        <input className='h-56 rounded-xl p-5 text-black ' placeholder='Enter the description here...' type="text" name="" id="" />
        <button className='rounded-xl p-3 bg-yellow-400 hover:bg-yellow-300 text-black text-lg font-semibold tracking-widest'>Generate a beautiful mail</button>
      </div>
    </div>
  )
}

export default page
