// react
import React from "react";

// react-router
import {Route, HashRouter as Router} from 'react-router-dom';
import createHistory from 'history/createHashHistory';

// animation
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// components
import Component0 from './component/Component0/Component0';
import Component1 from './component/Component1/Component1';
import Component2 from './component/Component2/Component2';

// history
const history = createHistory();

export default class Container extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Route render={({location}) => {
                    return(
                        <div key={location.pathname}>
                            <Route location={location} exact path="/" component={Component0} />
                            <Route location={location} path="/component1" component={Component1} />
                            <Route location={location} path="/component2" component={Component2} />
                        </div>
                    )
                }}/>
            </Router>
        );
    }
}