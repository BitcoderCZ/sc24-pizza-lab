import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FoodMenu from './views/FoodMenu';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#210061',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ee8bff',
      contrastText: '#112A46',
    },
    background: {
      main: '#2e4590',
      contrastText: '#ffffff',
    },
    action: {
      main: '#FFFFFF',
      contrastText: '#ffffff',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <CssBaseline />  */} {/* uncomment if you want to use material UI */}
        <NavBar />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/food-menu" element={<FoodMenu />} />
            <Route index path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
