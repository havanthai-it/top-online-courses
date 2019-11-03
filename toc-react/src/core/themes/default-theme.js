import { createMuiTheme } from '@material-ui/core/styles';

const DefaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#353535'
    },
    secondary: {
      main: '#5f7083'
    }
  },
  typography: {
    fontFamily: '\'Nunito\', sans-serif'
  },
  overrides: {
    MuiGrid: {
      item: {
      }
    },
    MuiButton: {
      root: {
        textTransform: 'inherit'
      }
    },
    MuiTextField: {
      root: {
        width: '100%'
      }
    },
    MuiOutlinedInput: {
      root: {
        '&$focused $notchedOutline': {
          borderWidth: '1px',
          borderColor: 'inherit'
        }
      }
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: 'inherit'
        }
      }
    }
  }
});

export default DefaultTheme;
