import React from "react";

const Loading = ({ message }) => {
  return (
    <div className="flex items-center justify-center flex-col h-full">
      <div
        className="w-16 h-16 border-4 border-red-400 border-solid rounded-full animate-spin"
        style={{ borderTopColor: "transparent", borderColor: "#f87171" }}
      ></div>
      <p className="mt-3">{message}</p>
    </div>
  );
};

export default Loading;
