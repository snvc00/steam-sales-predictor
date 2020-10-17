import React, { useState } from 'react';
import './SignUp.styles.css';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'; // axios to create http requests

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

  // sign up hooks to store the inputs from the user
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // register a user with the inputs stored in the hooks
  const registerUser = () => {
    // create a http request
    axios({
      method: 'post',
      data: {
        name: name,
        username: user,
        password: password
      },
      withCredentials: true,
      url: `${process.env.REACT_APP_SERVER_ENDPOINT}/signup`,
    }).then((res) => console.log(res));
  };


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
          onChange={e => setName(e.target.value)}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="User"
          variant="outlined"
          className={classes.textField}
          onChange={e => setUser(e.target.value)}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Password"
          variant="outlined"
          className={classes.textField}
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Confirm Password"
          variant="outlined"
          className={classes.textField}
          type="password"
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <br />
        <Button onClick={registerUser} variant="contained" className={classes.submitButton} disableElevation>
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;