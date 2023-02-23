// function to generate markdown for README
const renderLicenseBadge=(license) =>{
  if(license !== "None"){
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

const renderLicenseLink = (license) =>{
  if(license !== "None"){
    // return `\n* [License](#license)\n`;
    return `[License](#license)\n`;
  }
  return "";
}
// ${renderLicenseLink(data.license)}
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  

  ### Description
  ${data.description}
  
  ### Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contribution)
  * [Test](#tests)
  * [Questions](#questions)

  ### Installation

  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`

  ### Usage
  ${data.usage}

  ### License
  ${renderLicenseBadge(data.license)}

  ### Contributing
  ${data.contributing}

  ### Tests

  To run tests, run following command:
  \`\`\`
  ${data.test}
  \`\`\`

  ### Questions

  If you have any questions about the repo open an issue or contact me directly at ${data.email}.

  You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
