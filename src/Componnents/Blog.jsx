import React from "react";
import P1 from '../assets/log-DriverArtboard-6.jpg'
import P2 from '../assets/شاخص-ارسال-محصولات-فروشگاه_های-آنلاین.webp'
import P3 from '../assets/section-driver-2.jpg'

const Blog = () => {
  return (
    <div className="m-4 sm:m-6 lg:m-8 mb-10">
      {/* تیتر بالا */}
      <h1 className="text-2xl font-bold mb-6 text-right">
        تازه‌ترین‌های وبلاگ تپسی
      </h1>

      {/* گرید کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-4 justify-center">
        
        {/* کارت اول */}
        <div className="bg-[#ffffff] rounded-lg h-[400px] max-w-[370px] mx-auto flex flex-col shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] cursor-pointer">
          <img src={P3} alt="" className="w-[330px] h-auto mx-auto mt-5 rounded-lg" />
          <h1 className="text-right text-xl sm:text-2xl mr-4 mt-2">
            قابلیت انتخاب مقصد منتخب برای سفیران تپسی
          </h1>
          <p className="text-gray-400 text-right mr-4 text-sm sm:text-base">
            کی از امکانات جذاب اپلیکیشن تپسی برای سفیران، انتخاب «مقصد منتخب» است. اما این قابلیت چیست و چگونه می‌تواند تاثیر مثبتی بر درآمد و همچنین کارآمدی فعالیت رانندگان داشته باشد؟
          </p>
        </div>

        {/* کارت دوم */}
        <div className="bg-[#ffffff] rounded-lg h-[400px] max-w-[370px] mx-auto flex flex-col shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] cursor-pointer">
          <img src={P2} alt="" className="w-[330px] h-auto mx-auto mt-5 rounded-lg" />
          <h1 className="text-right text-xl sm:text-2xl mr-4 mt-2">
            ثبت سفارش تا تحویل درب منزل؛ روند ارسال کالا در فروشگاه‌های اینترنتی
          </h1>
          <p className="text-gray-400 text-right mr-4 text-sm sm:text-base">
            گاهی هزینه تحویل سفارش به مشتری، بیشتر از سودی است که از فروش همان محصول به‌دست می‌آورید. بسیاری از آنلاین‌شاپ‌ها از جمله قنادی‌ها، گل‌فروشی‌ها
          </p>
        </div>

        {/* کارت سوم */}
        <div className="bg-[#ffffff] rounded-lg h-[400px] max-w-[370px] mx-auto flex flex-col shadow-[0_15px_30px_-10px_rgba(0,0,0,0.2)] cursor-pointer">
          <img src={P1} alt="" className="w-[330px] h-auto mx-auto mt-5 rounded-lg" />
          <h1 className="text-right text-xl sm:text-2xl mr-4 mt-2">
            مراحل ثبت نام آنلاین رانندگان در تپسی <br /> مدارک و شرایط +
          </h1>
          <p className="text-gray-400 text-right mr-4 text-sm sm:text-base">
            تپسی این فرصت را فراهم کرده تا همه افراد فرصت کسب درآمد مناسب با خودروی شخصی را داشته باشند. برای آسان‌تر شدن روند کار، امکان ثبت‌نام آنلاین و غیرحضوری در تپسی فعال شده است
          </p>
        </div>

      </div>
    </div>
  );
};

export default Blog;
