const backgroundControlls = {
      // Background controlls starts
      "label": "Background Controlls",
      "name": "background_controlls",
      "type": "group",
      "children": [
         {
           "type": "gradient",
           "id": "f451a25d-8f1a-b01b-e405-e3051acb6491",
           "label": "Gradient",
           "name": "gradient_field",
           "default": {
            "colors": [
             {
              "color": {
               "r": 255,
               "g": 255,
               "b": 255,
               "a": 0
              }
             },
             {
              "color": {
               "r": 0,
               "g": 0,
               "b": 0,
               "a": 0
              }
             }
            ],
            "side_or_corner": {
     "verticalSide": "BOTTOM",
     "horizontalSide": null
    }
           }
         },
         {
           "type": "backgroundimage",
           "id": "ad86dee6-fff8-f88f-cbd0-e0d931200b21",
           "label": "Background image",
           "name": "backgroundimage_field"
          }
          
        ]
      // Background controlls ends
    
  }

const spacingControlls = {
  
      // spacing group starts
      "label": "Spacing Controlls",
      "name": "spacing_controlls",
      "type": "group",
      "children": [
         {
           "type": "spacing",
           "id": "b38d0190-9bde-6955-b2cd-19acdb9a0752",
           "label": "Spacing for Desktop",
           "name": "spacing_for_desktop",
           "default": {
            "padding": {
              "top": {
               "value": 80,
               "units": "px"
              },
              "bottom": {
               "value": 80,
               "units": "px"
              },
              "left": {
               "value": null,
               "units": null
              },
              "right": {
               "value": null,
               "units": null
              }
             }
           }
          },
          {
           "type": "spacing",
           "id": "b38d0190-9bde-6955-c983-19acdb9a0752",
           "label": "Spacing for Mobile",
           "name": "spacing_for_Mobile",
           "default" : {
             "padding": {
              "top": {
               "value": 40,
               "units": "px"
              },
              "bottom": {
               "value": 40,
               "units": "px"
              },
              "left": {
               "value": null,
               "units": null
              },
              "right": {
               "value": null,
               "units": null
              }
             }
           }
          }
        ]// spacing group starts
     
 
}


export {backgroundControlls, spacingControlls };