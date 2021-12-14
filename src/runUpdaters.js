import { adjust } from "./utils";

export const runUpdaters = (fields, setFields) => {
  for (const key in fields) {
    const node = fields[key];

    for (let i = 0; i < node.value?.length; i++) {
      runUpdaters(node.value[i], (updateRow) =>
        setFields((s) => ({
          ...s,
          [key]: { ...s[key], value: adjust(i, updateRow, s[key].value) },
        }))
      );
    }

    const updates = node.update?.(fields);
    if (updates && typeof updates === "object")
      setFields((s) => ({ ...s, [key]: { ...s[key], ...updates } }));
  }
};
