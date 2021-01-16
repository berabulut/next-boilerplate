import { makeStyles } from '@material-ui/core/styles';

export const footerStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
  }));


export const headerStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(2),
	},
	tabRoot: {
		flexGrow: 1
	},
	flexContainer: {
		justifyContent: 'start',
		minHeight: '64px'
	}
  }));