const fs = require('fs');

const contents = require('./hold.json');
let fateOfTheWaygateTable = '<table><thead><th>Roll</th><th>Effect</th><th>Notes</th></thead><tbody>';

contents.aetherContaminationTable.rows.forEach(e => {
  const { roll, effect, description, notes } = e;
  fateOfTheWaygateTable = `${fateOfTheWaygateTable}<tr><td>${roll}</td><td>${effect}</td><td>${notes || ''}</td></tr>`
})

fateOfTheWaygateTable = `${fateOfTheWaygateTable.replace(/ - /g, '-')}</tbody></table>`

fs.writeFile('./temp.md', fateOfTheWaygateTable, (err) => {
  console.log(err)
})
