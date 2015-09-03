import React from "react/addons";
import Radium from "radium";

@Radium
export default class Layout extends React.Component {
  static propTypes: {
    children: React.PropTypes.node
  };
  render() {
    return (
      <div className={this.classNames("l-layout")} style={[this.props.style]}>
        {this.props.children}
      </div>
    );
  }
}
