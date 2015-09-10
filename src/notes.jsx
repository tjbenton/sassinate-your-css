import React from "react/addons";
import Radium from "radium";
import Base from "./base";

@Radium
export default class Notes extends Base {
  static propTypes: {
    children: React.PropTypes.node
  };
  render() {
    return (
      <ul refs="notes" className={this.classNames("c-notes")} style={[this.props.style]}>
        {this.props.children}
      </ul>
    );
  }
};