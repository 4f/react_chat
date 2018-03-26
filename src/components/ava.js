import React from 'react'
import MUIAvatar from 'material-ui/Avatar'
import getColor from 'utils/color-from'
import titleInitials from 'utils/title-initials'

<<<<<<< HEAD:src/components/Avatar.js
import { avatar as applyPropTypes } from 'prop_types/app'
import styles from 'styles/app'
=======
import styles from 'styles/app'
import { avatar as applyPropTypes } from 'prop_types/app'

>>>>>>> tmpp:src/components/ava.js


const Avatar = ({ colorFrom, classes, label, ...rest }) => (
  <MUIAvatar className={classes.avatar} style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
    {titleInitials(label)}
  </MUIAvatar>
)

export default styles( applyPropTypes(Avatar) )
