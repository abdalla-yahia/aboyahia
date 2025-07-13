// import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    
<footer className="text-text_alt_3 rounded-lg max-w-full shadow bg-background mt-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        
        <hr className="my-0 border-white  sm:mx-auto  lg:my-8" />
      <br />
        <span className="block max-w-full text-sm text-gray-200 sm:text-center">تم تصميم وتطوير الموقع بواسطة  <Link href="https://www.linkedin.com/in/abdalla-yahia/" target="_blank" className="hover:underline text-blue-700 font-bold text-lg">م / عبدالله يحيى <span className=" max-w-full text-sm text-gray-200 sm:text-center">جميع الحقوق محفوظة  ©</span></Link> </span>
    </div>
</footer>


  )
}
