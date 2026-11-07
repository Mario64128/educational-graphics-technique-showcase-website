import { Box } from "@mui/material";
import type { Size } from "../../App.tsx";

interface BottomViewProps {
  maxSize: Size;
}

function BottomView({ maxSize }: BottomViewProps) {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        width: window.innerWidth,
        height: window.innerHeight - maxSize.height,
      }}
    ></Box>
  );
}

export default BottomView;
