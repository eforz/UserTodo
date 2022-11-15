import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { createGlobalStyle, ThemeProvider} from 'styled-components';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore()

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: #181820;
  color: #fff;
  font-size: 14px;
}
`

const theme = {
  colors: {
    primary: 'red',
    secondary: "green",
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: "(max-width: 768px) and (min-width: 425px)", 
  }
}

root.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App/>
        <Global/>
      </ThemeProvider>
    </Router>
  </Provider>
);

