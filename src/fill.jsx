import React from "react/addons";
import Radium from "radium";

@Radium
class Fill extends React.Component {
  static propTypes: {
    children: React.PropTypes.node
  };
  render() {
    return (
      <div className="u-fill">
        {this.props.children}
      </div>
    );
  }
}


export default Fill;
