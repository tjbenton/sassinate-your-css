import React from "react/addons";
import tweenState from "react-tween-state";
import _ from "lodash";

const Appear = React.createClass({
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
        let endVal = this.state.active ? 1 : 0;
        if(this.context.export || this.context.overview){
          endVal = 1;
        }
        // used to delay the state of was active
        let handler = () => {
              this.setState({
                was_active: state.fragments[slide][key].visible
              });
              this.getDOMNode().removeEventListener("animationend", handler);
            };
        this.getDOMNode().addEventListener("animationend", handler);
      });
    }
  },
  render(){
    let className = ["c-appear", "fragment"];

    this.props.className && className.push(this.props.className);

    if(this.state.active){
      className.push(...["is-active", ...(this.props.isActive || "").split(" "), this.props.animateIn ? `u-animate u-animate--${this.props.animateIn}` : ""]);
    }

    if(!this.state.active && this.state.was_active){
      className.push(...["is-active", this.props.animateOut ? `u-animate u-animate--${this.props.animateOut}` : ""]);
    }

    return (
      <div className={className.join(" ")} ref="fragment">
        {this.props.children}
      </div>
    );
  }
});

export default Appear;
