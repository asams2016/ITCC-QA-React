# DataParser.js

## Summary: 
This file manages parsing of the files. File parser depends on the various
components to it which decides whether to parse the file depending on the 
format of the file. File types like .xls, .csv or .xlsx are parsed while other types
are uploaded as it is.

## Function: 
`constructor()` is a default constructor which holds the dafult state for whether the file has been updated or not.
Deafult value of `hasFile` is set as `false`.

File parser handles the parsing of the file. Parsing depends on the file type such as .csv, .xls and .xlsx.
Function `parseData()` handle file parsing, it fetches the files to be parsed from the input element. 
```
if (file.name.includes('.csv')){
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(file, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: this.updateData
});
```
parses incoming `.csv` file types. Papa parser is being used for parsing `.csv` files here.

```
else if(file.name.includes('.xlsx') || file.name.includes('.xls')){	
    const reader = new FileReader();
    reader.onload = (e) => {
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, {type:'binary'});
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const conversion = XLSX.utils.sheet_to_json(ws);
};
```

parses `.xlsx` or `.xls` file types. File reader is used for parsing files of this type.
`hasFile` variable is updated reflecting the changes made in parsing.

`updateFileName()` changes the text of the file upload button depending on whether file update has been completed.

`updateData()` sends the data to the parent component and uses upload function as props to update the data in the component.

Using the `render()` function, a disabled text box is created which changes its text based on the file update.

## Common Issues: 
None