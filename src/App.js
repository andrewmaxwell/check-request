import React, { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { Field } from "./FieldRenderer/index.js";
import { submit } from "./submit.js";
import { fieldConfig } from "./config.js";
import { treeMap } from "./utils.js";

/* 
Possible Future Features: 
- Send to Ministry Leader for approval when total > $250

*/

const setTotal = (state, setState) => {
  const total = state.list.reduce(
    (sum, row) => sum + Number(row["Dollar Amount"] ?? 0),
    0
  );
  useEffect(() => {
    setState((s) => ({ ...s, Total: total }));
  }, [total]);
};

const setAccounts = async (setFields, setLoading) => {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSKMEpvYGCrwfob-IwuiYWb-im8oTCtYxtj9Uet9rc3jKzSU65t7UU1ssxeY_JcrmSQhDQ_NdnKNE7A/pub?output=tsv"
  );
  const text = await response.text();
  const accounts = text?.split("\n");
  setFields((fields) =>
    treeMap(
      (n) => (n?.name === "Account" ? { ...n, options: accounts } : n),
      fields
    )
  );
  setLoading(false);
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(
    fieldConfig.reduce((res, { type, name }) => {
      if (type === "rows") res[name] = [{}];
      return res;
    }, {})
  );
  const [fields, setFields] = useState(fieldConfig);

  useEffect(() => {
    setAccounts(setFields, setLoading);
  }, []);

  setTotal(state, setState);

  return loading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
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
