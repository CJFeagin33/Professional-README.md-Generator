// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// function that is called after inquirer is answered. uses data from inquirer.
function readMeTemplate(data) {
  // return string of the desired README.md. Uses Template Literal in order to fill README.md with custom values.
  return `# ${data.projectTitle}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Description

This web application is a ${data.projectTitle}. ${data.projectDescription}

## Table of Contents

  - [Badges](#badges)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

## Installation

In order to install the propper programs necessary for this application, ${data.projectInstallation}

## Usage

In order to use this program, ${data.projectUsage}

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can create a fork the corresponding GitHub Repo at https://github.com/${data.gitHubUsername}/. The repo name should be the same as the project title. For any other questions, feel free to reach out to me at ${data.userEmail}

## Tests

In order to test this program, ${data.projectTest}

## Credits

${data.projectCredits}

## License

${data.projectLicense} is this project's license. For more information about licenses, please visit https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository`
}


// Creates an array of questions for user input in order to populate the README.md template
inquirer
  .prompt([
    {
      type: 'input',
      message: "What is your your project's title?",
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: "Write a description for your project.",
      name: 'projectDescription',
    },
    {
      type: 'input',
      message: "How do you install the necessary progams to run your application?",
      name: 'projectInstallation',
    },
    {
      type: 'input',
      message: "How do you use this program?",
      name: 'projectUsage',
    },
    {
      type: 'input',
      message: "What is your GitHub Username?",
      name: 'gitHubUsername',
    },
    {
      type: 'input',
      message: "What is your email address associated with this project?",
      name: 'userEmail',
    },
    {
      type: 'input',
      message: "How do you test this program?",
      name: 'projectTest',
    },
    {
      type: 'input',
      message: "To whom do you acredit this project?",
      name: 'projectCredits',
    },
    {
      type: 'list',
      message: 'What license does this program use?',
      name: 'projectLicense',
      choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },

    // then take the data from the inquirer, run it through the readMeTemplate function and let the newly creaded string be saved to the readMeGenerated variable. 
  ]).then(data => {
    let readMeGenerated = readMeTemplate(data);

    // writes the file to the dist folder as a .md, using the readMeGenerated as its content.
    fs.writeFile('./dist/README.md', readMeGenerated, (err) =>
      err ? console.log(err) : console.log('README.md successfully generated!')
    )
  })
