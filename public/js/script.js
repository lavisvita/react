import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Archives from './components/pages/archives';
import Featured from './components/pages/featured';
import Layout from './components/pages/layout';
import Settings from './components/pages/settings';

const app = document.getElementById('content');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path='archives(/:article)' component={Archives}></Route>
            <Route path='settings' component={Settings}></Route>
        </Route>
    </Router>,
    app
);
