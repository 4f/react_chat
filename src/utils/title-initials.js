export default function titleInitials(title) {
  if ( !title ) return "ES";
  try {
    return title
      .match(/(^|\s)[^\s]/g)
      .slice(0, 2).join('').replace(/\s/g, "")
      .toUpperCase()
  } catch (e) {
    console.info('error titleInitials', e)
    return 'ER'
  }
}
