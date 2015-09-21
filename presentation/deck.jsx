import React from "react/addons";

import {
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Highlight,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Note,
  Notes,
  Quote,
  Slide,
  Step,
  Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

import Interactive from "./interactive";

const images = {
        sass: require("./images/logo_sass.svg"),
        abstract: require("./images/abstract-bg.jpg")
      };

let preloader_images = [];
for(let item in images){
  preloader_images.push(images[item]);
}
preloader(preloader_images);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgImage={images.abstract} bgLighten=".5">
          <Image src={images.sass} margin="0px auto 40px" />
          {/*
            Sassinate your CSS
          */}
        </Slide>
        {/*
          <Slide bgImage={images.abstract} bgLighten=".5">
            <Heading size={1} fit caps>
              About me
            </Heading>
            <Text>
              Some awesome info about me
            </Text>
          </Slide>
        */}
        <Slide transition={["slide"]}>
         <Heading fit size={1}>What is SASS?</Heading>
         <Step order="1" style={{marginTop: "-.5em"}} animateIn="bounce-in-left" animateOut="bounce-out">
           <Heading fit size={5}>CSS preprocessor</Heading>
         </Step>
         <Step order="2" style={{marginTop: "-.5em"}} animateIn="bounce-in-down" animateOut="bounce-out-down">
           <Heading fit size={4}>Built in Ruby</Heading>
         </Step>
         <Notes>
           <Note step="1">CSS preprocessor — a layer between the stylesheets you author and the <Code>.css</Code> files you serve to the browser.</Note>
           <Note step="3">Sass (short for Syntactically Awesome Stylesheets) plugs the holes in CSS as a language, allowing you to write DRY code that’ll be faster, more efficient, and easier to maintain.</Note>
         </Notes>
        </Slide>
        <Slide transition={["zoom"]}>
          <Heading size={1}>Filetypes</Heading>
          <Layout>
            <Fill>
              <Step order="1">
                <Heading size={5}><Code>.sass</Code></Heading>
                <CodePane lang="sass">
                  {`
                  nav
                    ul
                      margin: 0
                      padding: 0
                      list-style: none

                    li
                      display: inline-block

                    a
                      display: block
                      padding: 6px 12px
                      text-decoration: none
                  `}
                </CodePane>
              </Step>
            </Fill>
            <Fill>
              <Step order="2">
                <Heading size={5}><Code>.scss</Code></Heading>
                <CodePane lang="scss">
                  {`
                    nav{
                      ul{
                        margin: 0;
                        padding: 0;
                        list-style: none;
                      }

                      li{
                        display: inline-block;
                      }

                      a{
                        display: block;
                        padding: 6px 12px;
                        text-decoration: none;
                      }
                    }
                  `}
                </CodePane>
              </Step>
            </Fill>
          </Layout>
          <Notes>
            <Note order="1"><Code>.sass</Code> which is indention based</Note>
            <Note order="2"><Code>.scss</Code> which looks a lot more like regular CSS</Note>
            <Note>I will be using the <Code>.scss</Code> for the examples because they're easier to read, and look more like <Code>.css</Code></Note>
          </Notes>
        </Slide>
        <Slide transition={["zoom", "slide"]}>
          <Heading size={4}>What can SASS do that CSS can't?</Heading>
          <List style={{
              columnCount: 2
            }}>
            <Step order="1"><ListItem>Nesting</ListItem></Step>
            <Step order="2"><ListItem>Variables</ListItem></Step>
            <Step order="3"><ListItem>Placeholders</ListItem></Step>
            <Step order="4"><ListItem>Mixins</ListItem></Step>
            <Step order="5"><ListItem>Functions</ListItem></Step>
            <Step order="6"><ListItem>Conditionals</ListItem></Step>
            <Step order="7"><ListItem>Loops</ListItem></Step>
            <Step order="8"><ListItem>Partials</ListItem></Step>
          </List>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={2}>Nesting</Heading>
          <Layout>
            <Fill>
              <Step order="1">
                <CodePane lang="scss">
                  {`
                    .breadcrumbs {
                      font-size: .85em;

                      .crumb {
                        display: inline-block;
                        font-size: 1em;
                        line-height: 1em;
                        margin-top: 0;
                        position: relative;
                      }
                    }
                  `}
                </CodePane>
              </Step>
            </Fill>
            <Fill>
              <Step order="2">
                <CodePane lang="css">
                  {`
                    .breadcrumbs {
                      font-size: .85em;
                    }

                    .breadcrumbs .crumb {
                      display: inline-block;
                      font-size: 1em;
                      line-height: 1em;
                      margin-top: 0;
                      position: relative;
                    }
                  `}
                </CodePane>
              </Step>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={3}>
            So what if we want to reference the parent?
          </Heading>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={3}><Code>&amp;</Code> to the rescue!</Heading>
          <Layout>
            <Fill>
              <Step order="1">
                <CodePane lang="scss">
                  {`
                    .breadcrumbs {
                      font-size: .85em;

                      &__crumb {
                        display: inline-block;
                        font-size: 1em;
                        line-height: 1em;
                        margin-top: 0;
                        position: relative;
                        &:not(:first-child):after {
                          content: "\e6e2a";
                          margin-top: 50%;
                          position: absolute;
                          right: 10px;
                          top: 50%;
                        }
                      }
                    }
                  `}
                </CodePane>
              </Step>
            </Fill>
            <Fill>
              <Step order="2">
                <CodePane lang="css">
                  {`
                    .breadcrumbs {
                      font-size: .85em;
                    }

                    .breadcrumbs__crumb {
                      display: inline-block;
                      font-size: 1em;
                      line-height: 1em;
                      margin-top: 0;
                      position: relative;
                    }

                    .breadcrumbs__crumb:not(:first-child):after {
                      content: "\e6e2a";
                      margin-top: 50%;
                      position: absolute;
                      right: 10px;
                      top: 50%;
                    }
                  `}
                </CodePane>
              </Step>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading fit size={2}>Nesting isn't just for selectors</Heading>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={4}>Nested Properties</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                <Highlight>
                  {`
                    .c-island {
                  `}
                </Highlight>
                <Highlight className="c-step--grow" order="1" adjust="2">
                  {`
                    border: 1px solid #e2e2e2 {
                      radius: 6px;
                    };
                  `}
                </Highlight>
                <Highlight className="c-step--grow" order="2" adjust="2">
                  {`
                    margin: 0 {
                      top: 10px;
                    };
                  `}
                </Highlight>
                <Highlight>
                  {`
                      padding: 1.4em;
                    }
                  `}
                </Highlight>
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                <Highlight>
                 {`.c-island {`}
                </Highlight>
                <Highlight className="c-step--grow" order="1" adjust="2">
                  {`
                    border: 1px solid #e2e2e2;
                    border-radius: 6px;
                  `}
                </Highlight>
                <Highlight className="c-step--grow" order="2" adjust="2">
                  {`
                    margin: 0;
                    margin-top: 10px;
                  `}
                </Highlight>
                <Highlight>
                  {`
                      padding: 1.4em;
                    }
                  `}
                </Highlight>
              </CodePane>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={4}>Media Queries</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  body {
                    font-size: 14px;

                    @media (min-width: 1024px) {
                      font-size: 16px;
                    }
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  body {
                    font-size: 14px;
                  }

                  @media (min-width: 1024px) {
                    body {
                      font-size: 16px;
                    }
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={2}>Be smart about it</Heading>
          <List>
            <ListItem>Never go more then 3 levels deep.</ListItem>
            <ListItem>Ensure the CSS output is clean and reusable.</ListItem>
            <ListItem>Use nesting when it makes sense to, not as a default option.</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={2}>Keyframes</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  .u-animate {
                    animation: {
                      duration: 1s;
                      fill-mode: both;
                    }

                    &--fade-in-down {
                      animation-name: fade-in-down;

                      @keyframes fade-in-down {
                        0%{
                          opacity: 0;
                          transform: translate3d(0, -100%, 0);
                        }
                        100%{
                          opacity: 1;
                          transform: none;
                        }
                      }
                    }
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .u-animate {
                    animation-duration: 1s;
                    animation-fill-mode: both;
                  }

                  .u-animate--fade-in-down {
                    animation-name: fade-in-down;
                  }

                  @keyframes fade-in-down {
                    0% {
                      opacity: 0;
                      transform: translate3d(0, -100%, 0);
                    }
                    100% {
                      opacity: 1;
                      transform: none;
                    }
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          Mind Blown
        </Slide>
        <Slide>
          <Heading className="o-headline" size={2}>Variables</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  $font-size: 14px;
                  body{
                    font-size: $font-size;
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  body{
                    font-size: 14px;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>All variables are identified by the <Code>$</Code></Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={2}>Scoped Variables?</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  $font-size: 14px;

                  body {
                    font-size: $font-size;

                    @media (min-width: 1024px) {
                      $font-size: 16px; // scoped to this media query globally
                      font-size: $font-size;
                    }
                  }

                  .container {
                    $font-size: 12px; // scoped to \`.container\`
                    font-size: $font-size;
                  }

                  .component {
                    font-size: $font-size; // uses the default value
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  body {
                    font-size: 14px;
                  }

                  @media (min-width: 1024px) {
                    body {
                      font-size: 16px;
                    }
                  }

                  .container {
                    font-size: 12px;
                  }

                  .component {
                    font-size: 14px;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>All variables are identified by the <Code>$</Code></Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={2}>Placeholders</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  %clear {
                    &:after {
                      content: "";
                      display: table;
                      clear: both;
                    }
                  }

                  .container {
                    background: blue
                    margin: 0;
                    padding: 1.4em;
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .container {
                    background: blue
                    margin: 0;
                    padding: 1.4em;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>Placeholders are also known as silent selectors</Note>
            <Note>If you don't <Code>@extend</Code> onto them that css doesn't show up</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={2}>Placeholders</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  %clear {
                    &:after {
                      content: "";
                      display: table;
                      clear: both;
                    }
                  }

                  .clear {
                    @extend %clear;
                  }

                  .container {
                    @extend %clear;
                    background: blue
                    margin: 0;
                    padding: 1.4em;
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .clear:after, .container:after {
                    content: "";
                    display: table;
                    clear: both;
                  }

                  .container {
                    background: blue;
                    margin: 0;
                    padding: 1.4em;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>
              When you use <Code>@extend</Code> it's always best practice to place
              it at the top of your selector so other devs know that other styles
              are going to be applied to the current selector.
            </Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={2}>Extends</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  /* clear placeholder */
                  %clear {
                    &:after {
                      content: "";
                      display: table;
                      clear: both;
                    }
                  }

                  .card{
                    display: block;
                    background: #fff;
                    box-shadow: 0 0 5px 1px rgba(black, .4);
                    position: relative;
                    transition: all 0s;

                    .content{
                      font-size: .85em;
                      margin: 0;
                    }
                  }

                  .cards{
                    @extend %clear;
                    > li{
                      @extend .card;
                    }
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .cards:after {
                    content: "";
                    display: table;
                    clear: both;
                  }

                  .card, .cards > li {
                    display: block;
                    background: #fff;
                    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.4);
                    position: relative;
                    transition: all 0s;
                  }

                  .card .content, .cards > li .content {
                    font-size: .85em;
                    margin: 0;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>You can extend simple CSS selectors</Note>
            <Note>Be careful because everything in that selector will be applied to the extended selector</Note>
          </Notes>
        </Slide>
        <Slide transition={["spin", "slide"]}>
          <Heading className="o-headline" size={2}>Mixins</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  @mixin clear{
                    &:after {
                      content: "";
                      display: table;
                      clear: both;
                    }
                  }

                  .clear{
                    @include clear;
                  }

                  .container{
                    @include clear;
                    background: blue;
                    margin: 0;
                    padding: 1.4em;
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .clear:after {
                    content: "";
                    display: table;
                    clear: both;
                  }

                  .container {
                    background: blue;
                    margin: 0;
                    padding: 1.4em;
                  }

                  .container:after {
                    content: "";
                    display: table;
                    clear: both;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>Sass uses the <Code>@mixin</Code> directive to define mixins, and the <Code>@include</Code> directive to use them.</Note>
            <Note>Mixins allow you to reuse code blocks anywhere</Note>
          </Notes>
        </Slide>
        <Slide transition={["fade", "slide"]}>
          <Heading size={5}>Mixin Arguments</Heading>
          <CodePane lang="scss">
            {`
              @mixin clear($extend: true) {
                @if $extend {
                  @extend %clear;
                }
                @else {
                  &:after {
                    content: "";
                    display: table;
                    clear: both;
                  }
                }
              }

              %clear {
                @include clear(false);
              }
            `}
          </CodePane>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={5}>Mixin Arguments</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                <Highlight order="1">
                  {`
                    .one {
                      @include clear;
                      background: blue;
                    }

                    .two {
                      @include clear(true);
                      background: red;
                    }
                  `}
                </Highlight>
                <Highlight order="2">
                  {`
                    .three {
                      @include clear(false);
                      background: yellow;
                    }
                  `}
                </Highlight>
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                <Highlight order="1">
                  {`
                    .one:after, .two:after {
                      content: "";
                      display: table;
                      clear: both;
                    }

                    .one {
                      background: blue;
                    }

                    .two {
                      background: red;
                    }
                  `}
                </Highlight>
                <Highlight order="2">
                  {`
                    .three {
                      background: yellow;
                    }

                    .three:after {
                      content: "";
                      display: table;
                      clear: both;
                    }
                  `}
                </Highlight>
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>What makes mixins so powerful is the ability to pass in arguments to get different results</Note>
            <Note>You can pass in defaults to each argument</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading size="3">@content</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  @mixin media($width) {
                    @media only screen and (max-width: $width) {
                      @content;
                    }
                  }

                  .container{
                    padding: 10px;

                    @include media(800px) {
                      padding: 30px;
                    }
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="scss"></CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note><Code>@content</Code> is a special directive for mixins only</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading className="o-headline" size="3">Misusing Mixins</Heading>
          <CodePane lang="scss">
            {`
              @mixin box-shadow($shadows...){
                -webkit-box-shadow: $shadows;
                -moz-box-shadow: $shadows;
                box-shadow: $shadows;
              }

              @mixin opacity($opacity) {
                opacity: $opacity;
                $ie-opacity: $opacity * 100;
                -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=#{$ie-opacity})"; // IE5-7
                filter: alpha(opacity=$ie-opacity); // IE8
              }

              .container{
                @include box-shadow(0 0 10px #e2e2e2);
                @include opacity(.5);
              }
            `}
          </CodePane>
          <Notes>
            <Note>Don't use mixins to add prefixes, there're libraries already out there that will do it for you.</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading center size="4"><Link href="https://www.npmjs.com/package/autoprefixer">Autoprefixer</Link> all the things!!</Heading>
          <CodePane lang="scss">
            {`
              .container{
                border-radius: 0 0 10px #e2e2e2;
                opacity: .5;
              }
            `}
          </CodePane>
        </Slide>
        <Slide>
          <Heading className="o-headline" size="2">Functions</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  $color: #e2e2e2;
                  .container{
                    color: darken($color, 60%);
                    background: rgba($color, .5);
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .container {
                    color: #494949;
                    background: rgba(226, 226, 226, 0.5);
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>One of the best things about sass is it's built in functions</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading className="o-headline" size="2">Functions</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {
                  // @function em($px, $base: map-get($config, font-size), $round: 4){
                  //  $px: strip-unit($px);
                  //  $base: strip-unit(if($base != null, if(unit($base) == "em", px($base), if(unit($base) == "rem", map-get($config, font-size), $base)), map-get($config, font-size)));
                  //  @return if($px != 0, rd($px / $base, $round) * 1em, 0);
                  // }
                  //
                  // @function round-decimal($num: 100, $decimal: 4){
                  //  $y: pow(10, $decimal);
                  //  @return round(($num + 0.00001) * $y) / $y;
                  // }
                  //
                  // @function strip-unit($num){
                  //  @return $num / ($num * 0 + 1);
                  // }
                }
                {`
                  // column base is 12 unless it's overwritten
                  $total-columns: 12 !default;

                  @function col-width($columns){
                   @return 100% / ($total-columns / $columns);
                  }

                  .container{
                    width: col-width(2);
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .container {
                    width: 16.66667%;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>Functions are similar to mixins but instead of returning markup, they return values via the <Code>@return</Code></Note>
            <Note>Unlike mixins, functions are invoked the same way as normal css functions</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading size="6">Don't overwrite CSS functions!</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  @function scale($arg){
                    @return 50;
                  }

                  .container{
                    transform: scale(1);
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .container {
                    transform: 50;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size="4">Mixing it up</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  $breakpoints: (
                    sm: 600px,
                    md: 900px,
                    lg: 1200px
                  );

                  @mixin media($size) {
                    @if type-of($size) == "string"{
                      $size: map-get($breakpoints, $size);
                    }

                    @media only screen and (max-width: $size) {
                      @content;
                    }
                  }

                  .container{
                    padding: 10px;

                    @include media(sm) {
                      padding: 30px;
                    }
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .container {
                    padding: 10px;
                  }

                  @media only screen and (max-width: 568px) {
                    .container {
                      padding: 30px;
                    }
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>You can use functions inside of mixins, but you can't use mixins inside of functions</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading size="6">Did I mention nesting wasn't just for selectors?</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  .container{
                    padding: 10px;

                    @include media(md) {
                      @include media(lg) {
                        padding: 50px;
                      }
                    }
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .container {
                    padding: 10px;
                  }

                  @media only screen and (max-width: 768px) and (max-width: 1024px) {
                    .container {
                      padding: 50px;
                    }
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size="4"><Link href="http://include-media.com/">@include-media</Link></Heading>
          <Text>For more media query features</Text>
        </Slide>
        <Slide>
          <Heading size="1">Loops</Heading>
          <List>
            <ListItem><Code>@for</Code></ListItem>
            <ListItem><Code>@while</Code></ListItem>
            <ListItem><Code>@each</Code></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size="3"><Code>@for</Code></Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  .col{
                    display: block;
                    float: left;
                    margin: 0;
                    padding: 0 10px;

                    // Yep, you'll never type repetitive css again
                    @for $i from 1 through $total-columns {
                      // \`&\` is \`.col\` and \`#{$i}\` is using interpolation
                      &--#{$i} {
                        width: col-width($i);
                      }
                    }
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .col {
                    display: block;
                    float: left;
                    margin: 0;
                    padding: 0 10px;
                  }
                  .col--1 { width: 8.33333%; }
                  .col--2 { width: 16.66667%; }
                  .col--3 { width: 25%; }
                  .col--4 { width: 33.33333%; }
                  .col--5 { width: 41.66667%; }
                  .col--6 { width: 50%; }
                  .col--7 { width: 58.33333%; }
                  .col--8 { width: 66.66667%; }
                  .col--9 { width: 75%; }
                  .col--10 { width: 83.33333%; }
                  .col--11 { width: 91.66667%; }
                  .col--12 { width: 100%; }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>
              <Note><Code>{`@for $var from <start> through <end>`}</Code> which starts at <Code>{`<start>`}</Code> and loops "through" each iteration and ends at <Code>{`<end>`}</Code></Note>
            </Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading size="3"><Code>@each</Code> with lists</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  $authors: ("Tyler", "Aaron", "Jessica", "Mike");

                  .avatar{
                    background: url(avatars/default.png) no-repeat;

                    @each $author in $authors{
                      $author: to-lower-case($author);

                      &--#{$author}{
                        background-image: url(avatars/#{$author}.png);
                      }
                    }
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .avatar {
                    background: url(avatars/default.png) no-repeat;
                  }

                  .avatar--tyler {
                    background-image: url(avatars/tyler.png);
                  }

                  .avatar--aaron {
                    background-image: url(avatars/aaron.png);
                  }

                  .avatar--jessica {
                    background-image: url(avatars/jessica.png);
                  }

                  .avatar--mike {
                    background-image: url(avatars/mike.png);
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>
              <Note>The <Code>@each</Code> directive takes the form <Code>{`@each $var in <list>`}</Code>.</Note>
            </Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading size="3"><Code>@each</Code> with maps</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  $social-media: (
                    facebook: #365397,
                    twitter: #00a9f1,
                    google-plus: #e0452c,
                    pinterest: #ce1a19,
                    instagram: #396d9a,
                    youtube: #ff3333
                  );

                  .social{
                    @each $social-platform, $color in $social-media{
                      &--#{$social-platform}{
                        color: $color;
                      }
                    }
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .social--facebook {
                    color: #365397;
                  }
                  .social--twitter {
                    color: #00a9f1;
                  }
                  .social--google-plus {
                    color: #e0452c;
                  }
                  .social--pinterest {
                    color: #ce1a19;
                  }
                  .social--instagram {
                    color: #396d9a;
                  }
                  .social--youtube {
                    color: #ff3333;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>
              <Note>The <Code>@each</Code> directive takes the form <Code>{`@each $key, $value in <map>`}</Code>.</Note>
            </Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading size="3"><Code>@while</Code></Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  .col{
                    display: block;
                    float: left;
                    margin: 0;
                    padding: 0 10px;


                    // Yep, you'll never type repetitive css again
                    @while $total-columns > 0{
                      &--#{$total-columns} {
                        width: col-width($total-columns);
                      }
                      $total-columns: $total-columns - 1;
                    }
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .col {
                    display: block;
                    float: left;
                    margin: 0;
                    padding: 0 10px;
                  }
                  .col--12 { width: 100%; }
                  .col--11 { width: 91.66667%; }
                  .col--10 { width: 83.33333%; }
                  .col--9 { width: 75%; }
                  .col--8 { width: 66.66667%; }
                  .col--7 { width: 58.33333%; }
                  .col--6 { width: 50%; }
                  .col--5 { width: 41.66667%; }
                  .col--4 { width: 33.33333%; }
                  .col--3 { width: 25%; }
                  .col--2 { width: 16.66667%; }
                  .col--1 { width: 8.33333%; }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>The <Code>@while</Code> directive takes a SassScript expression, and will continue to loop until the expression is false</Note>
          </Notes>
        </Slide>
        <Slide className="long-shadow-example">
          <Heading fit size="1">Long Shadows</Heading>
          <Heading fit size="3">Sass function for Long Shadows</Heading>
        </Slide>
        <Slide>
          <Heading className="o-headline" size="2">The function</Heading>
          <CodePane lang="scss">
            {`
              // http://bit.ly/1NGT8AO
              @function longshadow($color, $length: 200, $x: right, $y: bottom, $iterator: 2) {
                $val: 0px 0px $color;
                $i: $iterator;
                $x: if($x == right, #{$i}px, #{$i * -1}px);
                $y: if($y == bottom, #{$i}px, #{$i * -1}px);

                @while $length > $i{
                  $val: #{$val}, $x $y #{$color};
                  $i: $i + $iterator;
                }

                @return $val;
              }
            `}
          </CodePane>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  $color: #31adb8;

                  .long-shadow-example{
                    background: $color;

                    %text-shadow-heading{
                      line-height: 1;
                      margin: 0;
                      color: darken(white, 6%);
                    }

                    h1{
                      @extend %text-shadow-heading;
                      text-shadow: longshadow(lighten($color, 5%));
                    }

                    h2{
                      @extend %text-shadow-heading;
                      text-shadow: longshadow(darken($color, 5%));
                    }
                  }

                  // note some styles are missing because
                  // of limited space
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .long-shadow-example {
                    background: #31adb8;
                    overflow: hidden;
                  }
                  .long-shadow-example h1, .long-shadow-example h3 {
                    line-height: 1;
                    margin: 0;
                    color: #f0f0f0;
                  }
                  .long-shadow-example h1 {
                    text-shadow: 0px 0px #2c9aa4, 6px 6px #2c9aa4, 12px 12px #2c9aa4, 18px 18px #2c9aa4, 24px 24px #2c9aa4, 30px 30px #2c9aa4, 36px 36px #2c9aa4, 42px 42px #2c9aa4, 48px 48px #2c9aa4, 54px 54px #2c9aa4, 60px 60px #2c9aa4, 66px 66px #2c9aa4, 72px 72px #2c9aa4, 78px 78px #2c9aa4, 84px 84px #2c9aa4, 90px 90px #2c9aa4, 96px 96px #2c9aa4, 102px 102px #2c9aa4, 108px 108px #2c9aa4, 114px 114px #2c9aa4, 120px 120px #2c9aa4, 126px 126px #2c9aa4, 132px 132px #2c9aa4, 138px 138px #2c9aa4, 144px 144px #2c9aa4, 150px 150px #2c9aa4, 156px 156px #2c9aa4, 162px 162px #2c9aa4, 168px 168px #2c9aa4, 174px 174px #2c9aa4, 180px 180px #2c9aa4, 186px 186px #2c9aa4, 192px 192px #2c9aa4, 198px 198px #2c9aa4, 204px 204px #2c9aa4, 210px 210px #2c9aa4, 216px 216px #2c9aa4, 222px 222px #2c9aa4, 228px 228px #2c9aa4, 234px 234px #2c9aa4, 240px 240px #2c9aa4, 246px 246px #2c9aa4, 252px 252px #2c9aa4, 258px 258px #2c9aa4, 264px 264px #2c9aa4, 270px 270px #2c9aa4, 276px 276px #2c9aa4, 282px 282px #2c9aa4, 288px 288px #2c9aa4, 294px 294px #2c9aa4, 300px 300px #2c9aa4, 306px 306px #2c9aa4, 312px 312px #2c9aa4, 318px 318px #2c9aa4, 324px 324px #2c9aa4, 330px 330px #2c9aa4, 336px 336px #2c9aa4, 342px 342px #2c9aa4, 348px 348px #2c9aa4, 354px 354px #2c9aa4, 360px 360px #2c9aa4, 366px 366px #2c9aa4, 372px 372px #2c9aa4, 378px 378px #2c9aa4, 384px 384px #2c9aa4, 390px 390px #2c9aa4, 396px 396px #2c9aa4, 402px 402px #2c9aa4, 408px 408px #2c9aa4, 414px 414px #2c9aa4, 420px 420px #2c9aa4, 426px 426px #2c9aa4, 432px 432px #2c9aa4, 438px 438px #2c9aa4, 444px 444px #2c9aa4, 450px 450px #2c9aa4, 456px 456px #2c9aa4, 462px 462px #2c9aa4, 468px 468px #2c9aa4, 474px 474px #2c9aa4, 480px 480px #2c9aa4, 486px 486px #2c9aa4, 492px 492px #2c9aa4, 498px 498px #2c9aa4, 504px 504px #2c9aa4, 510px 510px #2c9aa4, 516px 516px #2c9aa4, 522px 522px #2c9aa4, 528px 528px #2c9aa4, 534px 534px #2c9aa4, 540px 540px #2c9aa4, 546px 546px #2c9aa4, 552px 552px #2c9aa4, 558px 558px #2c9aa4, 564px 564px #2c9aa4, 570px 570px #2c9aa4, 576px 576px #2c9aa4, 582px 582px #2c9aa4, 588px 588px #2c9aa4, 594px 594px #2c9aa4, 600px 600px #2c9aa4, 606px 606px #2c9aa4, 612px 612px #2c9aa4, 618px 618px #2c9aa4, 624px 624px #2c9aa4, 630px 630px #2c9aa4, 636px 636px #2c9aa4, 642px 642px #2c9aa4, 648px 648px #2c9aa4, 654px 654px #2c9aa4, 660px 660px #2c9aa4, 666px 666px #2c9aa4, 672px 672px #2c9aa4, 678px 678px #2c9aa4, 684px 684px #2c9aa4, 690px 690px #2c9aa4, 696px 696px #2c9aa4, 702px 702px #2c9aa4, 708px 708px #2c9aa4, 714px 714px #2c9aa4, 720px 720px #2c9aa4, 726px 726px #2c9aa4, 732px 732px #2c9aa4, 738px 738px #2c9aa4, 744px 744px #2c9aa4, 750px 750px #2c9aa4, 756px 756px #2c9aa4, 762px 762px #2c9aa4, 768px 768px #2c9aa4, 774px 774px #2c9aa4, 780px 780px #2c9aa4, 786px 786px #2c9aa4, 792px 792px #2c9aa4, 798px 798px #2c9aa4, 804px 804px #2c9aa4, 810px 810px #2c9aa4, 816px 816px #2c9aa4, 822px 822px #2c9aa4, 828px 828px #2c9aa4, 834px 834px #2c9aa4, 840px 840px #2c9aa4, 846px 846px #2c9aa4, 852px 852px #2c9aa4, 858px 858px #2c9aa4, 864px 864px #2c9aa4, 870px 870px #2c9aa4, 876px 876px #2c9aa4, 882px 882px #2c9aa4, 888px 888px #2c9aa4, 894px 894px #2c9aa4, 900px 900px #2c9aa4, 906px 906px #2c9aa4, 912px 912px #2c9aa4, 918px 918px #2c9aa4, 924px 924px #2c9aa4, 930px 930px #2c9aa4, 936px 936px #2c9aa4, 942px 942px #2c9aa4, 948px 948px #2c9aa4, 954px 954px #2c9aa4, 960px 960px #2c9aa4, 966px 966px #2c9aa4, 972px 972px #2c9aa4, 978px 978px #2c9aa4, 984px 984px #2c9aa4, 990px 990px #2c9aa4, 996px 996px #2c9aa4;
                  }
                  .long-shadow-example h3 {
                    text-shadow: 0px 0px #268790, 6px 6px #268790, 12px 12px #268790, 18px 18px #268790, 24px 24px #268790, 30px 30px #268790, 36px 36px #268790, 42px 42px #268790, 48px 48px #268790, 54px 54px #268790, 60px 60px #268790, 66px 66px #268790, 72px 72px #268790, 78px 78px #268790, 84px 84px #268790, 90px 90px #268790, 96px 96px #268790, 102px 102px #268790, 108px 108px #268790, 114px 114px #268790, 120px 120px #268790, 126px 126px #268790, 132px 132px #268790, 138px 138px #268790, 144px 144px #268790, 150px 150px #268790, 156px 156px #268790, 162px 162px #268790, 168px 168px #268790, 174px 174px #268790, 180px 180px #268790, 186px 186px #268790, 192px 192px #268790, 198px 198px #268790, 204px 204px #268790, 210px 210px #268790, 216px 216px #268790, 222px 222px #268790, 228px 228px #268790, 234px 234px #268790, 240px 240px #268790, 246px 246px #268790, 252px 252px #268790, 258px 258px #268790, 264px 264px #268790, 270px 270px #268790, 276px 276px #268790, 282px 282px #268790, 288px 288px #268790, 294px 294px #268790, 300px 300px #268790, 306px 306px #268790, 312px 312px #268790, 318px 318px #268790, 324px 324px #268790, 330px 330px #268790, 336px 336px #268790, 342px 342px #268790, 348px 348px #268790, 354px 354px #268790, 360px 360px #268790, 366px 366px #268790, 372px 372px #268790, 378px 378px #268790, 384px 384px #268790, 390px 390px #268790, 396px 396px #268790, 402px 402px #268790, 408px 408px #268790, 414px 414px #268790, 420px 420px #268790, 426px 426px #268790, 432px 432px #268790, 438px 438px #268790, 444px 444px #268790, 450px 450px #268790, 456px 456px #268790, 462px 462px #268790, 468px 468px #268790, 474px 474px #268790, 480px 480px #268790, 486px 486px #268790, 492px 492px #268790, 498px 498px #268790, 504px 504px #268790, 510px 510px #268790, 516px 516px #268790, 522px 522px #268790, 528px 528px #268790, 534px 534px #268790, 540px 540px #268790, 546px 546px #268790, 552px 552px #268790, 558px 558px #268790, 564px 564px #268790, 570px 570px #268790, 576px 576px #268790, 582px 582px #268790, 588px 588px #268790, 594px 594px #268790, 600px 600px #268790, 606px 606px #268790, 612px 612px #268790, 618px 618px #268790, 624px 624px #268790, 630px 630px #268790, 636px 636px #268790, 642px 642px #268790, 648px 648px #268790, 654px 654px #268790, 660px 660px #268790, 666px 666px #268790, 672px 672px #268790, 678px 678px #268790, 684px 684px #268790, 690px 690px #268790, 696px 696px #268790, 702px 702px #268790, 708px 708px #268790, 714px 714px #268790, 720px 720px #268790, 726px 726px #268790, 732px 732px #268790, 738px 738px #268790, 744px 744px #268790, 750px 750px #268790, 756px 756px #268790, 762px 762px #268790, 768px 768px #268790, 774px 774px #268790, 780px 780px #268790, 786px 786px #268790, 792px 792px #268790, 798px 798px #268790, 804px 804px #268790, 810px 810px #268790, 816px 816px #268790, 822px 822px #268790, 828px 828px #268790, 834px 834px #268790, 840px 840px #268790, 846px 846px #268790, 852px 852px #268790, 858px 858px #268790, 864px 864px #268790, 870px 870px #268790, 876px 876px #268790, 882px 882px #268790, 888px 888px #268790, 894px 894px #268790, 900px 900px #268790, 906px 906px #268790, 912px 912px #268790, 918px 918px #268790, 924px 924px #268790, 930px 930px #268790, 936px 936px #268790, 942px 942px #268790, 948px 948px #268790, 954px 954px #268790, 960px 960px #268790, 966px 966px #268790, 972px 972px #268790, 978px 978px #268790, 984px 984px #268790, 990px 990px #268790, 996px 996px #268790;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
        </Slide>

        <Slide className="t-secondary c-slide--stretch">
          <Layout className="l-layout--vertical">
            <Fill className="u-fill--center">
              <Heading className="o-headline" size="2"><Link href="http://bit.ly/1iIx91k">Single element loader</Link></Heading>
            </Fill>
            <Fill className="u-fill--center">
              <Fill className="loader-example" />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading className="o-headline" size="2">The magic</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  // http://codepen.io/tjbenton21/pen/yliLr?editors=010

                  @keyframes loader{
                    @include loader-frames();
                    45%, 55%{
                      @include loader-shadow(10);
                    }
                    @include loader-frames(60%, -1);
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  @keyframes loader {
                    0% {
                      box-shadow: -1.35em 0 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0);
                    }
                    5% {
                      box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0);
                    }
                    10% {
                      box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 0 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0);
                    }
                    15% {
                      box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -2.7em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0);
                    }
                    20% {
                      box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0);
                    }
                    25% {
                      box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0);
                    }
                    30% {
                      box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -2.7em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0);
                    }
                    35% {
                      box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0);
                    }
                    40% {
                      box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -2.7em 0 0.5em rgba(200, 39, 84, 0);
                    }
                    45%, 55% {
                      box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754;
                    }
                    60% {
                      box-shadow: -1.35em 2.7em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754;
                    }
                    65% {
                      box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754;
                    }
                    70% {
                      box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 2.7em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754;
                    }
                    75% {
                      box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754;
                    }
                    80% {
                      box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754;
                    }
                    85% {
                      box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 2.7em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754;
                    }
                    90% {
                      box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754;
                    }
                    95% {
                      box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em #c82754;
                    }
                    100% {
                      box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(200, 39, 84, 0);
                    }
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading className="o-headline" size="2">Partials</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  // http://bit.ly/1iIx91k
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  ds
                `}
              </CodePane>
            </Fill>
          </Layout>
        </Slide>
        {/* Only if there's time */}
        <Slide>
          <Heading size={3}>Does it work with <Code>node</Code>?</Heading>
          <Step order="2">
            <Heading fit size={2}><Link href="https://github.com/sass/libsass">Libsass</Link></Heading>
          </Step>
          <Notes>
            <Note>Libsass is a port of SASS to work with js build tools</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading>Why <Link href="http://webdesign.tutsplus.com/articles/getting-to-know-libsass--cms-23114">Libsass</Link>?</Heading>
          <Layout>
            <Fill>
              <Heading size={6}>Pros</Heading>
              <List>
                <Step order="1">
                  <ListItem>It's faster!</ListItem>
                </Step>
                <Step order="2">
                  <ListItem>Allows integration with any language</ListItem>
                </Step>
                <Step order="3">
                  <ListItem>Integrates with your favorite build tool</ListItem>
                </Step>
              </List>
            </Fill>
            <Fill>
              <Heading size={6}>Cons</Heading>
              <List>
                <Step order="4"><ListItem><Link href="http://sass-compatibility.github.io/">Compatiblity</Link></ListItem></Step>
              </List>
            </Fill>
          </Layout>
          <Notes>
            <Note step="4">It's not a straight port so there're some inconsistencies but there's a compatiblity site to help out with these inconsistencies</Note>
          </Notes>
        </Slide>

        {/*
        - Show picture of what we're going to be building
            - Ideas on what to build
                - A Google Card
                    - Leaning towards this because it's simple but complex
                    - General layout
                    - Buttons
                    - Animations
                    - Typography
                    - Can show off the power of `@extend`
                - The sassinate entrance(if it's awesome)
        - Start with the folder structure of the project
        - Show first example that uses plain CSS to show that you can right normal CSS in SASS(a good example could be buttons)
        - For first showcase show nesting :mind-blown:
        - Then go back and refactor it to allow for more flexibility.
                - Add a `$config`
                - Add `em` function
                - Add `color` function(don't go into detail about it yet though
        */}
        <Slide>
          <Heading size={4}>Not sure if you'll like it?</Heading>
          <Layout>
            <Fill>
              <Heading size={6}><Link href="http://codepen.io/">Codepen.io</Link></Heading>
              Insert screenshot
            </Fill>
            <Fill>
              <Heading size={6}><Link href="http://sassmiester.com/">Sassmiester.com</Link></Heading>
              Insert screenshot
            </Fill>
          </Layout>
        </Slide>

      {/*
        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={1} fit caps>
            Spectacle
          </Heading>
          <Heading size={1} fit caps margin="-20px 0px">
            A ReactJS Presentation Library
          </Heading>
          <Heading size={2} fit caps textColor="black">
            Where You Can Write Your Decks In JSX
          </Heading>
          <Link href="https://github.com/FormidableLabs/spectacle">
            <Text bold caps textColor="tertiary">View on Github</Text>
          </Link>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
        </Slide>

        <Slide transition={["zoom", "slide"]}>
          <Heading fit caps size={1}>What's wrong with css?</Heading>
          <BlockQuote fit>
            <Quote>
              It's <span>old</span>. It's really old.
              It <span>can't be changed</span>.
              It operates in a <span>global namespace</span>.
              It's based on <span>inheritance</span>.
              It's very, very <span>loose</span>.
              <span>Source order</span> is critical.
              The <span>cascade</span> needs managing.
              <span>Specificity</span> negates all the above.
            </Quote>
            <Cite>Harry Roberts</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['slide']} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          {
            // <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px" />
          }
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Wait what?
          </Heading>
        </Slide>
        <Slide transition={['zoom', 'fade']} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
          <CodePane
            lang="javascript"
            source={require("raw!./deck.example")}
            margin="20px auto"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading caps fit>Flexible Layouts</Heading>
          <Layout>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Left
              </Heading>
            </Fill>
            <Fill>
              <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                Right
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote>Wonderfully formatted quotes</Quote>
            <Cite>Ken Wheeler</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide", "spin"]} bgColor="primary">
          <Heading caps fit size={1} textColor="tertiary">
            Smooth
          </Heading>
          <Heading caps fit size={1} textColor="secondary">
            Combinable Transitions
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <List>
            <ListItem><Step order="1">Inline style based theme system</Step></ListItem>
            <ListItem><Step order="2">Autofit text</Step></ListItem>
            <ListItem><Step order="3">Flexbox layout system</Step></ListItem>
            <ListItem><Step order="4">React-Router navigation</Step></ListItem>
            <ListItem><Step order="5">PDF export</Step></ListItem>
            <ListItem><Step order="6">And...</Step></ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps fit textColor="tertiary">
            Your presentations are interactive
          </Heading>
          <Interactive/>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit textColor="primary">
            Made with love in Seattle by
          </Heading>
          <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
        </Slide>
      */}
      </Deck>
    );
  }
}
