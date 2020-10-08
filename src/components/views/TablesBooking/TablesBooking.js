import React from 'react';
import styles from './TablesBooking.module.scss';
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
  { id: '1', status: 'reservation', table: 3, people: 4, date: '08-10-2020', time: '12:30-13:30' },
];

const TablesBooking = () => (
  <main>
    <div className={styles.component}>
      <h2>booking information/:id</h2>
    </div>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>People</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={styles.component}>
        <h2>Change booking/:id</h2>
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
      <Container className={styles.container} >
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
      <Container className={styles.container} align="center">
        <Button variant="contained" color="secondary">
          Edit booking
        </Button>
      </Container>
    </Paper>
  </main>
);

export default TablesBooking;
