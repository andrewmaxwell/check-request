export const treeMap = (func, tree) => {
  const newTree = func(tree);
  if (!newTree || typeof newTree !== "object") return newTree;

  const result = Array.isArray(newTree) ? [] : {};
  for (const key in newTree) {
    result[key] = treeMap(func, newTree[key]);
  }
  return result;
};

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
