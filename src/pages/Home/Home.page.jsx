import React, { useState } from 'react';
import './Home.styles.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function HomePage() {
  const [data, setData] = useState(null);

  const getUser = () => {
    // create a http request
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:4000/user', // server location //TODO: use a json file or something
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  return (
    <div>
      <h1>Home page</h1>
      <Button onClick={getUser} variant="contained" color="primary">Get User</Button>
      {data ? <h1>{data.user}</h1> : null}
    </div>
  );
}

export default HomePage;