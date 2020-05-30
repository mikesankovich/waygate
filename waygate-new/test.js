const fs = require('fs');
const path = require('path');

const contents = require('./hold.json');
let fateOfTheWaygateTable = '<table><thead><th>Roll</th><th>Name</th><th>Description</th><th>Effect</th></thead><tbody>';

contents.forEach(e => {
  const { roll, effect, description, name } = e;
  fateOfTheWaygateTable = `${fateOfTheWaygateTable}<tr><td>${roll}</td><td>${name}</td><td>${description}</td><td>${effect}</td></tr>`
})

fateOfTheWaygateTable = `${fateOfTheWaygateTable.replace(/ - /g, '-')}</tbody></table>`

fs.writeFile(path.join(__dirname, 'temp.md'), fateOfTheWaygateTable, (err) => {
  console.log(err)
})
