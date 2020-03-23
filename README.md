HubSpot CMS Boilerplate
=======================

A straight-forward starting point for building a great website on the HubSpot CMS.

## Purpose  
The HubSpot CMS Boilerplate is designed to offer developers a head start in the website building process. While the boilerplate represents HubSpot's opinionated best practices, we intend to learn from similar projects and feedback. We hope it offers inspiration and utility for all website projects!

You can find the demo site at [boilerplate.hubspotcms.com](https://boilerplate.hubspotcms.com).

Follow and star the repository to stay up-to-date with product releases and evolving best practices for building websites on the HubSpot CMS through PRs of the boilerplate.

## Getting started

The HubSpot CMS boilerplate is designed to work with both [local development](https://designers.hubspot.com/docs/tools/local-development) and the HubSpot Design Tools. To get started, you will need to have [Node.js](https://nodejs.org) installed. When getting started, we strongly suggest that you set up a [HubSpot CMS Developer Sandbox](https://offers.hubspot.com/free-cms-developer-sandbox).

1. Navigate to the directory that you want to use for your project
1. Run `npx @hubspot/create-cms-project <directory>` to create a project from the boilerplate
1. Create a `hubspot.config.yml` file and [configure](https://designers.hubspot.com/docs/tools/local-development#2-set-up-your-configuration-file) the CLI so that you can upload files to the HubSpot portals that you use
1. Run `npx hs watch --portal=<portal> src <directory>` to upload all the files in the boilerplate and [watch for changes](https://designers.hubspot.com/docs/tools/local-development-reference#watch) to files in the `src` directory

For more details about development best practices, see the [styleguide](https://github.com/HubSpot/cms-theme-boilerplate/blob/master/STYLEGUIDE.md).

To learn more about the HubSpot CMS, visit [designers.hubspot.com](https://designers.hubspot.com) and explore the documentation.
