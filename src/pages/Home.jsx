import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
      <Header/>
      <div className='mt-8 relative'>
        <img className='w-full opacity-75 absolute' src="https://cdn.vietnambiz.vn/2019/9/22/ai-15691563894931944590860.png" alt="" />
        <div className='text-3xl lg:text-6xl font-bold absolute top-4 right-24'>
          <h1 className='text-white'>PHẦN MỀM THẨM ĐỊNH</h1>
          <h1 className='text-[#F58E6A]'>ĐẦU TƯ CHO BẠN</h1>
        </div>

        <div className='text-2xl lg:text-4xl font-bold absolute top-24 lg:top-64 right-24 lg:right-72 flex flex-col gap-4'>
          <button className='text-white px-8 py-4 bg-[#2c3c74] rounded-xl'>
            Tư vấn
          </button>

          <button className='text-white px-8 py-4 bg-[#F58E6A] rounded-xl'>
            Mua ngay
          </button>

          <button className='bg-white px-8 py-4 text-[#2c3c74] rounded-xl'>
            Dùng thử miễn phí
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Home