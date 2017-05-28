import React from "react";

// css
import style from "./Toolbar.css";

// image
import refreshImg from "./refresh.svg";

export default class ToolBar extends React.Component {
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
            <div>
                <ul className={style.toolBarContainer}>
                    <li>
                        <img src={refreshImg} onClick={this.refreshBrowser.bind(this)}></img>
                    </li>
                </ul>
            </div>
        );
    }
}
