import React from 'react';
import { withTranslation } from '@./i18n';
import {footerStyles} from './styles';
import {Grid, Typography } from '@material-ui/core';
import {Menu} from "@material-ui/icons";


const Footer = ({ t }) => {
	const classes = footerStyles();
  
	return (
	  <div className={classes.root}>
		  <Grid container xs={12} spacing={3}>
		  	<Grid item xs={12}>
          		<Typography style={{textAlign: "center"}}>{t('description')}</Typography>
			</Grid>
		  </Grid>
	  </div>
	);
  }

export default withTranslation('footer')(Footer);