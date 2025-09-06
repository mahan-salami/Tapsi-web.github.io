import React from 'react'
import Ax3 from '../assets/3.png'
const Kasbokar = () => {
  return (
    <>
           <div className="flex flex-col md:flex-row items-center justify-center -mt-10 md:mr-10 px-4 gap-10 md:gap-30 mb-26  w-full h-[600px]" dir="ltr">
             {/* تصویر */}
             <img
               src={Ax3}
               alt="app"
               className="w-[470px] max-w-xs sm:max-w-sm md:max-w-none lg:mt-8"
             />
     
             {/* متن و دکمه‌ها */}
             <div className=" lg:-mt-40 flex flex-col md:text-right text-center mt-6 md:mt-0 md:ml-10 w-full md:w-auto text-base/16">
               <h1
                 className=" text-3xl sm:text-4xl md:text-5xl -mt-10 md:mt-20 leading-snug"
                 dir="rtl"
               >
                
                 خدمات ویژه کسب کار‌ها
                 </h1>
               <p>شما می‌توانید از امکانات ویژه تپسی برای کسب وکارها مانند درخواست نامحدود خودرو و پیک به صورت همزمان و ایجاد کد تخفیف سازمانی استفاده کنید.</p>
               
     
               <div className="mt-2 flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center md:justify-end">
                  <button className="border rounded-sm py-2 px-6 cursor-pointer text-sm sm:text-base" dir='rtl'>
                   خزید کد تخفیف سازمانی
                 </button>
     
     
                 <button className="rounded-sm py-2 px-6 bg-black text-white cursor-pointer text-sm sm:text-base">
                  پنل سازمانی تپسی
                 </button>
     
               </div>
             </div>
           </div>
    
    </>
  )
}

export default Kasbokar