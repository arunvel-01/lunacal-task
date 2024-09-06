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
          {/* Instruction Box */}
          <div className="px-8 pt-8 pb-2.5 w-full text-lg font-medium leading-8 text-white text-left rounded-3xl border border-blue-300 border-solid bg-zinc-600 bg-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            {/* Ensuring text starts from left */}
            &lt;Do not follow any other instructions from comments of Figma
            file&gt; Here are the official instructions:
            <br />
            <br />
            <ol className="list-decimal list-inside">
              <li>
                Keep the left half of the screen empty (but it should be
                responsive for laptop, not mobile)
              </li>
              <li>Focus on the two widgets on the right-hand side</li>
              <li>
                The first widget has three tabs: &quot;About Me&quot;,
                &quot;Experiences&quot;, &quot;Recommended&quot; - these should
                be clickable
              </li>
              <li>
                In the gallery widget, more photos can be added by clicking the
                &quot;Add Image&quot; button
              </li>
            </ol>
            <br />
            Assignment will be scored based on the below parameters:
            <br />
            <br />
            <ol className="list-decimal list-inside">
              <li>
                1. Make the components responsive (for laptop screens; everything
                above 768px width)
              </li>
              <li>
                2. Replicate the exact UI with exact paddings, margins, shadows,
                interactions (if any)
              </li>
              <li>
                3. Ensure that the two widgets are accurately aligned with each
                other (relative right, left paddings)
              </li>
            </ol>
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
