import React from "react";
import { Typography } from "@mui/material";

export const Calculated = ({
  fieldProps: { label, value },
  formatter = (x) => x,
}) => (
  <Typography>
    <strong>
      {label}: {formatter(value)}
    </strong>
  </Typography>
);
