import PT from 'prop-types'

const chat = PT.shape({
  _id:        PT.string.isRequired,
  members:    PT.array,
  creator:    PT.shape({
    username:     PT.string.isRequired,
    firstName:    PT.string,
    lastName:     PT.string,
    _id:          PT.string.isRequired
  }),
  title:      PT.string.isRequired
})

export default {
  user:   PT.shape({
    username:    PT.string.isRequired,
    firstName:   PT.string,
    lastName:    PT.string,
    isMember:    PT.bool.isRequired,
    isCreator:   PT.bool.isRequired,
    isInChat:    PT.bool.isRequired,
    _id:         PT.string.isRequired
  }),
  chat,
  chats:  PT.arrayOf(chat)
}
