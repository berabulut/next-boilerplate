import React from 'react';
import {  withTranslation } from '@./i18n';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const About = ({t}) => {
  return (
    <Container style={{minHeight: '100vh'}} maxWidth="xl">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t('title')}
        </Typography>
      </Box>
    </Container>
  );
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})


export default withTranslation('common')(About)