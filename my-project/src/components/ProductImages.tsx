"use client"
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/25740936/pexels-photo-25740936/free-photo-of-a-cup-of-tea-and-cherries-on-a-table.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/17302984/pexels-photo-17302984/free-photo-of-woman-walking-in-front-of-traditional-tenement.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/15130402/pexels-photo-15130402/free-photo-of-model-in-a-long-white-evening-dress-sitting-in-a-rock-cut-window.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/12189045/pexels-photo-12189045.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  },
];

const ProductImages = () => {

const[index, setIndex] = useState(0)

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="">
       {images.map((img)=> (
        <div className="w-1/4 h-32 relative gap-4 mt-8">
          <Image
          src={}
          
          />
        </div>
       ))}
      </div>
    </div>
  );
};

export default ProductImages;
