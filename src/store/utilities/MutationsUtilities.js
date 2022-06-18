const set = (key) => (localState, payload) => {
  const s = localState;
  s[key] = payload;
};

const scaffold = (state, inclusions) => {
  if (typeof state !== 'object') {
    throw new TypeError('state must be Object');
  }
  return Object.keys(state).reduce((setters, key) => {
    if (!inclusions || !inclusions.length || !inclusions.includes(key)) {
      return setters;
    }
    const localSetters = { ...setters };
    const setterName = `Set${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    localSetters[setterName] = set(key);
    return localSetters;
  }, {});
};

export default {
  scaffold,
  set,
};
