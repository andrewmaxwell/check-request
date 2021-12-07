import React from "react";
import { RowsRender } from "./Rows";
import { Dropdown } from "./DropDown";
import { Text } from "./Text";
import { Calculated } from "./Calculated";

const fieldRenderers = {
  select: Dropdown,
  text: Text,
  rows: RowsRender,
  calculated: Calculated,
};

export const Field = ({
  field: { name, type, props, options, showWhen, elements, formatter },
  state,
  setState,
}) => {
  if (showWhen && !showWhen(state)) return null;
  const Input = fieldRenderers[type] || fieldRenderers.text;
  const fieldProps = {
    label: name,
    value: state[name] ?? "",
    onChange: (e) =>
      setState((s) => ({
        ...s,
        [name]: e.target.value,
        [name + "Error"]: undefined,
      })),
    ...props,
  };
  const error = state[name + "Error"];

  return <Input {...{ fieldProps, options, error, elements, formatter }} />;
};
