const isVisible = (showWhen, state) => !showWhen || showWhen(state);

const isInvalid = ({ name, showWhen, elements }, state) =>
  isVisible(showWhen, state) &&
  (!state[name] ||
    (elements &&
      state[name].some((row) => elements.some((el) => isInvalid(el, row)))));

const hasValidationErrors = (state, fields) =>
  fields.some((f) => isInvalid(f, state));

const addValidationErrors = (state, fields) =>
  fields.reduce((state, field) => {
    if (field.elements) {
      const newRows = state[field.name]?.map((row) =>
        addValidationErrors(row, field.elements)
      );
      return { ...state, [field.name]: newRows };
    }
    return {
      ...state,
      [field.name + "Error"]: isInvalid(field, state) && "Required",
    };
  }, state);

const fieldsToStr = (fields, state) =>
  fields
    .filter((field) => isVisible(field.showWhen, state))
    .map(({ elements, name, formatter = (x) => x }) =>
      elements
        ? state[name]
            .map((row) => `\r\n${fieldsToStr(elements, row)}\r\n`)
            .join("")
        : `${name}: ${(formatter || ((x) => x))(state[name] || "")}`
    )
    .join("\r\n");

export const submit = (fields, state, setState) => {
  if (hasValidationErrors(state, fields)) {
    setState((state) => addValidationErrors(state, fields));
    return;
  }
  const date = new Date().toLocaleString();
  const fieldStr = fieldsToStr(fields, state);
  const body = encodeURIComponent(
    `Date: ${date}\r\n${fieldStr}\r\n\r\nREMINDER: Attach relevant files.`
  );
  window.open(
    `mailto:checkrequest@chathambiblechurch.org?subject=Check Request&body=${body}`
  );
};
