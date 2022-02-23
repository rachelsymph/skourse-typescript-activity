import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './theme/useTheme';
import Home from './pages/Home';
import About from './pages/About';

import 'antd/dist/antd.css';

export default function App() {
  const { theme, changeTheme } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* Add a navbar that has a switch button to change theme color */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Create route for about and contact */}
            <Route path="/about" element={<About/>}/>
          </Routes>
        </Router>
        {/* Add a footer that has navigation to about and contact */}
      </ThemeProvider>
    </>
  );
}
