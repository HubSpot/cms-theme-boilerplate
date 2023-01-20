const textField = {
    required: true,
    locked: false,
    help_text: "",
    inline_help_text: "",
    name: "text",
    label: "Text",
    type: "text",
    default: "Text"
};

const descriptionField = {
    required: true,
    locked: false,
    help_text: "",
    inline_help_text: "",
    name: "description",
    label: "Description",
    type: "richtext",
    default: "Description"
};

const styleGroupField = {
    "label": "Styles",
    "name": "styles",
    "type": "group",
    "tab": "STYLE",
    "children": [
      {
        "label": "Text",
        "name": "text",
        "type": "group",
        "children": [
          {
            "label": "Font",
            "name": "font",
            "type": "font"
          }
        ]
      },
      {
        "label": "Background",
        "name": "background",
        "type": "group",
        "children": [
          {
            "label": "Color",
            "name": "color",
            "type": "color"
          }
        ]
      },
      {
        "label": "Border",
        "name": "border",
        "type": "group",
        "children": [
          {
            "label" : "Border",
            "name" : "border",
            "type" : "border"
          }
        ]
      },
      {
        "label": "Corner",
        "name": "corner",
        "type": "group",
        "children": [
          {
            "label": "Radius",
            "name": "radius",
            "type": "number",
            "display": "text",
            "max": 100,
            "step": 1,
            "suffix": "px"
          }
        ]
      },
      {
        "label": "Spacing",
        "name": "spacing",
        "type": "group",
        "children": [
          {
            "label": "Spacing",
            "name": "spacing",
            "type": "spacing"
          }
        ]
      },
      {
        "label": "Alignment",
        "name": "alignment",
        "type": "group",
        "children": [
          {
            "label": "Alignment",
            "name": "alignment",
            "type": "alignment",
            "alignment_direction": "HORIZONTAL"
          }
        ]
      }
    ]
  }

export { textField, descriptionField, styleGroupField };