import { React, JSX, useState } from "react";
import { ResizableBox } from "react-resizable";
import { Box, Stack } from "@mui/material";
import type { Size } from "../../App.tsx";

interface LeftViewProps {
  size: Size;
  maxSize: Size;
  minSize: Size;
  setSize: React.Dispatch<React.SetStateAction<number>>;
}

function RenderView({
  size,
  maxSize,
  minSize,
  setSize,
}: LeftViewProps): JSX.Element {
  return (
    <ResizableBox
      style={{ backgroundColor: "gold", borderColor: "red" }}
      width={size.width}
      height={size.height}
      resizeHandles={["s", "e", "se"]}
      maxConstraints={[maxSize.width, maxSize.height]}
      minConstraints={[minSize.width, minSize.height]}
      lockAspectRatio={false}

      onResize={(e, data) => {
        setSize(data.size);
      }}
    >
      <img
        width={size.width}
        height={size.height}
        src="../BlueEyesCat.webp"
      ></img>
    </ResizableBox>
  );
}

export default RenderView;
