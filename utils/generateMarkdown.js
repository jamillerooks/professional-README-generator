// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	const badges = {
		mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
		isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
		gnuplv3:
			'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
	};
	return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
// 	const licenseLinks = {
// 		mit: '[MIT](https://opensource.org/licenses/MIT)',
// 		isc: '[ISC](https://opensource.org/licenses/ISC)',
// 		GNUGPLv3: '[GPL v3](https://www.gnu.org/licenses/gpl-3.0)',
// 	};
// 	return licenseLinks[license];
// 	//
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
	if (license) {
		return `
${renderLicenseBadge(license)}

Licensed under the ${license} license`;
	} else {
		return 'This project is not licensed under anything.';
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
	const linkLicense = renderLicenseSection(data.license);
	// const linkBadge = renderLicenseBadge(data.license);
	//  console.log(linkLicense)
	return `
# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Github](#github)
  - [Email](#email)

  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
    
  ## Credits
  ${data.credits}
    
  ## License
${linkLicense}

    
  ##Tests
  ${data.tests} A video link to the file: 'https://drive.google.com/file/d/1Gf-pZTW3rf9O1d273awPFeg9auajLl_A/view'
    
  ##Contribute
  ${data.contribute}
  
  ## Github
  ${data.github}
    
  ## Email
  ${data.email}`;
}

module.exports = generateMarkdown;
