import { createTheme } from '@material-ui/core/styles';


export const theme = createTheme({
  palette: {
    primary: {
      main: '#0079C1',
    },
    secondary: {
      main: '#E04343',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  overrides: {
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: '#0078C1',
          fontWeight: 'normal',
        },
      },
      focused: {},
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderColor: '#0078C1',
        },
      },
    },
    MuiTableBody: {
      root: {
        borderTop: '1px solid red',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
    },
  },
});
