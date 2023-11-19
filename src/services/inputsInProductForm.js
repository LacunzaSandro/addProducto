const inputs = [
	{
		id: 1,
		name: "name",
		type: "text",
		placeholder: "Enter a Name",
		errorMessage:
			"Should be 3-30 and without special character.",
		label: "Name",
		pattern: "^[A-Za-z0-9 ]{3,30}$",
		required: true
	},
	{
		id: 2,
		name: "description",
		type: "text",
		placeholder: "Enter a description",
		errorMessage:
			"Should be 10-100 character",
		label: "Description",
		pattern: "^[A-Za-z0-9 ]{10,100}$",
		required: true
	},
	{
		id: 3,
		name: "price",
		type: "text",
		placeholder: "Enter Price",
		errorMessage:
			"Should be a number between 1-1000000,00 character",
		label: "Description",
		pattern: "^(1000000(\\.00?)?|[1-9]\\d{0,5}(\\.\\d{1,2})?|0\\.\\d{1,2})$",
		required: true
	}
];

export default inputs;