import React, { useCallback, useEffect, useState } from "react";
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
  const [state, setState] = useState();

  useEffect(() => {
    loadState().then(setState);
  }, []);

  const setFields = useCallback(
    (updateFields) =>
      setState((s) => ({ ...s, fields: updateFields(s.fields) })),
    []
  );

  if (!state) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", padding: 20 }}>
        <CircularProgress size={100} />
      </Box>
    );
  }

  runUpdaters(state.fields, setFields);

  return (
    <Container maxWidth="md">
      <Typography p={1} variant="h4">
        {state.formTitle}
      </Typography>

      <RenderFields fields={state.fields} onChange={setFields} />

      <Typography
        p={1}
        dangerouslySetInnerHTML={{ __html: state.beforeButtonHtml }}
      ></Typography>

      <Box p={1}>
        <Button variant="contained" onClick={() => submit(state, setFields)}>
          {state.submitLabel}
        </Button>
      </Box>

      <Typography
        p={1}
        dangerouslySetInnerHTML={{ __html: state.afterButtonHtml }}
      ></Typography>

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
