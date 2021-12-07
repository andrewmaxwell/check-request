import React from "react";
import { Button, Grid } from "@mui/material";
import { Field } from ".";
import { adjust, remove } from "../utils";

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
                <Grid key={field.name} item xs={12} sm={field.columns}>
                  <Field field={field} state={row} setState={setRow} />
                </Grid>
              ))}
              <Grid item sm={1}>
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
