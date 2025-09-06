import React, { useState } from 'react'
import Logo from '../assets/tapsi-logo-fa.png'
import { Menu, X } from 'lucide-react'

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
  <section className='w-full sticky '>
    <nav className="w-full sticky shadow-md bg-white" dir='rtl'>
      <div className="flex sticky items-center justify-between h-[60px] px-5">
        
        {/* لوگو سمت راست */}
        <div>
          <img src={Logo} alt="لوگو" className="w-[100px] h-auto" />
        </div>

        {/* منو + دکمه (دسکتاپ) */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            <li className='hover:text-amber-600 transition'><a href="">ثبت نام راننده خودرو</a></li>
            <li className='hover:text-amber-600 transition'><a href="">ثبت نام راننده موتور</a></li>
            <li className='hover:text-amber-600 transition'><a href="">وبلاگ</a></li>
            <li className='hover:text-amber-600 transition'><a href="">پشتیبانی</a></li>
            <li className='hover:text-amber-600 transition'><a href="">اپلیکیشن رانندگان</a></li>
          </ul>
          <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-black hover:to-black py-2 px-4 rounded-sm text-white hover:text-amber-400 transition">
            دانلود تپسی
          </button>
        </div>

        {/* همبرگری (موبایل) */}
        <button 
          className="md:hidden" 
          onClick={() => setOpen(!open)}
          aria-label="toggle menu"
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* منوی موبایل */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-lg">
          <a href="">ثبت نام راننده خودرو</a>
          <a href="">ثبت نام راننده موتور</a>
          <a href="">وبلاگ</a>
          <a href="">پشتیبانی</a>
          <a href="">اپلیکیشن رانندگان</a>
          <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-black hover:to-black py-2 px-4 rounded-sm text-white hover:text-amber-400 transition">
            دانلود تپسی
          </button>
        </div>
      )}
    </nav>
     <div className="relative overflow-hidden bg-blue-200 text-blue-900 py-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 z-30" dir='rtl'>

  <h1 className="text-4xl text-center z-30 text-[#4856af] font-bold">ثبت نام آنلاین راننده تپسی در 10 دقیقه</h1>
     {/* متن و دکمه */}
  <button className="bg-blue-700 text-white px-4 py-1 rounded-sm justify-center text-center z-30 ">
    ثبت نام کنید
  </button>
  {/* خطوط انیمیشن */}
  <div className="absolute inset-0 pointer-events-none animate-stripes"></div>
</div>
</section>
    </>
  )
}

export default Nav
