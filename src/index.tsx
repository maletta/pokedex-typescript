import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/global';
import reportWebVitals from './reportWebVitals';
import ThemeContext from 'hooks/ThemeContext';
import MenuContext from 'hooks/MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeContext>
      <MenuContext>
        <App />
      </MenuContext>
    </ThemeContext>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
