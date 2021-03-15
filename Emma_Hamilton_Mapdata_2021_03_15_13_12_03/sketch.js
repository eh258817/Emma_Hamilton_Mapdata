function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

anychart.onDocumentLoad(function() {
  // set theme referenced in the scripts section from 
  // https://cdn.anychart.com/themes/latest/coffee.min.js
  anychart.theme(anychart.themes.coffee);
  // create a chart and set the data
  var chart = anychart.column([
    ["Winter", 10],
    ["Spring", 7],
    ["Summer", 4],
    ["Fall", 8]
  ]);
  // set chart title
  chart.title("Seasonal Depression Proression ");
  // set chart container and draw
  chart.container("container").draw();
});