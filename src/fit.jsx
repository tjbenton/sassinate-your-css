import React from "react/addons";
import Radium from "radium";

@Radium
class Fit extends React.Component {
  render() {
    const styles = {
      flex: 0
    };
    return (
      <div className="u-fit" style={[styles, this.props.style]}>
        {this.props.children}
      </div>
    );
  }
}

Fit.propTypes = {
  children: React.PropTypes.node
};

export default Fit;
