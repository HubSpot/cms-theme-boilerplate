# Styleguide

A guide of development best practices for sites and themes on the Hubspot CMS platform.

## Table of Contents
- [HTML](#html)
- [HubL](#hubl)
- [CSS](#css)
- [Javascript](#javascript)
- [File Structure](#file-structure)
- [Module Structure](#module-structure)
- [Template Structure](#template-structure)
- [Theme Structure](#theme-structure)

## HTML

#### HTML Best Practices
1. Two elements should never contain the same `id`.
2. Avoid inline CSS whenever possible.
3. Avoid unnecessary parent elements/wrappers whenever possible.
```html
<!-- Good Example -->
<img class="featured-image" src="test.img" alt="Test Image">

<!-- Bad Example -->
<div class="featured-image">
  <img src="test.img" alt="Test Image">
</div>
```
4. Render scripts at the end of the body which can be accomplished in HubSpot using the [`require_js` HubL function](https://designers.hubspot.com/en/docs/hubl/hubl-supported-functions#require-js).
5. Use unicode characters over entity refererences, with the exception of characters with special meanings.
6. Do not use tables for layout. Only use tables when displaying tabular data.
7. For external links/files, if the asset you need is available on SSL, always use `https://`.

### Accessibility
1. Use [semantic markup](https://developer.mozilla.org/en-US/docs/Glossary/Semantics) whenever possible.
```html
<!-- Good Example -->
<section>
  <article>
    <header>
      <time datetime="2020-09-09">September 9th, 2020</time>
      <h1>
        <a href="/blog-post-title">My Title</a>
      </h1>
    </header>

    <section>
      <p>Here is some preview text!</p>
    </section>

    <footer>
      <a href="/blog-post-title">Read More</a> 
    </footer>
  </article>
<section>

<!-- Bad Example -->
<div class="blog-listing">
  <div class="blog-post">
    <div class="post-header">
      <p>September 9th, 2020</p>
      <h1>
        <a href="/blog-post-title">My Title</a>
      </h1>
    </div>

    <div class="post-body">
      <p>Here is some preview text!</p>
    </div>

    <div class="post-footer">
      <a href="/blog-post-title">Read More</a> 
    </div>
  </div>
</div>
```
2. Use the `alt` attribute for all images that are used as more than decoration.
3. Use the `tabindex="0"` attribute to allow elements besides links and forms to recieve keyboard focus. Use the `tabindex="-1"` attribute to allow elements besides links and forms to receive programattic focus, meaning focus that can be set to the element through scripting. You can read [more about this topic here](https://webaim.org/techniques/keyboard/tabindex).
4. Use [aria attributes](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) and [landmarks](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics#SignpostsLandmarks) when appropriate.

### HTML Code Formatting
1. Write tag names, attributes, and values in lowercase.<br>
**Good Example:**<br>
`<button type="button>Click Me</button>`<br>
**Bad Example:**<br>
`<Button TYPE="Button">Click Me</Button>`<br>

2. Avoid spaces around attribute equal signs.<br>
**Good Example:**<br>
`href="/test.html"`<br>
**Bad Example:**<br>
`href = "/test.html"`<br>

3. Use double quotation marks for attribute values.<br>
**Good Example:**<br>
`alt="Cheese wheel"`<br>
**Bad Example:**<br>
`alt='Cheese wheel'`<br>

4. Remove trailing whitespace.<br>
**Good Example:**<br>
`<p>Here is a paragraph</p>`<br>
**Bad Example:**<br>
`<p>Here is a paragraph</p>___`<br>

5. Avoid new lines between tag names and content.
```html
<!-- Good Example -->
<p>This is my best paragraph yet!</p>

<!-- Bad Example -->
<p>
  This is my best paragraph yet!
</p>
```
6. Use a new line for every block, list, or table element and indent their child elements.
```html
<!-- Good Example -->
<ul>
  <li>Here is a list item</li>
</ul>

<!-- Bad Example -->
<ul><li>Here is a list item</li></ul>
```
8. Indent tags by two spaces.
9. Boolean attributes:
  - When adding Boolean attributes to elements, be sure their placement is at the end of the element tag for optimal legibility.
  - Booleans do not need a declared value, only the name of the boolean is necessary for a "true" value to occur.<br>
**Good Example:**<br>
`<input type="checkbox" value="..." checked>`<br>
**Bad Example:**<br>
`<input type="checkbox" checked="true" value="...">"`<br>

10. Use comments where appropriate to make it easier for another developer to understand your HTML.
  - HubL comments (e.g. `{# comment #}`) should be used if your comment is intended to help developers using your code (HubL comments wouldn't show in the source code of a website page). HTML comments should be used if the comment is something that you want to show in the page's source code.
  - Add a comment above and below sections so that it is easy to determine where sections are.
11. Wrap long lines to increase readability (wrap at 100 characters).
12. Don't close void elements.
  - `<br>` over `<br />`
13. Omit type attributes for stylesheets and scripts.
```html
<!-- Good Example -->
<link rel="stylesheet" href="mystyle.css">

<!-- Bad Example-->
<link rel="stylesheet" type="text/css" href="mystyle.css">
```

## HubL

### HubL Code Formatting
1. HubL variables should have a space between the brackets on either side of the variable name.<br>
**Good Example:**<br>
`{{ variable }}`<br>
**Bad Example:**<br>
`{{variable}}`<br>

2. HubL filters should be added directly following a statement or expression.<br>
**Good Example:**<br>
`{{ variable|filter }}`<br>
**Bad Example:**<br>
`{{ variable | filter }}`<br>

3. Use single quotation marks for HubL.
4. Variable and macro names should clearly indicate their purpose.
5. When coding rgba values in HubL the opacity field should be done divided by `100` to represent the appropriate value. 
**Example:**<br>
`rgba({{ path.to.color.field|convert_rgb }}, {{ path.to.opacity.field / 100 }});`

6. Variables that require a unit value should include that concatenation inside of the HubL brackets.
**Example:**><br>
`{{ path.to.a.field ~ 'px' }}`

## CSS

We use conventional CSS in the majority of our projects. Sass can be used on certain projects where users will not have access to the design manager (e.g. Marketing Hub Starter Landing Pages) by using an additional build step.

### CSS Best Practices
1. Use a consistent box model style for the entire document.
2. Avoid float and clearfixes whenever possible (flex is preferred).
3. Avoid overloading selectors if you don't have to.<br>
**Good Example:**<br>
`.featured-image { }`<br>
**Bad Example:**<br>
`div.wrapper div.wrapper-inner img.featured-image { }`<br>

4. Avoid `!important` tags whenever possible.

### Accessibility
1. Do not set your site's link focus to `outline: none;`. Never. Ever.
2. Style hover and focus classes, items should be reactive to both mouse and keyboard inputs.
3. For text that needs to be visually hidden but allow for screenreaders to see it, please use the following snippet rather than `visibility: hidden` or `display: none`:
```css
.show-for-sr {
  border: 0 !important;
  clip: rect(0, 0, 0, 0) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
}
```

### Vertical Rhythm
Responsive vertical rhythm is a CSS pattern that we want to employ on all theme to ensure consistent spacing across elements of a website. [This article](https://zellwk.com/blog/responsive-vertical-rhythm/) explains the concept. Below is a quick example of how line-height and margins should match in order to create this spacing

```css
/* set line height on html */
html {
  line-height: 1.4;
}

/* use that value as a rem for margins around the site */
p {
  margin: 1.4rem;
}
```

### CSS Code Formatting
1. CSS declarations should be alphabetized.
```css
/* Good Example */
.css-class {
    color: red;
    height: 200px;
    padding: 10px;
    width: 10px;
}

/* Bad Example */
.css-class {
    width: 10px;
    height: 200px;
    color: red;
    padding: 10px;
}
```
2. Use the [BEM class structure](https://css-tricks.com/bem-101/).
  - Make names as short as possible, but as long as necessary to convey meaning.
  - [Flatten grandchild elements](https://assortment.io/posts/grandchild-elements-bem-css#flattening-grandchildren).
3. Use single quotation marks for CSS.
4. End every declaration with a semicolon.
```css
/* Good Example */
.css-class {
    color: #000;
    text-decoration: none;
}

/* Bad Example */
.css-class {
    color: #000;
    text-decoration: none
}
```
5. Use shorthand properties where available to keep code terse.
```css
/* Good Example */
.css-class {
    padding: 5px 10px 10px;
}

/* Bad Example */
.css-class {
    padding-top: 5px;
    padding-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
}
```
6. Use leading 0's before values.<br>
**Good Example:**<br>
`animation-duration: 0.5s;`<br>
**Bad Example:**<br>
`animation-duration: .5s;`<br>

7. Separate selectors and declarations by new lines.
```css
/* Good Example */
.css-class {
    color: #000;
    margin-top: 10px;
}

/* Bad Example */
.css-class { color: #000; margin-top: 10px; }
```
8. Indent all block conent.
```css
/* Good Example */
.css-class {
  font-size: 20px;
  padding: 10px;
}

/* Bad Example */
.css-class {
font-size: 20px;
padding: 10px;
}
```
9. Always use a single space between the property and value.<br>
**Good Example:**<br>
`float: none;`<br>
**Bad Example:**<br>
`float:none;`<br>

10. When grouping together, Selectors should be placed on their own lines and separated by a comma.
```css
/* Good Example */
.css-class,
.css-class-two {
  border: 1px solid #000;
}

/* Bad Example */
.css-class, .css-class-two {
  border: 1px solid #000;
}
```
11. One space should be used between selectors and the opening brace of the declaration block. In addition, closing braces should be placed on a new line by themselves.
```css
/* Good Example */
.css-class {
  font-weight: 700;
}

/* Bad Example */
.css-class{
  font-weight: 700;}
```
12. Include a space after each comma in separated property values.<br>
**Good Example:**<br>
`background-color: rgba(0, 0, 0, 0.5);`<br>
**Bad Example:**<br>
`background-color: rgba(0,0,0,0.5);`<br>

13. Don't include the unit identifier for length values that are set to 0.<br>
**Good Example:**<br>
`margin-top: 0;`<br>
**Bad Example:**<br>
`margin-top: 0px;`<br>

14. Media queries should be written directly next to the non-media queried element.
```css
.css-class {
    width: 50%;
}
@media screen and (max-width: 767px) {
    .css-class {
        width: 100%;
    }
}
```
15. Avoid duplicating style declarations if they'll be inherited or overridden.
```css
/* Good Example */
li + li {
  visibility: hidden;
}

/* Bad Example */
li {
  visibility: hidden;
}
li:first-child {
  visibility: visible;
}
```
16. Avoid type selectors whenever possible.
17. Preferred units:
  - Use seconds over milliseconds.
  - Use hexadecimal unless transparency is specifically needed. Hexadecimal should use shorthand if possible and should be in all caps (e.g. `#D01`).
  - Use relative units for font size, such as ems or rems. While modern browsers can smoothly zoom pixel-based layouts, sizing type in relative units ensures an entire layout can be scaled up or down by simply updating the font-size of the body element.
18. Use comments where appropriate to make it easier for another developer to understand your CSS.
  - Group sections by section comment to delineate your code more easily.

## Javascript
We use ES5 as it is more compatibile with older browsers such as Internet Explorer. ES6 can be used if you're using a build step with a transpiler like [Babel](https://babeljs.io/). We don't use jQuery.

### JavaScript Best Practies
1. Leverage [event bubbling](https://www.sitepoint.com/javascript-tooling-evolution-modern-developers-guide/) whenever possible.
2. Functions should return new objects instead of mutating existing ones. Here is a [good reference](https://alistapart.com/article/why-mutation-can-be-scary/) on the problems with mutating objects.
3. Minimize dependencies.

### Accessibility
1. It is important to remember that not everyone has JavaScript enabled on their browser so the website should still generally function properly if JavaScript is disabled (add CSS fallbacks when possible).

### JavaScript Code Formatting
1. Use single quotation marks for JavaScript and JSON.<br>
**Good Example:**<br>
`var navToggle = document.querySelector('#nav-toggle');`<br>
**Bad Example:**<br>
`var navToggle = document.querySelector("#nav-toggle");`<br>

2. Variable and function names should clearly indicate their purpose.<br>
**Good Example:**<br>
`var navToggle = document.querySelector('#nav-toggle');`<br>
**Bad Example:**<br>
`var z = document.querySelector("#nav-toggle");`<br>

3. Functions should return new objects instead of mutating existing ones.
4. Use comments where appropriate to make it easier for another developer to understand your JavaScript.
5. Use [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) rather than `for (i = 0; i < array.length; i++)`.

## File Structure

### General Naming Conventions:
1. Avoid special characters and spaces in file names.
2. File names should be clear and descriptive; providing immediate insight of their intended use or content at first glance.
3. Use lower case names separated by hyphens.
4. Use an underscore at the start of a style sheet if it isn't directly included in a template.
```
Good Examples:
home.html
_dnd-areas.css

Bad Examples:
Home.html
home!.html
page-1.html
dndareas.css
dnd_areas.css
```

### Asset Labeling:
1. All assets (templates, partials, modules, module settings, theme settings) should include a label and the label should be sentence case per [HubSpot's style guide](https://tools.hubteamqa.com/ui-library/styles/voice-and-tone).
2. Template names should omit the word `page` in their file names or their related assets/code _unless_ it is the `Landing page` template.
```
Good Example:
home.html

Bad Example:
home-page.html
```

## Module Structure:

### General Folder Structure:
```
/module-name.module
    fields.json
    meta.json
    module.html
    module.css*
    module.js*
```
`*` Denotes optional files. If your module doesn't require CSS and/or JavaScript, please exclude these files from your module.

For more information on module file structure and building modules please reference [our documentation](https://designers.hubspot.com/docs/tools/local-module-development#local-module-file-structure).

### Fields.json:

- Modules should only include that minimal amount of field parameters that are required for setting defaults and usage. This helps keep our `fields.json` files concise and legible.
- Module fields should only inlcude the ID field if that particular module field is referenced by another module field. For, example if a module field is referenced by another module field's `visibility` parameter. This is in preparation for [this update](https://git.hubteam.com/HubSpot/themes-and-modules/issues/263).
- Module fields should be ordered in the following order:
```
label:
name:
id:
type:
help_text:
visibility:
(other params)
inheritance:
default:
```

### Meta.json:

- All modules should include an icon from [Canvas](https://canvas.hubspot.com/styles/icons).
- `meta.json` parameters should be ordered in the following order:
```
{
  "label": "Icon",
  "css_assets": [],
  "external_js": [],
  "global": false,
  "host_template_types": ["PAGE", "BLOG_LISTING", "BLOG_POST"],
  "icon": "",
  "js_assets": [],
  "other_assets": [],
  "smart_type": "NOT_SMART",
  "tags": [],
  "is_available_for_new_content": true
}
```

### Applying Module Styles:

- Should we take the override approach to module styles for now like [this](https://git.hubteam.com/HubSpot/cms-rally-theme/blob/28c386d4d54051d1aa3633fdb5e11a78479c574c/src/modules/Button.module/module.html#L30)?

### Module IDs

- All modules should have an [module ID](https://product.hubteam.com/docs/design-assets-docs/deploying.html) assigned

## Template Structure:

### Drag and Drop Object Formatting:
1. Opening and closing tags should be on their own line to increase legibility.
2. Parameters (after the `name` or `path`) should be written on their own line to increase legibility.
3. After `path`/`name` and `label`, all other parameters should be ordered alphabetically to ensure consistency and increase legibility.
4. For margin and padding parameters, the values should be ordered: top, right, bottom, left to match CSS shorthand for those properties.
```jinja
{# Good Example: #}
{% dnd_module path="../modules/button",
  button_link="#",
  button_text="Get Started"
%}
{% end_dnd_module %}

{# Bad Example: #}
{% dnd_module path="../modules/button", button_text="Get Started", button_link="#" %}{% end_dnd_module %}
```

### Template Meta Data:
The top of each template should include a YAML code block formatted to match the example below. Blog and system templates should have their `label`s prefixed with the theme's name. Ex. `label: Vitality - Blog post`.

Requirements for screenshots can be found below at [Template Screenshots](#template-screenshots).

```
<!--
  templateType: page
  isAvailableForNewContent: true
  label: Home
  screenshotPath: ../images/template-previews/home.png
-->
```

### Template Screenshots:
Screenshots should be taken for all non-system type templates for linking in the template's meta data section (see [Template Meta Data](#template-meta-data) above). The process for creating a screenshot is:

- Take a full page screenshot of the template
  - Some helpful browser extensions for this are [Nimbus](https://chrome.google.com/webstore/detail/nimbus-screenshot-screen/bpconcjcammlapcogcnnelfmaeghhagj) or [Full Page Screen Capture](https://chrome.google.com/webstore/detail/full-page-screen-capture/fdpohaocaechififmbbbbbknoalclacl)
- Resize screenshot image to 1000px wide.
- Save to `/images/template-previews` in the theme.

_Note: Screenshots should be named after their template. For example the template `home.html` should have a screenshot named `home.png`

## Theme Structure

### Theme Extending
We are open sourcing our themes and will be building them in a way that will allow developers to extend the theme while still being able to get updates for the main theme files. To do this, we are creating the theme with fallback styles so that if a developer removes `fields.json` or `theme-overrides.css`, the theme will still work as expected. We are then overriding our base styles with values from theme settings in `theme-overrides.css`. Developers will have the opportunity to override any styles from the theme using `extends.css` or something similar if they would like to override any theme styles with their own styles.

### Folder Structure
Files within a theme are organized into folders based on the their type. Our theme style sheets are organized using our own version of the [ITCSS methodology](https://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528).

Our general theme folder structure is:
```
/css
  /components
    _footer.css
    _header.css
  /elements
    _buttons.css
    _forms.css
    _tables.css
    _typography.css
  /generic
    _normalize.css
    _reset.css
  /helpers
    _utilities.css
  /objects
    _containers-dnd.css
    _layout.css
  /templates
    _blog.css
    _system.css
  /tools
    _animations.css
    _macros.css
  main.css
  theme-overrides.css
/images
  example-image.jpg
  /template-previews
    home.png
/js
  main.js
/modules
/templates
  /layouts
  /partials
  /system
```

### Theme Templates
By default, all themes should contain the following default templates:
- Home
- About
- Contact
- Landing Page
- Blank
- Blog Index
- Blog Post
- System Templates
  - 404 Error
  - 500 Error
  - Backup Unsubscribe
  - Password Prompt
  - Search Results
  - Subscription Preferences
  - Subscription Confirmation
  - Membership Login
  - Membership Register
  - Membership Reset Password Request
  - Membership Reset Password

### Theme.json
The `theme.json` file should be structured like the code below. The file should include a `label` to match the theme's name, a `preview_path` to set the theme's default preview template, and a `screenshot_path` to set the theme's preview image which displays when a user selects which theme they want to use. The image used for the `screenshot_path` should be stored under the `/images/template-previews/` folder. Requirements and instructions for taking screenshots can be found at [Templates - Template Screenshots](https://product.hubteam.com/docs/design-assets-docs/templates.html#template-screenshots)

```
{
  "label": "Theme Name",
  "preview_path": "./templates/home.html",
  "screenshot_path": "./images/template-previews/theme-name.png"
}
```