import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Networks } from '../../components/networks/Networks';



function Copyright() {
  return (
    <Typography variant="body2" color="primary">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '24vh',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: "#FFFFFF",
    borderTop: "1px solid",
      //theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Information/> */}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Pagina Hecha por Facundo Maksud</Typography>
          <Copyright />
        </Container>
        <Networks/>
      </footer>
    </div>
  );
}