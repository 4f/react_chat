export default function titleInitials(title) {
  try {
    return title
      .match(/\b(\w)\w*\W*\b(\w)?/)
      .slice(1, 3)
      .join('')
      .toUpperCase()
  } catch (e) {
    console.info('error titleInitials', e)
    return 'ER'
  }
}
