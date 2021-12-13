export const adjust = (index, func, arr) => {
  const copy = [...arr];
  copy[index] = func(copy[index]);
  return copy;
};

export const remove = (index, arr) => {
  const copy = [...arr];
  copy.splice(index, 1);
  return copy;
};

export const map = (func, obj) => {
  const res = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    res[key] = func(obj[key], key);
  }
  return res;
};
