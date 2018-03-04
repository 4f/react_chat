import * as colors from 'material-ui/colors';

const names = [
  "red", "pink", "purple", "indigo", "blue", "teal", "green", "lightGreen", "amber",
  "orange", "deepOrange", "deepPurple", "blueGrey" ]
const bolds = [ 300, 400, 500, 600, 700, 800, 900, 'A100', 'A200', 'A300', 'A400']

export default function colorFrom(string) {
  try {
    const index = string
      .toString()
      .split('')
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num, 0)

    const colorIndex = index % names.length
    const boldIndex = index % bolds.length

    return colors[names[colorIndex]][bolds[boldIndex]]
  } catch (e) {
    console.error(e)
    return colors["blueGrey"][500]
  }
}
