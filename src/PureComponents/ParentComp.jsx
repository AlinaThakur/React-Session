
import { PureComponent } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

 class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pooja",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Pooja",
      });
    }, 2000);
  }

  render() {
   console.log("*********00 Parent Comp render 00**********")
    return (
        <div>
      <div>
        <h2>ParentComponent</h2>
        <RegularComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div></div>
    );
  }
}

export default ParentComp;
