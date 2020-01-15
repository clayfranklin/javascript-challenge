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
   

  var info = dates.filter(sighting => sighting.datetime === inputValue);

  // console.log(info);

// //   First, create an array with just the age values
  var dates = info.map(dates => dates);
  console.log(dates)
  //  var datetime = info[1]['datetime']
  // //  var datetimes = Object.values(info)
  //  var city = info[1]['city']
  //  var state = info[1]['state']
  //  var country = info[1]['country']
  //  var shape = info[1]['shape']
  //  var durationMinutes = info[1]['durationMinutes']
  //  var comments = info[1]['comments']

   var datetimes =Object.values(info)
   var datetime = Object.values(datetimes[0])
    // var city = info(info['city']
    // var state = info[1]['state']
    // var country = info[1]['country']
    // var shape = info[1]['shape']
    // var durationMinutes = info[1]['durationMinutes']
    // var comments = info[1]['comments']
   console.log(datetimes)
   console.log(datetime)


   // Then, select the class
   var inputs = d3.select(".table-striped");

   // remove any  
   inputs.html("");

   // append data to the table
   inputs.append("td").text(`${datetime}`);
   inputs.append("td").text(` ${city}`);
   inputs.append("td").text(` ${state}`);
   inputs.append("td").text(` ${country}`);
   inputs.append("td").text(`${shape}`);
   inputs.append("td").text(`${durationMinutes}`);
   inputs.append("td").text(`${comments}`);
});
