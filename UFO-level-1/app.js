// Assign the data from `data.js` to a descriptive variable
var dates = sightings;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(dates);

  var data_filter = dates.filter(sighting => sighting.datetime === inputValue);

  console.log(data_filter)
  ;

  var datetime = data_filter.map(dates => dates.datetime);
  var city = data_filter.map(dates => dates.city);
  var state = data_filter.map(dates => dates.state);
  var country = data_filter.map(dates => dates.country);
  var shape = data_filter.map(dates => dates.shape);
  var durationMinutes = data_filter.map(dates => dates.durationMinutes);
  var comments = data_filter.map(dates => dates.comments);
  console.log(state);
   // Then, select the class
  var inputs = d3.select(".table-striped");

   // remove any  
  inputs.html("");

   // append data to the table
   for (var i = 0; i < 12; i++) {
    inputs.append("tr");
    inputs.append("td").text(datetime[i]);
    inputs.append("td").text(city[i]);
    inputs.append("td").text(state[i]);
    inputs.append("td").text(country[i]);
    inputs.append("td").text(shape[i]);
    inputs.append("td").text(durationMinutes[i]);
    inputs.append("td").text(comments[i]);
   }
});