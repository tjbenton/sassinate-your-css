/*global setInterval clearInterval*/

import React from "react/addons";
import cloneWithProps from "react/lib/cloneWithProps";
import Base from "./base";
import Radium from "radium";

const startTime = function startTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  const strTime = hours + ":" + minutes + ":" + seconds + " " + ampm;
  return strTime;
};

@Radium
class Presenter extends Base {
  constructor(props) {
    super(props);
    this.state = {
      time: startTime(new Date())
    };
  }
  _renderMainSlide() {
    const child = this.props.slides[this.props.slide];
    const presenterStyle = {
      position: "relative"
    };
    return cloneWithProps(child, {
      key: this.props.slide,
      slideIndex: this.props.slide,
      lastSlide: this.props.lastSlide,
      transition: [],
      transitionDuration: 0,
      presenterStyle
    });
  }
  componentDidMount() {
    this.time = setInterval(()=> {
      this.setState({
        time: startTime(new Date())
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.time);
  }
  _renderNextSlide() {
    const presenterStyle = {
      position: "relative"
    };
    const endStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      margin: 0
    };
    const child = this.props.slides[parseInt(this.props.slide) + 1];
    return child ? cloneWithProps(child, {
      key: this.props.slide + 1,
      slideIndex: this.props.slide + 1,
      lastSlide: this.props.lastSlide,
      transition: [],
      transitionDuration: 0,
      presenterStyle,
      appearOff: true
    }) : <h1 style={[endStyle]}>END</h1>;
  }
  _renderNotes() {
    const child = this.props.slides[this.props.slide];
    let notes = []
    React.Children.forEach(child.props.children, (obj) => {
      if(obj.type.displayName === "Notes"){
        notes.push(obj);
      }
    });

    return notes;
  }
  render() {
    return (
      <div className="c-presenter">
        <div className="c-presenter__header">
          <h2 className="c-presenter__info">
            Slide {this.props.slide + 1} of {this.props.slides.length}
          </h2>
          <h2 className="c-presenter__clock">{this.state.time}</h2>
        </div>
        <div className="c-presenter__preview">
          <div className="c-presenter__main o-10:7 js-presentor-main">
            <div className="o-10:7__container">
              {this._renderMainSlide()}
            </div>
          </div>
          <div className="c-presenter__next o-10:7">
            <div className="o-10:7__container">
              {this._renderNextSlide()}
            </div>
          </div>
        </div>
        <div className="c-presenter__notes t-secondary">
          {this._renderNotes()}
        </div>
      </div>
    );
  }
}

Presenter.propTypes = {
  lastSlide: React.PropTypes.number,
  slides: React.PropTypes.array,
  slide: React.PropTypes.number
};

Presenter.contextTypes = {
  styles: React.PropTypes.object
};

export default Presenter;
