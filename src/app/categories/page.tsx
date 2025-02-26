'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full flex flex-col sm:flex-row">
      {/* Sidebar for larger screens */}
      <div className="first hidden sm:flex w-[20%] lg:w-[18%] xl:w-[15%] 2xl:w-[12%]">
        <Image src={'/Nav Bar Side.png'} alt='' width={360} height={1600}/>
      </div>

      {/* Main Content Section */}
      <div className="sec w-full sm:w-[80%] lg:w-[82%] xl:w-[85%] 2xl:w-[88%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        {/* Pickup & Dropoff Section */}
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
          <Image src={"/Pick - Up.png"} alt="" width={582} height={132} className="w-[200px] md:w-[270px] lg:w-[582px] xl:w-[550px]" />
          <Image src={"/Switch.png"} alt="" width={60} height={60} className="w-[50px] lg:w-[60px]" />
          <Image src={"/Drop - Off.png"} alt="" width={582} height={132} className="w-[200px] md:w-[270px] lg:w-[582px] xl:w-[550px]" />
        </section>

        {/* Popular Cars Section */}
        <section className="popular w-full flex flex-col gap-6">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: 'Koenigsegg', image: '/car.png', desc: 'Sport' },
              { title: 'Nissan GT - R', image: '/car (1).png', desc: 'Luxury' },
              { title: 'Rolls-Royce', image: '/suv.png', desc: 'Sport' },
              { title: 'All New Rush', image: '/suv (4).png', desc: 'Luxury' },
              { title: 'CR - V', image: '/suv (4).png', desc: 'Luxury' },
              { title: 'ALLNEW TERIOS', image: '/suv.png', desc: 'SUV' },
              { title: 'MGZX Exclusive', image: '/suv (4).png', desc: 'Luxury' },
              { title: 'NEW MGZS', image: '/suv.png', desc: 'SUV' },
            ].map((car, index) => (
              <Card key={index} className="w-full max-w-[280px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.title} <Image src={"/heart.png"} alt="" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt="" width={220} height={68} />
                  <Image src={"/Spesification.png"} alt="" width={256} height={24} className='hidden md:flex' />
                  <Image src={"/Spesification (1).png"} alt="" width={256} height={24} className='md:hidden' />
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    $99.00/<span className="text-gray-500">day</span>
                  </p>
                  <Link href={'/details'}>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          {showMore && (
            <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { title: 'MG ZX Exclusive', image: '/suv.png', desc: 'SUV' },
                { title: 'NEW MG ZS', image: '/suv (4).png', desc: 'Sedan' },
                { title: 'New MG ZX Excite', image: '/suv.png', desc: 'Sport' },
                { title: 'NEW MG ZS', image: '/suv (4).png', desc: 'Sedan' },
              ].map((car, index) => (
                <Card key={index} className="w-full max-w-[280px] mx-auto h-auto flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                      {car.title} <Image src={"/heart.png"} alt="" width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{car.desc}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex md:flex-col items-center justify-center gap-4">
                    <Image src={car.image} alt="" width={220} height={68} />
                    <Image src={"/Spesification.png"} alt="" width={256} height={24} className='hidden md:flex' />
                    <Image src={"/Spesification (1).png"} alt="" width={256} height={24} className='md:hidden' />
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      $99.00/<span className="text-gray-500">day</span>
                    </p>
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </section>

        {/* Show More/Less Button */}
        <section className="button w-full text-center">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
