import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import { RiPlaneLine } from "react-icons/ri";
RiPlaneLine
const MasonryGallery: React.FC = () => {
  const images = [
    "https://cf.bstatic.com/xdata/images/hotel/max1920x1080/400995882.jpg?k=a62a9eaed96beda86f380347352d2b27fea67ded66cff8020e22bd9403c6c212&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1920x1080/400996047.jpg?k=fca18212d8ea3344ed303aba1d8ac7b9f4d8cb4351859426c4c5b817f7212160&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400996042.jpg?k=d8aa53e628d765a42b495d66a4db24b310217ab5371164697ca50ec1c27ae3c8&o=&hp=1",
    "https://images.unsplash.com/photo-1454452176678-c0437432bba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/401004587.jpg?k=6bd7cb71716c8e4cdead4c6634eb3eef35a3d7f192a8624a339aadfc344dd6e5&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400995930.jpg?k=99e2e5c5194cab94f4d58f794d3e0a2f5032f19ef76d15d36302b95a64f6de46&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400996035.jpg?k=7ed2b529458dddd14c4d17220241495d0b301edfb82b8255cb2a563459f4bc1a&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400995980.jpg?k=a9f8dbc7d8b79ec87751de31869bbdddf4d60a5c446cfddf70f5c7ddd6969738&o=&hp=1",
    "https://images.unsplash.com/photo-1590565116373-7654e9b8bf68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400995992.jpg?k=39fae9c16cbece95418f424f2ac9b96f2ec101bf0aac94979845371feca04e38&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400996009.jpg?k=fbd18397f543ce72ad811590a00f4d330d790b92bf1044d7ceb456761efc24ff&o=&hp=1",
    "https://images.unsplash.com/photo-1454452176678-c0437432bba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400995986.jpg?k=c7db50bf522e80a8a53fd5c5e361f63b60ba260f2226b3b8b69749ba726d131a&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400996043.jpg?k=180b6a1a7bc206dbb5604bc21e48714356d52e4b50cca4277234dbb8939a7c4b&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400997902.jpg?k=50df92a32b0566c39d531a6ea923e57e165a07bc9cdbb3c0e7d84eec72f6118f&o=&hp=1",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/400996022.jpg?k=538d1b640c7941fa1b449d38ac37975e63bb07009406a69453fe0ecc77f54b69&o=&hp=1",
    // Add more image URLs here
  ];

  return (
    <ResponsiveMasonry className="w-full mt-12 relative" columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
      <Masonry gutter="20" className="">
        {images.map((image) => (
          <Image      
            key={image}
            src={image}
            alt="House"
            width={310}
            height={310}
            className="my-3 relative self-center"
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryGallery;
