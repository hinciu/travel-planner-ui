import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';

const Loading = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.loaderWrapper}>
      <CircularProgress {...props} />
    </div>
  );
};

export default Loading;
