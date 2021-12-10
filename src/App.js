import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Container,
} from "@mui/material";
import { RenderFields } from "./RenderFields.js";
import { submit } from "./submit.js";
import { loadState } from "./loadState.js";
import { runUpdaters } from "./runUpdaters.js";

/* 
Possible Future Features: 
- Send to respective ministry leaders for approval when total > $250
- Store form configuration in a google spreadsheet
*/

export default function App() {
  const [fields, setFields] = useState();

  if (!fields) {
    loadState().then(setFields);
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: 20 }}>
        <CircularProgress size={100} />
      </Box>
    );
  }

  runUpdaters(fields, setFields);

  return (
    <Container maxWidth="md">
      <Typography p={1} variant="h4">
        Check Request Form
      </Typography>

      <RenderFields fields={fields} onChange={setFields} />

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
        <Button variant="contained" onClick={() => submit(fields, setFields)}>
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
    </Container>
  );
}
