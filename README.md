# CrankShaft
This framework is loosely based upon the HubSpot COS Boilerplate to ensure HubSpot compatibility and because it was a good starting point. Our goal however is to build a framework for building websites on HubSpot that enables faster development, higher quality and better performance. Just because it's in the boilerplate doesn't mean it needs to stay. We also don't need to keep the same file structure at all. This might look completely different than the old boilerplate when we're further along, and that's perfectly okay. 

We are building the Crankshaft to the whole HubSpot Flywheel - hense the name.

If you're still confused as to what this is, our goal is to be similar to Foundation by Zurb, or probably more similar is Shopify's Timber Framework. Our goal is to create a great framework for building HubSpot sites and custom modules.

We're in the early stages. Figuring things out, contribute how you can/want to. Feel free to create issues and we'll talk some things through. Feel free to add code.

If you'd like an invite to contribute to this Repo, you can contact @jonmclaren on the HubSpot Developer Slack. or feel free to submit a pull request. If I can make it more open in someway so users can make themselves contributors I will do that.

I would encourage avoiding a build process as some users will want to use this directly in HubSpot, some may wish to work locally.


## General ideas of what CrankShaft should have
* Responsive backward compatible grid.
* Utility classes
* Variable Breakpoints
* helpers for making different types of UI elements like buttons.

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


### Current Browser Support Goal: IE 11, Google Chrome, Firefox, Safari current versions. All other browsers are a plus.
(If you feel this should be changed complain about it in Issues and we'll strike up a friendly discussion)

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
   * Name voted on by AJ Laporte,Maia Singletary, Jim Mikecz, [Jon McLaren](https://github.com/thewebtech).
   
Want to get involved? post issues, submit pull requests, and join the discussion in the [Slack Channel](https://hubspotdev.slack.com/messages/CCQSQ2C6L).

#### Legacy COS Boilerplate Contributors:

* [@captshawn](https://github.com/captshawn)
* [@HeatherC747](https://github.com/HeatherC747)
* [@tjoconnr](https://github.com/tjoconnor)

