import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
export default class BlockQuote extends Base {
  static propTypes: {
    children: React.PropTypes.node,
    styles: React.PropTypes.object,
    className: React.PropTypes.string
  };
  render() {
    return (
      <blockquote className={this.classNames("c-blockquote")} style={[this.getStyles(), this.props.style]}>
        {this.props.children}
      </blockquote>
    );
  };
}

export class Quote extends Base {
  static propTypes: {
    children: React.PropTypes.node,
    styles: React.PropTypes.object,
    className: React.PropTypes.string
  };
  render() {
    return (
      <span className={this.classNames("c-blockquote__quote")} style={[this.getStyles(), this.props.style]}>
        {this.props.children}
      </span>
    );
  }
}