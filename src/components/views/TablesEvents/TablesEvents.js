import React from 'react';
import styles from './TablesEvents.module.scss';
import Paper from '@material-ui/core/Paper';
import TreeView from '@material-ui/lab/TreeView';
import Container from '@material-ui/core/Container';
import TreeItem from '@material-ui/lab/TreeItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const demoContent = [
  { id: '1', status: 'reservation', table: 3, people: 4, date: '08-10-2020', time: '12:30-13:30', specification: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

const TablesEvents = () => (
  <main>
    <Paper className={styles.component}>
      <div>
        <h2>Event information/:id</h2>
      </div>
      <Container className={styles.container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>People</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Specification</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell>
                  {row.id && (
                    <Button color="secondary">
                      {row.id}
                    </Button>
                  )}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.table}
                </TableCell>
                <TableCell>
                  {row.people}
                </TableCell>
                <TableCell>
                  {row.status}
                </TableCell>
                <TableCell>
                  {row.date}
                </TableCell>
                <TableCell>
                  {row.time}
                </TableCell>
                <TableCell>
                  {row.specification}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
      <div>
        <h2>Change event /:id</h2>
      </div>
      <form className={styles.component} noValidate align="center">
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
      <Container className={styles.container}>
        <TreeView>
          <TreeItem nodeId="1" label="Table">
            <TreeItem nodeId="2" label="1" />
            <TreeItem nodeId="3" label="2" />
            <TreeItem nodeId="4" label="3" />
          </TreeItem>
        </TreeView>
      </Container>
      <Container className={styles.container}>
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
      <Container className={styles.container} >
        <TextField
          id="outlined-multiline-static"
          label="Event specification"
          multiline
          rows={6}
          defaultValue=""
          variant="outlined"
        />
      </Container>
      <Container className={styles.component} align="center">
        <Button variant="contained" color="secondary" >
          Edit Event
        </Button>
      </Container>
    </Paper>
  </main>
);

export default TablesEvents;
