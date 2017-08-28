
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Root } from "./components/root";
import { Product } from "./components/product";
import { Login } from "./components/login";

class App extends React.Component {
    render() {
        return(
            <BrowserRouter >
                <Root>
                    <Route exact path="/" component={Product}/>
                    <Route path={"/home"} component={Product} />
                    <Route path={"/login"} component={Login} />
                </Root>
            </BrowserRouter>
        );
    }
}

render(<App/>, window.document.getElementById("app"));