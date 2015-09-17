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
        <Slide bgImage={images.abstract} bgLighten=".5">
          <Heading size={1} fit caps>
            About me
          </Heading>
          <Text>
            Some awesome info about me
          </Text>
        </Slide>
        <Slide transition={["slide"]}>
         <Heading fit size={1}>What is SASS?</Heading>
         <Step fid="1" animateIn="bounce-in-left" animateOut="bounce-out">
           <Heading fit size={5}>CSS preprocessor</Heading>
         </Step>
         <Step fid="2" animateIn="bounce-in-down" animateOut="bounce-out-down">
           <Heading fit size={4}>Built in Ruby</Heading>
         </Step>
         <Step fid="3" animateIn="bounce-in-right" animateOut="bounce-out">
           <Heading fit size={6}><Link href="http://sass-lang.com/">Syntactically Awesome Stylesheets</Link></Heading>
         </Step>
         <Notes>
           <Note step="1">CSS preprocessor — a layer between the stylesheets you author and the <Code>.css</Code> files you serve to the browser.</Note>
           <Note step="3">Sass (short for Syntactically Awesome Stylesheets) plugs the holes in CSS as a language, allowing you to write DRY code that’ll be faster, more efficient, and easier to maintain.</Note>
         </Notes>
        </Slide>
        <Slide>
          <Heading size={3}>Does it work with <Code>node</Code>?</Heading>
          <Step fid="2">
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
                <Step fid="1">
                  <ListItem>It's faster!</ListItem>
                </Step>
                <Step fid="2">
                  <ListItem>Allows integration with any language</ListItem>
                </Step>
                <Step fid="3">
                  <ListItem>Integrates with your favorite build tool</ListItem>
                </Step>
              </List>
            </Fill>
            <Fill>
              <Heading size={6}>Cons</Heading>
              <List>
                <Step fid="4"><ListItem><Link href="http://sass-compatibility.github.io/">Compatiblity</Link></ListItem></Step>
              </List>
            </Fill>
          </Layout>
          <Notes>
            <Note step="4">It's not a straight port so there're some inconsistencies but there's a compatiblity site to help out with these inconsistencies</Note>
          </Notes>
        </Slide>
        <Slide transition={["zoom"]}>
          <Heading size={1}>Filetypes</Heading>
          <Layout>
            <Fill>
              <Heading size={5}>SASS</Heading>
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
            </Fill>
            <Fill>
              <Heading size={5}>SCSS</Heading>
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
            </Fill>
          </Layout>
          <Notes>
            <Note><Code>.sass</Code> which is indention based</Note>
            <Note><Code>.scss</Code> which looks a lot more like regular CSS</Note>
          </Notes>
        </Slide>
        <Slide transition={["zoom", "slide"]}>
          <Heading size={4}>What can SASS do that CSS can't?</Heading>
          <List style={{
              columnCount: 2
            }}>
            <Step fid="1"><ListItem>Nesting</ListItem></Step>
            <Step fid="2"><ListItem>Variables</ListItem></Step>
            <Step fid="3"><ListItem>Placeholders</ListItem></Step>
            <Step fid="4"><ListItem>Mixins</ListItem></Step>
            <Step fid="5"><ListItem>Functions</ListItem></Step>
            <Step fid="6"><ListItem>Conditionals</ListItem></Step>
            <Step fid="7"><ListItem>Loops</ListItem></Step>
            <Step fid="8"><ListItem>Partials</ListItem></Step>
          </List>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={2}>Nesting</Heading>
          <Layout>
            <Fill>
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
            </Fill>
            <Fill>
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
            </Fill>
            <Fill>
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
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading fit size={2}>Nesting isn't just for selectors</Heading>
        </Slide>
        <Slide>
          <Heading className="o-headline" size={4}>Properties</Heading>
          <Layout>
            <Fill>
              <CodePane lang="scss">
                {`
                  .c-island {
                    border: 1px solid #e2e2e2 {
                      radius: 6px;
                    };
                    margin: 0 {
                      top: 10px;
                    };
                    padding: 1.4em;
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
                {`
                  .c-island {
                    border: 1px solid #e2e2e2;
                    border-radius: 6px;
                    margin: 0;
                    margin-top: 10px;
                    padding: 1.4em;
                  }
                `}
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
                    font-size: 16px;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
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
                  .clear:after {
                    content: "";
                    display: table;
                    clear: both;
                  }

                  .container {
                    background: blue
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
                {`
                  .one {
                    @include clear;
                    background: blue;
                  }

                  .two {
                    @include clear(true);
                    background: red;
                  }

                  .three {
                    @include clear(false);
                    background: yellow;
                  }
                `}
              </CodePane>
            </Fill>
            <Fill>
              <CodePane lang="css">
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

                  .three {
                    background: yellow;
                  }

                  .three:after {
                    content: "";
                    display: table;
                    clear: both;
                  }
                `}
              </CodePane>
            </Fill>
          </Layout>
          <Notes>
            <Note>What makes mixins so powerful is the ability to pass in arguments to get different results</Note>
            <Note>You can pass in defaults to each argument</Note>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={2}>Let's get started!</Heading>
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
        {
        // <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
        //   <Step fid="1">
        //     <Heading size={1} caps fit textColor="primary">
        //       Full Width
        //     </Heading>
        //   </Step>
        //   <Step fid="2">
        //     <Heading size={1} caps fit textColor="tertiary">
        //       Adjustable Darkness
        //     </Heading>
        //   </Step>
        //   <Step fid="3">
        //     <Heading size={1} caps fit textColor="primary">
        //       Background Imagery
        //     </Heading>
        //   </Step>
        // </Slide>
        }
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
            <ListItem><Step fid="1">Inline style based theme system</Step></ListItem>
            <ListItem><Step fid="2">Autofit text</Step></ListItem>
            <ListItem><Step fid="3">Flexbox layout system</Step></ListItem>
            <ListItem><Step fid="4">React-Router navigation</Step></ListItem>
            <ListItem><Step fid="5">PDF export</Step></ListItem>
            <ListItem><Step fid="6">And...</Step></ListItem>
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
      </Deck>
    );
  }
}
