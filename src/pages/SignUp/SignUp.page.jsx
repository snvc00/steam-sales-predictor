import React from 'react';
import './SignUp.styles.css';

import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

function SignUp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className="title">Sign Up</h2>
      <p className="subtitle">
        Welcome to Steam Sales Predictor
            </p>
      <form autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Name"
          variant="outlined"
          className={classes.textField}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="User"
          variant="outlined"
          className={classes.textField}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Password"
          variant="outlined"
          className={classes.textField}
          type="password"
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Confirm Password"
          variant="outlined"
          className={classes.textField}
          type="password"
        />
        <br />
        <Button variant="contained" className={classes.submitButton} disableElevation>
          Sign Up
                </Button>
      </form>
    </div>
  );
}

export default SignUp;