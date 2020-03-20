import React, { Component } from "react";
import Node from "./Node";

import "./Visualizer.css";

const NODE_START_ROW = 5;
const NODE_START_COL = 5;
const NODE_END_ROW = 20;
const NODE_END_COL = 45;

export default class Visualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: []
        };
    }

    componentDidMount() {
        const nodes = [];
        for (let row = 0; row < 25; row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++) {
                const currentNode = {
                    row,
                    col,
                    start: row === NODE_START_ROW && col === NODE_START_COL,
                    end: row === NODE_END_ROW && col === NODE_END_COL
                };
                currentRow.push(currentNode);
            }
            nodes.push(currentRow);
        }
        this.setState({ nodes });
    }

    render() {
        const { nodes } = this.state;
        console.log(nodes);

        return (
            <div className="grid">
                {nodes.map((row, rowIdx) => {
                    return (
                        <div key={rowIdx}>
                            {row.map((node, nodeIdx) => {
                                const { start, end } = node;
                                return (
                                    <Node
                                        key={nodeIdx}
                                        start={start}
                                        end={end}
                                    ></Node>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}
