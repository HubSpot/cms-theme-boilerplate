# CrankShaft's mission
CrankShaft's primary mission is to enable developers to quickly build high quality HubSpot sites taking advantage of HubSpot best practices and special features. 
>We are building the Crankshaft to the whole HubSpot Flywheel

CrankShaft should kickstart Site/theme building but not be crazy opinionated as to how you have to do it all. Think how Bootstrap itself isn't imposing templates on you, but you use it to build the templates. From this you can have "starter templates" and on top of those starter templates you can have Themes, or template packs that ARE themed.

## Secondary Goals
* Be the go to starting point for HubSpot CMS developers.
* Encourage HubSpot development best practices.
* Designed to be site agnostic. 
* Do force a specific grid, but include one optionally.
  * included grid supports flex columns AND drag and drop regions(2D flex columns)
* Make it easier to build semantic and a11y friendly HubSpot sites.
* Be fully compatible with both HubSpot Drag n Drop templates AND Coded templates.
* Support IE 11, and the latest 2 versions of all major evergreen browsers
* Avoid breaking HubSpot injected UI components like forms.
* Javascript written can be vanilla or jQuery (latest HubSpot allowed version). Any other Libraries can be loaded when appropriate within custom modules as needed, but vanilla and jQuery will be included. At a later date we may refactor and go mostly vanilla. The intent is to avoid locking the framework into a technology it is too difficult to break away from.

## scope
* grid - which can be toggled off
* CSS selectors for base html elements.
* very foundational styles and JS for bootstrappy elements (buttons, accordions, etc.)
* Establish Custom Module Best Practices and have a framework for building them quickly, but not include a ton of custom modules.
* Templates included are extremely stripped down
* Include optional re-usable base elements like Bootstrap or foundation does. Maybe more following foundation's approach.
fulfilling the bare minimum for the elements themself to look and function well, without including too much opinion.
* Bare bones configurability through HubL vars similar to what is found in bootstrap
* structure for extending it to be themed, and support third party extensibility where possible.
* include minimal polyfills for IE 11 to make framework work consistently to modern browsers.(can be done as a toggleable feature)
* Documentation for all features and elements of CrankShaft itself, as well as encouraging best practices.

### What Crankshaft will not be/have
All of these things require some level of opinion imposing and do not need to be part of CrankShaft itself. Template packs and module packs built ontop of the framework can be open sourced and in their own forks.
* Full template sets like 2 column, holy grail(3 col), contact page.
* Detailed templates with lots of modules and flex columns pre-arranged.
* Tons of custom modules built in.
* Full Color themes


Without this narrowed scope it would be too easy for the framework to get out of hand and get to the point there's a blur between theming and the actual framework itself. We want these things to exist. We just want those to be built on-top of CrankShaft, and not be forced onto devs who just want to start with a fresh canvas and go to town.
