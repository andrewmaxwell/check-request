import { objMap } from "./utils";

const isVisible = ({ hide }) => !hide;

const isEmpty = (val = "") => !String(val).trim().length;

const isInvalid = (node) =>
  isVisible(node) &&
  (isEmpty(node.value) ||
    (Array.isArray(node.value) &&
      node.value.some((row) => Object.values(row).some(isInvalid))));

const addValidationErrors = (arr) =>
  objMap(
    (node) =>
      Array.isArray(node.value)
        ? { ...node, value: node.value.map(addValidationErrors) }
        : { ...node, error: isInvalid(node) && "Required" },
    arr
  );

const fieldsToStr = (arr) =>
  Object.values(arr)
    .filter(isVisible)
    .map(({ label, value, formatter = (x) => x }) =>
      Array.isArray(value)
        ? `\r\n${value.map((row) => fieldsToStr(row)).join("\r\n\r\n")}\r\n`
        : `${label}: ${formatter(value)}`
    )
    .join("\r\n");

export const submit = (state, setState) => {
  if (Object.values(state).some(isInvalid)) {
    setState(addValidationErrors);
    return;
  }
  const date = new Date().toLocaleString();
  const fieldStr = fieldsToStr(state);
  const body = encodeURIComponent(
    `Date: ${date}\r\n${fieldStr}\r\n\r\nREMINDER: Attach relevant files.`
  );
  window.open(
    `mailto:chatham.ap@gmail.com?cc=chathamit@chathambiblechurch.org&subject=Check Request&body=${body}`
  );
};
