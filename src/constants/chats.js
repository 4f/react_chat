import { generateRequestSymbols } from "utils/helpers"

const types = {
  active: Symbol('CHATS/ACTIVE'),
  ...generateRequestSymbols('CHATS', {
    all:    { method: "GET",    path: "/chats" },
    my:     { method: "POST",   path: "/chats/my" },
    get:    { method: "GET",    path: "/chats/:_id" },
    create: { method: "POST",   path: "/chats" },
    join:   { method: "GET",    path: "/chats/:_id/join" },
    leave:  { method: "GET",    path: "/chats/:_id/leave" },
    remove: { method: "DELETE", path: "/chats/:_id" },
    send:   { method: "POST",   path: "/chats/:_id" },
  })
}

export default types

