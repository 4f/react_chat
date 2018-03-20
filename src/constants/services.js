export const REDIRECT = Symbol('SERVICES/REDIRECT')
export const server = {
  REQUEST: Symbol('SERVER_STATUS/REQUEST'),
  SUCCESS: Symbol('SERVER_STATUS/SUCCESS'),
  FAILURE: Symbol('SERVER_STATUS/FAILURE')
}
export default {
  redirect: REDIRECT,
  server
}
