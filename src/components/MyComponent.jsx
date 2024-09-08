import React from "react";
import ProfileWidget from "./ProfileWidget";
import GalleryWidget from "./GalleryWidget";
import Divider from "./Divider";

function MyComponent() {
  return (
    <div className="overflow-hidden px-7 py-24 rounded-3xl shadow-2xl max-lg:px-5 max-md:px-3">
      {/* Use flex-col for small screens and flex-row for larger screens */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left Section */}
        <div className="flex flex-col lg:w-6/12 w-full">
          {/* Empty Box to retain container size */}
          <div className="px-8 pt-8 pb-2 w-full h-full rounded-3xl border border-blue-300 border-solid bg-zinc-600 bg-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            {/* This space is intentionally left empty */}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-6/12 max-md:mt-10">
          {/* Profile Widget */}
          <ProfileWidget />
          {/* Divider */}
          <Divider />
          {/* Gallery Widget */}
          <GalleryWidget />
          {/* Divider */}
          <Divider />
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
