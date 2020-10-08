import React from 'react';
import styles from './TablesEventsNew.module.scss';
import Paper from '@material-ui/core/Paper';
import TreeView from '@material-ui/lab/TreeView';
import Container from '@material-ui/core/Container';
import TreeItem from '@material-ui/lab/TreeItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TablesEventsNew = () => (
  <main>
    <Paper className={styles.component}>
      <div className={styles.component}>
        <h2>New event reservation</h2>
      </div>
      <form className={styles.component} noValidate>
        <TextField
          id="datetime-local"
          label="Time start"
          type="datetime-local"
          defaultValue="2020-10-07T12:30"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField className={styles.dateRight}
          id="datetime-local"
          label="Time end"
          type="datetime-local"
          defaultValue="2020-10-07T12:30"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <Container className={styles.component}>
        <TreeView>
          <TreeItem nodeId="1" label="Table">
            <TreeItem nodeId="2" label="1" />
            <TreeItem nodeId="3" label="2" />
            <TreeItem nodeId="4" label="3" />
          </TreeItem>
        </TreeView>
      </Container>
      <Container className={styles.component}>
        <TreeView>
          <TreeItem nodeId="1" label="People">
            <TreeItem nodeId="2" label="1" />
            <TreeItem nodeId="3" label="2" />
            <TreeItem nodeId="4" label="3" />
            <TreeItem nodeId="5" label="4" />
            <TreeItem nodeId="6" label="5" />
            <TreeItem nodeId="7" label="6" />
            <TreeItem nodeId="8" label="7" />
            <TreeItem nodeId="9" label="8" />
            <TreeItem nodeId="10" label="9" />
            <TreeItem nodeId="11" label="10" />
            <TreeItem nodeId="12" label="11" />
          </TreeItem>
        </TreeView>
      </Container>
      <Container className={styles.component}>
        <TextField
          id="outlined-multiline-static"
          label="Event specification"
          multiline
          rows={6}
          defaultValue=""
          variant="outlined"
        />
      </Container>
      <Container className={styles.component}>
        <Button variant="contained" color="secondary">
          Confirm Event
        </Button>
      </Container>
    </Paper>
  </main>
);

export default TablesEventsNew;
