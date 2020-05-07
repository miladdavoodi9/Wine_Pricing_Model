function buildMetadata(sample) {
  d3.json("winemag-data-130k-v2.json").then(data => {
    var metaData = data[0];
    console.log(metaData.points);
//     var resultArray = metaData.filter(metaDataObj => metaDataObj.id == sample);
//     console.log("resultArray: " + resultArray);
//     var result = resultArray[0];
//     var panel = d3.select("#sample-metadata");
//     panel.html("");
//     Object.entries(result).forEach(([key, value]) => {
//       panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
//     });
  });
};

//function to initiate plots
function init() {
    d3.json("winemag-data-130k-v2.json").then(function(data) {
      var wines = data;
      console.log(wines);
      //grab a reference to the dropdown select
      var selector = d3.select("#selDataset");

      //use the list of sample names to populate the select options
      wines.forEach(wine => {
        selector
          .append("option")
          .text(wine.points)
          .property("value", wine);
      });

      //use the first sample from list to build the initial plots
      const firstSample = wines[0].points;
      buildMetadata(firstSample);
    });
}

// function optionChanged(newSample) {
//     console.log(`sample changed to ${newSample}`);
//     //fetch new data and build charts
//     buildMetadata(newSample);
// }

init();