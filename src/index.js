import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router }from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import News from './components/news';


ReactDOM.render(
<Router>
    <div>
    <Route exact path="/" component={App}/>
    <Route exact path="/news" component={News}/>
    </div>
</Router>, document.getElementById('root'));

registerServiceWorker();
