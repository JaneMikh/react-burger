import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './services/store';
import { ProvideAuth } from './services/auth';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={ store }>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </Provider>
    </Router>
  </React.StrictMode>
);


/*ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={ store }>
        <ProvideAuth>
          <App />
        </ProvideAuth>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
