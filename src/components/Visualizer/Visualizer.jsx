import React from "react";
import { Tree } from "react-tree-graph";
import { Box } from "@mui/material";
import TraversedList from "./TraversedList";

import "./Visualizer.css";

const Visualizer = ({ data, delayedList }) => (
  <Box>
    <Box
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Tree
      data={data}
      height={400}
      width={400}
      svgProps={{
        transform: "rotate(90)",
      }}
      textProps={{
        transform: "rotate(270)",
      }}
      animated={true}
    />
  </Box>
  <TraversedList delayedList={delayedList} />
  </Box>
);

export default Visualizer;
