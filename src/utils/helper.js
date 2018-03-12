
export function generateRequestSymbols(name, out_obj){
  const REQUESTS = ["REQUEST", "SUCCESS", "FAILURE"]
  for (let key in out_obj) {
    REQUESTS.forEach(m =>
      out_obj[key][m] = Symbol(`${name.toUpperCase()}/${key.toUpperCase()}/${m.toUpperCase()}` )
    )
  }
  return out_obj
}
