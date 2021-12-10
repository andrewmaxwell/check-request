import { sum } from "./utils";

const dollarFormatter = (val) => "$" + Number(val).toLocaleString();

const getAccounts = async () => {
  const response = await fetch(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQBAv7s2hKsbFKPuv8qZ8z0rAgsE_5ZPwP8rGY527yIfMLjOs9Foy-Z4Tj54SFYti7I4QvTYnmQQIQa/pub?output=tsv"
  );
  const text = await response.text();
  return text?.split("\n").map((r) => r.trim());
};

export const loadState = async () => ({
  requestorName: { label: "Requestor Name", type: "text", columns: 6 },
  makeCheckPayableTo: {
    label: "Make Check Payable To",
    type: "text",
    columns: 6,
  },
  list: {
    label: "list",
    type: "repeatingSection",
    fields: {
      account: {
        label: "Account",
        type: "select",
        columns: 4,
        options: await getAccounts(),
      },
      explanation: {
        label: "Explanation",
        type: "text",
        columns: 5,
        props: { multiline: true },
      },
      amount: {
        label: "Amount",
        type: "number",
        columns: 2,
        formatter: dollarFormatter,
      },
    },
    update: (state) =>
      !state.list.value?.length && { value: [state.list.fields] },
  },
  total: {
    label: "Total",
    type: "calculated",
    formatter: dollarFormatter,
    update: (state) => {
      const value = sum(state.list.value?.map((row) => row.amount.value));
      return value !== state.total.value && { value };
    },
  },
  checkDelivery: {
    label: "Check Delivery",
    type: "select",
    columns: 6,
    options: [
      "Mail Check",
      "Give Check to Requestor",
      "Place Check in Requestor's Folder",
    ],
  },
  address: {
    label: "Address",
    type: "text",
    columns: 6,
    update: (state) => {
      const hide = state.checkDelivery.value !== "Mail Check";
      return state.address.hide !== hide && { hide };
    },
  },
});