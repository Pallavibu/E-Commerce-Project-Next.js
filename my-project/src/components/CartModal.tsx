"use client";
import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 gap-6 rounded-md flex flex-col z-20">
      {!cartItems ? (
        <div>Cart is empty</div>
      ) : (
        //LIST
        <>
          <div className="flex flex-col gap-8">
            {/*ITEM*/}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/23338646/pexels-photo-23338646/free-photo-of-a-red-and-white-flower-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/*TOP*/}
                <div className="">
                  {/*TITLE*/}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/*DESCRIPTION*/}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/*BOTTOM*/}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/*ITEM*/}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/23338646/pexels-photo-23338646/free-photo-of-a-red-and-white-flower-with-a-black-background.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/*TOP*/}
                <div className="">
                  {/*TITLE*/}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/*DESCRIPTION*/}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/*BOTTOM*/}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
              {/*BOTTOM*/}
          <div className="">
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
