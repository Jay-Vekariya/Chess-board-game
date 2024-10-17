import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Chess_board_game = () => {
  const squares = useSelector((state) => state.squares);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col gap-10 bg-slate-800  2xl:h-[900px] xl:h-[1000px] lg:h-[900px] md:h-[900px] sm:h-[900px] h-[800px]">
        <h1 className="uppercase pt-8 text-white text-center 2xl:text-[50px] xl:text-[50px] lg:text-[45px] md:text-[40px] sm:text-[35px] text-[45px]">
          Chess board game
        </h1>
        <div className="grid grid-rows-8 grid-cols-8 gap-6 border-2 p-8 m-8 ">
          {squares.map((square, index) => (
            <div
              key={index}
              style={{
                backgroundColor: square.clickedcolor || square.color,
              }}
              className="2xl:justify-between xl:justify-between  2xl:h-[50px] 2xl:w-[50px] xl:h-[50px] xl:w-[50px] lg:h-[50px] lg:w-[50px] md:h-[50px] md:w-[50px] sm:h-[50px] sm:w-[50px] h-[23px] w-[20px]  cursor-pointer"
              onClick={() =>
                dispatch({ type: "CHANGE_COLOR", payload: { index } })
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Chess_board_game;
