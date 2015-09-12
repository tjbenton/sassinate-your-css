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
    let code = this.props.source ? this.props.source : this.props.children,
        markup = highlight.highlight(this.props.lang === "sass" ? "stylus" : this.props.lang, normalize(code));

    return {
      __html: markup.value
    };
  }
  render() {
    return (
      <pre className={this.classNames("c-code-pane")} style={[this.getStyles(), this.props.style]}>
        <code className="hljs c-code-pane__code" dangerouslySetInnerHTML={this.createMarkup()} />
      </pre>
    );
  }
}

export default CodePane;


function normalize(content){
  content = content.replace(/(?:\\[rn]+)+/g, "\n").split("\n"); // fix stupid shit windows does and then convert it to an array of lines
  // remove lines from the beggining
  for(let i = 0; i++ && content[i].length === 0;){
    content.shift();
  };

  // remove trailing blank lines
  for(let i = content.length; i-- && content[i].length === 0;){
    content.pop();
  };

  return content.map(line => line.slice(
           content.join("\n") // converts content to string to string
             .match(/^\s*/gm) // gets the extra whitespace at the beginning of the line and returns a map of the spaces
             .sort((a, b) => a.length - b.length)[0].length // sorts the spaces array from smallest to largest and then checks returns the length of the first item in the array
         )) // remove extra whitespace from the beginning of each line
         .join("\n").replace(/[^\S\r\n]+$/gm, ""); // convert to string and remove all trailing white spaces
}