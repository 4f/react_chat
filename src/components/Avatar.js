import React from 'react'
import MUIAvatar from 'material-ui/Avatar'
import getColor from 'utils/color-from'
import titleInitials from 'utils/title-initials'

import { withStyles } from 'material-ui/styles'
import styles from 'styles/Avatar'


const Avatar = ({ colorFrom, classes, children, ...rest }) => (
  <MUIAvatar className={classes.avatar} style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
    {titleInitials(children)}
  </MUIAvatar>
)

export default withStyles(styles)(Avatar)
