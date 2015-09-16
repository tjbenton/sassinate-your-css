import React from "react/addons";
import _ from "lodash";

const Note = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
  contextTypes: {
    flux: React.PropTypes.object,
    export: React.PropTypes.bool,
    overview: React.PropTypes.bool,
    slide: React.PropTypes.number
  },
  getInitialState(){
    return {
      active: false,
      was_active: false,
      opacity: this.context.export || this.context.overview ? 1 : 0
    };
  },
  componentDidMount(){
    this.context.flux.stores.SlideStore.listen(this._storeChange);
  },
  componentWillUnmount(){
    this.context.flux.stores.SlideStore.unlisten(this._storeChange);
  },
  _storeChange(state){
    const slide = this.context.slide,
          note = React.findDOMNode(this.refs.note),
          key = _.findKey(state.fragments[slide], {
            "id": parseInt(this.props.step - 1)
          });

    if(slide in state.fragments && state.fragments[slide].hasOwnProperty(key)){
      let step = state.fragments[slide][key];
      this.setState({
        active: step.visible,
        type: step.prev ? "prev" : step.current ? "current" : step.next ? "next" : false
      }, () => {
        let endVal = this.state.active ? 1 : 0,
            node = this.getDOMNode();
        if(this.context.export || this.context.overview){
          endVal = 1;
        }
        // used to delay the state of was active
        let handler = () => {
              this.setState({
                was_active: step.visible
              });
              node.removeEventListener("animationend", handler);
            };
        node.addEventListener("animationend", handler);
      });
    }
  },
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
