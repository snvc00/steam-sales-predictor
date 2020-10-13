import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  textField: {
    margin: theme.spacing(1),
    width: '30ch',
  },
  submitButton: {
    margin: theme.spacing(2),
    width: '30ch',
  }
}));

function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Login</h2>
      <p>Welcome back</p>

      <form noValidate autoComplete="off">
        <TextField className={classes.textField} label="Username" variant="outlined" />
        <br />
        <TextField className={classes.textField} label="Password" variant="outlined" type="password" />
        <br />
        <Button className={classes.submitButton} variant="contained" disableElevation>Login</Button>
      </form>
    </div>
  );
}

export default Login;