import React, { useState } from "react";
import TabButton from "./TabButton";
import VerticalDots from "./VerticalDots";

function ProfileWidget() {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("About Me");

  // Tab data with labels and content
  const tabs = [
    { label: "About Me", content: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella." },
    { label: "Experiences", content: "I have 10 years of experience in sales, with a focus on customer relationship management and B2B sales. At Salesforce, I specialize in helping businesses streamline their sales processes using our suite of tools." },
    { label: "Recommended", content: "Here are some resources I highly recommend: 'The Challenger Sale' by Matthew Dixon, and 'Salesforce Essentials' by Marc Benioff." }
  ];

  return (
    <section className="flex gap-5 justify-between px-3.5 pt-4 pb-7 rounded-2xl bg-zinc-700 shadow-[6px_6px_4px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col self-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a63138c00ce2657dd71c0051edf7a3c84fe64c330a80a88d4afff5234bda7e1?placeholderIfAbsent=true&apiKey=375b726090f04c04b88c9e1ddb85a83f"
          className="object-contain self-center w-6 aspect-square"
          alt="Profile Icon"
        />
        <div className="flex items-center justify-center h-full mt-20">
        <VerticalDots />
        </div>
      </div>
      <div className="flex flex-col max-md:max-w-full">
        <nav className="flex flex-col justify-center px-1.5 py-2 w-full text-lg font-medium leading-none text-center text-gray-400 rounded-3xl bg-neutral-900 max-md:max-w-full">
          <div className="flex py-0 px-0 relative gap-2 items-center max-md:max-w-full">
            {tabs.map((tab, index) => (
              <TabButton
                key={index}
                label={tab.label}
                isActive={activeTab === tab.label}
                onClick={() => setActiveTab(tab.label)}
              />
            ))}
          </div>
        </nav>
        <article className="mt-9 text-xl text-neutral-400 max-md:mr-1 max-md:max-w-full">
          {/* Show content based on the selected tab */}
          {tabs.find(tab => tab.label === activeTab)?.content}
        </article>
      </div>
      <div className="flex shrink-0 my-auto w-2 h-16 rounded-lg shadow-[4px_4px_5px_rgba(0,0,0,0.25)]" />
    </section>
  );
}

export default ProfileWidget;
