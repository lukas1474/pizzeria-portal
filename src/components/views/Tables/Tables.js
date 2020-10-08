import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const demoContent = [
  { id: 1, hour: '18:00', table1: 'free', table2: 'event', table3: `reseravtion` },
  { id: 2, hour: '18:30', table1: 'reseravtion', table2: 'event', table3: `reseravtion` },
  { id: 3, hour: '19:00', table1: 'free', table2: 'event', table3: `reseravtion` },
  { id: 4, hour: '19:30', table1: 'free', table2: 'event', table3: `free` },
  { id: 5, hour: '20:00', table1: 'free', table2: 'event', table3: `reseravtion` },
  { id: 6, hour: '20:30', table1: 'free', table2: 'event', table3: `reseravtion` },
  { id: 7, hour: '21:00', table1: 'free', table2: 'event', table3: `free` },
  { id: 8, hour: '21:30', table1: 'reseravtion', table2: 'event', table3: `free` },
  { id: 9, hour: '22:00', table1: 'free', table2: 'event', table3: `reseravtion` },
  { id: 10, hour: '22:30', table1: 'free', table2: 'event', table3: `reseravtion` },
  { id: 11, hour: '23:00', table1: 'free', table2: 'free', table3: `reseravtion` },
  { id: 12, hour: '23:30', table1: 'free', table2: 'free', table3: `reseravtion` },
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button className={styles.link} component={Link} to={`tables/booking/new`} color="secondary">New booking</Button>
          <Button className={styles.link} component={Link} to={`tables/events/new`} color="secondary">New event</Button>
          <Button className={styles.link} component={Link} to={`waiter/order/new`} color="secondary">new order</Button>
        </>
      );
    case 'reseravtion':
      return (
        <Button className={styles.link} component={Link} to={`tables/booking/:id`} color="primary">Reservation</Button>
      );
    case 'event':
      return (
        <Button className={styles.link} component={Link} to={`tables/events/:id`} color="primary">Event</Button>
      );
    default:
      return null;
  }
};

const Tables = ({ id }) => (
  <main>
    <Paper>
      <form className={styles.container} noValidate>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue="2020-10-07T12:30"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <div className={styles.component}>
        <h2>Table view</h2>
        <Link to={`tables/booking/new`} className={styles.link}>Booking new</Link>
        <Link to={`tables/booking/:id`} className={styles.link}>Booking ID</Link>
        <Link to={`tables/events/new`} className={styles.link}>Events new</Link>
        <Link to={`tables/events/:id`} className={styles.link}>Events ID</Link>
      </div>
      <Grid item xs={12}>
        <Paper className={styles.paper}>
          <Paper className={styles.component}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Hour</TableCell>
                  <TableCell>Table 1</TableCell>
                  <TableCell>Table 2</TableCell>
                  <TableCell>Table 3</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {demoContent.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.hour}
                    </TableCell>
                    <TableCell>
                      {renderActions(row.table1)}
                    </TableCell>
                    <TableCell>
                      {renderActions(row.table2)}
                    </TableCell>
                    <TableCell>
                      {renderActions(row.table3)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Paper>
      </Grid>
    </Paper>
  </main>
);

Tables.propTypes = {
  id: PropTypes.node,
};

export default Tables;
