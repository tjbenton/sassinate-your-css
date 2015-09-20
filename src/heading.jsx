/*global window*/

import React from "react/addons";
import Base from "./base";
import Radium from "radium";

@Radium
class Heading extends Base {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
    this.state = {
      width: 256,
      height: 24
    };
  }
  componentDidMount() {
    this.resize();
    window.addEventListener("load", this.resize);
  }
  componentWillReceiveProps() {
    this.resize();
  }
  resize() {
    if (this.props.fit) {
      const el = React.findDOMNode(this.refs.text),
            state = this.state,
            width = el.offsetWidth || el.getComputedTextLength(),
            height = el.offsetHeight || 24;

      if (state.width !== width || state.height !== height) {
        this.setState({
          width,
          height
        });
      }
    }
  }
  render() {
    const Tag = "H" + this.props.size;
    const viewBox = [
      0, 0,
      this.state.width,
      this.state.height
    ].join(" ");
    const styles = {
      svg: {
        width: "100%",
        maxHeight: "100%",
        fill: "currentcolor",
        overflow: "visible"
      },
      text: {
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        textAnchor: "middle"
      }
    };
    return this.props.fit
    ? <div className={`c-h${this.props.size}`} style={[this.getStyles(), this.props.style]}>
        <svg {...this.props} enable-backround={viewBox} viewBox={viewBox} style={styles.svg}>
          <text ref="text" x="50%" y={this.state.height - ~~(this.state.height / 6)} style={styles.text}>
            {this.props.children}
          </text>
        </svg>
      </div>
    : React.createElement(Tag, {
        style: [this.getStyles(), this.props.style]
      }, this.props.children);
  }
}

Heading.defaultProps = {
  size: 1
};

Heading.propTypes = {
  children: React.PropTypes.node,
  size: React.PropTypes.number
};

Heading.contextTypes = {
  styles: React.PropTypes.object
};

export default Heading;
