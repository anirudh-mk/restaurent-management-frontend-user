
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './Pages/Home/Home'
import Product from './Pages/Product/Product'
import Cart from './Pages/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const theme = createTheme();


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

