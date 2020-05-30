const fs = require('fs');
const path = require('path');

const contents = require('./hold.json');
// let fateOfTheWaygateTable = '<table><thead><th>Action</th><th>Duration</th><th>Effect</th></thead><tbody>';
//
// contents.forEach(e => {
//   const { action, duration, effect } = e;
//   fateOfTheWaygateTable = `${fateOfTheWaygateTable}<tr><td>${action}</td><td>${duration}</td><td>${effect}</td></tr>`
// })
//
// fateOfTheWaygateTable = `${fateOfTheWaygateTable.replace(/ - /g, '-')}</tbody></table>`
//
// fs.writeFile(path.join(__dirname, 'write.md'), fateOfTheWaygateTable, (err) => {
//   console.log(err)
// })
let bigString = '<div>';
contents.forEach(skill => {
  bigString = `${bigString}<div style="border: 1px solid black; border-radius: 4px; width: 66%; margin: 12px; padding: 12px;"><h4><b>${skill.name}</b></h4><br><b>Description</b>: ${skill.description}${skill.range ? '<br><b>Range</b>: ' + skill.range : '' }${skill.use ? '<br><b>Use</b>: ' + skill.use : '' }${skill.mysticTest ? '<br><b>Mystic Test</b>: ' + skill.mysticTest : '' }${skill.effect ? '<br><b>Effect</b>: ' + skill.effect : '' }${skill.duration ? '<br><b>Duration</b>: ' + skill.duration : '' }${skill.requirements ? '<br><b>Requirements</b>: ' + skill.requirements : '' }${skill.prerequisites ? '<br><b>Prerequisites</b>: ' + skill.prerequisites : '' }</div>`;
})
bigString = `${bigString}</div>`

fs.writeFile(path.join(__dirname, 'write.md'), bigString, (err) => {
  console.log(err)
})
// [
//   'name',
//   'description',
//   'range',
//   'use',
//   'mysticTest',
//   'effect',
//   'duration',
//   'requirements',
//   'prerequisites'
// ]
