//function that generate markdown for README

function generateMarkdown(data) {
  return `
# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Table of Contents 
#Motivation
# Description
${data.Description}
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#Credits)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
In order to use this app, ${data.Usage}
# License
${renderLicenseBadge(license)} 
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Tests
The following is needed to run the test: ${data.Tests}
# Questions
If you have any questions about the repo, open an issue or contact ${data.Username} directly at : ${data.Email}.
`
}

module.exports = generateMarkdown;
