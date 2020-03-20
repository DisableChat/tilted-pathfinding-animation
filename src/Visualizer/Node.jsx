import React, { Component } from "react";

import "./Node.css";

export default class Node extends Component {
    render() {
        const { start, end } = this.props;
        const nodeType = start ? "start-node" : end ? "end-node" : "";
        return <div className={`node ${nodeType}`}></div>;
    }
}
