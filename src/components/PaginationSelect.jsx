import { useEffect, useState } from "react";
import ArrowDownSvg from "../assets/svg/ArrowDownSvg";
import endPointsURLs from "../assets/utils/EndPoinstURLs";

function PaginationSelect({ setActualURL }) {
  const [actualPage, setActualPage] = useState(1);
  const numberOfPages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52,
  ];
  const [selectOptions, setSelectOptions] = useState(false);

  useEffect(() => {
    setActualURL(endPointsURLs[actualPage - 1]);
  }, [actualPage]);

  return (
    <div className="flex flex-col gap-2.5 justify-center items-center mt-16">
      <div className="flex">
        <div className="w-11 h-11 flex justify-center items-center bg-black text-[#FFCB05] rounded-full text-2xl font-bold">
          {actualPage}
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
          {numberOfPages.map((numberOfPage) => {
            return (
              <button
                key={numberOfPage}
                className="text-[#FFCB05] h-8 text-2xl border border-amber-300 font-bold hover:bg-[#FFCB05] hover:text-black"
                onClick={() => {
                  setActualPage(numberOfPage);
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

export default PaginationSelect;
