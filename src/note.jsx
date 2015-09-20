import React from "react/addons";
import {StepMixin} from "./step";

const Note = React.createClass({
  mixins: [StepMixin],
  render(){
    let classes = ["c-notes__note"],
        {
          className,
          isVisible,
          isInvisible,
          animateIn,
          animateOut,
          ...rest
        } = this.props;

    // adds any passed classes
    className && classes.push(...className.split(" "));

    // handles adding the active classes
    if(this.state.visible){
      classes.push(...[
        "is-visible",
        ...(isVisible || "").split(" "),
        animateIn ? `u-animate u-animate--${animateIn}` : ""
      ]);
    }

    // handles the exiting classes
    if(!this.state.visible && this.state.was_active){
      classes.push(...[
        "is-visible",
        ...(isInvisible || "").split(" "),
        animateOut ? `u-animate u-animate--${animateOut}` : ""
      ]);
    }

    // this will set `is-prev`, `is-current`, `is-next`
    if(!!this.state.type){
      classes.push(`is-${this.state.type}`);
    }

    return (
      <li className={classes.filter(Boolean).join(" ")} ref="note" {...rest}>
        {this.props.children}
      </li>
    );
  }
});

export default Note;
