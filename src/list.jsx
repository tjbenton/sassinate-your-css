import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
export default class List extends Base {
  static propTypes: {
    children: React.PropTypes.node
  };

  static contextTypes: {
    styles: React.PropTypes.object
  };

  render() {
    return (
      <ul className={this.classNames("c-list")} style={[this.getStyles(), this.props.style]}>
        {this.props.children}
      </ul>
    );
  }
};


export class ListItem extends Base {
  static propTypes: {
    children: React.PropTypes.node
  };

  static contextTypes: {
    styles: React.PropTypes.object
  };

  render() {
    return (
      <li className={this.classNames("c-list__item")} style={[this.getStyles(), this.props.style]}>
        {this.props.children}
      </li>
    );
  }
}