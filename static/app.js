const rating = document.getElementById("rating");
const country = document.getElementById("country");
const province = document.getElementById("province");
const region = document.getElementById("region");
const variety = document.getElementById("variety");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

d3.json("winemag-data-130k-v2.json").then(function(data) {
  wines = data
  console.log(wines);
  let messages = [];
  wines.forEach(drinks => {
    // console.log(drinks.country)
    function validateRating() {
      if (rating !== drinks.points) {
        console.log(rating)
        message.push('Rating is not valid');
      }
    }
    function validateCountry() {
      if (country !== drinks.country) {
        message.push('Country is not valid');
      }
    }
    function validateProvince() {
      if (province !== drinks.province) {
        message.push('Province is not valid');
      }
    }
    function validateRegion() {
      if (region !== drinks.region_1 || region !== drinks.region_2) {
        message.push('Region is not valid');
      }
    }
    function validateVariety() {
      if (variety !== drinks.variety) {
        message.push('Variety is not valid');
      }
    }
    })
  })