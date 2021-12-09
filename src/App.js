import React, { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { RenderFields } from "./RenderFields.js";
import { submit } from "./submit.js";
import { loadState } from "./loadState.js";
import { runUpdaters } from "./runUpdaters.js";

/* 
Possible Future Features: 
- Send to Ministry Leader for approval when total > $250

*/

export default function App() {
  const [state, setState] = useState();

  useEffect(() => {
    loadState().then(setState);
  }, []);

  if (!state) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: 20 }}>
        <CircularProgress size={100} />
      </Box>
    );
  }

  runUpdaters(state, setState);

  return (
    <>
      <Typography p={1} variant="h4">
        Check Request Form
      </Typography>

      <RenderFields fields={state} onChange={setState} />

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
        <Button variant="contained" onClick={() => submit(state, setState)}>
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
