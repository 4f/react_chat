import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  appBar: {
    position: 'fixed',
    width: 'calc(100% - 320px)',
    marginLeft: 320,
  },
  appBarTitleLeft: {
    flex: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginLeft: 0,
    marginRight: theme.spacing.unit * 2,
    color: theme.palette.secondary.contrastText,
  },
  menuItem: {
    '&:hover $icon': {
      color: 'blue',
    },
  },
  icon: {
    color: 'lightblue',
  },
  appBarTitleRight: {
    marginLeft: theme.spacing.unit * 2,
    marginRight: 0,
    color: theme.palette.secondary.contrastText,
  },
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '30%',
    minWidth: '300px',
    padding: theme.spacing.unit * 3,
  },
  menuButton: {
    minWidth: '0px',
  },
  modalToolbar: {
    justifyContent: 'center',
  },
  modalTitle: {
    flex: 1,
  },
});

export default comp => withStyles(styles)(comp);
