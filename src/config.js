const dollars = (val) => "$" + Number(val).toLocaleString();

export const fieldConfig = [
  { name: "Requestor Name", type: "text" },
  { name: "Make Check Payable To", type: "text" },
  {
    name: "list",
    type: "rows",
    elements: [
      { name: "Account", columns: 4, type: "select", options: [] },
      { name: "Explanation", columns: 5, props: { multiline: true } },
      {
        name: "Dollar Amount",
        columns: 2,
        props: { type: "number" },
        formatter: dollars,
      },
    ],
  },
  { name: "Total", type: "calculated", formatter: dollars },
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
