import React from "react/addons";
import tweenState from "react-tween-state";
import _ from "lodash";

const Step = React.createClass({
  // mixins: [tweenState.Mixin],
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
    const slide = this.context.slide;
    const fragment = React.findDOMNode(this.refs.fragment);
    const key = _.findKey(state.fragments[slide], {
      "id": parseInt(fragment.dataset.fid)
    });

    if (slide in state.fragments && state.fragments[slide].hasOwnProperty(key)){
      this.setState({
        active: state.fragments[slide][key].visible
      }, () => {
        let endVal = this.state.active ? 1 : 0,
            node = this.getDOMNode();
        if(this.context.export || this.context.overview){
          endVal = 1;
        }
        // used to delay the state of was active
        let handler = () => {
              this.setState({
                was_active: state.fragments[slide][key].visible
              });
              node.removeEventListener("animationend", handler);
            };
        node.addEventListener("animationend", handler);
      });
    }
  },
  render(){
    let classes = ["c-step", "js-step"],
        {
          className,
          isActive,
          isInactive,
          animateIn,
          animateOut
        } = this.props;

    // adds any passes classes
    className && classes.push(...className.split(" "));

    // handles adding the active classes
    if(this.state.active){
      classes.push(...[
        "is-active",
        ...(isActive || "").split(" "),
        animateIn ? `u-animate u-animate--${animateIn}` : ""
      ]);
    }

    // handles the exiting classes
    if(!this.state.active && this.state.was_active){
      classes.push(...[
        "is-active",
        ...(isInactive || "").split(" "),
        animateOut ? `u-animate u-animate--${animateOut}` : ""
      ]);
    }

    return (
      <div className={classes.filter(Boolean).join(" ")} ref="fragment">
        {this.props.children}
      </div>
    );
  }
});

export default Step;
