import Link from "next/link";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId?: string;
  limit?: number;
}) => {
  try {
    if (!categoryId) {
      throw new Error("Category ID is required");
    }

    const wixClient = await wixClientServer();

    const res = await wixClient.products
      .queryProducts()
      .eq("collectionIds", categoryId)
      .limit(limit || PRODUCT_PER_PAGE)
      .find();

    console.log(res);

    return (
      <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {res.items.map((product: products.Product) => (
          <Link
            href={"/" + product.slug}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
          >
            <div className="relative w-full h-80">
              <Image
                src="https://images.pexels.com/photos/25184945/pexels-photo-25184945/free-photo-of-fashion-eastern-dresses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-1000"
              />
              <Image
                src="https://images.pexels.com/photos/23947602/pexels-photo-23947602/free-photo-of-a-woman-sitting-in-a-field-with-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                fill
                sizes="25vw"
              />
            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${product.price?.price}</span>
            </div>
            <div className="text-sm text-gray-500">My description</div>
            <button className="rounded-2xl ring-1 ring-[#F35C7A] text-[#f3537A] px-4 py-2 text-sm w-max hover:text-white hover:bg-[#F35C7A]">
              Add to Cart
            </button>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    return <div>Error: </div>;
  }
};

export default ProductList;
