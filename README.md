<h1>Rocksteady Landing Pages</h1>

This repository can be used to work on the Rocksteady Hubspot theme.

## Setup

You will need to get setup with Hubspot locally. Details can be found in the [Hubspot Local Development Guide](https://developers.hubspot.com/docs/guides/cms/setup/getting-started-with-local-development). You can create a free Hubspot developer account. It might make sense to just use the WordPress@hiyield.co.uk account if at all possible though as this is where I've configured for this theme to be deployed.

## Local Development

I have done some research and we have 2 ways to work on this, and right now I am not sure which way is the best.

There are some difficulties with live previewing the code locally, but there is local live preview. The local `hs theme preview` command only seems to work if you are previewing a full template. It won't work for example if you want to work on footer.html. You can run `hs theme preview src dest` from project root. This'll spin up a local dev server where you can work 'live', for example `https://hslocal.net:3000/template/dest/templates/blog-post.html`. The cool thing with this is that changes do live update, but what I am not seeing is the ability to easily work with dummy content.


The Hubspot documentation recommends using the [watch/upload method](https://developers.hubspot.com/docs/guides/cms/setup/creating-an-efficient-development-workflow). For developing templates:

1. Run `hs watch src rocksteady-landing-pages` to set up a watcher task that syncs files to Hubspot
2. Access the design manager in [Hubspot Design Manager](https://app-eu1.hubspot.com/design-manager/)
3. Select a template and hit 'preview' (Live preview with display options)
  - Note: You'll need to manually refresh to see changes, but uploads happen quickly


Either of these approaches work. The former is probably better.

## Workflow Recommendation

Work on features until they look good in the design preview, then create a PR for code review. While this may seem redundant (as depending on what workflow you use above changes deploy as you go), it maintains a proper record of changes in version control.
