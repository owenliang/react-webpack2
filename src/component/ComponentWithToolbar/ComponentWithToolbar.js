import React from "react";

// css
import style from "./ComponentWithToolbar.css";

// image
import refreshImg from "./refresh.svg";

export default class ComponentWithToolbar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {
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

    refreshBrowser() {
        window.location.reload();
    }

    render() {
        return (
            <div className={style.componentWithToolBar}>
                <div className={style.componentName}>{this.props.componentName}</div>
                <div className={style.topPlaceholder}></div>
                {this.props.children}
                <ul className={style.toolBarContainer}>
                    <li>
                        <img src={refreshImg} onClick={this.refreshBrowser.bind(this)}></img>
                    </li>
                </ul>
            </div>
        );
    }
}
