d3.json("winemag-data-130k-v2.json").then(function(data) {
  var top10 = 10
  var wines = {}
  for (var i = 0; i < top10; ++i){
    // console.log(data[i])
    wines[i] = data[i]
  }
  console.log(wines)
function validateRating() {
  var form = document.getElementById("form");
  var rating = document.getElementById("rating").value;
  var errorElement = document.getElementById("error");
  console.log(rating)
  let messages = [];
  // d3.json("winemag-data-130k-v2.json").then(function(data) {
  //   wines = data
    // console.log(wines);
    wines.forEach(drinks => {
      // console.log(drinks.country)
        if (rating !== drinks.points) {
          messages.push('Rating is not valid');
        }
        if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
        }
    })
  }
})
function validateCountry() {
  var form = document.getElementById("form");
  var country = document.getElementById("country").value;
  var errorElement = document.getElementById("error");
  console.log(country)
  let messages = [];
  // d3.json("winemag-data-130k-v2.json").then(function(data) {
  //   wines = data
    // console.log(wines);
    wines.forEach(drinks => {
      // console.log(drinks.country)
      if (country !== drinks.country) {
        messages.push('Country is not valid');
      }
        if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
        }
    })
}
function validateProvince() {
  var form = document.getElementById("form");
  var province = document.getElementById("province").value;
  var errorElement = document.getElementById("error");
  console.log(province)
  let messages = [];
  // d3.json("winemag-data-130k-v2.json").then(function(data) {
  //   wines = data
    // console.log(wines);
    wines.forEach(drinks => {
      // console.log(drinks.country)
      if (province !== drinks.province) {
        messages.push('Province is not valid');
      }
        if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
        }
    })
  }
function validateRegion() {
  var form = document.getElementById("form");
  var region = document.getElementById("region").value;
  var errorElement = document.getElementById("error");
  console.log(region)
  let messages = [];
  // d3.json("winemag-data-130k-v2.json").then(function(data) {
  //   wines = data
    // console.log(wines);
    wines.forEach(drinks => {
      // console.log(drinks.country)
      if (region !== drinks.region_1 || region !== drinks.region_2) {
        messages.push('Region is not valid');
        }
        if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
        }
    })
  }
function validateVariety() {
  var form = document.getElementById("form");
  var variety = document.getElementById("variety").value;
  var errorElement = document.getElementById("error");
  console.log(variety)
  let messages = [];
  // d3.json("winemag-data-130k-v2.json").then(function(data) {
  //   wines = data
    // console.log(wines);
    wines.forEach(drinks => {
      // console.log(drinks.country)
      if (variety !== drinks.variety) {
        messages.push('Variety is not valid');
        }
        if (messages.length > 0) {
        errorElement.innerText = messages.join(', ')
        }
    })
    return false;
  }
var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}