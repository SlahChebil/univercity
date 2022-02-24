import { Component } from "react";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Login from "./components/land/Login";

export class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" component={Login}></Route>
                </Switch>
            </Router>
    )}
}

export default App;