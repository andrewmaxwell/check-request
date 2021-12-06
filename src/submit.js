const isVisible = (showWhen, state) => !showWhen || showWhen(state);

const isInvalid = ({ name, showWhen }, state) =>
  isVisible(showWhen, state) && !state[name];

const addValidationErrors = (state, fields) =>
  fields.reduce(
    (s, f) => ({ ...s, [f.name + "Error"]: isInvalid(f, state) && "Required" }),
    state
  );

export const submit = (fields, state, setState) => {
  if (fields.some((f) => isInvalid(f, state))) {
    setState((state) => addValidationErrors(state, fields));
    return;
  }

  const body = encodeURIComponent(
    `Date: ${new Date().toLocaleDateString()}\r\n` +
      fields.map(({ name }) => `${name}: ${state[name] || ""}`).join("\r\n") +
      "\r\n\r\nREMINDER: Attach relevant files."
  );
  window.open(
    `mailto:checkrequest@chathambiblechurch.org?subject=Check Request for ${state.Account}&body=${body}`
  );
};
