import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';
import {Link} from 'react-router-dom';

const Table = (id) => (
  <div className={styles.component}>
    <h2>Table view</h2>
    <Link to={`table/booking/new`} className={styles.link}>Booking new</Link>
    <Link to={`table/booking/${id}`} className={styles.link}>Booking ID</Link>
    <Link to={`table/events/new`} className={styles.link}>Events new</Link>
    <Link to={`table/events/${id}`} className={styles.link}>Events ID</Link>
  </div>
);

Table.propTypes = {
  id: PropTypes.node,
};

export default Table;
