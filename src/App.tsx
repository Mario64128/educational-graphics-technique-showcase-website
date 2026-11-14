import { useState } from "react";
import { Grid } from "@mui/material";
import RenderView from "./components/layout/RenderView.tsx";
import RightView from "./components/layout/RightView.tsx";

import "./App.css";
import BottomSection from "./components/layout/BottomSection.tsx";

export interface Size {
  width: number;
  height: number;
}

function App() {
  const baseW: number = 1280;
  const baseH: number = 720;
  const maxSize: Size = { width: baseW, height: baseH };
  const minSize: Size = { width: baseW / 2, height: baseH / 2 };
  const [size, setSize] = useState<Size>(maxSize);

  return (
    <>
      <Grid container sx={{ display: "flex" }}>
        <Grid item="true" sx={{ flexDirection: "row" }}>
          <RenderView
            size={size}
            maxSize={maxSize}
            minSize={minSize}
            setSize={setSize}
          />
          <BottomSection maxSize={maxSize} />
        </Grid>
        <Grid item="true" size="grow">
          <RightView maxSize={maxSize} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
