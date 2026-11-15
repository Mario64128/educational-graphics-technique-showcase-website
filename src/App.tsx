import { useState } from "react";
import { Grid, Stack } from "@mui/material";
import RenderView from "./components/layout/RenderView.tsx";
import RightView from "./components/layout/RightView.tsx";

import "./App.css";
import BottomSection from "./components/layout/BottomSection.tsx";

export interface Size {
  width: number;
  height: number;
}

function App() {
  return (
    <>
      <Grid container sx={{ display: "flex" }}>
        <Grid item="true">
          <Stack>
            <RenderView />
            <BottomSection />
          </Stack>
        </Grid>
        <Grid item="true" size="grow">
          <RightView />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
