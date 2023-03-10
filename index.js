// Requirements to run README Generator
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown");

// Questions to populate README
const questions = [
  {
    type: "input",
    message: "Name the title of your README",
    name: "title",
  },

  {
    type: "input",
    message: "brief description for your project",
    name: "description",
  },
  {
    type: "input",
    message: "Provide usage instructions",
    name: "usage",
  },
  {
    type: "input",
    message: "are there installation instructions for your README",
    name: "installation",
  },
  {
    type: "input",
    message: "Write your test instructions for your README",
    name: "test",
  },
  {
    type: "input",
    message: "Write your contribution guidelines for your README",
    name: "contribution",
  },
  {
    type: "list",
    message: "Choose a license",
    name: "license",
    choices: [
      "None",
      "Apache_License 2.0",
      "GNU GPL v3",
      "MIT",
      "Boost Software icense 1.0",
      "GNU AGPL v3.0",
      "GNU LGPL v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    message: "Enter your Github username",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "email",
  },
];

// // TODO: Create a function to initialize app
function init() {
  function responseHandler(response) {
    const markdownFile = generateMarkdown(response);

    fs.writeFile(__dirname + "/dist/README.md", markdownFile, "utf8")
      .then(() => console.log("README Successfully Created!"))
      .catch((err) => console.log(`Error: ${err}`));
  }

  inquirer.prompt(questions).then(responseHandler);
}

init();
