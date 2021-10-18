Create a new react project using the following command : npx create-react-app my-app --template typescript. npx comes out of the box with node. The project will be written using typescript as per this command. By default it creates it in javascript. 

Node : javascript runtime that enables us to run javascript outside of a browser. Also enables us to run javascript on the server side.

npm : node package manager allows us to manage node packages as dependencies

npx : npm package runner that makes it really easy to install any sort of node executable that would have normally been installed using NPM. Instead of installing locally or globally, you can go straight to running those packages with NPX.

When you run a package using NPX, it searches for the package in the local and global registry, and then it runs the package.

If the package is not already installed, NPX downloads the package files and installs the package, but it will only cache the files instead of saving it.

cmd + j to open terminal on vscode

Good to remove boilerplate code

The scroll-behavior CSS property sets the behavior for a scrolling box when scrolling is triggered by the navigation or CSSOM scrolling APIs. Scrolls performed by the user aren’t affected by this. 

ctrl + u to clear the current line in terminal on macos

When laying out a document, the browser's rendering engine represents each element as a rectangular box according to the standard CSS basic box model. CSS determines the size, position, and properties (color, background, border size, etc.) of these boxes. Every box is composed of four parts (or areas), defined by their respective edges: the content edge, padding edge, border edge, and margin edge. By default in the CSS box model, the width and height you assign to an element is applied only to the element's content box. By using border-box for box-sizing, the width and height assigned to an element will also account for the padding and the border on the box. Makes it easier to style elements. 

text-decoration : none removes the default underline when applied to links

media queries : to apply different styles for different media types/devices. Can be used to check the width and height of the viewport, width and height of the device, orientation (is the tablet/phone in landscape or portrait mode?) and resolution. 


@media not|only mediatype and (mediafeature and|or|not mediafeature) 
  {CSS-Code;}
CSS @media Rule  

Adding styled components and react-router-dom

yarn add styled-components 

Router allows us to navigate between pages in the app without having to refresh

vh stands for viewport height and vw is for viewport width. Hence, setting an element to a width value of 50vw means that the element will have a width that's 50% of the viewport size, and this stays true when the viewport is resized.

The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

z-index : The z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.

Note: z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display:flex elements).

Note: If two positioned elements overlap without a z-index specified, the element positioned last in the HTML code will be shown on top. 

When using display : flex, can also use flex-direction and justify-content 

margin-right and margin-left as auto, give equal margin on both sides, in a responsive way

css units : 

px : absolute values

% : based off of its parent element size i.e relative to parent element

vw & vh : 1 vw equals 1% of the entire screen size (viewport) i.e. relative to the viewport

rem & em : relative sizes but to the font-sizes. rem is relative to the font-size on the root element, and em is relative to the font-size defined for the parent element. 

css positions: 

static : default position. Renders the element as defined in the document flow

relative : similar to static but with top, left, right and bottom defined to position the element relative to other elements in the document flow. The relative element is removed from the normal document flow though when the attributes are used. 

absolute : used to define the absolute position of the element. Completely removed from the normal document flow. top, left, right and bottom attributes are available, and they are relative to other elements not in the normal document flow. For example, an element defined with position absolute having parent with relative or absolute position would render with respect to that. So relative and absolute positions play well together

fixed : renders relative to the root HTML element. stay in the same position when we scroll. So defining top and other properties would render the element relative to the root element.

sticky : combination of relative and fixed positions into one. It is rendered with relative position when it is in view, but when it is about to go out of view, it changes to fixed, to get rendered as per the coordinates defined in the styling. 

justify-content : space-between allows for two elements to be 

align-items : to vertically align elements in a component

Things to explore
Utility of package.json and tsconfig.json

How do browsers work?

How does HTML get rendered? Workings of DOM etc.

References
What is NPX?  

Measuring Performance | Create React App 

Introduction to the CSS basic box model - CSS: Cascading Style Sheets | MDN 

box-sizing - CSS: Cascading Style Sheets | MDN  

Adding TypeScript | Create React App 

CSS @media Rule  

Learn CSS Units In 8 Minutes  

Learn CSS Position In 9 Minutes 

