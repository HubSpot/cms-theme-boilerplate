import { spacingControlls, backgroundControlls } from '../../fields/modules.mjs';

const fields = (fieldOptions) => {
	return [
	    // content group starts 
	    [
			{
			 "type": "richtext",
			 "id": "d7780957-71b1-9366-6e75-344e05e4556b",
			 "label": "Rich text",
			 "name": "richtext_field",
			 "default": "<h2>What is Lorem Ipsum?</h2>\n<p><strong>Lorem Ipsum</strong><span>&nbsp;</span>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<span>&nbsp;</span></p>"
			}
		   ],// content group ends 
		{
			"label": "Styles",
			"name": "styles",
			"type": "group",
			"tab": "STYLE",
			"children": [
				backgroundControlls,
				spacingControlls
				]
		}
	]
};

export default fields;