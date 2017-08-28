
import React from "react";
import { render } from "react-dom";

import { Header } from "./components/header";
import { Product } from "./components/product";

class App extends React.Component {
    render() {
        return(
            <div>
                <Header></Header>
                <Product></Product>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));