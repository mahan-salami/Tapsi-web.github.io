import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import './css/Footer.css'
import Logo2 from '../assets/tapsi-logo-white.svg'
const Footer = () => {
  return (




      <footer className="bg-black px-10 py-6 mt-10" dir="rtl">
        <div className="flex flex-wrap justify-around gap-6">
          {/* Info & Social */}
          <div className="text-center">
            <img
              src={Logo2}
              alt="Quera logo"
              className="mx-auto w-28"
            />
            <p className="text-white mt-2">اپلیکیشن درخواست خودرو و پیک</p>
            <p className="text-gray-500 mt-2">
             تمام حقوق مادی و معنوی این وبسایت متعلق به تپسی است.
            </p>
            <div className="flex justify-center gap-4 mt-3 text-white text-xl" id="icon">
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaTelegram />
              </a>
            </div>
          </div>

          {/* Footer Sections */}
          <div className="text-right" id="tapsi">
            <h4 className="text-white text-base font-semibold mb-2">
              تپسی
            </h4>
            <ul className="text-gray-500 text-sm space-y-1">

              <li>
                <a href="#">وبلاگ تپسی</a>
              </li>
              <li>
                <a href="#">فرصت شغلی</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
              <li>
                <a href="#">لوگو و هویت سازمانی</a>
              </li>
              <li>
                <a href="#">استخدام بازاریاب</a>
              </li>
            </ul>
          </div>

          <div className="text-right" id="mosaf">
            <h4 className="text-white text-base font-semibold mb-2" >
             مسافران
            </h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <a href="#">دانلود اپ مسافر</a>
              </li>
              <li>
                <a href="#">نسخه وب تپسی</a>
              </li>
              <li>
                <a href="#">پرسش‌های متداول مسافران</a>
              </li>
              <li>
                <a href="#">شرایط و قوانین مسافران</a>
              </li>


               <li>
                <a href="#">باشگاه مشتریان</a>
              </li>
            </ul>
          </div>

          <div className="text-right" id="driver">
            <h4 className="text-white text-base font-semibold mb-2" >
              رانندگان
            </h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <a href="#">دانلود اپ سفیر</a>
              </li>
              <li>
                <a href="#">ثبت نام راننده تاکسی اینترنتی</a>
              </li>
              <li>
                <a href="#">پرسش‌های متداول سفیران</a>
              </li>

               <li>
                <a href="#">تپسی گاراژ</a>
              </li>
               <li>
                <a href="#">ثبت نام راننده موتور</a>
              </li>
            </ul>
          </div>

          <div className="text-right" id="business">
            <h4 className="text-white text-base font-semibold mb-2" >
              کسب و کارها
            </h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>
                <a href="#">پنل سازمانی تپسی</a>
              </li>
              <li>
                <a href="#">خرید کد اعتبار و تخفیف</a>
              </li>

            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center border-t border-gray-300 mt-6 pt-4 text-gray-600 text-sm">
          <p className="text-2xl">
            Design By Mahan Salami
          </p>
        </div>
      </footer>

  );
};

export default Footer;
