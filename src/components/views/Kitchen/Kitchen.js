import React from 'react';
import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Kitchen extends React.Component {

  static propTypes = {
    fetchOrders: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    orders: PropTypes.any,
    // updateTableStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchOrders } = this.props;
    fetchOrders();
  }

  renderActions(status) {
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
  }

  render() {
    const { loading: { active, error }, orders } = this.props;

    if (active || !orders.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    }

    return (
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
              {orders.map(row => (
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
                    {this.renderActions(row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </main>
    );
  }
}


export default Kitchen;
