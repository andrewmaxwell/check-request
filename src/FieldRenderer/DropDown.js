import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

export const Dropdown = ({ fieldProps, options, error }) => (
  <FormControl fullWidth error={!!error}>
    <InputLabel>{fieldProps.label}</InputLabel>
    <Select {...fieldProps}>
      {options.map((o) => (
        <MenuItem key={o} value={o}>
          {o}
        </MenuItem>
      ))}
    </Select>
    {error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);
