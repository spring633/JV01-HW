// from data.js
var tableData = data;


// Select the filter table button 


var tbody = d3.select("tbody");
// remove any tbody from the html
var rTable = d3.select("body").selectAll("td").remove();

function handleClick() {

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
console.log(inputValue);
console.log(tableData);
//filtering the table
var filteredData = tableData.filter(date => date.datetime === inputValue);
console.log(filteredData);

// append the filter date array to table
filteredData.forEach((UFOsighting) => {
   var row = tbody.append("tr");
   Object.entries(UFOsighting).forEach(([key, value]) => {
   var cell = row.append("td");
   cell.text(value);
   console.log(cell);
});
});
console.log(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);


