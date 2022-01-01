### front-end technologies

- HTML
- CSS
- javaScript
- Bootstrap framework
- Angular framework
- reactJs


### Backend Technologies

- Node.js
   - express.js  //middle
   - nodemoon
   - cors
   - dotenv
-  PHP
-  C#
-  Java
-  python

### Databases
- MongoDb
- Mysql
- SQlite
- Firebase
- postgressql
- oracle


+ VCS (Source code Management)
     - Distributed VCS
         - Git,mercurial
     - Remote (Central) VCS
         - Github,Bitbucket

### Git

- git init
- git add filename
- git add filename1 filename2 filename100
- git add . or git add --all
- git status
- do git configurations (set user.name and user.email)
- commit data with commit message
- push thecode into github


### HTML

- Hyper text markup language
   - to display our information in website
- latest version html5
- there are three types of elements in html 
   - semantic Elements  
      - heade
      - section 
      - article
      - aside
      - footer
      - table 

   - Block level Elements (it occupies entire width of the browser)
      - h1 to h6 (headings range)
      - p (paragraph)
      - div
      - all sematic elements
      - Text will start from new line

   - Inline Elements
      - span
      - image 
      - a 
      - nav
      - form
      - input
      - textarea
      - legend
      - sup
      - sub
      - ul unordered list
      - ol

 ### html elements task:
 - audio
 - video
 - progress
 - meter
 - datalist
 - select
 - canvas

 ### css

 + cascading style sheets (to butify our entire project)
 + three ways to apply css to html
   - Inline CSS
   - Internal CSS
   - External CSS
+ syntax of css
  
  ...
  selector {
     css properties
  }

  ### selectors
  + simple selectors
    - Universal Selectors (*)  for all
    - By Element name
    - grouping selector (,)
    - class selector
    - Id selector
  + combinators
    + Descendent selector ( )
    + Child Selector (>)
    + Adjacent sibling selector (+)
    + general sibling Selector (~)
 + Pseudo class selector
 + Pseudo element selector
 + Attribute Selector 
   
### Box Modal

+ margin
+ border
+ padding
  - padding :10px (for all adjacent sides)
  - padding :10px 30px (10px for top and bottom:30px for left and right)
  - padding :10px 300px 50 px (10px for top;300px for left and right;50px for for bottom)
  - padding :10px 30px 4px 50px (top,right,bottom,left)
+ width
- 1rem:16px

Task2:
=====
- index.html
- register.html
- login.html
#### Responsive Web Design
#### Flex-box
- display
    - flex
        - flex-wrap
        - justify-content
        - flex-direction
        - flex-flow
+ display
  - none
  - inline
  - block
  - inline-block
+ position
  - static
  - relative
  - absolute
  - fixed
  - Sticky
+ align-content
+ align-items
+ align-self

### media Quaries
- Extra small devices (mobiles)
  - max-width:600px
- Small devices (large phones)
  - min-width:600px
- medium (Small laptops)
  - min-width:760px
- large (laptops/desktops)
  - min-width:992px
- Extra large devices()
  - min-width:1200px


...
@media only screen (max-width:320px) and (max-width:500px){
   CSS code
}
...

### Bootstrap 4.6

- its is a Css framework

Task3:
====
    - Navbar with Responsive
- module(collection of functions and we can maintain classes and objects also)
- Package(collection of modules)
- Library(collection of packages)
    - Reactjs is a Library
- framework(collection of library)
+ module-->Package-->Library-->Framework

+ Type of Modes
    - offline
    - online
        - CDN links

+ background-color - bg-clor
+ text-white
+ Margin in Bootstrap(m-*(0,5))
    - 0 --> 0rem
    - 1 --> 0.25rem(4 px)
    - 2 -->0.5rem(8 px)
    - 3 --> 1 rem(16px)
    - 4 --> 1.5rem(24px)
    - 5 -->3rem(48px)
    -  ml-5(Margin-left)
    -  m(margin in all diections)
    - mb (margin-bottom)
    - mt(margin-top)
    - mr (margin -right)
+ Padding (Padding-left-->pl-5)
+ colors
    - primary
    - secondary
    - info
    - success
    - warning
    - danger
    - light
    - dark
    - white
+ we can use color classes for
    - Buttons (btn btn- primary)
    - text (text-white)
    - background (bg-secondary)
    - alerts (alert alert-primary)
+ Grid System
    -   col-sm-12
    - sm (small devices)
    - md (medium devices)
    - lg (large devices)
    - xl (Extra large devices)

#### JavaScript

+  to apply dynamic behaviour to web page
+ in 1995 'Brenden eich' introduced JavaScript (ES-262)
+ Javascript loosely touple(no need to mention data type) and dynamic language 
+ it is a text-based programming language and we can run in client-side and serverside for (Node.js) 
  dynamic web applications
