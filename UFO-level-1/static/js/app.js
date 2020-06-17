// from data.js
let tableData = data;

// console.log(data);

// Get a reference to the table body
let tbody = d3.select("tbody");

// Loop through data and console.log each UFO report object
// data.forEach(function(UFOreport) {
//   console.log(UFOreport);
// });

// Use d3 to append one table row `tr` for each UFO report object
// data.forEach(function(UFOreport) {
//   console.log(UFOreport);
//   let row = tbody.append("tr");
// });

// Use `Object.entries` to console.log each UFO report value
// data.forEach(function(UFOreport) {
//   console.log(UFOreport);
//   let row = tbody.append("tr");

//   Object.entries(UFOreport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// Use d3 to append 1 cell per UFO report value 
// data.forEach(function(UFOreport) {
//   console.log(UFOreport);
//   let row = tbody.append("tr");

//   Object.entries(UFOreport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value in the UFO report object
//     let cell = row.append("td");
//   });
// });

// Use d3 to update each cell's text with UFO report values 
data.forEach(function(UFOreport) {
  console.log(UFOreport);
  var row = tbody.append("tr");
  Object.entries(UFOreport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the UFO report object
    var cell = row.append("td");
    cell.text(value);
  });
});


// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#datetime");

  // Get the value property of the input element
  let inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

  let filteredData = tableData.filter(UFO => UFO.datetime === inputValue);

  console.log(filteredData);

}



// // Getting a reference to the "Filter Table" button on the page
// let button = d3.select("#filter-btn");

// // Getting a reference to the input element on the page
// let inputField = d3.select("#datetime");

// // This function is triggered when the button is clicked
// function handleClick() {
//   console.log("A button was clicked!");

//   // We can use d3 to see the object that dispatched the event
//   console.log(d3.event.target);
// }

// // We can use the `on` function in d3 to attach an event to the handler function
// button.on("click", handleClick);

// // You can also define the click handler inline
// button.on("click", function() {
//   console.log("Hi, a button was clicked!");
//   console.log(d3.event.target);
// });

// // Event handlers are just normal functions that can do anything you want
// button.on("click", function() {
//   d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
// });

// // Input fields can trigger a change event when new text is entered.
// inputField.on("change", function() {
//   var newText = d3.event.target.value;
//   console.log(newText);
// });
