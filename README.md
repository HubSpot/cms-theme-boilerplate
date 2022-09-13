# Value accounting hubspot theme

The theme is forked from the [HubSpot CMS Boilerplate](https://designers.hubspot.com/docs/building-blocks/themes/hubspot-cms-boilerplate).

## Getting started

For more details read the [HubSpot guide for creating an efficient development workflow](https://developers.hubspot.com/docs/cms/guides/creating-an-efficient-development-workflow)

1. Create a free account for your local development.
1. Run `hs init` to create a config yaml file for your account (portal) for your own development environment.
1. Run `hs watch --src src --dest value-2022 --initial-upload` to save your files from the src/ folder to your account’s [design tools](https://developers.hubspot.com/docs/cms/developer-reference/design-manager) (in the value-2022/ folder) automatically when saving in the code editor.

## Github workflow for theme changes

1. The theme folder in production is locked, so to make any changes to the theme, you must use your own account's design tools.
1. Run `hs fetch --overwrite <Path in HubSpot Design Tools> [local dest]` to download new files from anything you have created in design tools, such as custom modules.
1. Commit and push to main to trigger the github action, which uploads the changes to the design tools in the production account.

## Style guide

For details about the HubSpot CMS Boilerplate's recommended best practices and code formatting, please reference our [style guide](https://github.com/HubSpot/cms-theme-boilerplate/blob/master/STYLEGUIDE.md).

## Community

You can stay up to date with HubSpot CMS Boilerplate updates and discussions in the #hs-cms-boilerplate channel in the [HubSpot Developer Slack](https://designers.hubspot.com/slack).