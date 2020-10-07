import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  { id: 'reservation', status: 'reservation', table: 3, type: 'lunch', time: '12:30-13:30' },
  { id: 'event', status: 'event', table: 'online 2', type: 'birthday party', time: '17:00-23:00' },
];

const demoContent2 = [
  { id: 'pizzeria', quantity: 84 },
  { id: 'online', quantity: 142 },
];

const renderActions = status => {
  switch (status) {
    case 'reservation':
      return (
        <Button color="secondary">finish</Button>
      );
    case 'event':
      return (
        <Button color="secondary">finish</Button>
      );
    default:
      return null;
  }
};

const Homepage = () => (
  <main>
    <Paper className={styles.component}>
      <div className={styles.component}>
        <h2>Events and reservations</h2>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Action</TableCell>
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
                {row.status}
              </TableCell>
              <TableCell>
                {row.type}
              </TableCell>
              <TableCell>
                {row.time}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={styles.component}>
        <h2>Orders</h2>
      </div>
      <Table aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Orders</TableCell>
            <TableCell >Qty.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody colSpan={2}>
          {demoContent2.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.quantity}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="center">Total</TableCell>
            <TableCell align="right">226 </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </main>
);

export default Homepage;
