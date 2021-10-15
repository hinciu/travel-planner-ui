import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  errorDialogWrapper: {
    borderLeft: '0.5rem solid #E04343',
    padding: theme.spacing(3, 6, 3, 6),
    overflow: 'visible',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  errorButton: {
    borderRadius: '4rem',
    padding: theme.spacing(1, 3, 1, 3),
    '&:hover': {
      backgroundColor: '#0078C1',
      color: 'white',
      borderColor: 'white',
    },
  },
  dialogTitle: {
    textAlign: 'center',
    color: 'black',
    position: 'relative',
  },
  popupMessage: {
    margin: theme.spacing(0, 0, 1.5, 0),
    color: '#384547',
    fontSize: '1rem',
  },
}));

export default useStyles;
