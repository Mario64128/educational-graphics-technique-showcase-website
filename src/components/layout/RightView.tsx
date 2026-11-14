import { JSX, useState } from "react";
import { ResizableBox } from "react-resizable";
import { Box, Stack, Typography } from "@mui/material";
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
        height: "100svh",
        minWidth: 200,
      }}
    >
      <InfoBox title={"Tool"} />
    </Box>
  );
}

function InfoBox({ title }): JSX.Element {
  return (
    <Box sx={{ border: "4.5px solid", textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "arial" }}>
        {title ?? "Tool"} Info
      </Typography>
      <p> Line 1: 200, Line 2: 300</p>
      <p> Line 3: 400, Line 4: 500</p>
    </Box>
  );
}

export default RightView;
