import React from "react";
import { TextField } from "@mui/material";

export const Text = ({ error, fieldProps }) => (
  <TextField fullWidth error={!!error} helperText={error} {...fieldProps} />
);
