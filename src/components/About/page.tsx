import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <div className="container mx-auto px-4 py-12" id="about">
        <h1 className="text-3xl font-bold text-center mb-12 text-color2">
          About
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Profile Section */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/images/person.png"
                  alt="Mr Crab"
                  width={310}
                  height={310}
                  className="rounded-full"
                />
              </div>
              <p className="text-sm md:text-base">
                Gunawan Halim merupakan pendiri dari money changer di lahir di
                bandar lampung tanggal 12 agustus 1945 money charger adalah
                penyedia layanan penukaran valuta asing terpercaya yang berdiri
                sejak 1998. Kami berkomitmen memberikan kurs yang kompetitif,
                layanan yang cepat, serta pengalaman transaksi yang aman dan
                nyaman bagi seluruh pelanggan.
              </p>
            </div>

            {/* Description */}
            {/* <p className="text-sm md:text-base">
            money charger adalah penyedia layanan penukaran valuta asing terpercaya yang berdiri sejak 1998. Kami berkomitmen memberikan kurs yang kompetitif, layanan yang cepat, serta pengalaman transaksi yang aman dan nyaman bagi seluruh pelanggan.
          </p> */}

            {/* Icon and Additional Info */}
            <div className="flex gap-4">
              <div className="relative">
                <Image
                  src="/images/bg.png"
                  alt="Mr Crab"
                  width={220}
                  height={220}
                  className="rounded-full"
                />
              </div>
              <p className="text-sm md:text-base">
                Kami hadir untuk membantu memenuhi kebutuhan valuta asing Anda,
                baik untuk keperluan bisnis, perjalanan, maupun kebutuhan
                lainnya. money charger adalah solusi tepat untuk transaksi
                penukaran mata uang yang mudah dan terpercaya.
              </p>
            </div>
          </div>

          {/* Office Image */}
          <div className="relative h-[300px] md:h-full">
            <Image
              src="/images/p.jpg"
              alt="Money"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
