import React from "react";

function VerticalDots() {
  return (
    <div className="flex align-center flex-col h-full gap-0.5">
      <div className="flex justify-between h-full">
        <div className="rounded-sm bg-neutral-600 h-[9px] w-[9px]" />
        <div className="rounded-sm bg-neutral-600 h-[9px] w-[9px]" />
        </div>
        <div className="flex justify-between h-full gap-0.5">
        <div className="rounded-sm bg-neutral-600 h-[9px] w-[9px]" />
        <div className="rounded-sm bg-neutral-600 h-[9px] w-[9px]" />
      </div>
      <div className="flex justify-between h-full gap-0.5">
        <div className="rounded-sm bg-neutral-600 h-[9px] w-[9px]" />
        <div className="rounded-sm bg-neutral-600 h-[9px] w-[9px]" />
      </div>
    </div>
  );
}

export default VerticalDots;
