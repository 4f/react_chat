import fetch from 'isomorphic-fetch'
import config from 'constants/config'

const preparePath = (path, out_opt) => path.replace(/:[^/]*/g, str => {
  const key = str.slice(1)//without :
  const ret = out_opt[key]
  delete out_opt[key]
  return ret
} )

  // path.split(/(?:(?:^|\/)[^:]*)?\/:/)

export function http({ dispatch, getState, payload, options: {SUCCESS, REQUEST, FAILURE, method, path} }){
  if (payload && !payload.password) {
    let in_payload = {...payload}
    path = preparePath(path, in_payload)
    payload = {data: in_payload }//login/signup have dif struct
  }
  const { auth: {token}, services: {serverStatus} } = getState()
  if (serverStatus[REQUEST]) {
    const error = `wait the response ${REQUEST.toString()}`
    console.info(error)
    return Promise.resolve({ error })
  }
  dispatch({ type: REQUEST, payload, request: REQUEST })

  return callApi(path, token, { method }, payload)
    .then(payload => dispatch({ type: SUCCESS, payload, success: REQUEST }) )
    .catch(payload => {
      dispatch({ type: FAILURE, payload, error: true, failure: REQUEST })
      return {error: payload}
    } )
}

export default function callApi(path, token, options, payload) {
  const authHeaders = token ? { 'Authorization': `Bearer ${token}` } : {}
  if(!options.method || options.method !== 'POST') payload = undefined

  return fetch( `${config.apiUrl}${path}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...authHeaders
    },
    body: JSON.stringify(payload),
    ...options
  })
    .then(response => response.json())
    .then(json => {
      if (json.success)
        if (!token && !json.token)
          json.message = 'Token has not been provided!'
        else
          return json
      throw new Error(json.message)
    })
}
