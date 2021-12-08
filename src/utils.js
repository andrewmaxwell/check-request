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

export const sum = (arr) => arr?.reduce((a, b) => a + (Number(b) || 0), 0);

export const assocPath = ([first, ...rest], val, data) => {
  const copy = Array.isArray(data) ? [...data] : { ...data };
  copy[first] = rest.length ? assocPath(rest, val, data[first]) : val;
  return copy;
};

export const objMap = (func, obj) => {
  const res = {};
  for (const key in obj) {
    res[key] = func(obj[key], key);
  }
  return res;
};

export const once = (func) => {
  let cache;
  return () => (cache === undefined ? (cache = func()) : cache);
};
