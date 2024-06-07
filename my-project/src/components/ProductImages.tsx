import Image from "next/image";

const ProductImages = () => {
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src="https://images.pexels.com/photos/13008664/pexels-photo-13008664.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="">
        <div>
          <Image
            src="https://images.pexels.com/photos/13008664/pexels-photo-13008664.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
            fill
            sizes="50vw"
            className="object-cover rounded-md"
          />
        </div>

        
      </div>
    </div>
  );
};

export default ProductImages;
