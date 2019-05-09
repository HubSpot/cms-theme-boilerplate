# CrankShaft
In one Sentence: CrankShaft is a framework for HubSpot CMS development that takes full advantage of HubSpot's capabilities to make development faster, enabling more performant, and higher quality websites.

We are building the Crankshaft to the whole HubSpot Flywheel - hense the name.


This framework will be the foundation used for building:
* Custom Templates
* Custom Modules
* Themes (think bootstrap themes)

CrankShaft is being built to have it's own disablable grid which is fully backward compatible with the HubSpot grid classes.
The CrankShaft Grid is being based on Bootstrap 4.

CrankShaft will come with minimally styled elements, that can be re-used, themed, used in modules, used in templates.
Elements that very well may make their way into CrankShaft:
* Accordions
* Buttons
* blockquotes
* base styling for HubSpot forms.
* modals
* tables
* Tooltips
* Popovers
* toasts
* much much more

CrankShaft is being designed to be modular, you can choose to use only the parts you want, without worrying about extra bloat in your files. Don't want the grid? don't want the modals? not a problem toggle them off by setting a variable.
Both the JS and CSS will be disabled, and not included in your output code.

Because this framework will help establish and encourage HubSpot development best practices we expect to see Template packs and Custom Modules on the HubSpot marketplace that follow these practices meaning any template built with CrankShaft should work with any module built for CrankShaft. No more modules that rely on specific templates. No more templates that get all screwed up when you add a marketplace module to them.

If you're still confused as to what this is, our goal is to be similar to Foundation by Zurb, Bootstrap, or probably more similar is Shopify's Timber Framework. Our goal is to create a great framework for building HubSpot sites and custom modules.

*We're in the early stages.* Fair warning to anyone looking to use this framework - we will make strides to always make the master branch be stable, but understand we are very much in the early phase of planning and building, I would not consider this framework Production site ready just yet. Contribute how you can/want to. Feel free to create issues and we'll talk some things through. Feel free to add code.

This framework is loosely based upon the HubSpot COS Boilerplate to ensure HubSpot compatibility and because it was a good starting point. Just because it's in the boilerplate doesn't mean anything from it needs to stay. We also don't need to keep the same file structure at all. This might look completely different than the old boilerplate when we're further along, and that's perfectly okay. The idea is to fully create a modern framework for building on HubSpot.

### Current Browser Support Goal: IE 11, Google Chrome, Firefox, Safari, Edge current versions. All other browsers are a plus.
(If you feel this should be changed complain about it in Issues and we'll strike up a friendly discussion)

If you'd like to contribute to this Repo, fork it, make your changes, and submit a pull request. If you tend to make frequent updates we'll add you as a contributor which lets you make branches on the official repo. We will be a little bit choosy with this because we want to protect the code and prevent a too many cooks in the kitchen stepping on toes situation. Using forks prevents that problem. 


## Interested in contributing?
[See our page for that.](https://github.com/TheWebTech/CrankShaft/wiki/Getting-started-with-contributing-to-the-repo)
### Want to help but don't know how to code?
[Upvote relevant ideas to be implemented by HS](https://github.com/TheWebTech/CrankShaft/labels/Upvote%20Idea)

## General ideas of what CrankShaft should have (based on discussions in slack and issues)
* Responsive backward compatible grid. We will base this on Bootstrap 4's grid.
* Utility classes
* Variable Breakpoints
* helpers for making different types of UI elements like buttons.
* many features will be enabled and disabled using hubl vars.

### Thoughts to get your flywheel turning.
#### HubSpots CSS Supports HubL
That means:
* We can use variables
* We can use Macros like SASS extends
* We can conditionally load chunks of CSS
* We can separate code into more modular chunks - enabling say the grid to be separated from other parts of the framework, allowing developers to call the grid css file in their modules. If it makes sense to do so. HubSpot Combines and minifies files making this possible.
* We can create Utility classes that are specific to HubSpot.

#### Every HubSpot site loads jQuery, for better or for worse
* You know it's going to be there, so go ahead and use it.


### HubSpot Resources:

* Boilerplate
    * https://github.com/hubspot/cos-boilerplate
* COS Responsive explanation
    * https://designers.hubspot.com/docs/cos/the-cos-responsive-grid
* Intro to HubL
    * https://designers.hubspot.com/docs/hubl/intro-to-hubl
* HS Developer Chrome Extension
    * https://github.com/williamspiro/HubSpot-Developer-Extension
* HubSpot Community
    * https://community.hubspot.com/


## Contributors
* "CrankShaft" Name by Mark Ryba
   * Name voted on by AJ Laporte, Maia Singletary, Jim Mikecz, [Jon McLaren](https://github.com/thewebtech).
* Grid methodology discussed by AJ Laporte, Mark Ryba, [Jon McLaren](https://github.com/thewebtech), Jenna Schultz.
* Logo designs submitted by Andreas Wessoly and Jon Eichler.
   * Logo voted on by Jon Eichler, Ryan Noon, Chad Pierce, John Fuller, Luke Summerfield, Dennis Edison, Umakant Sharma, Gonzalo Torreras, Erik Hooijer
* Community coordination/organization led by [Jon McLaren](https://github.com/thewebtech)

Want to get involved? post issues, submit pull requests, and join the discussion in the [Slack Channel](https://hubspotdev.slack.com/messages/CCQSQ2C6L).

### New Git/GitHub or Open Source?
[No Problem, here are some resources!](https://github.com/TheWebTech/CrankShaft/wiki/New-to-Git-and-GitHub%3F)

#### Legacy COS Boilerplate Contributors:

* [@captshawn](https://github.com/captshawn)
* [@HeatherC747](https://github.com/HeatherC747)
* [@tjoconnr](https://github.com/tjoconnor)