- collabarated with ECMA-Script (ES-6)
     - let & const
     - map() for iteration purpose
     - arrow function
     - classes
     - spread operator
     - rest parameter
+ Datatypes
     - Number
     - BigInt (2^53-1)
     - String
     - Boolean
     - undefine
     - Null
     - Object
     - Array
+ Variables
     - var ( Keyword to create variable ) ,let & const
     - Scope
        - function level  --> var
        - block level     --> let & const
     - ReDefine --> var,let
     - ReDeclare --> var
+ 'typeof()'
+ object
...
{
  name:"kalyan"
}
...

### Alerts

+ To generate notifications
   - alert
   - prompt (to take input from user)
   - confirm

+ console statements
   - `console.log()`
   - `console.info()` 
   - `console.warn()`
   - `console.error()`

+ Spread Operator
    - to change array elements from one array to another (swap)
     ...

     ...variablename
+ Rest Operator
   + to handle function parameters

     ...
     ...parameter
     ...

+ Destructuring of array & objects

+ Functions
  - function with function name
  
  ...
  function demo(x,y){
    return x+y
  }
  demo()
  ...

   - Annoymous function
   ...
   let demo= (x,y) => {
     return x*y
   }
   demo(3,4)
   ...

   + for-in
      - to get index values of an array
   + for-of
      - To get elements in an array
   
   + forEach() --> (ES-5)
   + map() --> (ES-6)

### DOM

   - Document object Model
   - document
   - history
   - window
   - navigator (to access info without internet)

+ DOM methods
   - `getElementById()`
   - `getElementByClassName()`
   - `querySelector`
   - `innerText`
   - `append`
   - `appendChild`
   - `innerHTML`
   - `setAttribute`
   - `classList`
   - `style`
   - `src`
   - `textContent`

#### JSON
+ javaScript object Notation
     - To exchange information between application and server
     - syntax
     ...
     {
       "name":"Kalyan Chakravarthi paladugu",
       "salary":"6.5Lpa",
       "designation":"Software developer",
       "mobile":98765543212
     }
     ...

+ Ajax call or Promises (fetch API) or axios

#### fromt-end with ReactJS

+ A JavaScript library for building user interfaces
+ Facebook,Instagram,netflix
+ it follows component based Architecture
   - Function Component
   - Class commponent
   - Pure Component
   - Higher order Component
+ It provides Virtual DOM
+ It provides JSX (JavaScript and XML)
+ Unidirectional data flow
+ Single Page Applications(only one html file i.e.;index page)


+ Project Environment setup
   
    - [Download Visual studio code] ()
    - [Download nodejS] (https://nodejs.org/en/download/)
    - install nodejs and chack versions of `node` and `npm`
        - `node -v`
        - `npm -v`

    - `webpack` and `babel` (for project creation)
    - by using command `create-react-app`
         - `npm install create-react-app`  (node package management-npm)
                - `create-react-app projectname`
    - `npx create-react-app appname`

+ Index.html
+ index.js
+ index page
    - nav.js
    - body.js
    - footer.js
    + Home.ja
       - nav
       - body
       - footer
    + login.js
    + register
    + about
    + contact

+ Functional Component
      - doesnt import package
+ Class Component
      - imports package

+ props
    - To pass data from one component to another component we will use props
    - Props are immutable

    + Unionbank (Functional)
        - AndhraBank (Functional)
        - CorporationBank(Class)


+ States 

- In react to maintain information we will use States
- We can maintain states in class component only (Before react16.8 version)
- To take state in react,Try to create constructor above render method and inside of class component
- Use  `rconst` snippet

...
constructor(){
   super();
   this.state={

   }
}
...


- To update the state information in class component use  `setState()` method
+ To update the state information in class component we have to follow component life cycle methods
   - `componentWillMount()`
   - `ShouldUpdate()`
   - `componentDidMount()`
   - `componentWillUpdate()`
   - `componentDidUpdate()`
   - `componentWillUnMount()`



#### Hooks

+ from reack16.8 Hooks are introduced
- To maintain information in Functional component we can use Hook

- Parent - Child1 --> child2 --> child3
- `usestate()` 
- `useEffect()`
- `useMemo()`
- `useref()`
- `useContext()`


#### List Rendering


### Event Handling & Form Handling

- `onChange`
- `onSubmit`
- `preventDefault()`


#### eouting in React

+ To navigate (Route) from one component to another
    - install react-router -dom package by using `npm install react-router-dom`
    - `BrowswerRouter`
    - `Routes`
    - `Route`
    - `link`
    - `path`
    - `element`
    

+ Redex



##### referance links
- [flaticon]
- html colour codes
- [webaim contrast checker] (https://webaim.org/resources/contrastchecker/)
- getbootstrap
- JSON online validator
