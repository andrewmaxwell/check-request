import React from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { adjust, remove } from "./utils";

const fieldRenderers = {
  select: ({ label, value = "", error, options, onChange }) => (
    <FormControl fullWidth error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Select label={label} onChange={onChange} value={value}>
        {options.map((o) => (
          <MenuItem key={o} value={o}>
            {o}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  ),

  text: ({ label, type, error, value = "", onChange, props }) => (
    <TextField
      fullWidth
      error={!!error}
      helperText={error}
      {...{ label, type, value, onChange, ...props }}
    />
  ),

  rows: ({ blankRow, value, onChange }) => (
    <>
      {value.map((row, i) => (
        <Grid container item key={i} spacing={1}>
          <RenderFields
            fields={row}
            onChange={(updateRow) => {
              onChange({ target: { value: adjust(i, updateRow, value) } });
            }}
          >
            <Grid item sm={1}>
              <Button
                sx={{ width: "100%", height: "100%" }}
                onClick={() =>
                  onChange({ target: { value: remove(i, value) } })
                }
              >
                Delete
              </Button>
            </Grid>
          </RenderFields>
        </Grid>
      ))}

      <Button
        onClick={() => onChange({ target: { value: [...value, blankRow] } })}
      >
        Add Row
      </Button>
    </>
  ),

  calculated: ({ label, value, formatter = (x) => x }) => (
    <Typography>
      <strong>
        {label}: {formatter(value)}
      </strong>
    </Typography>
  ),
};

const Field = (props) => {
  if (props.hide) return null;
  const Input = fieldRenderers[props.type] || fieldRenderers.text;
  return <Input {...props} />;
};

export const RenderFields = ({ fields, onChange, children }) => (
  <Grid container>
    {Object.entries(fields).map(([key, field]) => (
      <Grid item key={key} p={1} xs={12} sm={field.columns}>
        <Field
          {...field}
          onChange={(e) => {
            onChange((s) => ({
              ...s,
              [key]: { ...s[key], value: e.target.value, error: undefined },
            }));
          }}
        />
      </Grid>
    ))}
    {children}
  </Grid>
);
