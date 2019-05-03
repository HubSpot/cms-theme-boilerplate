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
* very foundational styles and JS for bootstrappy elements (buttons, accordions, etc.)
* Establish Custom Module Best Practices and have a framework for building them quickly, but not include a ton of custom modules.
* Templates included are extremely stripped down
* include optional re-usable base elements like Bootstrap or foundation does. Maybe more following foundation's approach fulfilling the bare minimum for the elements themself to look and function well, without including too much opinion.
