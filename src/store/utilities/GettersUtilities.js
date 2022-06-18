const get = (key) => (localState) => localState[key];

const getArrayAsDictionary = (key, mappedKey) => (localState) => Object.assign(
  {}, ...localState[key].map((s) => ({ [s[mappedKey]]: s })),
);

const getArrayCopy = (key) => (localState) => (localState[key] ? [...localState[key]] : null);

const getObjectCopy = (key) => (localState) => JSON.parse(JSON.stringify(localState[key]));

const scaffold = (state, inclussions) => {
  if (typeof state !== 'object') {
    throw new TypeError('state should be an Object');
  }
  return Object.keys(state).reduce((getters, key) => {
    if (!inclussions || !inclussions.length || !inclussions.includes(key)) {
      return getters;
    }
    const localGetters = { ...getters };
    const getterName = `${key.charAt(0).toUpperCase()}${key.slice(1)}`;

    if (Array.isArray(state[key])) {
      localGetters[getterName] = getArrayCopy(key);
    } else if (state[key] instanceof Object) {
      localGetters[getterName] = getObjectCopy(key);
    } else {
      localGetters[getterName] = get(key);
    }
    return localGetters;
  }, {});
};

export default {
  get,
  getArrayAsDictionary,
  getArrayCopy,
  getObjectCopy,
  scaffold,
};
