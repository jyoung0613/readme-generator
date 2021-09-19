// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'welcome',
            message: 'Welcome to my question driven README.md Generator. \n I\'m going to ask you some questions that will help me complete your customized README.md. \n Let\'s get started!  Press ENTER to continue.',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project, exactly as it appears on GitHub?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Input your project description',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Input your project installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Input your project usage information.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Input your project contribution guidelines.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Input your project test instructions.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license applies to your project?',
            choices: ['Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'CDDL-1.0', 'EPL-2.0', 'GPL-2.0', 'LGPL-3.0', 'MIT', 'MPL-2.0', 'N/A'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.',
        },
    ]);
};

// TODO: Create a function to write README file // created file asynchronously
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((answers) => writeFileAsync('./output/README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote README.md to your output folder'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
