import Image from "next/image";
import Link from "next/link";
import React from "react";


const Header = () => {
  return (
    <div className="relative w-full bg-color2 text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-between w-full max-w-4xl mb-6">
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold ml-4">Money</span>
            <div className="flex items-center mx-4">
              <Image
                src="/images/bg.png"
                alt="Money Changer Icon"
                width={350}
                height={350}
                className="w-[350px] h-[350px]"
                priority
              />
            </div>
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold mr-4">Changer</span>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-white max-w-xl">
            Tukar Uang Jadi Mudah! Penukaran mata uang terpercaya, aman, dan nyaman di Money changer
          </p>
          <Link href={"https://wa.me/6285269656868"}><button
              className={"btn btn-secondary text-color2 font-bold hover:btn-primary hover:text-white text-xs md:text-base px-3 py-1 md:px-6 md:py-2 h-8 md:h-12 min-h-0 md:min-h-[48px mt-8"}
            >
              Hubungi Kami
            </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;