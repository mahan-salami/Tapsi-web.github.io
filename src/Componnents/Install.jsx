import React from "react";
import ins from "../assets/section-install.webp";

const Install = () => {
  return (
    <div className="flex justify-center items-center px-4">
      <div
        className="w-full max-w-[1200px] bg-[#feeeeb] rounded-2xl p-6 md:p-10 mb-10
                   overflow-hidden flex flex-col md:flex-row items-center md:items-start
                   gap-6 md:gap-12 min-h-[320px]"
      >
        {/* تصویر */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start flex-shrink-0 -ml-3 -mt-3">
          <img
            src={ins}
            alt="install"
            className="w-full max-w-[420px] md:max-w-[600px] lg:max-w-[500px] h-auto -ml-11 -mt-6
                       object-contain md:-ml-6 md:-mt-6"
          />
        </div>

        {/* متن و دکمه‌ها */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right w-full md:w-1/2 mt-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug" dir="rtl">
            همین حالا تپسی رو نصب کن!
          </h1>

          <p className="mt-3 text-sm text-gray-700 max-w-[520px]">
            با نصب سوپر اپلیکیشن تپسی می‌توانید علاوه بر درخواست خودرو، از سرویس‌های ارسال بسته،
            سفارش غذا، خرید و داروخانه نیز استفاده کنید.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-3 mt-6 w-full md:w-auto">
            <button className="border border-gray-400 rounded-md py-2 px-4 sm:px-6 cursor-pointer text-xs sm:text-sm md:text-base hover:bg-gray-100 transition">
              اپلیکیشن رانندگان
            </button>

            <button className="bg-gradient-to-r from-red-500 to-orange-500 py-2 px-4 sm:px-6 rounded-md text-white text-xs sm:text-sm md:text-base hover:opacity-90 transition">
              اپلیکیشن تپسی
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;
