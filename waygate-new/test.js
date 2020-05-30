const fs = require('fs');
const path = require('path');

const contents = require('./hold.json');
let tables = '';
contents.forEach(e => {
  const name = e.name;
  let table = `##### ${e.name}\n<table><thead>\n`

  e.headers.forEach(h => {
    table += `<th>${h}</th>`
  })
  table += '</thead><tbody>'
  e.body.forEach(b => {
    table += '<tr>'
    Object.keys(b).forEach(i => {
      table += `<td>${b[i]}</td>`
    })
    table += '</tr>'
  })
  table += '</tbody></table>'
  tables += table;
})

// fateOfTheWaygateTable = `${fateOfTheWaygateTable.replace(/ - /g, '-')}</tbody></table>`
//
fs.writeFile(path.join(__dirname, 'write.md'), tables, (err) => {
  console.log(err)
})
// let bigString = '<div>';
// contents.forEach(skill => {
//   bigString = `${bigString}<div style="border: 1px solid black; border-radius: 4px; width: 66%; margin: 12px; padding: 12px;"><h4><b>${skill.name}</b></h4><br><b>Description</b>: ${skill.description}${skill.range ? '<br><b>Range</b>: ' + skill.range : '' }${skill.use ? '<br><b>Use</b>: ' + skill.use : '' }${skill.mysticTest ? '<br><b>Mystic Test</b>: ' + skill.mysticTest : '' }${skill.effect ? '<br><b>Effect</b>: ' + skill.effect : '' }${skill.duration ? '<br><b>Duration</b>: ' + skill.duration : '' }${skill.requirements ? '<br><b>Requirements</b>: ' + skill.requirements : '' }${skill.prerequisites ? '<br><b>Prerequisites</b>: ' + skill.prerequisites : '' }</div>`;
// })
// bigString = `${bigString}</div>`

// fs.writeFile(path.join(__dirname, 'write.md'), bigString, (err) => {
//   console.log(err)
// })
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
