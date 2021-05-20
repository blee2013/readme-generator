// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const inqquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the Project Title?',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter title project');
                    return false;
                }
            }
        },
        {
            name: 'description',
            type: 'input',
            message: 'Please enter a description for the project. (required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("Please enter the project's description.")
                }
            }
        },
        {
            name: 'installation',
            type: 'input', 
            message: 'Please enter installation directions.',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('installation directions are required.');
                    return false;
                }
            }
        },
        {
            name: 'languages',
            type: 'checkbox',
            message: 'What technologies are used? (Check all that apply)',
            choices: ['html', 'css', 'JavaScript', 'ES6', 'node', 'bootstrap', 'other'],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('You must select as least one technology.');
                    return false;
                }
            }
        },
        {
            name: 'license',
            type: 'checkbox',
            message: 'What type of license is used?',
            choices: ['MIT', 'Apache', 'PD/CC0', 'MPL', 'GPL','AGPL', 'other'],
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('You must select one license.');
                    return false;
                }
            }    
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Are contributions from others allowed?',
            default: false,
        },
        {
            type: 'input', 
            name: 'contribute',
            message: 'How are others allowed to contribute?',
            when: ({ confirmContribute}) => {
                if (confirmContribute) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'tests',
            message: 'Would you like to include a test?',
            default: true,
        },
        {
            type: 'name',
            name: 'input',
            message: 'What is your name? (reqiured)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            name: 'github',
            type: 'input', 
            message: 'Please enter your github user name. (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Your github user name is required.');
                    return false;
                }
            }
        },
        {
            name: 'email',
            type: 'input', 
            message: 'Please enter your email address. (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Your email address is required.');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if (err) {
            throw new Error(err);
            // console.log(err);
            return;
        }
        console.log(`
        README.md has been created! See it here => ${fileName}`);
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log(`

    README.md GENERATOR`
    
    );
    questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(dataToWrite => {
        writeToFile('./dist/README.md', dataToWrite);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();


