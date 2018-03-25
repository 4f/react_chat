import React from 'react'
import MUIAvatar from 'material-ui/Avatar'
import getColor from 'utils/color-from'
import titleInitials from 'utils/title-initials'

import styles from 'styles/app'
import { avatar as applyPropTypes } from 'prop_types/app'



const Avatar = ({ colorFrom, classes, label, ...rest }) => (
  <MUIAvatar className={classes.avatar} style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
    {titleInitials(label)}
  </MUIAvatar>
)

export default styles( applyPropTypes(Avatar) )
