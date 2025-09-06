import React from 'react'
import Classic from '../assets/cc-classic.webp'
import Bahamsafar from '../assets/cc-wait-and-share.png'
import Peyk from '../assets/cc-delivery.png'
import Tele from '../assets/cc-tel.webp'
import Plus from '../assets/cc-plus.png'
import Beyne from '../assets/cc-intercity.png'

const Services = () => {
  return (
    <>
      {/* عنوان ثابت */}
      <div dir='rtl' className='justify-end lg:mt-10 top-0 bg-white z-50'>
        <h1 className='text-4xl font-bold mr-25 mt-3 mb-3 '>سرویس های تپسی</h1>
      </div>

      {/* بخش اسکرول */}
      <section dir='rtl' className='overflow-x-auto mb-10 px-6'>
        <div className='items-center flex gap-[85px] mb-10 px-4'>

          {/* کارت */}
          <div className="flex flex-col items-center w-[150px]">
            <div className="flex items-end justify-center h-[120px]">
              <img src={Classic} alt="" className="w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] object-contain opacity-40 hover:opacity-100 transition delay-300"/>
            </div>
            <h1 className="text-center text-2xl mt-2">کلاسیک</h1>
          </div>

          <div className="flex flex-col items-center w-[150px]">
            <div className="flex items-end justify-center h-[120px]">
              <img src={Bahamsafar} alt="" className="cursor-pointer w-[80px] sm:w-[90px] md:w-[100px] lg:w-[100px] object-contain -mb-2 opacity-40 hover:opacity-100 transition delay-300"/>
            </div>
            <h1 className="text-center text-2xl mt-2">باهمسفر</h1>
          </div>

          <div className="flex flex-col items-center w-[150px]">
            <div className="flex items-end justify-center h-[120px]">
              <img src={Peyk} alt="" className="cursor-pointer w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] object-contain opacity-40 hover:opacity-100 transition delay-300"/>
            </div>
            <h1 className="text-center text-2xl mt-2">پیک</h1>
          </div>

          <div className="flex flex-col items-center w-[150px]">
            <div className="flex items-end justify-center h-[120px]">
              <img src={Tele} alt="" className="cursor-pointer w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] object-contain opacity-40 hover:opacity-100 transition delay-300"/>
            </div>
            <h1 className="text-center text-2xl mt-2">تلفنی</h1>
          </div>

          <div className="flex flex-col items-center w-[150px]">
            <div className="flex items-end justify-center h-[120px]">
              <img src={Plus} alt="" className="cursor-pointer  object-contain opacity-40 hover:opacity-100 transition delay-300 w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px]"/>
            </div>
            <h1 className="text-center text-2xl mt-2">پلاس</h1>
          </div>

          <div className="flex flex-col items-center w-[150px]">
            <div className="flex items-end justify-center h-[120px]">
              <img src={Beyne} alt="" className=" cursor-pointer opacity-40 hover:opacity-100 transition delay-300  object-contain w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px]"/>
            </div>
            <h1 className="text-center text-2xl mt-2">بین شهری</h1>
          </div>

        </div>
      </section>
    </>
  )
}

export default Services
