import { JSX, useState } from "react";
import { ResizableBox } from "react-resizable";
import { Box, Stack } from "@mui/material";
import type { Size } from "../../App.tsx";

interface RightViewProps {
  maxSize: Size;
}

function RightView({ maxSize }: RightViewProps): JSX.Element {
  return (
    <Box
      sx={{
        backgroundColor: "orange",
        width: "100%",
        height: maxSize.height,
      }}
    >
      Info
    </Box>
  );
}

export default RightView;
