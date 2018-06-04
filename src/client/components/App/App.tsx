import { Component, render } from "inferno";
import { Link, Route, StaticRouter, Switch } from "inferno-router";
import Home from "../Home/Home";
interface IState {}
interface IProps {}
export default class App extends Component<IProps, IState> {
   constructor(props) {
      super(props);
   }
   public render() {
      return (
         <div>
            <div>
               <Link to="/Home">Go Home</Link>
            </div>
            <div>
               <Switch>
                  <Route exact path="/Home" component={Home} />
               </Switch>
            </div>
         </div>
      );
   }
}
