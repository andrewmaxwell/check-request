import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { accounts } from "./accounts.js";
import { Field } from "./FieldRenderer/index.js";
import { submit } from "./submit.js";

/* 
Possible Future Features: 
- Ability to edit accounts list
- Send to Ministry Leader for approval when total > $250

*/

const dollars = (val) => "$" + Number(val).toLocaleString();

const fields = [
  { name: "Requestor Name", type: "text" },
  { name: "Make Check Payable To", type: "text" },
  {
    name: "list",
    type: "rows",
    defaultValue: [{}],
    elements: [
      { name: "Account", cols: 4, type: "select", options: accounts },
      { name: "Explanation", cols: 5, props: { multiline: true } },
      {
        name: "Dollar Amount",
        cols: 2,
        props: { type: "number" },
        formatter: dollars,
      },
    ],
  },
  {
    name: "Total",
    type: "calculated",
    props: { disabled: true },
    formatter: dollars,
  },
  {
    name: "Check Delivery",
    type: "select",
    options: [
      "Mail Check",
      "Give Check to Requestor",
      "Place Check in Requestor's Folder",
    ],
  },
  {
    name: "Address",
    type: "text",
    showWhen: (s) => s["Check Delivery"] === "Mail Check",
  },
];

const setTotal = (state, setState) => {
  const total = state.list.reduce(
    (sum, row) => sum + Number(row["Dollar Amount"] ?? 0),
    0
  );
  useEffect(() => {
    setState((s) => ({ ...s, Total: total }));
  }, [total]);
};

export default function App() {
  const [state, setState] = useState(
    fields.reduce((r, f) => ({ ...r, [f.name]: f.defaultValue }), {})
  );

  setTotal(state, setState);

  return (
    <>
      <Typography p={1} variant="h4">
        Check Request Form
      </Typography>

      {fields.map((field) => (
        <Box key={field.name} p={1}>
          <Field {...{ field, state, setState }} />
        </Box>
      ))}

      <Typography p={1}>
        Pressing &quot;Submit&quot; will create an email ready to be sent.
      </Typography>

      <Typography p={1}>
        <strong>
          Please attach any necessary documents or receipts to the email before
          sending.
        </strong>
      </Typography>

      <Box p={1}>
        <Button
          variant="contained"
          onClick={() => submit(fields, state, setState)}
        >
          Submit
        </Button>
      </Box>

      <Typography p={1}>
        When you have sent the email, you may close this page.
      </Typography>

      <a
        style={{
          position: "fixed",
          right: 2,
          bottom: 2,
          font: "12px sans-serif",
        }}
        href="mailto:chathamit@chathambiblechurch.org?subject=Check Request Bug Report"
      >
        Report a Problem
      </a>
    </>
  );
}
