import React from "react";
import { Button, Grid } from "@mui/material";
import { Field } from ".";

const adjust = (index, func, arr) => {
  const copy = [...arr];
  copy[index] = func(copy[index]);
  return copy;
};

const remove = (index, arr) => {
  const copy = [...arr];
  copy.splice(index, 1);
  return copy;
};

export const RowsRender = ({ elements, fieldProps: { value, onChange } }) => {
  const addRow = () => onChange({ target: { value: [...value, {}] } });
  const deleteRow = (index) =>
    onChange({ target: { value: remove(index, value) } });

  return (
    <>
      <Grid container spacing={1}>
        {value.map((row, i) => {
          const setRow = (updateRow) => {
            onChange({ target: { value: adjust(i, updateRow, value) } });
          };
          return (
            <Grid container item key={i} spacing={1}>
              {elements.map((field) => (
                <Grid key={field.name} item xs={field.cols}>
                  <Field field={field} state={row} setState={setRow} />
                </Grid>
              ))}
              <Grid item xs={1}>
                {i ? (
                  <Button
                    sx={{ width: "100%", height: "100%" }}
                    onClick={() => deleteRow(i)}
                  >
                    Delete
                  </Button>
                ) : null}
              </Grid>
            </Grid>
          );
        })}
      </Grid>

      <Button onClick={addRow}>Add Row</Button>
    </>
  );
};
