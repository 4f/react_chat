import { generateRequestSymbols } from "utils/helper"

const types = generateRequestSymbols('USERS', {
  edit: { method: "PUT", path: "/user" }
})

export default types

/*

export const EDIT_USER_REQUEST = Symbol('users/EDIT_USER_REQUEST');
export const EDIT_USER_SUCCESS = Symbol('users/EDIT_USER_SUCCESS');
export const EDIT_USER_FAILURE = Symbol('users/EDIT_USER_FAILURE');
*/
