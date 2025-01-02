import React from "react";

export default function Progressor() {
  return (
    <div>
      <div className="flex items-start max-w-screen-lg w-full mx-auto mt-10">
        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-orange-500 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-stone-600 font-bold">1</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-lime-600"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-500">
              Step 1: Choose Your Meal{""}
            </h6>
            <p className="text-xs text-orange-300">
            Explore our menu and select the meal you’re in the mood for.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-orange-500 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-stone-600 font-bold">2</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-lime-600"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-500">
              Step 2: Personalize Your Order{""}
            </h6>
            <p className="text-xs text-orange-300">
            Customize your meal exactly how you like it!
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 shrink-0 mx-[-1px] bg-orange-500 p-1.5 flex items-center justify-center rounded-full">
              <span className="text-base text-stone-600 font-bold">3</span>
            </div>
            <div className="w-full h-1 mx-4 rounded-lg bg-lime-600"></div>
          </div>
          <div className="mt-2 mr-4">
            <h6 className="text-base font-bold text-amber-500">
              Step 3: Confirm and Pay{""}
            </h6>
            <p className="text-xs text-orange-300">
            All set? Complete your order at checkout!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
