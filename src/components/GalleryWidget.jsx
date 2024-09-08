import React, { useState } from "react";
import VerticalDots from "./VerticalDots";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GalleryWidget() {
  const [images, setImages] = useState([
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3bc7e644f2e7356134c7ef3290913b60485927c3dd98185f818fb62fdfa5c83?placeholderIfAbsent=true&apiKey=375b726090f04c04b88c9e1ddb85a83f",
      alt: "Gallery image 1"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3bc7e644f2e7356134c7ef3290913b60485927c3dd98185f818fb62fdfa5c83?placeholderIfAbsent=true&apiKey=375b726090f04c04b88c9e1ddb85a83f",
      alt: "Gallery image 2"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c3bc7e644f2e7356134c7ef3290913b60485927c3dd98185f818fb62fdfa5c83?placeholderIfAbsent=true&apiKey=375b726090f04c04b88c9e1ddb85a83f",
      alt: "Gallery image 3"
    }
  ]);

  // Function to handle image upload and add it to the gallery
  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevImages) => [
          ...prevImages,
          { src: reader.result, alt: `Gallery image ${prevImages.length + 1}` }
        ]);
      };
      reader.readAsDataURL(file); // Converts file to data URL for preview
    }
  };

  return (
    <section className="flex flex-wrap gap-4 pt-px pr-9 pb-6 pl-3 mt-4 rounded-2xl bg-zinc-700 shadow-[6px_6px_4px_rgba(0,0,0,0.4)] max-md:pr-5">
      <div className="flex flex-col self-start mt-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a63138c00ce2657dd71c0051edf7a3c84fe64c330a80a88d4afff5234bda7e1?placeholderIfAbsent=true&apiKey=375b726090f04c04b88c9e1ddb85a83f"
          className="object-contain self-center w-6 aspect-square"
          alt=""
        />
        <div className="flex items-center justify-center h-full mt-20">
          <VerticalDots />
        </div>
      </div>
      <div className="flex overflow-hidden flex-col grow shrink-0 py-px basis-0 w-fit max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full mt-1 mb-4">
              <h2 className="self-stretch px-10 py-4 my-auto w-full text-xl font-medium text-white whitespace-nowrap rounded-2xl bg-neutral-900 max-md:px-5 max-md:mt-10">
                Gallery
              </h2>
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <div className=" mt-4 mb-4 gap-1 flex  justify-between w-full text-xs font-extrabold leading-none text-center text-white uppercase max-md:mt-10">
                <label className="flex gap-1 px-7 py-4 my-auto ml-16 bg-white bg-opacity-0 rounded-[104px] shadow-[0px_0px_7px_rgba(255,255,255,0.25)] max-md:px-5 cursor-pointer">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e7efb6190fa2342c01586d5a7e0d44ab52ae8fd2d1beeae71670768905ff351?placeholderIfAbsent=true&apiKey=375b726090f04c04b88c9e1ddb85a83f"
                    className="object-contain shrink-0 w-3 aspect-square"
                    alt=""
                  />
                  <span className="my-auto">Add Image</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAddImage}
                  />
                </label>
                <div className=" mt-4 mb-4 ml-2 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 cursor-pointer">
                 <ArrowBackIcon style={{ fontSize: 30, color: 'grey' }} />
                 </div>
                 <div className=" mt-4 mb-4 mr-6 flex items-center justify-center w-12 gap-0 h-12 rounded-full bg-zinc-800 cursor-pointer" >
                 <ArrowForwardIcon style={{ fontSize: 30, color: 'grey' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 mr-5 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col mb-2">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={image.src}
                  alt={image.alt}
                  className="object-contain grow shrink-0 max-w-full rounded-3xl aspect-[1.06] w-[190px] max-md:mt-6"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryWidget;
