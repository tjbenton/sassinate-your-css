import React from "react/addons";
import tweenState from "react-tween-state";

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
    const slide = this.context.slide,
          fragment = React.findDOMNode(this.refs.fragment),
          step = state.fragments[slide][`order${fragment.dataset.order}`];

    if(slide in state.fragments && !!step){
      this.setState({
        visible: step.visible,
        type: step.prev ? "prev" : step.current ? "current" : step.next ? "next" : false
      }, () => {
        let endVal = this.state.visible ? 1 : 0,
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
    let classes = ["c-step", "js-step"],
        {
          className,
          isVisible,
          isInvisible,
          order,
          animateIn,
          animateOut
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
      <div className={classes.filter(Boolean).join(" ")} data-order={order} ref="fragment">
        {this.props.children}
      </div>
    );
  }
});

export default Step;
