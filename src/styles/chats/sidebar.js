import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  item: {
    padding: '6px 4px 6px 12px',
    '&:hover': {
      // background: "red"
    },
    '&:hover $moreIcon': {
      visibility: 'visible',
    },
  },
  activeItem: {
    padding: '6px 4px 6px 12px',
    backgroundColor: theme.palette.grey[200],
    '&:hover $moreIcon': {
      visibility: 'visible',
    },
  },
  itemRoot: {
    paddingLeft: '0px',
  },
  moreIcon: {
    visibility: 'hidden',
    '&:hover': {
      background: theme.palette.grey[100],
      // color: "#11f",
      // border: "1px outset white"
    },
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  tab: {
    '&:hover': {
      background: 'lightgrey',
      color: 'black',
    },
  },
  itemText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  itemText2: {
    display: 'flex',
    justifyContent: 'space-between',
    opacity: '.4',
  },
  enemy: {
    color: 'red',
  },
  member: {
    color: 'blue',
  },
  creator: {
    color: 'green',
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
  noChats: {
    textAlign: 'center',
  },
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48,
    '&:hover': {
      background: 'red',
    },
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
});

export default comp => withStyles(styles)(comp);
