import React from "react";

// react-redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// react-router
import {Link} from 'react-router-dom';

// action
import * as actions from '../../action/Component0';

// image
import image from "./china.png";

// other component
import ComponentWithToolbar from "../ComponentWithToolbar/ComponentWithToolbar";

class Component0 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {
        // burst action
        this.props.stay_timing();
        // access dom
        $(this.refs.stayInfo).css('color', 'red');
    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        this.props.stay_end();
    }

    render() {
        return (
            <ComponentWithToolbar componentName="component0">
                <img src={image} />
                <h1 ref="stayInfo">停留时间：{this.props.stay}</h1>
                <p><Link to="/component1">访问Component1</Link></p>
                <p><Link to="/component2">访问Component2</Link></p>
            </ComponentWithToolbar>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        stay: state.Component0.stay,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component0);
