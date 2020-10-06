import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const demoContent = [
  { id: '1', status: 'ordered', order: 632, specification: 'order product information' },
  { id: 'online', status: 'in preparation', order: 'online 123', specification: 'order product information' },
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <Button color="secondary">in preparation</Button>
      );
    case 'in preparation':
      return (
        <Button color="secondary">ready</Button>
      );
    case 'ready':
      return null;
    default:
      return null;
  }
};


const Kitchen = () => (
  <main>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Specification</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell>
                {row.order && (
                  <Button color="secondary">
                    {row.order}
                  </Button>
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.specification}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </main>
);


export default Kitchen;
