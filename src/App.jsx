import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart';

const theme = createTheme();


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Product /> */}
      <Cart />
    </ThemeProvider>
  );
}

export default App;