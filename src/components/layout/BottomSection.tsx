import { Box } from "@mui/material";
import { useState } from "react";
import { ResizableBox } from "react-resizable";
import type { Size } from "../../App.tsx";

const barButtons = ["MESH", "MODEL", "TEXTURE", "TRANSFORMS"];

interface BottomSectionProps {
  maxSize: Size;
}

const sx = {
  backgroundColor: "red",
  width: "100%",
  height: "20%",
};

function BottomSection({ maxSize }: BottomSectionProps) {
  sx.maxHeight = maxSize.height / 10.8;
  return (
    <>
      <Box id="bottomSection" sx={sx}>
        {barButtons.map((button) => (
          <ItemBox key={button} content={button} />
        ))}
        <ItemBox
          content={"How To Use"}
          bottomContent={"Examples"}
          split={true}
        />
      </Box>
    </>
  );
}

function ItemBox({ content, bottomContent = "", split = false }): JSX.Element {
  if (split) return SplitItemBox(content, bottomContent);

  return (
    <Box className="itemBox" sx={{ flex: 1 }}>
      {content}
    </Box>
  );
}

function SplitItemBox(topText: string, bottomText: string): JSX.Element {
  return (
    <Box className="itemBox split" sx={{ flex: 1 }}>
      <p className="topSplit">{topText}</p>
      <p className="bottomSplit">{bottomText}</p>
    </Box>
  );
}

export default BottomSection;
