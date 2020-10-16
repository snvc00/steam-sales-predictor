import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
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

function Login() {
  const classes = useStyles();

  // login hooks to store the inputs from the user
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  // login a user with the inputs stored in the hooks
  const loginUser = () => {
    // create a http request
    axios({
      method: 'post',
      data: {
        username: user,
        password: password
      },
      withCredentials: true,
      url: 'http://localhost:4000/login', // server location //TODO: use a json file or something
    }).then((res) => console.log(res));
  };

  return (
    <div className={classes.root}>
      <h2>Login</h2>
      <p>Welcome back</p>
      <form noValidate autoComplete="off">
        <TextField
          onChange={e => setUser(e.target.value)}
          className={classes.textField}
          label="User"
          variant="outlined"
        />
        <br />
        <TextField
          onChange={e => setPassword(e.target.value)} 
          className={classes.textField} 
          label="Password" variant="outlined" 
          type="password" 
        />
        <br />
        <Button 
          onClick={loginUser} 
          className={classes.submitButton} 
          variant="contained" 
          disableElevation>
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;