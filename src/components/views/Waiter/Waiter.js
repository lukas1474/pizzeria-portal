import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = (id) => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to={`waiter/order/${id}`} className={styles.link}>Order ID</Link>
    <Link to={`waiter/order/new`} className={styles.link}>New order</Link>
  </div>
);

Waiter.propTypes = {
  id: PropTypes.node,
};

export default Waiter;
