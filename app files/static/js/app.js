// PULL IN TABLE DATA
// Assign the data from `data.js` to a descriptive variable
// data file is imported in the html file
var tableData = data;

// ==================================================================================
// BUTTON EVENT LISTENER FUNCTION
// ==================================================================================
// INSTRUCTIONS:
//   * Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the `date/time` column to find rows that match user input.

// Class exercise used as refernce to populate table:
// 'intro to JS' / 'day 3' / 'activities' / '09-par_form_filter'

// use d3 to Select the 'filter table' button by css ID
var submit = d3.select("#filter-btn");

// on click event listener function
submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the datetime input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get and log the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    
    // filter the table and log with respect to input datetime value
    var filteredData = tableData.filter(day => day.datetime === inputValue);
    console.log(filteredData);

    // =====================================================================
    // TABLE OUTPUT
    // =====================================================================
    // INSTRUCTIONS:
    // * Using the UFO dataset provided in the form of an array of JavaScript objects, 
    // write code that appends a table to your web page 
    // and then adds new rows of data for each UFO sighting.

    // Class exercise used as refernce to populate table:
    // 'intro to JS' / 'day 3' / 'activities' / '03-evr_d3_table'

    // Get a reference to the table body in 'index.html'
    var tbody = d3.select("tbody");
    // reset table results
    d3.selectAll("tbody > *").remove();

    // Console.log whole data set from data.js
    // console.log(tableData);

    // Step 1: Loop Through `data` and console.log each sighting report object
    filteredData.forEach(function(sighting) {
        console.log(sighting);
        // Step 2:  Use d3 to append one table row `tr` for each sighting report object
        var row = tbody.append("tr");

        // Step 3:  Use `Object.entries` to console.log each sighting report value
        Object.entries(sighting).forEach(function([key, value]) {
            // console.log(key, value);
            // Step 4: Use d3 to Append a cell to the row for each value in the report object (datetime, city, state, country, shape, durationMinutes, comments)
            var cell = tbody.append("td");
            // Step 5: Use d3 to update each cell's text with report values (datetime, city, state, country, shape, durationMinutes, comments)
            cell.text(value);
        });
    });
});

