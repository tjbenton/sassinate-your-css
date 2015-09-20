import React from "react/addons";

export default class Note extends React.Component{
  render(){
    if(this.props.order){
      return (
        <li className="c-notes__note" ref="note">
          <Step order={this.props.order} className={`c-step--highlight is-visible ${this.props.className}`}>
            {this.props.children}
          </Step>
        </li>
      );
    }
    else{
      return (
        <li className="c-notes__note">
          {this.props.children}
        </li>
      );
    }
  }
};

export default Note;
