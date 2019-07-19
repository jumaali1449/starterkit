export const schema = {
	"type": "object",
	"properties": {
	  "users": {
		"type": "array",
		"minItems": 3,
		"maxItems": 5,
		"items": {
		  "type": "object",
		  "properties": {
			"id": {
			  "type": "number",
			  "unique": true,
			  "minimum": 1
			},
			"firstName": {
			  "type": "string",
			  "chance": "name.firstName"
			},
			"email": {
			  "type": "string",
			  "chance": "internet.email"
			}
		  },
		  "required": ["id", "firstName",  "email"]
		}
	  }
	},
	"required": ["users"]
  }
