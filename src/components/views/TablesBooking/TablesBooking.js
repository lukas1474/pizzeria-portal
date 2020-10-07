import React from 'react';
// import PropTypes from 'prop-types';
import styles from './TablesBooking.module.scss';
import Paper from '@material-ui/core/Paper';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const TablesBooking = () => (
  <main>
    <Paper>
      <div className={styles.component}>
        <h2>Tables booking view</h2>
      </div>
    </Paper>
  </main>
);

// Login.propTypes = {
//   children: PropTypes.node,
// };

export default TablesBooking;
