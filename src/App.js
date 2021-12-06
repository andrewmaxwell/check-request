import { Box, Typography, Button } from "@mui/material";
import { accounts } from "./accounts.js";
import { useState } from "react";
import { RenderFields } from "./RenderFields.js";
import { submit } from "./submit.js";

/* 
Possible Future Features: 
- Send to Ministry Leader for approval when total > $250
- Multiple accounts in a single request

*/

const fields = [
  { name: "Requestor Name" },
  { name: "Make Check Payable To" },
  { name: "Account", options: accounts },
  { name: "Explanation", props: { multiline: true } },
  { name: "Dollar Amount", props: { type: "number" } },
  {
    name: "Check Delivery",
    options: [
      "Mail Check",
      "Give Check to Requestor",
      "Place Check in Requestor's Folder"
    ]
  },
  { name: "Address", showWhen: (s) => s["Check Delivery"] === "Mail Check" }
];

export default function App() {
  const [state, setState] = useState({});
  return (
    <>
      <Typography p={1} variant="h4">
        Check Request Form
      </Typography>

      <RenderFields {...{ fields, state, setState }} />

      <Typography p={1}>
        Pressing "Submit" will create an email ready to be sent.
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
          color: "red"
        }}
        href="mailto:me@andrewmaxwell.dev?subject=Check Request Bug Report"
      >
        Report a Problem
      </a>
    </>
  );
}
