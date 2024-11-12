import About from "./about/page";
import Contact from "./contactus/page";
import Link from "next/link"
import Image from "next/image";


export default function Home() {
  return (
   <>
    <nav className="bg-cyan-950 text-cyan-50 h-auto sm:h-13 md:h-16 lg:h-16 py-2 px-4 flex flex-col sm:flex-row justify-between items-center">
      {/* left dev */}
      <div className="mb-4 sm:mb-0 flex gap-3 sm:gap-2 items-center">
        <Image src="/images/download.jpeg" width={50} height={50} alt="logo"  />
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-serif font-semibold">
          <Link href="#!"><i>Asma</i></Link>
          </h1>
        </div>
        {/* middle dev */}
      <div className="w-full sm:w-auto mb-4 sm:mb-0">
        <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5">
          <li><Link href="/" className="hover:text-red-700  hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:text-red-700  hover:underline">About</Link></li>
          <li><Link href="/contactus" className="hover:text-red-700  hover:underline">Contact</Link></li>
          <li><Link href="/" className="hover:text-red-700  hover:underline">Portfolio</Link></li>
          <li><Link href="/about" className="hover:text-red-700  hover:underline">services</Link></li>
          {/* <li><Link href="/contact" className="hover:text-red-700  hover:underline">Blog</Link></li> */}
        </ul>
        </div>
        {/* right dev */}
      <div className="w-full sm:w-auto ">
        <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-3">
          <li><button className="font-semibold inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-cyan-800 rounded text-cyan-800 mt-4 md:mt-0"><Link href="#!">LogIn</Link></button></li>
          <li><button className="font-semibold inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-cyan-800 rounded text-cyan-800 mt-4 md:mt-0"><Link href="#!">SignUp</Link></button></li>
        </ul>
        </div>
    </nav>


   <About/>
   <Contact/>
   </>
  );
}
