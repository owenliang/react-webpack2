import React from "react";

// react-redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// action
import * as actions from '../../action/Component1';

class Component1 extends React.Component {
    constructor(props, context) {
        super(props, context);
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

    render() {
        return (
            <div>
                <h1>Component1</h1>
                <p>进入次数：{this.props.counter}</p>
            </div>
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
