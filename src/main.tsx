import ReactDOM from 'react-dom';
import './assets/styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routing';

ReactDOM.render(
  <Router>
    <Routing />
  </Router>,
  document.getElementById('root')
);