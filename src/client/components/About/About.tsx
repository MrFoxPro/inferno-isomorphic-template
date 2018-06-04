import { Component } from "inferno";
import "./About.css";
interface IState {}
interface IProps {}
export default class About extends Component<IState, IProps> {
   constructor(props) {
      super(props);
   }
   public render() {
      return (
         <div>
            Simple Inferno SSR template
            <p className="text">Hello, world!</p>
         </div>
      );
   }
}
