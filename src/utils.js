// applies func to the indexth element of a copy of arr
export const adjust = (index, func, arr) => {
  const copy = [...arr];
  copy[index] = func(copy[index]);
  return copy;
};

// removes the indexth element from a copy of arr
export const remove = (index, arr) => {
  const copy = [...arr];
  copy.splice(index, 1);
  return copy;
};

// applies func to each value in a copy of obj, which can be an array or object
export const map = (func, data) => {
  const res = Array.isArray(data) ? [] : {};
  for (const key in data) {
    res[key] = func(data[key], key);
  }
  return res;
};
