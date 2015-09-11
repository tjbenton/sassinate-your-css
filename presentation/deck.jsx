import React from "react/addons";

import {
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Notes,
  Note,
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
        <Slide>
         <Heading fit size={1}>What is SASS?</Heading>
         <Step fid="1" animateIn="bounce-in-left" animateOut="bounce-out"><Heading fit size={5}>CSS preprocessor</Heading></Step>
         <Step fid="2" animateIn="bounce-in-right" animateOut="bounce-out"><Heading fit size={5}><Link href="http://sass-lang.com/">Syntactically Awesome Stylesheets</Link></Heading></Step>
         <Notes>
           <Note step="1">CSS preprocessor — a layer between the stylesheets you author and the <Code>.css</Code> files you serve to the browser.</Note>
           <Note step="2">Sass (short for Syntactically Awesome Stylesheets) plugs the holes in CSS as a language, allowing you to write DRY code that’ll be faster, more efficient, and easier to maintain.</Note>
         </Notes>
        </Slide>
        <Slide>
          <Heading size={1}>There're 2 different filetypes</Heading>
          <Layout>
            <CodePane fill lang="stylus">
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
            <CodePane fill lang="scss" style="margin-top: 0;">
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
          </Layout>
        </Slide>
        {/*
        -
            - `.sass` which is indention based
            - `.scss` which looks a lot more like regular CSS
        - What can SASS do that CSS can't?
            - Nesting
            - Variables
            - Mixins
            - Functions
            - Conditionals
            - Loops
            - It allows you to write highly organized CSS with partials.
        - Easy ways to get started today with a project setup
            - Codepen.io
            - Sassmiester.com
        - Does it work with node?
            - Yes
            - Libsass is a port of SASS to work with js build tools
            - Plugins are available for all build tools
                - Npm
                - Fly
                - Gulp
                - Grunt
                - Brunch
                - And more..
        - Let's get started!
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
        - For first showcase show nesting :mind-blown
        - Then go back and refactor it to allow for more flexibility.
                - Add a `$config`
                - Add `em` function
                - Add `color` function(don't go into detail about it yet though
        */}
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
