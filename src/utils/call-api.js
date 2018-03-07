import fetch from 'isomorphic-fetch'

const BASE_URL = "http://localhost:8000/v1"

export function http({ dispatch, getState, payload, type, type: {method} }){
  dispatch({type: type.REQUEST })
  const token = getState && getState().auth.token
  return callApi(type.path, token, { method }, payload)
    .then(json => {
      dispatch({ type: type.SUCCESS, payload: json })
      return json
    })
    .catch(reason => {
      dispatch({ type: type.FAILURE, payload: reason })
      throw reason
    } )
}

export default function callApi(path, token, options, payload) {
  const authHeaders = token ? { 'Authorization': `Bearer ${token}` } : {}

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
