import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/reset.css';
// import 'antd/dist/reset.css';

import { ConfigProvider, theme } from 'antd';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ConfigProvider theme={{
    algorithm: theme.darkAlgorithm
}}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ConfigProvider>
,

  document.getElementById('root')
);

reportWebVitals();
