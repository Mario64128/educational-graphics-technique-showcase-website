import { useState } from "react";
import { Grid } from "@mui/material";
import RenderView from "./components/layout/RenderView.tsx";
import RightView from "./components/layout/RightView.tsx";

import "./App.css";
import BottomView from "./components/layout/BottomView.tsx";

export interface Size {
  width: number;
  height: number;
}

function App() {
  const baseW: number = 1200;
  const baseH: number = 675;
  const maxSize: Size = { width: baseW, height: baseH };
  const minSize: Size = { width: baseW / 2.5, height: baseH / 2.5 };
  const [size, setSize] = useState<Size>(maxSize);

  return (
    <>
      <Grid container sx={{ display: "flex" }}>
        <Grid item="true">
          <RenderView
            size={size}
            maxSize={maxSize}
            minSize={minSize}
            setSize={setSize}
          />
        </Grid>
        <Grid item="true" size="grow">
          <RightView maxSize={maxSize} />
        </Grid>
        <Grid item="true" size={12}>
          <BottomView maxSize={maxSize} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
