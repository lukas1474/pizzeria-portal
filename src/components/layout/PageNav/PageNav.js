import React from 'react';
import {NavLink} from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styles from './Homepage.module.scss';

const PageNav = () => (
  <div>
    <nav>
      <NavLink exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Table</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/Waiter`} activeClassName='active'>Waiter</NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/Kitchen`} activeClassName='active'>Kitchen</NavLink>
    </nav>
  </div>
);

// Homepage.propTypes = {
//   children: PropTypes.node,
// };

export default PageNav;
