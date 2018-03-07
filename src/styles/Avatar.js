export default theme => ({
  avatar: {
    transition: "all .5s ease",
    cursor: "pointer",
    "&:hover": {
      // "webkit-filter": 'blur(1px)',
      // filter: 'blur(1px)',
      "-webkit-transform": "rotateY(180deg)",
      transform: "rotateY(180deg)"
    }
  }
})
