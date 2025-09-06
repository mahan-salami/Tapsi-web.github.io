import React from 'react'
import Classic1 from '../assets/illus-classic.png'
const Classic = () => {
        return (
          <>
            <div className="flex flex-col md:flex-row items-center justify-center -mt-10 md:mr-10 px-4 gap-10 md:gap-30 mb-26  w-full h-[600px]" dir="ltr">
              {/* تصویر */}
              <img
                src={Classic1}
                alt="app"
                className="w-[470px] max-w-xs sm:max-w-sm md:max-w-none lg:mt-8"
              />
      
              {/* متن و دکمه‌ها */}
              <div className=" lg:-mt-10 flex flex-col md:text-right text-center mt-6 md:mt-0 md:ml-10 w-full md:w-auto">
                <h1
                  className="  text-2xl sm:text-4xl md:text-4xl -mt-15  leading-snug"
                  dir="rtl"
                >
                  تپسی کلاسیک 
                </h1>
      
                <div className="mt-2 flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center md:justify-end">
                <p>با سرویس تپسی کلاسیک، سریع، آسان و به‌صرفه به مقصد برسید. دراین سرویس می‌توانید به دو یا چند مقصد سفر کنید.</p>
      
                </div>
              </div>
            </div>
          </>
        )
      }
      

export default Classic