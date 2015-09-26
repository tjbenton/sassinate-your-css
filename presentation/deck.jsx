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
        abstract: require("./images/abstract-bg.jpg"),
        prefix: require("./images/prefix.jpg"),
        autoprefixer: require("./images/autoprefixer.jpg"),
        sourcemaps: require("./images/sourcemaps.jpg")
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
        <Slide transition={["zoom"]}>
          <Image src={images.sass} margin="0px auto 40px" />
          {/*
            Sassinate your CSS
          */}
        </Slide>
        <Slide transition={["fade"]} className="t-secondary">
          <Heading size="5">I'm Tyler</Heading>
          <Heading size="5">I'm a Lead UI Designer & Developer</Heading>
          <Heading size="5">at marketamerica, in Greensboro</Heading>
          <Heading size="5">I like SASS and Sportsball</Heading>
        </Slide>
        <Slide transition={["spin"]}>
          <Heading size="4">github.com/tjbenton</Heading>
          <Heading size="4">codepen.io/tjbenton21</Heading>
          <Heading size="4">@tjbenton21</Heading>
        </Slide>
        <Slide className="t-secondary" transition={["slide"]}>
         <Heading fit size="1">What is SASS?</Heading>
         <Step order="1" style={{marginTop: "-.75em"}} animateIn="bounce-in-left" animateOut="bounce-out">
           <Heading fit size="5" style={{lineHeight: "1em"}}>CSS preprocessor</Heading>
         </Step>
         <Step order="2" style={{marginTop: "-.75em"}} animateIn="bounce-in-down" animateOut="bounce-out-down">
           <Heading fit size="4" style={{lineHeight: "1em"}}>Built in Ruby</Heading>
         </Step>
         <Notes>
           <Note step="1">CSS preprocessor — a layer between the stylesheets you author and the <Code>.css</Code> files you serve to the browser.</Note>
           <Note step="2">Sass (short for Syntactically Awesome Stylesheets) plugs the holes in CSS as a language, allowing you to write DRY code that’ll be faster, more efficient, and easier to maintain.</Note>
         </Notes>
        </Slide>
        <Slide className="t-secondary" transition={["zoom"]}>
          <Heading size="1">Filetypes</Heading>
        </Slide>
        <Slide className="t-secondary" transition={["spin", "zoom"]}>
          <Layout>
            <Step className="u-fill" animateIn="bounce-in-left" animateOut="bounce-out">
              <CodePane filename=".sass" lang="sass">
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
            <Step className="u-fill" animateIn="bounce-in-right" animateOut="bounce-out">
              <CodePane filename=".scss" lang="scss">
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
          </Layout>
          <Notes>
            <Note order="1"><Code>.sass</Code> which is indention based</Note>
            <Note order="2"><Code>.scss</Code> which looks a lot more like regular CSS</Note>
            <Note>I will be using the <Code>.scss</Code> for the examples because they're easier to read, and look more like <Code>.css</Code></Note>
          </Notes>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={4}>What can SASS do that CSS can't?</Heading>
          <List style={{ columnCount: 2 }}>
            <Step order="1"><ListItem>Partials</ListItem></Step>
            <Step order="2"><ListItem>Nesting</ListItem></Step>
            <Step order="3"><ListItem>Variables</ListItem></Step>
            <Step order="4"><ListItem>Placeholders</ListItem></Step>
            <Step order="5"><ListItem>Mixins</ListItem></Step>
            <Step order="6"><ListItem>Functions</ListItem></Step>
            <Step order="7"><ListItem>Conditionals</ListItem></Step>
            <Step order="8"><ListItem>Loops</ListItem></Step>
          </List>
        </Slide>
        <Slide className="t-secondary" transition={["zoom"]}>
          <Heading fit size="1">Partials</Heading>
        </Slide>
        <Slide>
          <Layout>
            <CodePane filename="_navigation.scss" lang="scss">
              {`
                nav{
                  background: $secondary-color;

                  ul{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                  }

                  li{
                    display: inline-block;
                  }
                }
              `}
            </CodePane>
            <CodePane filename="_variables.scss" lang="scss">
              {`
                $secondary-color: #31adb8;
              `}
            </CodePane>
          </Layout>
          <Notes>
            <Note>Partials are indicated by <Code>_</Code></Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading className="o-headline" size="3">Importing partials</Heading>
          <Layout>
            <CodePane filename="main.scss" lang="scss">
              {`
                @import "variables",
                        "navigation";
              `}
            </CodePane>
            <CodePane filename="main.css" lang="css">
              {`
                nav {
                  background: #31adb8;
                }
                nav ul {
                  margin: 0;
                  padding: 0;
                  list-style: none;
                }
                nav li {
                  display: inline-block;
                }
              `}
            </CodePane>
          </Layout>
          <Notes>
            <Note>Partials are indicated by <Code>_</Code></Note>
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <CodePane lang="bash">
              {`
                .
                ├── base
                │   ├── _index.scss
                │   └── ...
                ├── components
                │   ├── _index.scss
                │   └── ...
                ├── helpers
                │   ├── _index.scss
                │   └── ...
                ├── objects
                │   ├── _index.scss
                │   └── ...
                ├── pages
                │   ├── home.scss
                │   └── ...
                ├── utilities
                │   ├── _index.scss
                │   └── ...
                └── site.scss
              `}
            </CodePane>
            <CodePane lang="scss">
              {`
                // site.scss
                @import "helpers/index",
                        "base/index",
                        "layout/index",
                        "objects/index",
                        "components/index",
                        "utilities/index",
                        "scopes/index",
                        "dev/index";
              `}
            </CodePane>
          </Layout>
        </Slide>
        <Slide>
          <Heading size="3">SourceMaps</Heading>
        </Slide>
        <Slide>
          <Image src={images.sourcemaps} />
          <Heading size="6"><Link href="http://bit.ly/1YGxz8E">http://bit.ly/1YGxz8E</Link></Heading>
        </Slide>
        <Slide>
          <Heading size="2"><Link href="http://sassmiester.com/">Sassmiester.com</Link></Heading>
          <Heading size="4">Try it out</Heading>
        </Slide>
        <Slide className="t-secondary">
          <Heading size="2">Nesting</Heading>
        </Slide>
        <Slide>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  .breadcrumbs {
                    font-size: .85em;
                `}
              </Highlight>
              <Highlight className="c-step--grow" isVisible="c-step--space" order="1" animateIn="bounce-in-left" animateOut="bounce-out-left" adjust="2">
                {`
                  .crumb {
                    display: inline-block;
                    font-size: 1em;
                    line-height: 1em;
                    margin-top: 0;
                    position: relative;
                  }
                `}
              </Highlight>
              <Highlight>
                {`
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight>
                {`
                  .breadcrumbs {
                    font-size: .85em;
                  }
                `}
              </Highlight>
              <Highlight className="c-step--grow" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" order="1">
                {`
                  .breadcrumbs .crumb {
                    display: inline-block;
                    font-size: 1em;
                    line-height: 1em;
                    margin-top: 0;
                    position: relative;
                  }
                `}
              </Highlight>
            </CodePane>
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
            <CodePane lang="scss">
              <Highlight>
                {`
                  .breadcrumbs {
                    font-size: .85em;
                `}
              </Highlight>
              <Highlight className="c-step--grow" isVisible="c-step--space" adjust="2" animateIn="bounce-in-left" animateOut="bounce-out-left" order="1">
                {`
                  &__crumb {
                    display: inline-block;
                    font-size: 1em;
                    line-height: 1em;
                    margin-top: 0;
                    position: relative;
                `}
              </Highlight>
              <Highlight className="c-step--grow" adjust="4" animateIn="bounce-in-left" animateOut="bounce-out-left" order="2">
                {`
                  &:not(:first-child):after {
                    content: "\\e6e2a";
                    margin-top: 50%;
                    position: absolute;
                    right: 10px;
                    top: 50%;
                  }
                `}
              </Highlight>
              <Highlight className="c-step--grow" adjust="2" animateIn="bounce-in-left" animateOut="bounce-out-left" order="1">
                {`
                  }
                `}
              </Highlight>
              <Highlight>
                {`
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight>
                {`
                  .breadcrumbs {
                    font-size: .85em;
                  }
                `}
              </Highlight>
              <Highlight className="c-step--grow" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" order="1">
                {`
                  .breadcrumbs__crumb {
                    display: inline-block;
                    font-size: 1em;
                    line-height: 1em;
                    margin-top: 0;
                    position: relative;
                  }
                `}
              </Highlight>
              <Highlight className="c-step--grow" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" order="2">
                {`
                  .breadcrumbs__crumb:not(:first-child):after {
                    content: "\\e6e2a";
                    margin-top: 50%;
                    position: absolute;
                    right: 10px;
                    top: 50%;
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  .u-loading{
                    background: url(images/spinner.svg) no-repeat;
                    animation: rotate 1s linear;
                `}
              </Highlight>
              <Highlight className="c-step--grow" isVisible="c-step--space" adjust="2" animateIn="bounce-in" animateOut="bounce-out" order="1">
                {`
                  .no-cssanimations &{
                    background-image: url(images/spinner.gif);
                  }
                `}
              </Highlight>
              <Highlight>
                {`
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight>
                {`
                  .u-loading{
                    background: url(images/spinner.svg) no-repeat;
                    animation: rotate 1s linear;
                  }
                `}
              </Highlight>
              <Highlight className="c-step--grow" isVisible="c-step--space" animateIn="bounce-in" animateOut="bounce-out" order="1">
                {`
                  .no-cssanimations .u-loading{
                    background-image: url(images/spinner.gif);
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
        </Slide>
        <Slide>
          <Heading fit size="2">Nesting isn't just for selectors</Heading>
        </Slide>
        <Slide>
          <Heading className="o-headline" size="4">Nested Properties</Heading>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  .c-island {
                `}
              </Highlight>
              <Highlight className="c-step--grow" order="1" animateIn="bounce-in" animateOut="bounce-out" adjust="2">
                {`
                  border: 1px solid #e2e2e2 {
                    radius: 6px;
                  };
                `}
              </Highlight>
              <Highlight className="c-step--grow" order="2" animateIn="bounce-in" animateOut="bounce-out" adjust="2">
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
            <CodePane lang="css">
              <Highlight>
               {`.c-island {`}
              </Highlight>
              <Highlight className="c-step--grow" order="1" animateIn="bounce-in" animateOut="bounce-out" adjust="2">
                {`
                  border: 1px solid #e2e2e2;
                  border-radius: 6px;
                `}
              </Highlight>
              <Highlight className="c-step--grow" order="2" animateIn="bounce-in" animateOut="bounce-out" adjust="2">
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
          </Layout>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={4}>Media Queries</Heading>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  body {
                    font-size: 14px;
                `}
              </Highlight>
              <Highlight order="1" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow" adjust="2">
                {`
                  @media (min-width: 1024px) {
                    font-size: 16px;
                  }
                `}
              </Highlight>
              <Highlight>
                {`
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight>
                {`
                  body {
                    font-size: 14px;
                  }
                `}
              </Highlight>
              <Highlight order="1" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow">
                {`
                  @media (min-width: 1024px) {
                    body {
                      font-size: 16px;
                    }
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
        </Slide>
        <Slide >
          <Heading size="2">Keyframes</Heading>
        </Slide>
        <Slide>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  .u-animate {
                    animation: {
                      duration: 1s;
                      fill-mode: both;
                    }

                    &--fade-in {
                      animation-name: fade-in;
                `}
              </Highlight>
              <Highlight order="1" adjust="4" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow">
                {`
                  @keyframes fade-in {
                    0% {
                      opacity: 0;
                    }
                    100% {
                      opacity: 1;
                    }
                  }
                `}
              </Highlight>
              <Highlight adjust="2">
                {`
                  }
                `}
              </Highlight>
              <Highlight>
                {`
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight>
                {`
                  .u-animate {
                    animation-duration: 1s;
                    animation-fill-mode: both;
                  }

                  .u-animate--fade-in {
                    animation-name: fade-in;
                  }
                `}
              </Highlight>
              <Highlight order="1" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow">
                {`
                  @keyframes fade-in {
                    0% {
                      opacity: 0;
                    }
                    100% {
                      opacity: 1;
                    }
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
        </Slide>
        <Slide>
          <Heading size="2">Be smart about it</Heading>
          <List>
            <ListItem>Never nest more then 3 levels deep.</ListItem>
            <ListItem>Ensure the CSS output is clean and reusable.</ListItem>
            <ListItem>Use nesting when it makes sense to, not as a default option.</ListItem>
          </List>
        </Slide>
        {/*
          <Slide>
            Mind Blown
          </Slide>
        */}
        <Slide className="t-secondary">
          <Heading size="2">Variables</Heading>
        </Slide>
        <Slide>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  // number
                  $total-columns: 12;
                `}
              </Highlight>
              <Highlight className="c-step--grow"  style={{marginTop: "1em"}} animateIn="fade-in" animateOut="fade-out" order="1">
                {`
                  // unit value
                  $font-size: 14px;
                `}
              </Highlight>
              <Highlight className="c-step--grow"  style={{marginTop: "1em"}} animateIn="fade-in" animateOut="fade-out" order="2">
                {`
                  // string
                  // from lobotomized owl
                  $not-hidden: "*:not(style):not(link):not(meta):not(script)";
                `}
              </Highlight>
              <Highlight className="c-step--grow"  style={{marginTop: "1em"}} animateIn="fade-in" animateOut="fade-out" order="3">
                {`
                  // boolean
                  $is-extended: true;
                `}
              </Highlight>
              <Highlight className="c-step--grow"  style={{marginTop: "1em"}} animateIn="fade-in" animateOut="fade-out" order="4">
                {`
                  // Sass list, also known as arrays in other languages
                  $speakers: ("Aaron", "Tyler", "Jessica");
                `}
              </Highlight>
              <Highlight className="c-step--grow"  style={{marginTop: "1em"}} animateIn="fade-in" animateOut="fade-out" order="5">
                {`
                  // Sass Map, also known as Objects, Structures, Hash in other languages
                  $config: (
                   border-radius: 6px,
                   color: #222,
                   font-size: 14px,
                   line-height: 1.4em,
                   spacing: 1.4em,
                  );
                `}
              </Highlight>
            </CodePane>
          </Layout>
          <Notes>
            <Note>All variables are identified by the <Code>$</Code></Note>
          </Notes>
        </Slide>
        <Slide>
          <Layout>
            <CodePane lang="scss" style={{flex: 1.25}}>
              <Highlight>
                {`
                  $spacing: 16px;
                `}
              </Highlight>
              <Highlight order="1" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow">
                {`
                  .component{
                    // inside \`.component\` \`$spacing\` is now 12px
                    $spacing: 12px;
                    padding: $spacing;
                    &:after{
                      line-height: $spacing;
                    }
                  }
                `}
              </Highlight>
              <Highlight style={{marginTop: "1em"}}>
                {`
                  body {
                    line-height: $spacing;
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight order="1" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow">
                {`
                  .component{
                    padding: 12px;
                  }
                  .component:after{
                    line-height: 12px;
                  }
                `}
              </Highlight>
              <Highlight style={{marginTop: "1em"}}>
                {`
                  body {
                    line-height: 16px;
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
        </Slide>
        <Slide>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  $spacing: 12px;

                  .container {
                    @media (min-width: 1024px) {
                      // \`$spacing\` scoped to this
                      // media query globally
                      $spacing: 16px !global;
                      padding: $spacing;
                    }
                  }
                `}
              </Highlight>
              <Highlight order="1" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow">
                {`
                  body{
                    @media (min-width: 1024px) {
                      line-height: $spacing;
                    }
                  }
                `}
              </Highlight>
              <Highlight order="1" isVisible="c-step--space" animateIn="fade-in" animateOut="fade-out" className="c-step--grow u-animate--delay">
                {`
                  /*
                    using \`css-mqpacker\` to
                    combine media queries
                  */
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight>
                {`
                  @media (min-width: 1024px) {
                    .container {
                      padding: 16px;
                    }
                `}
              </Highlight>
              <Highlight order="1" adjust="2" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow">
                {`
                  body {
                    line-height: 16px;
                  }
                `}
              </Highlight>
              <Highlight>
                {`
                  }
                `}
              </Highlight>
              <Highlight order="1" isVisible="c-step--space" animateIn="fade-in" animateOut="fade-out" className="c-step--grow u-animate--delay">
                {`
                  /*
                    using \`css-mqpacker\` to
                    combine media queries
                  */
                `}
              </Highlight>
            </CodePane>
          </Layout>
        </Slide>
        <Slide className="t-secondary">
          <Heading size="2">Placeholders</Heading>
        </Slide>
        <Slide>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  // this block will not be output to css
                `}
              </Highlight>
              <Highlight className="c-step--grow" style={{marginTop: 0}} order="1">
                {`
                  // unless a selector \`@extend\`s onto it
                `}
              </Highlight>
              <Highlight>
                {`
                  %clear {
                    &:after {
                      content: "";
                      display: table;
                      clear: both;
                    }
                  }
                `}
              </Highlight>
              <Highlight order="1" isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow">
                {`
                  .clear{
                    @extend %clear;
                  }
                `}

              </Highlight>
              <Highlight style={{marginTop: "1em"}}>
                {`
                  .container {
                `}
              </Highlight>
              <Highlight order="2" adjust="2" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow">
                {`
                  @extend %clear;
                `}
              </Highlight>
              <Highlight>
                {`
                    padding: 1.4em;
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--inline c-step--grow" order="1">{`.clear:after`}</Highlight>
              <Highlight animateIn="bounce-in" animateOut="bounce-out" className="c-step--inline c-step--grow" order="2">{`, .container:after`}</Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--inline c-step--grow" order="1" adjust="1">{` {`}</Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow" order="1">
                {`
                    content: "";
                    display: table;
                    clear: both;
                  }
                `}
              </Highlight>
              <Highlight isVisible="c-step--space" animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow">
                {`
                  .container {
                    padding: 1.4em;
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
          <Notes>
            <Note>Placeholders are also known as silent selectors</Note>
            <Note>If you don't <Code>@extend</Code> onto them that css doesn't show up</Note>
            <Note>
              When you use <Code>@extend</Code> it's always best practice to place
              it at the top of your selector so other devs know that other styles
              are going to be applied to the current selector.
            </Note>
          </Notes>
        </Slide>
        <Slide className="t-secondary">
          <Heading size="2">Mixins</Heading>
        </Slide>
        <Slide transition={["spin", "slide"]}>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  @mixin clear {
                    &:after {
                      content: "";
                      display: table;
                      clear: both;
                    }
                  }
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow" order="1">
                {`
                  .clear{
                    @include clear;
                  }
                `}

              </Highlight>
              <Highlight style={{marginTop: "1em"}}>
                {`
                  .container {
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow" order="2" adjust="2">
                {`
                  @include clear;
                `}
              </Highlight>
              <Highlight>
                {`
                    padding: 1.4em;
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow" order="1">
                {`
                  .clear:after {
                    content: "";
                    display: table;
                    clear: both;
                  }
                `}
              </Highlight>
              <Highlight style={{marginTop: "1em"}}>
                {`
                  .container {
                    padding: 1.4em;
                  }
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow" order="2">
                {`
                  .container:after {
                    content: "";
                    display: table;
                    clear: both;
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
          <Notes>
            <Note>Sass uses the <Code>@mixin</Code> directive to define mixins, and the <Code>@include</Code> directive to use them.</Note>
            <Note>Mixins allow you to reuse code blocks anywhere</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading size="5">Mixins with Arguments</Heading>
        </Slide>
        <Slide transition={["fade", "slide"]}>
          <CodePane lang="scss">
            {`
              @mixin clear($is-extended: true) {
                @if $is-extended {
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
                // this includes the clear fix styles to the \`%clear\` placeholder
                @include clear(false);
              }
            `}
          </CodePane>
        </Slide>
        <Slide transition={["fade"]}>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  .one {
                    // extends to silent selector
                    @include clear;
                    background: blue;
                  }
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow" order="1">
                {`
                  .two {
                    // extends to silent selector
                    @include clear(true);
                    background: red;
                  }
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow" order="2">
                {`
                  .three {
                    // adds the code to the selector
                    // instead of extending it
                    @include clear(false);
                    background: yellow;
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight className="c-step--inline">{`.one:after`}</Highlight>
              <Highlight animateIn="bounce-in" animateOut="bounce-out" className="c-step--inline c-step--grow" order="1">{`, .two:after`}</Highlight>
              <Highlight className="c-step--inline" adjust="1">{`{`}</Highlight>
              <Highlight>
                {`
                    content: "";
                    display: table;
                    clear: both;
                  }

                  .one {
                    background: blue;
                  }
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space c-step--block" className="c-step--grow" order="1">
                {`
                  .two {
                    background: red;
                  }
                `}
              </Highlight>
              {/*@TODO FIX THIS SHIT*/}
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow" order="2">
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
          </Layout>
          <Notes>
            <Note>What makes mixins so powerful is the ability to pass in arguments to get different results</Note>
            <Note>You can pass in defaults to each argument</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading size="3">@content</Heading>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  @mixin media($size, $type: "min-width") {
                    @media only screen and (#{$type}: $size) {
                      // any code passed to the mixin
                      // will be placed here
                      @content;
                    }
                  }
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow" order="1">
                {`
                  .container{
                    padding: 10px;

                    @include media(800px) {
                      padding: 30px;
                    }
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" order="1">
                {`
                  .container {
                    padding: 10px;
                  }

                  @media only screen and (min-width: 800px) {
                    .container {
                      padding: 30px;
                    }
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
          <Notes>
            <Note><Code>@content</Code> is a special directive for mixins only</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading className="o-headline" size="3">Misusing Mixins</Heading>
          <Step order="1" animateIn="bounce-in" animateOut="bounce-out">
            <Image src={images.prefix} />
          </Step>
        </Slide>
        <Slide>
          <Heading size="3">Misusing Mixins</Heading>
          <Layout>
            <CodePane lang="scss">
              {`
                @mixin box-shadow($shadows...){
                  -webkit-box-shadow: $shadows;
                  -moz-box-shadow: $shadows;
                  box-shadow: $shadows;
                }

                @mixin transform($transforms...){
                  -webkit-transform: scale($transforms);
                  -moz-transform: scale($transforms);
                  -ms-transform: scale($transforms);
                  transform: scale($transforms);
                }

                .container{
                  @include box-shadow(0 0 5px #e2e2e2, 0 0 10px black);
                  @include transform(scale(.5));
                }
              `}
            </CodePane>
            <CodePane lang="scss">
              {`
                .container {
                  -webkit-box-shadow: 0 0 5px #e2e2e2, 0 0 10px black;
                  -moz-box-shadow: 0 0 5px #e2e2e2, 0 0 10px black;
                  box-shadow: 0 0 5px #e2e2e2, 0 0 10px black;
                  -webkit-transform: scale(0.5);
                  -moz-transform: scale(0.5);
                  -ms-transform: scale(0.5);
                  transform: scale(0.5);
                }
              `}
            </CodePane>
          </Layout>
          <Notes>
            <Note>Don't use mixins to add prefixes, there're libraries already out there that will do it for you.</Note>
          </Notes>
        </Slide>
        <Slide transition={["spin", "fade"]}>
          <Image fit src={images.autoprefixer} width="700px" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading center size="2"><Link href="https://www.npmjs.com/package/autoprefixer">Autoprefixer</Link></Heading>
          <Layout>
            <CodePane lang="scss">
              {`
                .container {
                  box-shadow: 0 0 10px #e2e2e2;
                  transform: scale(0.5);
                }
              `}
            </CodePane>
            <CodePane lang="css">
              {`
                .container {
                  box-shadow: 0 0 10px #e2e2e2;
                  -webkit-transform: scale(0.5);
                  -ms-transform: scale(0.5);
                  transform: scale(0.5);
                }
              `}
            </CodePane>
          </Layout>
        </Slide>
        <Slide className="t-secondary" transition={["spin"]}>
          <Heading size="2">Functions</Heading>
        </Slide>
        <Slide>
          <Layout>
            <CodePane lang="scss">
              {`
                $color: #e2e2e2;
                .container{
                  color: darken($color, 60%);
                  background: rgba($color, .5);
                }
              `}
            </CodePane>
            <CodePane lang="css">
              {`
                .container {
                  color: #494949;
                  background: rgba(226, 226, 226, 0.5);
                }
              `}
            </CodePane>
          </Layout>
          <Notes>
            <Note>One of the best things about sass is it's built in functions</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading className="o-headline" size="2">Functions</Heading>
          <Layout>
            <CodePane lang="scss">
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" className="c-step--grow" order="1">
                {`
                  // column base is 16 unless it's overwritten
                  $total-columns: 16 !default;
                `}
              </Highlight>
              <Highlight style={{marginTop: "1em"}}>
                {`
                  @function col-width($columns) {
                    @return 100% / ($total-columns / $columns);
                  }
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow" order="2">
                {`
                  .container {
                    width: col-width(2);
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane style={{flex: .7}} lang="css">
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" order="2">
                {`
                  .container {
                    width: 16.66667%;
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
          <Notes>
            <Note>Functions are similar to mixins but instead of returning markup, they return values via the <Code>@return</Code></Note>
            <Note>Unlike mixins, functions are invoked the same way as normal css functions</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading size="6">Don't overwrite CSS functions!</Heading>
          <Layout>
            <CodePane lang="scss">
              <Highlight>
                {`
                  @function scale($arg){
                    @return 50;
                  }
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow"  order="1">
                {`
                  .container{
                    transform: scale(1);
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css">
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left"  className="c-step--grow" order="1">
                {`
                  .container {
                    transform: 50;
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
        </Slide>
        <Slide>
          <Heading size="4">Enhance mixins with functions</Heading>
        </Slide>
        <Slide>
          <CodePane lang="scss">
            <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left"  className="c-step--grow" order="1">
              {`
                $breakpoints: (
                  sm: 600px,
                  md: 900px,
                  lg: 1200px
                ) !default;
              `}
            </Highlight>
            <Highlight style={{marginTop: "1em"}}>
              {`
                @mixin media($size, $type: "min-width") {
              `}
            </Highlight>
            <Highlight adjust="2" animateIn="bounce-in-left" animateOut="bounce-out-left"  className="c-step--grow" order="1">
              {`
                @if type-of($size) == "string" {
                  $size: map-get($breakpoints, $size);
                }
              `}
            </Highlight>
            <Highlight>
              {`
                  @media only screen and (#{$type}: $size) {
                    @content;
                  }
                }
              `}
            </Highlight>
          </CodePane>
          <Notes>
            <Note>You can use functions inside of mixins, but you can't use mixins inside of functions</Note>
          </Notes>
        </Slide>
        <Slide>
          <Layout style={{fontSize: ".85em"}}>
            <CodePane lang="scss">
              <Highlight>
                {`
                  .container {
                    padding: 10px;

                    @include media(sm) {
                      padding: 30px;
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow" order="1" adjust="4">
                {`
                  @include media(lg, "max-width") {
                    background: red;

                    section {
                      margin-top: 1.5em
                    }
                  }
                `}
              </Highlight>
              <Highlight>
                {`
                    }
                  }
                `}
              </Highlight>
            </CodePane>
            <CodePane lang="css" style={{flex: 1.8}}>
              <Highlight>
                {`
                  .container {
                    padding: 10px;
                  }

                  @media only screen and (min-width: 600px) {
                    .container {
                      padding: 30px;
                    }
                  }
                `}
              </Highlight>
              <Highlight animateIn="bounce-in-left" animateOut="bounce-out-left" isVisible="c-step--space" className="c-step--grow" order="1">
                {`
                  @media only screen and (min-width: 600px) and (max-width: 1200px) {
                    .container {
                      background: red;
                    }

                    .container section {
                      margin-top: 1.5em
                    }
                  }
                `}
              </Highlight>
            </CodePane>
          </Layout>
          <Notes>
            <Note>You can use functions inside of mixins, but you can't use mixins inside of functions</Note>
            <Note order="1">Did I mention nesting wasn't just for selectors?</Note>
          </Notes>
        </Slide>
        {
          // <Slide>
          //   <Heading size="4"><Link href="http://include-media.com/">include-media.com</Link></Heading>
          //   <Text>For more media query features</Text>
          // </Slide>
        }
        <Slide>
          <Heading size="1">Loops</Heading>
          <List>
            <Step animateIn="bounce-in-left" animateOut="bounce-out-right" ><ListItem><Code>@for $var from {`<`}start{`>`} through {`<`}end{`>`}</Code></ListItem></Step>
            <Step animateIn="bounce-in-left" animateOut="bounce-out-right" ><ListItem><Code>@while {`<`}condition{`>`}</Code></ListItem></Step>
            <Step animateIn="bounce-in-left" animateOut="bounce-out-right" ><ListItem><Code>@each $var in {`<`}list{`>`}</Code></ListItem></Step>
            <Step animateIn="bounce-in-left" animateOut="bounce-out-right" ><ListItem><Code>@each $key, $value in {`<`}map{`>`}</Code></ListItem></Step>
          </List>
        </Slide>
        {/*
          <Slide>
            <Heading size="5" style={{fontSize: "3em"}}><Code>{`@for $var from <start> through <end>`}</Code></Heading>
            <Notes>
              <Note><Code>{`@for $var from <start> through <end>`}</Code> which starts at <Code>{`<start>`}</Code> and loops "through" each iteration and ends at <Code>{`<end>`}</Code></Note>
            </Notes>
          </Slide>
        */}
        <Slide>
          <Layout>
            <CodePane style={{flex: 1.5}} lang="scss">
              {`
                .col{
                  display: block;
                  float: left;
                  margin: 0;
                  padding: 0 10px;

                  // Yep, you'll never type repetitive css again
                  @for $i from 1 through $total-columns {
                    // \`&\` is \`.col\` and \`#{$i}\` is using interpolation
                    // to insert the variable into the selector
                    &--#{$i} {
                      width: col-width($i);
                    }
                  }
                }
              `}
            </CodePane>
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
          </Layout>
        </Slide>
        <Slide>
          <Heading size="3"><Code>@while</Code></Heading>
          <Layout>
            <CodePane style={{flex: 1.6}} lang="scss">
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

                    // the change to \`$total-columns\` is scoped to \`.col\`
                    $total-columns: $total-columns - 1;
                  }
                }
              `}
            </CodePane>
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
          </Layout>
          <Notes>
            <Note>The <Code>@while</Code> directive takes a SassScript expression, and will continue to loop until the expression is false</Note>
          </Notes>
        </Slide>
        <Slide>
          <Heading size="3"><Code>@each</Code> with lists</Heading>
          <Layout>
            <CodePane style={{flex: 1.24}} lang="scss">
              {`
                $speakers: ("Aaron", "Tyler", "Jessica");

                .nc-devcon-speaker{
                  background: url(avatars/default.png) no-repeat;

                  @each $speaker in $speakers{
                    $speaker: to-lower-case($speaker);
                    &--#{$speaker}{
                      background-image: url(avatars/#{$speaker}.png);
                    }
                  }
                }
              `}
            </CodePane>
            <CodePane lang="css">
              {`
                .nc-devcon-speaker {
                  background: url(avatars/default.png) no-repeat;
                }

                .nc-devcon-speaker--aaron {
                  background-image: url(avatars/aaron.png);
                }

                .nc-devcon-speaker--tyler {
                  background-image: url(avatars/tyler.png);
                }

                .nc-devcon-speaker--jessica {
                  background-image: url(avatars/jessica.png);
                }
              `}
            </CodePane>
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
            <CodePane lang="scss" style={{flex: 1.2}}>
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
            <CodePane lang="css">
              {`
                .social--facebook { color: #365397; }

                .social--twitter { color: #00a9f1; }

                .social--google-plus { color: #e0452c; }

                .social--pinterest { color: #ce1a19; }

                .social--instagram { color: #396d9a; }

                .social--youtube { color: #ff3333; }
              `}
            </CodePane>
          </Layout>
          <Notes>
            <Note>
              <Note>The <Code>@each</Code> directive takes the form <Code>{`@each $key, $value in <map>`}</Code>.</Note>
            </Note>
          </Notes>
        </Slide>
        <Slide transition={["spin"]} className="long-shadow-example">
          <Heading fit size="1">Long Shadows</Heading>
          <Heading fit size="3">Sass function for Long Shadows</Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading className="o-headline" size="2">The function</Heading>
          <CodePane lang="scss">
            {`
              // http://bit.ly/1NGT8AO
              @function longshadow($color, $length: 200, $x: right, $y: bottom, $iterator: 2) {
                $val: 0px 0px $color;
                $i: $iterator;
                $direction-x: $x;
                $direction-y: $y;

                @while $length >= $i{
                  $x: if($direction-x == right, $i, $i * -1);
                  $y: if($direction-y == bottom, $i, $i * -1);

                  $val: $val, #{$x}px #{$y}px $color;

                  $i: $i + $iterator;
                }

                @return $val;
              }
            `}
          </CodePane>
        </Slide>
        <Slide transition={["slide"]}>
          <Layout>
            <CodePane lang="scss">
              {`

                .long-shadow-example {
                  $color: #31adb8;
                  background: $color;

                  h1, h2 {
                    line-height: 1;
                    margin: 0;
                    color: darken(white, 6%);
                  }

                  h1 {
                    text-shadow: longshadow(lighten($color, 5%));
                  }

                  h2 {
                    text-shadow: longshadow(darken($color, 5%));
                  }
                }

                // note some styles are missing because
                // of limited space
              `}
            </CodePane>
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
                  text-shadow: 0px 0px #2c9aa4, 2px 2px #2c9aa4, 4px 4px #2c9aa4, 6px 6px #2c9aa4, 8px 8px #2c9aa4, 10px 10px #2c9aa4, 12px 12px #2c9aa4, 14px 14px #2c9aa4, 16px 16px #2c9aa4, 18px 18px #2c9aa4, 20px 20px #2c9aa4, 22px 22px #2c9aa4, 24px 24px #2c9aa4, 26px 26px #2c9aa4, 28px 28px #2c9aa4, 30px 30px #2c9aa4, 32px 32px #2c9aa4, 34px 34px #2c9aa4, 36px 36px #2c9aa4, 38px 38px #2c9aa4, 40px 40px #2c9aa4, 42px 42px #2c9aa4, 44px 44px #2c9aa4, 46px 46px #2c9aa4, 48px 48px #2c9aa4, 50px 50px #2c9aa4, 52px 52px #2c9aa4, 54px 54px #2c9aa4, 56px 56px #2c9aa4, 58px 58px #2c9aa4, 60px 60px #2c9aa4, 62px 62px #2c9aa4, 64px 64px #2c9aa4, 66px 66px #2c9aa4, 68px 68px #2c9aa4, 70px 70px #2c9aa4, 72px 72px #2c9aa4, 74px 74px #2c9aa4, 76px 76px #2c9aa4, 78px 78px #2c9aa4, 80px 80px #2c9aa4, 82px 82px #2c9aa4, 84px 84px #2c9aa4, 86px 86px #2c9aa4, 88px 88px #2c9aa4, 90px 90px #2c9aa4, 92px 92px #2c9aa4, 94px 94px #2c9aa4, 96px 96px #2c9aa4, 98px 98px #2c9aa4, 100px 100px #2c9aa4, 102px 102px #2c9aa4, 104px 104px #2c9aa4, 106px 106px #2c9aa4, 108px 108px #2c9aa4, 110px 110px #2c9aa4, 112px 112px #2c9aa4, 114px 114px #2c9aa4, 116px 116px #2c9aa4, 118px 118px #2c9aa4, 120px 120px #2c9aa4, 122px 122px #2c9aa4, 124px 124px #2c9aa4, 126px 126px #2c9aa4, 128px 128px #2c9aa4, 130px 130px #2c9aa4, 132px 132px #2c9aa4, 134px 134px #2c9aa4, 136px 136px #2c9aa4, 138px 138px #2c9aa4, 140px 140px #2c9aa4, 142px 142px #2c9aa4, 144px 144px #2c9aa4, 146px 146px #2c9aa4, 148px 148px #2c9aa4, 150px 150px #2c9aa4, 152px 152px #2c9aa4, 154px 154px #2c9aa4, 156px 156px #2c9aa4, 158px 158px #2c9aa4, 160px 160px #2c9aa4, 162px 162px #2c9aa4, 164px 164px #2c9aa4, 166px 166px #2c9aa4, 168px 168px #2c9aa4, 170px 170px #2c9aa4, 172px 172px #2c9aa4, 174px 174px #2c9aa4, 176px 176px #2c9aa4, 178px 178px #2c9aa4, 180px 180px #2c9aa4, 182px 182px #2c9aa4, 184px 184px #2c9aa4, 186px 186px #2c9aa4, 188px 188px #2c9aa4, 190px 190px #2c9aa4, 192px 192px #2c9aa4, 194px 194px #2c9aa4, 196px 196px #2c9aa4, 198px 198px #2c9aa4, 200px 200px #2c9aa4, 202px 202px #2c9aa4, 204px 204px #2c9aa4, 206px 206px #2c9aa4, 208px 208px #2c9aa4, 210px 210px #2c9aa4, 212px 212px #2c9aa4, 214px 214px #2c9aa4, 216px 216px #2c9aa4, 218px 218px #2c9aa4, 220px 220px #2c9aa4, 222px 222px #2c9aa4, 224px 224px #2c9aa4, 226px 226px #2c9aa4, 228px 228px #2c9aa4, 230px 230px #2c9aa4, 232px 232px #2c9aa4, 234px 234px #2c9aa4, 236px 236px #2c9aa4, 238px 238px #2c9aa4, 240px 240px #2c9aa4, 242px 242px #2c9aa4, 244px 244px #2c9aa4, 246px 246px #2c9aa4, 248px 248px #2c9aa4, 250px 250px #2c9aa4, 252px 252px #2c9aa4, 254px 254px #2c9aa4, 256px 256px #2c9aa4, 258px 258px #2c9aa4, 260px 260px #2c9aa4, 262px 262px #2c9aa4, 264px 264px #2c9aa4, 266px 266px #2c9aa4, 268px 268px #2c9aa4, 270px 270px #2c9aa4, 272px 272px #2c9aa4, 274px 274px #2c9aa4, 276px 276px #2c9aa4, 278px 278px #2c9aa4, 280px 280px #2c9aa4, 282px 282px #2c9aa4, 284px 284px #2c9aa4, 286px 286px #2c9aa4, 288px 288px #2c9aa4, 290px 290px #2c9aa4, 292px 292px #2c9aa4, 294px 294px #2c9aa4, 296px 296px #2c9aa4, 298px 298px #2c9aa4, 300px 300px #2c9aa4, 302px 302px #2c9aa4, 304px 304px #2c9aa4, 306px 306px #2c9aa4, 308px 308px #2c9aa4, 310px 310px #2c9aa4, 312px 312px #2c9aa4, 314px 314px #2c9aa4, 316px 316px #2c9aa4, 318px 318px #2c9aa4, 320px 320px #2c9aa4, 322px 322px #2c9aa4, 324px 324px #2c9aa4, 326px 326px #2c9aa4, 328px 328px #2c9aa4, 330px 330px #2c9aa4, 332px 332px #2c9aa4, 334px 334px #2c9aa4, 336px 336px #2c9aa4, 338px 338px #2c9aa4,
                               340px 340px #2c9aa4, 342px 342px #2c9aa4, 344px 344px #2c9aa4, 346px 346px #2c9aa4, 348px 348px #2c9aa4, 350px 350px #2c9aa4, 352px 352px #2c9aa4, 354px 354px #2c9aa4, 356px 356px #2c9aa4, 358px 358px #2c9aa4, 360px 360px #2c9aa4, 362px 362px #2c9aa4, 364px 364px #2c9aa4, 366px 366px #2c9aa4, 368px 368px #2c9aa4, 370px 370px #2c9aa4, 372px 372px #2c9aa4, 374px 374px #2c9aa4, 376px 376px #2c9aa4, 378px 378px #2c9aa4, 380px 380px #2c9aa4, 382px 382px #2c9aa4, 384px 384px #2c9aa4, 386px 386px #2c9aa4, 388px 388px #2c9aa4, 390px 390px #2c9aa4, 392px 392px #2c9aa4, 394px 394px #2c9aa4, 396px 396px #2c9aa4, 398px 398px #2c9aa4, 400px 400px #2c9aa4, 402px 402px #2c9aa4, 404px 404px #2c9aa4, 406px 406px #2c9aa4, 408px 408px #2c9aa4, 410px 410px #2c9aa4, 412px 412px #2c9aa4, 414px 414px #2c9aa4, 416px 416px #2c9aa4, 418px 418px #2c9aa4, 420px 420px #2c9aa4, 422px 422px #2c9aa4, 424px 424px #2c9aa4, 426px 426px #2c9aa4, 428px 428px #2c9aa4, 430px 430px #2c9aa4, 432px 432px #2c9aa4, 434px 434px #2c9aa4, 436px 436px #2c9aa4, 438px 438px #2c9aa4, 440px 440px #2c9aa4, 442px 442px #2c9aa4, 444px 444px #2c9aa4, 446px 446px #2c9aa4, 448px 448px #2c9aa4, 450px 450px #2c9aa4, 452px 452px #2c9aa4, 454px 454px #2c9aa4, 456px 456px #2c9aa4, 458px 458px #2c9aa4, 460px 460px #2c9aa4, 462px 462px #2c9aa4, 464px 464px #2c9aa4, 466px 466px #2c9aa4, 468px 468px #2c9aa4, 470px 470px #2c9aa4, 472px 472px #2c9aa4, 474px 474px #2c9aa4, 476px 476px #2c9aa4, 478px 478px #2c9aa4, 480px 480px #2c9aa4, 482px 482px #2c9aa4, 484px 484px #2c9aa4, 486px 486px #2c9aa4, 488px 488px #2c9aa4, 490px 490px #2c9aa4, 492px 492px #2c9aa4, 494px 494px #2c9aa4, 496px 496px #2c9aa4, 498px 498px #2c9aa4, 500px 500px #2c9aa4, 502px 502px #2c9aa4, 504px 504px #2c9aa4, 506px 506px #2c9aa4, 508px 508px #2c9aa4, 510px 510px #2c9aa4, 512px 512px #2c9aa4, 514px 514px #2c9aa4, 516px 516px #2c9aa4, 518px 518px #2c9aa4, 520px 520px #2c9aa4, 522px 522px #2c9aa4, 524px 524px #2c9aa4, 526px 526px #2c9aa4, 528px 528px #2c9aa4, 530px 530px #2c9aa4, 532px 532px #2c9aa4, 534px 534px #2c9aa4, 536px 536px #2c9aa4, 538px 538px #2c9aa4, 540px 540px #2c9aa4, 542px 542px #2c9aa4, 544px 544px #2c9aa4, 546px 546px #2c9aa4, 548px 548px #2c9aa4, 550px 550px #2c9aa4, 552px 552px #2c9aa4, 554px 554px #2c9aa4, 556px 556px #2c9aa4, 558px 558px #2c9aa4, 560px 560px #2c9aa4, 562px 562px #2c9aa4, 564px 564px #2c9aa4, 566px 566px #2c9aa4, 568px 568px #2c9aa4, 570px 570px #2c9aa4, 572px 572px #2c9aa4, 574px 574px #2c9aa4, 576px 576px #2c9aa4, 578px 578px #2c9aa4, 580px 580px #2c9aa4, 582px 582px #2c9aa4, 584px 584px #2c9aa4, 586px 586px #2c9aa4, 588px 588px #2c9aa4, 590px 590px #2c9aa4, 592px 592px #2c9aa4, 594px 594px #2c9aa4, 596px 596px #2c9aa4, 598px 598px #2c9aa4, 600px 600px #2c9aa4, 602px 602px #2c9aa4, 604px 604px #2c9aa4, 606px 606px #2c9aa4, 608px 608px #2c9aa4, 610px 610px #2c9aa4, 612px 612px #2c9aa4, 614px 614px #2c9aa4, 616px 616px #2c9aa4, 618px 618px #2c9aa4, 620px 620px #2c9aa4, 622px 622px #2c9aa4, 624px 624px #2c9aa4, 626px 626px #2c9aa4, 628px 628px #2c9aa4, 630px 630px #2c9aa4, 632px 632px #2c9aa4, 634px 634px #2c9aa4, 636px 636px #2c9aa4, 638px 638px #2c9aa4, 640px 640px #2c9aa4, 642px 642px #2c9aa4, 644px 644px #2c9aa4, 646px 646px #2c9aa4, 648px 648px #2c9aa4, 650px 650px #2c9aa4, 652px 652px #2c9aa4, 654px 654px #2c9aa4, 656px 656px #2c9aa4, 658px 658px #2c9aa4, 660px 660px #2c9aa4, 662px 662px #2c9aa4, 664px 664px #2c9aa4, 666px 666px #2c9aa4, 668px 668px #2c9aa4,
                               670px 670px #2c9aa4, 672px 672px #2c9aa4, 674px 674px #2c9aa4, 676px 676px #2c9aa4, 678px 678px #2c9aa4, 680px 680px #2c9aa4, 682px 682px #2c9aa4, 684px 684px #2c9aa4, 686px 686px #2c9aa4, 688px 688px #2c9aa4, 690px 690px #2c9aa4, 692px 692px #2c9aa4, 694px 694px #2c9aa4, 696px 696px #2c9aa4, 698px 698px #2c9aa4, 700px 700px #2c9aa4, 702px 702px #2c9aa4, 704px 704px #2c9aa4, 706px 706px #2c9aa4, 708px 708px #2c9aa4, 710px 710px #2c9aa4, 712px 712px #2c9aa4, 714px 714px #2c9aa4, 716px 716px #2c9aa4, 718px 718px #2c9aa4, 720px 720px #2c9aa4, 722px 722px #2c9aa4, 724px 724px #2c9aa4, 726px 726px #2c9aa4, 728px 728px #2c9aa4, 730px 730px #2c9aa4, 732px 732px #2c9aa4, 734px 734px #2c9aa4, 736px 736px #2c9aa4, 738px 738px #2c9aa4, 740px 740px #2c9aa4, 742px 742px #2c9aa4, 744px 744px #2c9aa4, 746px 746px #2c9aa4, 748px 748px #2c9aa4, 750px 750px #2c9aa4, 752px 752px #2c9aa4, 754px 754px #2c9aa4, 756px 756px #2c9aa4, 758px 758px #2c9aa4, 760px 760px #2c9aa4, 762px 762px #2c9aa4, 764px 764px #2c9aa4, 766px 766px #2c9aa4, 768px 768px #2c9aa4, 770px 770px #2c9aa4, 772px 772px #2c9aa4, 774px 774px #2c9aa4, 776px 776px #2c9aa4, 778px 778px #2c9aa4, 780px 780px #2c9aa4, 782px 782px #2c9aa4, 784px 784px #2c9aa4, 786px 786px #2c9aa4, 788px 788px #2c9aa4, 790px 790px #2c9aa4, 792px 792px #2c9aa4, 794px 794px #2c9aa4, 796px 796px #2c9aa4, 798px 798px #2c9aa4, 800px 800px #2c9aa4, 802px 802px #2c9aa4, 804px 804px #2c9aa4, 806px 806px #2c9aa4, 808px 808px #2c9aa4, 810px 810px #2c9aa4, 812px 812px #2c9aa4, 814px 814px #2c9aa4, 816px 816px #2c9aa4, 818px 818px #2c9aa4, 820px 820px #2c9aa4, 822px 822px #2c9aa4, 824px 824px #2c9aa4, 826px 826px #2c9aa4, 828px 828px #2c9aa4, 830px 830px #2c9aa4, 832px 832px #2c9aa4, 834px 834px #2c9aa4, 836px 836px #2c9aa4, 838px 838px #2c9aa4, 840px 840px #2c9aa4, 842px 842px #2c9aa4, 844px 844px #2c9aa4, 846px 846px #2c9aa4, 848px 848px #2c9aa4, 850px 850px #2c9aa4, 852px 852px #2c9aa4, 854px 854px #2c9aa4, 856px 856px #2c9aa4, 858px 858px #2c9aa4, 860px 860px #2c9aa4, 862px 862px #2c9aa4, 864px 864px #2c9aa4, 866px 866px #2c9aa4, 868px 868px #2c9aa4, 870px 870px #2c9aa4, 872px 872px #2c9aa4, 874px 874px #2c9aa4, 876px 876px #2c9aa4, 878px 878px #2c9aa4, 880px 880px #2c9aa4, 882px 882px #2c9aa4, 884px 884px #2c9aa4, 886px 886px #2c9aa4, 888px 888px #2c9aa4, 890px 890px #2c9aa4, 892px 892px #2c9aa4, 894px 894px #2c9aa4, 896px 896px #2c9aa4, 898px 898px #2c9aa4, 900px 900px #2c9aa4, 902px 902px #2c9aa4, 904px 904px #2c9aa4, 906px 906px #2c9aa4, 908px 908px #2c9aa4, 910px 910px #2c9aa4, 912px 912px #2c9aa4, 914px 914px #2c9aa4, 916px 916px #2c9aa4, 918px 918px #2c9aa4, 920px 920px #2c9aa4, 922px 922px #2c9aa4, 924px 924px #2c9aa4, 926px 926px #2c9aa4, 928px 928px #2c9aa4, 930px 930px #2c9aa4, 932px 932px #2c9aa4, 934px 934px #2c9aa4, 936px 936px #2c9aa4, 938px 938px #2c9aa4, 940px 940px #2c9aa4, 942px 942px #2c9aa4, 944px 944px #2c9aa4, 946px 946px #2c9aa4, 948px 948px #2c9aa4, 950px 950px #2c9aa4, 952px 952px #2c9aa4, 954px 954px #2c9aa4, 956px 956px #2c9aa4, 958px 958px #2c9aa4, 960px 960px #2c9aa4, 962px 962px #2c9aa4, 964px 964px #2c9aa4, 966px 966px #2c9aa4, 968px 968px #2c9aa4, 970px 970px #2c9aa4, 972px 972px #2c9aa4, 974px 974px #2c9aa4, 976px 976px #2c9aa4, 978px 978px #2c9aa4, 980px 980px #2c9aa4, 982px 982px #2c9aa4, 984px 984px #2c9aa4, 986px 986px #2c9aa4, 988px 988px #2c9aa4, 990px 990px #2c9aa4, 992px 992px #2c9aa4, 994px 994px #2c9aa4, 996px 996px #2c9aa4, 998px 998px #2c9aa4, 1000px 1000px #2c9aa4;
                }

                .long-shadow-example h3 {
                  text-shadow: 0px 0px #268790, 2px 2px #268790, 4px 4px #268790, 6px 6px #268790, 8px 8px #268790, 10px 10px #268790, 12px 12px #268790, 14px 14px #268790, 16px 16px #268790, 18px 18px #268790, 20px 20px #268790, 22px 22px #268790, 24px 24px #268790, 26px 26px #268790, 28px 28px #268790, 30px 30px #268790, 32px 32px #268790, 34px 34px #268790, 36px 36px #268790, 38px 38px #268790, 40px 40px #268790, 42px 42px #268790, 44px 44px #268790, 46px 46px #268790, 48px 48px #268790, 50px 50px #268790, 52px 52px #268790, 54px 54px #268790, 56px 56px #268790, 58px 58px #268790, 60px 60px #268790, 62px 62px #268790, 64px 64px #268790, 66px 66px #268790, 68px 68px #268790, 70px 70px #268790, 72px 72px #268790, 74px 74px #268790, 76px 76px #268790, 78px 78px #268790, 80px 80px #268790, 82px 82px #268790, 84px 84px #268790, 86px 86px #268790, 88px 88px #268790, 90px 90px #268790, 92px 92px #268790, 94px 94px #268790, 96px 96px #268790, 98px 98px #268790, 100px 100px #268790, 102px 102px #268790, 104px 104px #268790, 106px 106px #268790, 108px 108px #268790, 110px 110px #268790, 112px 112px #268790, 114px 114px #268790, 116px 116px #268790, 118px 118px #268790, 120px 120px #268790, 122px 122px #268790, 124px 124px #268790, 126px 126px #268790, 128px 128px #268790, 130px 130px #268790, 132px 132px #268790, 134px 134px #268790, 136px 136px #268790, 138px 138px #268790, 140px 140px #268790, 142px 142px #268790, 144px 144px #268790, 146px 146px #268790, 148px 148px #268790, 150px 150px #268790, 152px 152px #268790, 154px 154px #268790, 156px 156px #268790, 158px 158px #268790, 160px 160px #268790, 162px 162px #268790, 164px 164px #268790, 166px 166px #268790, 168px 168px #268790, 170px 170px #268790, 172px 172px #268790, 174px 174px #268790, 176px 176px #268790, 178px 178px #268790, 180px 180px #268790, 182px 182px #268790, 184px 184px #268790, 186px 186px #268790, 188px 188px #268790, 190px 190px #268790, 192px 192px #268790, 194px 194px #268790, 196px 196px #268790, 198px 198px #268790, 200px 200px #268790, 202px 202px #268790, 204px 204px #268790, 206px 206px #268790, 208px 208px #268790, 210px 210px #268790, 212px 212px #268790, 214px 214px #268790, 216px 216px #268790, 218px 218px #268790, 220px 220px #268790, 222px 222px #268790, 224px 224px #268790, 226px 226px #268790, 228px 228px #268790, 230px 230px #268790, 232px 232px #268790, 234px 234px #268790, 236px 236px #268790, 238px 238px #268790, 240px 240px #268790, 242px 242px #268790, 244px 244px #268790, 246px 246px #268790, 248px 248px #268790, 250px 250px #268790, 252px 252px #268790, 254px 254px #268790, 256px 256px #268790, 258px 258px #268790, 260px 260px #268790, 262px 262px #268790, 264px 264px #268790, 266px 266px #268790, 268px 268px #268790, 270px 270px #268790, 272px 272px #268790, 274px 274px #268790, 276px 276px #268790, 278px 278px #268790, 280px 280px #268790, 282px 282px #268790, 284px 284px #268790, 286px 286px #268790, 288px 288px #268790, 290px 290px #268790, 292px 292px #268790, 294px 294px #268790, 296px 296px #268790, 298px 298px #268790, 300px 300px #268790, 302px 302px #268790, 304px 304px #268790, 306px 306px #268790, 308px 308px #268790, 310px 310px #268790, 312px 312px #268790, 314px 314px #268790, 316px 316px #268790, 318px 318px #268790, 320px 320px #268790, 322px 322px #268790, 324px 324px #268790, 326px 326px #268790, 328px 328px #268790, 330px 330px #268790, 332px 332px #268790, 334px 334px #268790, 336px 336px #268790, 338px 338px #268790,
                               340px 340px #268790, 342px 342px #268790, 344px 344px #268790, 346px 346px #268790, 348px 348px #268790, 350px 350px #268790, 352px 352px #268790, 354px 354px #268790, 356px 356px #268790, 358px 358px #268790, 360px 360px #268790, 362px 362px #268790, 364px 364px #268790, 366px 366px #268790, 368px 368px #268790, 370px 370px #268790, 372px 372px #268790, 374px 374px #268790, 376px 376px #268790, 378px 378px #268790, 380px 380px #268790, 382px 382px #268790, 384px 384px #268790, 386px 386px #268790, 388px 388px #268790, 390px 390px #268790, 392px 392px #268790, 394px 394px #268790, 396px 396px #268790, 398px 398px #268790, 400px 400px #268790, 402px 402px #268790, 404px 404px #268790, 406px 406px #268790, 408px 408px #268790, 410px 410px #268790, 412px 412px #268790, 414px 414px #268790, 416px 416px #268790, 418px 418px #268790, 420px 420px #268790, 422px 422px #268790, 424px 424px #268790, 426px 426px #268790, 428px 428px #268790, 430px 430px #268790, 432px 432px #268790, 434px 434px #268790, 436px 436px #268790, 438px 438px #268790, 440px 440px #268790, 442px 442px #268790, 444px 444px #268790, 446px 446px #268790, 448px 448px #268790, 450px 450px #268790, 452px 452px #268790, 454px 454px #268790, 456px 456px #268790, 458px 458px #268790, 460px 460px #268790, 462px 462px #268790, 464px 464px #268790, 466px 466px #268790, 468px 468px #268790, 470px 470px #268790, 472px 472px #268790, 474px 474px #268790, 476px 476px #268790, 478px 478px #268790, 480px 480px #268790, 482px 482px #268790, 484px 484px #268790, 486px 486px #268790, 488px 488px #268790, 490px 490px #268790, 492px 492px #268790, 494px 494px #268790, 496px 496px #268790, 498px 498px #268790, 500px 500px #268790, 502px 502px #268790, 504px 504px #268790, 506px 506px #268790, 508px 508px #268790, 510px 510px #268790, 512px 512px #268790, 514px 514px #268790, 516px 516px #268790, 518px 518px #268790, 520px 520px #268790, 522px 522px #268790, 524px 524px #268790, 526px 526px #268790, 528px 528px #268790, 530px 530px #268790, 532px 532px #268790, 534px 534px #268790, 536px 536px #268790, 538px 538px #268790, 540px 540px #268790, 542px 542px #268790, 544px 544px #268790, 546px 546px #268790, 548px 548px #268790, 550px 550px #268790, 552px 552px #268790, 554px 554px #268790, 556px 556px #268790, 558px 558px #268790, 560px 560px #268790, 562px 562px #268790, 564px 564px #268790, 566px 566px #268790, 568px 568px #268790, 570px 570px #268790, 572px 572px #268790, 574px 574px #268790, 576px 576px #268790, 578px 578px #268790, 580px 580px #268790, 582px 582px #268790, 584px 584px #268790, 586px 586px #268790, 588px 588px #268790, 590px 590px #268790, 592px 592px #268790, 594px 594px #268790, 596px 596px #268790, 598px 598px #268790, 600px 600px #268790, 602px 602px #268790, 604px 604px #268790, 606px 606px #268790, 608px 608px #268790, 610px 610px #268790, 612px 612px #268790, 614px 614px #268790, 616px 616px #268790, 618px 618px #268790, 620px 620px #268790, 622px 622px #268790, 624px 624px #268790, 626px 626px #268790, 628px 628px #268790, 630px 630px #268790, 632px 632px #268790, 634px 634px #268790, 636px 636px #268790, 638px 638px #268790, 640px 640px #268790, 642px 642px #268790, 644px 644px #268790, 646px 646px #268790, 648px 648px #268790, 650px 650px #268790, 652px 652px #268790, 654px 654px #268790, 656px 656px #268790, 658px 658px #268790, 660px 660px #268790, 662px 662px #268790, 664px 664px #268790, 666px 666px #268790, 668px 668px #268790,
                               670px 670px #268790, 672px 672px #268790, 674px 674px #268790, 676px 676px #268790, 678px 678px #268790, 680px 680px #268790, 682px 682px #268790, 684px 684px #268790, 686px 686px #268790, 688px 688px #268790, 690px 690px #268790, 692px 692px #268790, 694px 694px #268790, 696px 696px #268790, 698px 698px #268790, 700px 700px #268790, 702px 702px #268790, 704px 704px #268790, 706px 706px #268790, 708px 708px #268790, 710px 710px #268790, 712px 712px #268790, 714px 714px #268790, 716px 716px #268790, 718px 718px #268790, 720px 720px #268790, 722px 722px #268790, 724px 724px #268790, 726px 726px #268790, 728px 728px #268790, 730px 730px #268790, 732px 732px #268790, 734px 734px #268790, 736px 736px #268790, 738px 738px #268790, 740px 740px #268790, 742px 742px #268790, 744px 744px #268790, 746px 746px #268790, 748px 748px #268790, 750px 750px #268790, 752px 752px #268790, 754px 754px #268790, 756px 756px #268790, 758px 758px #268790, 760px 760px #268790, 762px 762px #268790, 764px 764px #268790, 766px 766px #268790, 768px 768px #268790, 770px 770px #268790, 772px 772px #268790, 774px 774px #268790, 776px 776px #268790, 778px 778px #268790, 780px 780px #268790, 782px 782px #268790, 784px 784px #268790, 786px 786px #268790, 788px 788px #268790, 790px 790px #268790, 792px 792px #268790, 794px 794px #268790, 796px 796px #268790, 798px 798px #268790, 800px 800px #268790, 802px 802px #268790, 804px 804px #268790, 806px 806px #268790, 808px 808px #268790, 810px 810px #268790, 812px 812px #268790, 814px 814px #268790, 816px 816px #268790, 818px 818px #268790, 820px 820px #268790, 822px 822px #268790, 824px 824px #268790, 826px 826px #268790, 828px 828px #268790, 830px 830px #268790, 832px 832px #268790, 834px 834px #268790, 836px 836px #268790, 838px 838px #268790, 840px 840px #268790, 842px 842px #268790, 844px 844px #268790, 846px 846px #268790, 848px 848px #268790, 850px 850px #268790, 852px 852px #268790, 854px 854px #268790, 856px 856px #268790, 858px 858px #268790, 860px 860px #268790, 862px 862px #268790, 864px 864px #268790, 866px 866px #268790, 868px 868px #268790, 870px 870px #268790, 872px 872px #268790, 874px 874px #268790, 876px 876px #268790, 878px 878px #268790, 880px 880px #268790, 882px 882px #268790, 884px 884px #268790, 886px 886px #268790, 888px 888px #268790, 890px 890px #268790, 892px 892px #268790, 894px 894px #268790, 896px 896px #268790, 898px 898px #268790, 900px 900px #268790, 902px 902px #268790, 904px 904px #268790, 906px 906px #268790, 908px 908px #268790, 910px 910px #268790, 912px 912px #268790, 914px 914px #268790, 916px 916px #268790, 918px 918px #268790, 920px 920px #268790, 922px 922px #268790, 924px 924px #268790, 926px 926px #268790, 928px 928px #268790, 930px 930px #268790, 932px 932px #268790, 934px 934px #268790, 936px 936px #268790, 938px 938px #268790, 940px 940px #268790, 942px 942px #268790, 944px 944px #268790, 946px 946px #268790, 948px 948px #268790, 950px 950px #268790, 952px 952px #268790, 954px 954px #268790, 956px 956px #268790, 958px 958px #268790, 960px 960px #268790, 962px 962px #268790, 964px 964px #268790, 966px 966px #268790, 968px 968px #268790, 970px 970px #268790, 972px 972px #268790, 974px 974px #268790, 976px 976px #268790, 978px 978px #268790, 980px 980px #268790, 982px 982px #268790, 984px 984px #268790, 986px 986px #268790, 988px 988px #268790, 990px 990px #268790, 992px 992px #268790, 994px 994px #268790, 996px 996px #268790, 998px 998px #268790, 1000px 1000px #268790;
                }
              `}
            </CodePane>
          </Layout>
        </Slide>

        <Slide transition={["spin"]} className="t-secondary c-slide--stretch">
          <Layout className="l-layout--vertical">
            <Fill className="u-fill--center">
              <Heading className="o-headline" size="2"><Link href="http://bit.ly/1iIx91k">Single element loader</Link></Heading>
            </Fill>
            <Fill className="u-fill--center">
              <Fill className="loader-example" />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]}>
          <Heading className="o-headline" size="2">The magic</Heading>
          <Layout>
            <CodePane style={{flex: .7}} lang="scss">
              {`
                // http://bit.ly/1iIx91k

                @keyframes loader{
                  @include loader-frames();
                  45%, 55%{
                    @include loader-shadow(10);
                  }
                  @include loader-frames(60%, -1);
                }
              `}
            </CodePane>
            <CodePane lang="css">
              {`
                @keyframes loader {
                  0% { box-shadow: -1.35em 0 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0); }
                  5% { box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0); }
                  10% { box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 0 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0); }
                  15% { box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -2.7em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0); }
                  20% { box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0); }
                  25% { box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0); }
                  30% { box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -2.7em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0); }
                  35% { box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em rgba(200, 39, 84, 0); }
                  40% { box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -2.7em 0 0.5em rgba(200, 39, 84, 0); }
                  45%, 55% { box-shadow: -1.35em 1.35em 0 0.5em white, -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754; }
                  60% { box-shadow: -1.35em 2.7em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em white, 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754; }
                  65% { box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em white, -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754; }
                  70% { box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 2.7em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em white, 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754; }
                  75% { box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em white, 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754; }
                  80% { box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em white, 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754; }
                  85% { box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 2.7em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em white, 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754; }
                  90% { box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em white, 1.35em -1.35em 0 0.5em #c82754; }
                  95% { box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em -1.35em 0 0.5em #c82754; }
                  100% { box-shadow: -1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em 0 0 0.5em rgba(255, 255, 255, 0), 0 1.35em 0 0.5em rgba(255, 255, 255, 0), -1.35em -1.35em 0 0.5em rgba(255, 255, 255, 0), 0 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 1.35em 0 0.5em rgba(255, 255, 255, 0), 0 -1.35em 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(255, 255, 255, 0), 1.35em 0 0 0.5em rgba(200, 39, 84, 0); }
                }
              `}
            </CodePane>
          </Layout>
        </Slide>
        <Slide transtion={["fade"]}>
          <Layout style={{textAlign: "left"}}>
            <Fill style={{padding: "1.4em"}}>
              <Heading size="4">Try it out</Heading>
              <Heading size="6"><Link href="http://codepen.io/">codepen.io</Link></Heading>
              <Heading size="6"><Link href="http://sassmiester.com/">sassmiester.com</Link></Heading>
            </Fill>
            <Fill style={{padding: "1.4em"}}>
              <Heading size="4">Resources</Heading>
              <Heading size="6"><Link href="http://sassbreak.com/">sassbreak.com</Link></Heading>
              <Heading size="6"><Link href="http://www.sassnews.com/">sassnews.com</Link></Heading>
              <Heading size="6"><Link href="http://thesassway.com/">thesassway.com</Link></Heading>
              <Heading size="6"><Link href="http://sass-guidelin.es/">sass-guidelin.es</Link></Heading>
              <Heading size="6"><Link href="http://bit.ly/1Gpsq86/">http://bit.ly/1Gpsq86</Link></Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size="1">Questions?</Heading>
          <Heading size="4">github.com/tjbenton</Heading>
          <Heading size="4">codepen.io/tjbenton21</Heading>
          <Heading size="4">@tjbenton21</Heading>
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
