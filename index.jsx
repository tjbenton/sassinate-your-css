/*global document*/

import React from "react/addons";
import context from "./src/utils/context";

import {Router, Route} from "react-router";
import HashHistory from "react-router/lib/HashHistory";

import Alt from "alt";
import Flux from "./src/flux/alt";

import Deck from "./presentation/deck";
import config from "./presentation/config";

// compiles the scss for the page inserts it on change
// require("!style!css!highlight.js/styles/color-brewer.css");
// tomorrow
// color-brewer
require("!style!css!sass!./themes/sassinate/scss/index.scss");

const flux = new Flux();
Alt.debug("flux", flux);

class Presentation extends React.Component {
  render() {
    return (<Deck/>);
  }
}

Presentation.contextTypes = {
  router: React.PropTypes.object
};

Presentation = context(Presentation, {
                styles: config.theme,
                print: config.print,
                flux
               });

const routes = (
  <Router history={new HashHistory()}>
    <Route path="/" component={Presentation} />
    <Route path="/:slide" component={Presentation} />
  </Router>
);

React.render(routes, document.body);