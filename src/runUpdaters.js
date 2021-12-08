export const runUpdaters = (state, setState) => {
  for (const key in state) {
    const node = state[key];
    // to support updaters in rows
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
    // callback(update?.(state, node, callback));

    const updates = node.update?.(state, node);
    if (updates) setState((s) => ({ ...s, [key]: { ...s[key], ...updates } }));
  }
};
