# DynamicTable.js

## Summary: 
This page allows users to manage the tables containing their information.

## Function: 
Following constructor contains the initial state of the values in the table
```
constructor(props){
    super(props);
    this.state = {
        dataSources: [{
            hostname: "",
            environment: "",
            fullPath: "",
            timeZone: "",
            volPerDay: ""
        }],
        numSources: 1
    }
}
```

`addRow()` adds a row to already existing table, `numsources` increments the number of sources by 1.

`removeRow()` removes a row from an already existing table, `removeRow` is a three step process, which involves creating a copy of data,
removing the data from the deleted row and finally updating the state of the table.
`data.splice(index,1);` removes the data from the deleted row.

`getData()` fetches the data from the table.

`render()` renders the tables and creates an array for individual rows.

## Common Issues: 
None