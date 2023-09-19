import React from "react";
import { Skeleton, Box } from "@mui/material";

const ShimmerLoader = () => {
  return (
    <Box sx={{ pr: 2, width: "18rem", height: "16rem" }}>
      <Skeleton variant="rectangular" height={130} width={"100%"} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Box>
  );
};

export default ShimmerLoader;
