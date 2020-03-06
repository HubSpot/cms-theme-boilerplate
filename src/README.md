## Theme fields
Theme fields are created in the `fields.json` file which is located in the root of a theme folder. To learn about the available fields and their parameters please see the [Theme Reference documentation](https://designers.hubspot.com/docs/tutorials/themes-reference#fields-json). Theme field values are available to use in your css through the global theme object. You access specific values by using dot notation within a Hubl expression:

##### fields.json
```
{
  "type": "group",
  "name": "typography",
  "label": "Typography",
  "children": [
    {
      "type": "font",
      "name": "h1_font",
      "label": "Heading 1",
      "load_external_fonts": true,
      "default": {
        "color": "#000",
        "font": "Merriweather",
        "font_set": "GOOGLE",
        "variant": "700",
        "size": "48"
      }
    }
  ]
}
```

##### CSS
```
h1 {
 font-size: {{ theme.typography.h1_font.size }}px;
 font-family: {{ theme.typography.h1_font.font }};
 color: {{ theme.typography.h1_font.color }};
 text-decoration: {{ theme.typography.h1_font.styles.text-decoration }};
 font-style: {{ theme.typography.h1_font.styles.font-style }};
 font-weight: {{ theme.typography.h1_font.styles.font-weight }};
}
```

## Controlling visibility
In some cases a theme might not use all of the available parameters. In these cases, controlling the field's parameters using `visibility` is useful. Using the font field from the example above, the `color` and `size` parameters can be hidden using the following:

```
 {
   "type": "group",
   "name": "typography",
   "label": "Typography",
   "children": [
     {
      "type": "font",
      "name": "h1_font",
      "label": "Heading 1",
      "load_external_fonts": true,
      "visibility": {
        "hidden_subfields": {
          "color": true,
          "size": true
        }
      },
      "default": {
        "font": "Merriweather",
        "font_set": "GOOGLE",
        "variant": "700"
      }
    }
  ]
}
```

## Inherited values
The `inherited_value` property can be configured to make a field inherit its default value from other fields. To set a field's entire default value from another field's value, set the `default_value_path` to the field name path of the target field. When `default_value_path` is set, it'll ignore any default set on the field.
```
{
	"type": "font",
	"name": "body_font",
	"label": "Body font",
	"load_external_fonts": true,
	"default": {
		"font": "Merriweather",
		"font_set": "GOOGLE",
		"variant": "700",
		"color": "#000",
		"size": "16"
	}
},
{
	"type": "font",
	"name": "link_font",
	"label": "Link font",
	inherited_value: {
		default_value_path: "theme.body_font"
	}
},
```

For complex fields (fields whose values are objects), users can have more granularity over which properties get inherited through 'property_value_path'. Any paths referred in 'inherited_value' can also include keys from a field's value for complex fields - for example, color fields have object values that contain the color itself as well as opacity. So to get a color's actual color value without the opacity, the path would end in '.color'. For example, a font field can inherit just its color from a separate color field:

```
{
  name: "secondary_color",
  type: "color",
  default: {
    color: "#C27BA0",
    opacity: 100
  },
},
{
  name: "h1_font",
  type: "font",
  default: {
    font: "Helvetica",
    size: 12,
    size_unit: "px"
  },
  inherited_value: {
    property_value_paths: {
        color: "module.secondary_color.color"
    }
  }
}
```
