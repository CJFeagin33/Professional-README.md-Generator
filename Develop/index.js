// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// function that is called after inquirer is answered. uses data from inquirer.
function readMeTemplate(data) {
  let licenseBadge = '';
  // 'None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'
  if (data.projectLicense == 'Apache License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (data.projectLicense == 'GNU General Public License v3.0') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (data.projectLicense == 'MIT License') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (data.projectLicense == 'BSD 2-Clause "Simplified" License') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  } else if (data.projectLicense == 'BSD 3-Clause "New" or "Revised" License') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (data.projectLicense == 'Boost Software License 1.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (data.projectLicense == 'Creative Commons Zero v1.0 Universal') {
    licenseBadge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (data.projectLicense == 'Eclipse Public License 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
  } else if (data.projectLicense == 'GNU Affero General Public License v3.0') {
    licenseBadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
  } else if (data.projectLicense == 'GNU General Public License v2.0') {
    licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else if (data.projectLicense == 'GNU Lesser General Public License v2.1') {
    licenseBadge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)';
  } else if (data.projectLicense == 'Mozilla Public License 2.0') {
    licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (data.projectLicense == 'The Unlicense') {
    licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  }
  // return string of the desired README.md. Uses Template Literal in order to fill README.md with custom values.
  return `# ${data.projectTitle}

## Badges

${licenseBadge}
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Click on the above license badge to be taken to the license link in your current browser!

## Description

This web application is a ${data.projectTitle}. ${data.projectDescription}

Here is an image of what the project looks like. ![markdown logo](./TerminalAndReadmeScreenshot.png)

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
    fs.writeFile('./README.md', readMeGenerated, (err) =>
      err ? console.log(err) : console.log('README.md successfully generated!')
    )
  })
