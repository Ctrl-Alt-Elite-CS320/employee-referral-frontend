import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
axios.defaults.baseURL = "http://45.77.153.120:4000";

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
