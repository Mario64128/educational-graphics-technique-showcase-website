import { React, JSX, useState } from "react";
import { ResizableBox } from "react-resizable";
import { Box, Stack } from "@mui/material";
import type { Size } from "../../App.tsx";
import BottomSection from "./BottomSection.tsx";

function RenderView(): JSX.Element {
  const baseW: number = (document.documentElement.clientWidth * 10) / 12;
  const baseH: number = (document.documentElement.clientHeight * 10) / 12;
  const maxSize: Size = { width: baseW, height: baseH };
  const [size, setSize] = useState<Size>(maxSize);

  return (
    <ResizableBox
      style={{ backgroundColor: "gold", borderColor: "red" }}
      width={size.width}
      height={size.height}
      resizeHandles={["n", "s", "e", "se"]}
      maxConstraints={[maxSize.width, maxSize.height]}
      minConstraints={[maxSize.width / 2, maxSize.height / 2]}
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
