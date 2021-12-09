export const runUpdaters = (state, setState) => {
  for (const key in state) {
    const node = state[key];
    // to support updaters in deeper fields, do this...
    // const { value, update } = node;
    // for (let i = 0; i < value?.length; i++) {
    //   runUpdaters(value[i], (updateRow) =>
    //     setState((s) => ({
    //       ...s,
    //       [key]: { ...s[key], value: adjust(i, updateRow, s[key].value) },
    //     }))
    //   );
    // }

    // to handle async updaters, do this...
    // const callback = (updates) =>
    //   updates && setState((s) => ({ ...s, [key]: { ...s[key], ...updates } }));
    // callback(update?.(state, callback));

    const updates = node.update?.(state);
    if (updates) setState((s) => ({ ...s, [key]: { ...s[key], ...updates } }));
  }
};
