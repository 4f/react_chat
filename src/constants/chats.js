import { generateRequestSymbols } from "utils/helper"

const types = {
  active: Symbol('CHATS/ACTIVE'),
  ...generateRequestSymbols('CHATS', {
    all:    { method: "GET",    path: "/chats" },
    my:     { method: "POST",   path: "/chats/my" },
    item:   { method: "GET",    path: "/chats/:id" },
    create: { method: "POST",   path: "/chats" },
    join:   { method: "GET",    path: "/chats/:id/join" },
    leave:  { method: "GET",    path: "/chats/:id/leave" },
    remove: { method: "DELETE", path: "/chats/:id" },
    send:   { method: "POST",    path: "/chats/:id" },
  })
}

export default types

