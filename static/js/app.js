// import data from data.js
const tableData = data; 

// Reference the html table using d3
var tbody = d3.select("tbody");

// Build a function to iterate through UFO data and append to table row
function buildTable(data) {
    // Clear the table of data by building with empty string
    tbody.html("");
    data.forEach((dataRow) => {
        // Find <tbody> tag and add a table row (tr)
        let row =tbody.append("tr");
        // Loop through each field in dataRow argument. These fields will become table data with <td>. Object.values tells JS to reference one object from array. dataRow argument
        // tells JS we want values to go into the dataRow. forEach(val) specifies that we want object per row
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            //extract only the value 
            cell.text(val);
        }
        );
    });
}