import React from "react";

import { Header } from "./header";

export class Root extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                {this.props.children}
            </div>
        );
    }
}