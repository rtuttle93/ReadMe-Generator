function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
* [Description](#description)
* [Installation](#installation-instructions)
* [Usage Information](#usage-information)
* [Contribution Guidelines](#contuibution-guidelines)
* [License](#license) 
* [Test instructions](#test-instructions)
* [Questions](#questions)
    
## Description
${data.description}
## Installation Instructions
${data.installation}
## Usage Information
${data.usage}
## Contuibution Guidelines
${data.contribution}
## License
[![license]
## Test Instructions
${data.test}
## Questions
<p>Contact Me</p>
### GitHub
GitHub:
http://github.com/${data.username}
### Email
${data.email}`
}

module.exports = generateMarkdown;