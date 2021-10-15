import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { useStyles } from './styles';

const GlobalSpinner = () => {
  const {
    forecast: {loading: isForecastLoading},
    route: {loading: isRouteLoading },
  } = useSelector((state) => state);
  const classes = useStyles();
  const open =
      isForecastLoading ||
      isRouteLoading;
  return (
    <Dialog open={open} classes={{ paper: classes.dialogPaper }}>
      <Loading />
    </Dialog>
  );
};

export default GlobalSpinner;
