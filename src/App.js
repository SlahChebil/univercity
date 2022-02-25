import { Component } from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/land/Login";

export class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" component={Login}></Route>
                    <Route path="/" component={Header}></Route>
                </Switch>
            </Router>
    )}
}

export default App;