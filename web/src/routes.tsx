import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AllJobs from './pages/AllJobs';
import Home from './pages/Home';
import PostJob from './pages/PostJob';

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/all-jobs" component={AllJobs} />
                <Route path="/post-a-job" component={PostJob} />
                <Route path="/how-it-works" component={PostJob} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;