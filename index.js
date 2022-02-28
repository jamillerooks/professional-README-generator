// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
function init() {
	inquirer
		.prompt([
			{
				type: 'input',
				name: 'title',
				message: 'What is title of your project?',
			},
			{
				type: 'input',
				name: 'description',
				message: 'Provide a short description of your project?',
			},
			{
				type: 'input',
				name: 'installation',
				message:
					'What installation instructions should users follow to install your application?',
			},
			{
				type: 'input',
				name: 'usage',
				message: 'How to use this application?',
			},
			{
				type: 'input',
				name: 'credits',
				message: 'List your collabortors or team members.',
			},
			{
				type: 'list',
				name: 'license',
				message: 'License?',
				choices: ['MIT', 'ISC', 'GNUPLv3'],
				filter(val) {
					return val.toLowerCase();
				},
			},
			{
				type: 'input',
				name: 'contribute',
				message: 'How can users contribute to this project?',
			},
			{
				type: 'input',
				name: 'tests',
				message: 'Provide a demonstration of this app?',
			},
			{
				type: 'input',
				name: 'github',
				message: 'Enter your github username?',
			},

			{
				type: 'input',
				name: 'email',
				message: 'Enter your email address?',
			},
		])
		.then((answers) => {
			const markdownPageContent = generateMarkdown(answers);

			// TODO: Create a function to write README file
			fs.writeFile('README.md', markdownPageContent, (err) =>
				err ? console.log(err) : console.log('Successfully created README.md!')
			);
		});
}

// Function call to initialize app
init();
