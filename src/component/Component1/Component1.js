import React from "react";

// react-redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// action
import * as actions from '../../action/Component1';

// other component
import ComponentWithToolbar from "../ComponentWithToolbar/ComponentWithToolbar";

class Component1 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.props.counter_plus(1);
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
    }

    backoff(event) {
        this.props.history.goBack();
    }

    render() {
        return (
            <ComponentWithToolbar componentName="component1">
                <p>进入次数：{this.props.counter}</p>
                <a href="javascript:void(0)" onClick={this.backoff.bind(this)}>后退</a>
            </ComponentWithToolbar>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        counter: state.Component1.counter,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component1);
