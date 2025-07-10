import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A shade of blue
    },
    secondary: {
      main: '#dc004e', // A shade of red
    },
    background:{
      main:'#f5f5f5'
    }
    // You can add more colors here
    // error: {
    //   main: '#f44336',
    // },
    // warning: {
    //   main: '#ff9800',
    // },
    // info: {
    //   main: '#2196f3',
    // },
    // success: {
    //   main: '#4caf50',
    // },
  },
});

export default theme;