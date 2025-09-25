import ArrowDownSvg from "../assets/svg/ArrowDownSvg";
import { useState } from "react";
import convertNumberOfPagesInArray from "../assets/utils/convertNumberOfPagesInArray";

function PaginationSelectByType({
  numberOfPages,
  actualPageByFilter,
  setActualPageByFilter,
}) {
  let numberOfPagesArray = convertNumberOfPagesInArray(numberOfPages);
  const [selectOptions, setSelectOptions] = useState(false);
  return (
    <div className="flex flex-col gap-2.5 justify-center items-center mt-16">
      <div className="flex">
        <div className="w-11 h-11 flex justify-center items-center bg-black text-[#FFCB05] rounded-full text-2xl font-bold">
          {actualPageByFilter}
        </div>

        <div
          className="relative w-11 h-11"
          onClick={() => {
            if (selectOptions === true) {
              setSelectOptions(false);
            } else {
              setSelectOptions(true);
            }
          }}
        >
          <ArrowDownSvg />
        </div>
      </div>

      {selectOptions && (
        <div className="flex flex-col h-40 overflow-y-scroll w-24 bg-white">
          {numberOfPagesArray.map((numberOfPage) => {
            return (
              <button
                key={numberOfPage}
                className="text-[#FFCB05] h-8 text-2xl border border-amber-300 font-bold hover:bg-[#FFCB05] hover:text-black"
                onClick={() => {
                  setActualPageByFilter(numberOfPage);
                  setSelectOptions(false);
                  const mainTitle = document.querySelector("#main-title");
                  if (mainTitle)
                    mainTitle.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {numberOfPage}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PaginationSelectByType;
