import { Loader } from "@mantine/core";
import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Loader color="#0161A1" />
    </div>
  );
};

export default Loading;
