import React from "react/addons";
import highlight from "highlight.js";
import Base from "./base";
import Radium from "radium";
import Step from "./step";

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
  render() {

    let children;

    if(typeof this.props.children === "string"){
      children = (<Highlight lang={this.props.lang} source={this.props.children} />);
    }
    else{
      children = React.Children.map(this.props.children, (child) => {
        return React.addons.cloneWithProps(child, {
          lang: this.props.lang
        })
      });
    }

    return (
      <pre className={this.classNames("c-code-pane")} style={[this.getStyles(), this.props.style]}>
        <div className="c-code-pane__wrapper">
          {children}
        </div>
      </pre>
    );
  }
}

export default CodePane;


export class Highlight extends Base {
  getMarkup(){
    let {lang, source, children, format = true, adjust = 0} = this.props,
        code = source ? source : children;
    lang = lang === "sass" ? "stylus" : lang === "js" ? "javascript" : lang;

    return {
      code: {
        __html: highlight.highlight(lang, normalize(code, adjust)).value
      },
      lang: ["less", "sass", "scss", "stylus"].indexOf(lang) >= 0 ? `${lang} css` : lang
    };
  }

  render(){
    let markup = this.getMarkup();

    if(this.props.order){
      return (
        <Step order={~~this.props.order} className={`c-code-pane__step ${this.props.className}`}>
          <code className={`c-code-pane__code hljs ${markup.lang}`} dangerouslySetInnerHTML={markup.code} />
        </Step>
      );
    }
    else{
      return (
        <code className={`c-code-pane__code hljs ${markup.lang}`} dangerouslySetInnerHTML={markup.code} />
      );
    }
  }
}

function normalize(content, adjust = 5){
  adjust = ~~adjust;
  let check_list = ["", " ", "  ", "\n", "\S", "\r"];
  content = content.replace(/(?:\\[rn]+)+/g, "\n").split("\n"); // fix stupid shit windows does and then convert it to an array of lines

  // remove lines from the beggining
  while(content[0].length === 0 || check_list.indexOf(content[0]) > -1) content.shift();

  // remove trailing blank lines
  for(let i = content.length; i-- && content[i].length === 0 || check_list.indexOf(content[i]) > -1;) content.pop();
  // while(check_list.indexOf(line) > -1) content.pop();

  content = content.map(line => line.slice(
              content.join("\n") // converts content to string to string
                .match(/^\s*/gm) // gets the extra whitespace at the beginning of the line and returns a map of the spaces
                .sort((a, b) => a.length - b.length)[0].length // sorts the spaces array from smallest to largest and then checks returns the length of the first item in the array
              )) // remove extra whitespace from the beginning of each line
              .join("\n").replace(/[^\S\r\n]+$/gm, ""); // convert to string and remove all trailing white spaces from each line

  if(!!adjust){
    let spacing = "";
    while(adjust--) spacing += " ";

    return content.split("\n").filter(Boolean).map((line) => spacing + line).join("\n");
  }

  return content;
}