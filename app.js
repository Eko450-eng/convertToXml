const fs = require("fs")
const XLSX = require("xlsx")
const jsontoxml = require("jsontoxml")

const workbook = XLSX.readFile("./a.xlsx")
let worksheets = {}
for (const sheetName of workbook.SheetNames){
  worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
}

// console.log(worksheets.Sheet1[1])

let index = 0;
for(const kreditor of worksheets.Sheet1){
  let fileText = jsontoxml(kreditor)
  let name = `./output/CONTACTS_${index}.xml`
  fs.writeFile(name, fileText, (err)=>{
    console.log(err)
  })
  index++
}

