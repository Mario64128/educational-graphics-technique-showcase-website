import { Box, Link } from "@mui/material";
import { useState } from "react";
import { ResizableBox } from "react-resizable";
import type { Size } from "../../App.tsx";

const barButtons = ["MESH", "MODEL", "TEXTURE", "TRANSFORMS"];

const sx = {
  backgroundColor: "red",
};

function BottomSection() {
  return (
    <>
      <Box id="bottomSection" sx={sx}>
        {barButtons.map((button) => (
          <LinkBox key={button} content={button} />
        ))}
        <SplitLinkBox topText={"How To Use"} bottomText={"Examples"} />
      </Box>
    </>
  );
}

function LinkBox({ content }): JSX.Element {
  return (
    <Box className="linkBox">
      <Link href={"#" + content.toLowerCase()} underline="hover" color="white">
        {content}
      </Link>
    </Box>
  );
}

function SplitLinkBox({ topText, bottomText }): JSX.Element {
  const correctedTopText: string = topText.replaceAll(" ", "_").toLowerCase();

  return (
    <Box className="linkBox split">
      <p className="topSplit">
        <Link href={"#" + correctedTopText} underline="hover" color="white">
          {topText}
        </Link>
      </p>
      <p className="bottomSplit">
        <Link
          href={"#" + bottomText.toLowerCase()}
          underline="hover"
          color="white"
        >
          {bottomText}
        </Link>
      </p>
    </Box>
  );
}

export default BottomSection;
