import { generateRequestSymbols } from "utils/helper"

const types = {
  notActive: Symbol('CHATS/NOT_ACTIVE'),
  ...generateRequestSymbols('CHATS', {
    all:    { method: "GET",    path: "/chats" },
    my:     { method: "POST",   path: "/chats/my" },
    active: { method: "GET",    path: "/chats/:_id" },
    create: { method: "POST",   path: "/chats" },
    join:   { method: "GET",    path: "/chats/:_id/join" },
    leave:  { method: "GET",    path: "/chats/:_id/leave" },
    remove: { method: "DELETE", path: "/chats/:_id" },
    send:   { method: "POST",   path: "/chats/:_id" },
  })
}

export default types

