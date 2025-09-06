import React from 'react'
import Ax2 from '../assets/10min.png'

const Sectionmin = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center -mt-10 md:mr-10 px-4 gap-10 md:gap-30 mb-26 bg-[#eaeaea6a] w-full h-[600px]" dir="rtl">
        {/* تصویر */}
        <img
          src={Ax2}
          alt="app"
          className="w-[470px] max-w-xs sm:max-w-sm md:max-w-none lg:mt-8"
        />

        {/* متن و دکمه‌ها */}
        <div className=" lg:-mt-0 flex flex-col md:text-right text-center mt-8 md:mt-0 md:ml-10 w-full md:w-auto">
          <h1
            className=" text-xl sm:text-4xl md:text-4xl -mt-10 md:-mt-20 leading-snug"
            dir="rtl"
          >
            در کمتر از 10 دقیقه ثبت نام کنید 
          </h1>

          <div className=" flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center md:justify-end mt-15" >
             <ul className="list-disc list-inside">
                <li className='ml-40'><a href="">کسب درآمد بالا تا ۶۵ میلیون تومان</a></li>
                 <li className='ml-40'><a href="">۵ مرتبه تسویه آنی در روز</a></li>
                  <li className='ml-40'><a href="">تخفیف لوازم مصرفی خودرو از تپسی گاراژ</a></li>
                   <li className='ml-40'><a href="">استفاده از امکانات باشگاه سفیران تپسی</a></li>
                 
             </ul>

          </div>


            <div className="mt-8 ml-16 flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center md:justify-end">

             <button className="rounded-sm py-2 px-6 bg-black text-white cursor-pointer text-sm sm:text-base">
              ثبت نام راننده خودرو
            </button>
             <button className="border rounded-sm py-2 px-6 cursor-pointer text-sm sm:text-base" dir='rtl'>
              دانلود برنامه رانندگان
            </button>




          </div>
        </div>
      </div>
    </>
  )
}

export default Sectionmin
