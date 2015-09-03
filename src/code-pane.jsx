import React from "react/addons";
import highlight from "highlight.js";
import Base from "./base";
import Radium from "radium";

@Radium
class CodePane extends Base {
  static contextTypes: {
    styles: React.PropTypes.object
  };
  static defaultProps: {
    lang: "html",
    source: ""
  };
  static propTypes: {
    children: React.PropTypes.node,
    styles: React.PropTypes.object,
    className: React.PropTypes.string,
    lang: React.PropTypes.string,
    source: React.PropTypes.string
  };
  createMarkup() {
    const markup = highlight.highlight(this.props.lang, this.props.source);
    return {
      __html: markup.value
    };
  }
  render() {
    return (
      <pre clasName={this.classNames("c-code-pane")} style={[this.getStyles(), this.props.style]}>
        <code className="hljs c-code-pane__code" dangerouslySetInnerHTML={this.createMarkup()} />
      </pre>
    );
  }
}

export default CodePane;
