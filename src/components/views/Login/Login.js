import React from 'react';
import styles from './Login.module.scss';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Login = () => (
  <main>
    <Paper className={styles.component}>
      <Container className={styles.container}>
        <TextField id="standard-basic" label="Login" />
        <TextField className={styles.textPassword} id="standard-basic" label="Password" />
      </Container>
      <Container className={styles.container}>
        <Button variant="contained" color="secondary">
          Login
        </Button>
      </Container>
    </Paper>
  </main>
);

export default Login;
