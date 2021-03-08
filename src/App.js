import React from 'react';
import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

/**
 *
 *
 * @return {*}
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
