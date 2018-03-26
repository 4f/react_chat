
import { http } from 'utils/call-api';

export function generateRequestSymbols(name, out_obj) {
  const REQUESTS = ['REQUEST', 'SUCCESS', 'FAILURE'];
  for (const key in out_obj) {
    REQUESTS.forEach(m =>
      out_obj[key][m] = Symbol(`${name.toUpperCase()}/${key.toUpperCase()}/${m.toUpperCase()}`));
  }
  return out_obj;
}


export const generateRegisters = (types, thens = {}) => {
  const register = symbol => payload => (dispatch, getState) => http({
    options: types[symbol], dispatch, getState, payload,
  })
    .then(data => (data.error ? data : (thens[symbol] && thens[symbol](data))));
  const out = {};
  for (const key in types) {
    if (types[key].SUCCESS) out[key] = register(key);
  }
  return out;
};
