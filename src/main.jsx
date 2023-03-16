import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import iniFirebase from './firebase/config';

iniFirebase();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)






