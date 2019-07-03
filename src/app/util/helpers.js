export function not(value) {
  return !value;
}

export function getProp(object, path = [], fallback) {
  const value = path.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), object);

  if (value === undefined || value === null) {
    return fallback;
  }

  return value;
}
