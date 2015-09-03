import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
export default class Code extends Base {
  static propTypes: {
    children: React.PropTypes.node,
    styles: React.PropTypes.object
  };
  render() {
    return (
      <code className={this.classNames("c-code")} style={[this.getStyles(), this.props.style]}>
        {this.props.children}
      </code>
    );
  }
}