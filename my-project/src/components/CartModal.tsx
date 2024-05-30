"use client";
import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="absolute p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 gap-6 rounded-md flex flex-col z-20">
      {!cartItems ? (
        <div>Cart is empty</div>
      ) : (
        <div>
          <Image
            src="https://images.pexels.com/photos/23338646/pexels-photo-23338646/free-photo-of-a-red-and-white-flower-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="">
            {/*TOP*/}
            {/*BOTTOM*/}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
