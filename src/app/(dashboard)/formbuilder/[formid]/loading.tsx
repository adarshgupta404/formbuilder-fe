import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="flex w-full h-full flex-col justify-center items-center">
      <ImSpinner2 />
    </div>
  );
};

export default Loading;
