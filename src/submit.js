import { map } from "./utils";

const isVisible = ({ hide }) => !hide;

const isEmpty = (val = "") => !String(val).trim().length;

const isInvalid = (field) =>
  isVisible(field) &&
  (isEmpty(field.value) ||
    (Array.isArray(field.value) &&
      field.value.some((row) => Object.values(row).some(isInvalid))));

const addValidationErrors = (obj) =>
  map(
    (field) =>
      Array.isArray(field.value)
        ? { ...field, value: field.value.map(addValidationErrors) }
        : { ...field, error: isInvalid(field) && "Required" },
    obj
  );

const fieldsToStr = (obj) =>
  Object.values(obj)
    .filter(isVisible)
    .map(({ label, value, formatter }) =>
      Array.isArray(value)
        ? `\r\n${value.map((row) => fieldsToStr(row)).join("\r\n\r\n")}\r\n`
        : `${label}: ${formatter(value)}`
    )
    .join("\r\n");

export const submit = (
  { fields, emailReminder, emailTo, emailSubject },
  setFields
) => {
  if (Object.values(fields).some(isInvalid)) {
    setFields(addValidationErrors);
    return;
  }
  const date = new Date().toLocaleString();
  const fieldStr = fieldsToStr(fields);
  const body = encodeURIComponent(
    `Date: ${date}\r\n${fieldStr}\r\n\r\n${emailReminder}`
  );
  window.open(`mailto:${emailTo}&subject=${emailSubject}&body=${body}`);
};
