import React from "react/addons";
import Radium from "radium";
import Base from "./base";

@Radium
class Fill extends Base {
  static propTypes: {
    children: React.PropTypes.node
  };
  render() {
    return (
      <div className={this.classNames("u-fill")} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}


export default Fill;
