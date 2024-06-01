"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collection",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-a-woman-sitting-in-a-field-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collection",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/25184945/pexels-photo-25184945/free-photo-of-fashion-eastern-dresses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collection",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/25184945/pexels-photo-25184945/free-photo-of-fashion-eastern-dresses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[100vh-(80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/*TEXT CONTAINER*/}
            <div className="h-1/2 xl:w-1/2">
              <h2>{slide.description}</h2>
              <h1>{slide.title}</h1>
              <Link href={slide.url}>
                <button>SHOP NOW</button>
              </Link>
            </div>
            {/*IMAGE CONTAINER*/}
            <div className="h-1/2 xl:w-1/2  relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
