//function that generate markdown for README

function generateMarkdown(data) {
  return `
# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#Credits)
* [License](#license)
#Motivation
# Installation
*The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Description
${data.Description}
# Usage
*In order to use this app, ${data.Usage}
#GitHub/Username
*Your Github or Username Input
${data.Username} : ${data.Email}.
# License 
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
`
}




module.exports = generateMarkdown;
