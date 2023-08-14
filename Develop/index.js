// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

function readMeTemplate(data) {
  return `# ${data.projectTitle}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


## Description

This web application is a ${data.projectTitle}. * Insert Project Description Here *

  Throughout the project I worked with various functions and programs in order to achieve proper navigation and functionality.I also used JQuerry in order to streamline my script.js file.I worked in html and js in order to complete this application.Starting code was provided by my bootcamp.
## Table of Contents

  - [Badges](#badges)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

## Installation

This entire project was made in Visual Studio.We were provided starter code for the application from the UCSD Extended Studies Coding Bootcamp, which I built upon as I finished the application. 

## Usage

The final product looks like this:

<img src="/Assets/05-third-party-apis-homework-demo.gif">

  You can see the date is being displayed on the top of the page. If the user wishes to add something to their day planner, they can simply type what they want in the time slot and press the save button. This will save the user input into localstorage where they will remain even if the page is refreshed.

  Here is a link to the completed web application:

  https://cjfeagin33.github.io/Calendar-Application/

  ## How to Contribute

  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

  ## Tests

  Go the extra mile and write tests for your application. Then provide examples on how to run them here.

  ## Credits

  This application was built with assistance from my peers and instructors within the UCSD Extended Studies Coding Bootcamp.

  ## License

  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).`
}
  // TODO: Create an array of questions for user input
  inquirer
  .prompt([
  {
    type: 'input',
  message: "What is your your project's title?",
  name: 'projectTitle',
    },
  {
    type: 'checkbox',
  message: 'What languages do you know?',
  name: 'stack',
  choices: ['HTML', 'CSS', 'JavaScript', 'MySQL']
    },
  {
    type: 'list',
  message: 'What is your preferred method of communication?',
  name: 'contact',
  choices: ['email', 'phone', 'telekinesus'],
    },
  ]).then(data => {
    let readMeGenerated = readMeTemplate(data)
    console.log(readMeGenerated)

    fs.writeFile('./dist/README.md', readMeGenerated, (err) =>
      err ? console.log(err):console.log('Success!')
    )
  })

//   // TODO: Create a function to write README file
//   function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
//   function init() { }

// // Function call to initialize app
//   init();
