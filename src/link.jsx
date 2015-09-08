import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
export default class Link extends Base {
  static propTypes: {
    children: React.PropTypes.node,
    href: React.PropTypes.string
  };

  static contextTypes: {
    styles: React.PropTypes.object
  };

  render() {
    return (
      <a href={this.props.href} style={[this.getStyles(), this.props.style]}>
        {this.props.children}
      </a>
    );
  }
}
