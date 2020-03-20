import React, { Component } from "react";
import Node from "./Node";

import "./Visualizer.css";

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
                    start: row === 5 && col === 5,
                    end: row === 20 && col === 45
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
                                        test={"rip"}
                                        test={"smae"}
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
