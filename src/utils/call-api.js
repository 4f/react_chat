import fetch from 'isomorphic-fetch'
import {server} from 'constants/services'

const BASE_URL = "http://localhost:8000/v1"

const preparePath = (path, out_opt) => path.replace(/:[^/]*/g, str => {
  const key = str.slice(1)//without :
  const ret = out_opt[key]
  delete out_opt[key]
  return ret
} )

  // path.split(/(?:(?:^|\/)[^:]*)?\/:/)

export function http({ dispatch, getState, payload, options: {SUCCESS, REQUEST, FAILURE, method, path} }){
  if (payload && !payload.password) {
    let copy_payload = {...payload}
    path = preparePath(path, copy_payload)
    payload = {data: copy_payload }//login/signup have dif struct
  }
  const { auth: {token}, services: {serverStatus} } = getState()
  if (serverStatus[REQUEST]) {
    const error = `wait the response ${REQUEST.toString()}`
    console.info(error)
    return Promise.resolve({ error })
  }
  dispatch({ type: REQUEST, payload })
  dispatch({ type: server.REQUEST, payload: {type: REQUEST} })

  return callApi(path, token, { method }, payload)
    .then(json => {
      dispatch({ type: SUCCESS, payload: json, success: true })
      dispatch({ type: server.SUCCESS, payload: { type: REQUEST } })
      return json
    })
    .catch(error => {
      dispatch({ type: FAILURE, payload: error, error: true })
      dispatch({ type: server.FAILURE, payload: { type: REQUEST } })
      console.info(error)
      return {error}
    } )
}

export default function callApi(path, token, options, payload) {
  const authHeaders = token ? { 'Authorization': `Bearer ${token}` } : {}
  if(!options.method || options.method !== 'POST') payload = undefined

  return fetch( `${BASE_URL}${path}`, {
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
