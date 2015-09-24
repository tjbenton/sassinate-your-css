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

    let {
          children,
          lang,
          filename,
          style
        } = this.props;

    if(typeof children === "string"){
      children = (<Highlight lang={lang} source={children} />);
    }
    else{
      children = React.Children.map(children, (child) => {
        return React.addons.cloneWithProps(child, {
          lang: lang
        })
      });
    }

    return (
      <div data-header={!!filename ? filename : lang} className={this.classNames("c-code-pane", "u-fill")} style={[this.getStyles(), style]}>
        <pre className="c-code-pane__pre">
          <code className="c-code-pane__code">
            {children}
          </code>
        </pre>
      </div>
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
          <code className={`c-code-pane__highlight hljs ${markup.lang}`} dangerouslySetInnerHTML={markup.code} />
        </Step>
      );
    }
    else{
      return (
        <code className={`c-code-pane__highlight hljs ${markup.lang}`} dangerouslySetInnerHTML={markup.code} />
      );
    }
  }
}


/// @name normalize
/// @author Tyler Benton
/// @description
///  - Removes trailing/leading blank lines
///  - Removes extra whitespace before all the lines that are passed without affecting the
///    formatting of the passes string.
///  - Then removes trailing whitespace at the end of each line.
///
/// @arg {string} content - The content you want to be normalized
/// @arg {number} adjust [0] - The amount of indention to add on the beginning as an override
///
/// @returns {string} - The normalized string
function normalize(content, adjust = 0){
  adjust = ~~adjust;
  content = content.replace(/(?:\\[rn]+)+/g, "\n").split("\n"); // fix stupid shit windows does and then convert it to an array of lines

  // remove lines from the beginning
  while(!!!content[0].trim().length) content.shift();

  // remove trailing blank lines
  while(!!!content[content.length - 1].trim().length) content.pop();

  content = content.map(line => line.slice(
              content.join("\n") // converts content to string to string
                .match(/^\s*/gm) // gets the extra whitespace at the beginning of the line and returns a map of the spaces
                .sort((a, b) => a.length - b.length)[0].length // sorts the spaces array from smallest to largest and then checks returns the length of the first item in the array
              )) // remove extra whitespace from the beginning of each line
              .join("\n").replace(/[^\S\r\n]+$/gm, ""); // convert to string and remove all trailing white spaces from each line

  if(!!adjust){
    let spacing = "";
    while(adjust--) spacing += " ";

    return content.split("\n").map((line) => spacing + line).join("\n");
  }

  return content;
}