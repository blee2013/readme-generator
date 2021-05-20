// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }
  return `![github](https://img.shields.io/badge/License-${license}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  return `* Licensed through the [${license} License]('LICENSE')`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License & Copyrights 
  ${renderLicenseLink(license)}
`;
}

function renderTestingSection(tests) {
  if (!tests) {
    return '';
  }
  return `## Screenshots/Tests 
  * SCREENSHOTS AND VIDEO LINKS GO HERE :)`
  }



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let date = new Date();

return `# ${data.title}
${renderLicenseBadge(data.license)}

# Description
* ${data.description}

## Install & Run with
* ${data.installation}

## Built with
* ${data.languages}

## Contributions 
* ${data.name} => find me on [GitHub](https://github.com/${data.github})  
Email me at ${data.email}
* ${data.contributions}
  
${renderTestingSection(data.tests)}
${renderLicenseSection(data.license)}
* ©️${date.getFullYear()} ${data.github}, Inc
  `;
}

module.exports = generateMarkdown;
