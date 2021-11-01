const hotelBlock = (hotel, id) => {
  document.getElementById(
    "display-hotels"
  ).innerHTML += `<div class="grid-item featured-rooms">
                <div class="image-wrap">
                  <img
                    class="room-image"
                    src="${hotel.image}"
                    alt=""
                  />
                </div>
    
                <div class="hotel-info-wrap">
                  <h5 class="room-name">${hotel.name}</h5>
                  <span class="room-price"
                    >₹ ${hotel.price} / <span class="per-night">Per Night</span></span
                  >
                  <p class="paragraph">
                  ${hotel.details}
                  </p>
                  <p class="location">
                  ${hotel.location}
                  </p>
                  <div class="hotel-rating">
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star rating"></i>
                    <i class="fas fa-star-half rating"></i>
                  </div>
                  <a href="./Hotel1.html?hotel=${hotel.id}" class="btn-rooms-btn"
                    >Book Now &rarr;</a
                  >
                </div>
              </div>`;
};
hotels.map((hotel, id) => {
  hotelBlock(hotel, id);
});

function filters_hotels() {
  filters.destination = document
    .getElementById("destination")
    .value.toLowerCase();

  filters.availableOn = document.getElementById("available-date").value;

  filteredHotels = hotels.filter((hotel) => {
    let filter_1 = false;
    let filter_2 = false;
    let filter_3 = false;
    if (
      filters.destination == "" ||
      filters.destination == " " ||
      hotel.location === filters.destination
    ) {
      filter_1 = true;
    }
    let date_1 = new Date(filters.availableOn).getDate();
    let date_2 = new Date(hotel.dates).getDate();
    console.log(date_1, date_2, hotel.name)
    if (filters.availableOn) {
      if (date_1 === date_2) {
        filter_2 = true;
      } else {
        filter_2 = false;
      }
    } else {
      filter_2 = true;
    }

    if (filters.stars.length != 0) {
      if (filters.stars.includes(hotel.star)) {
        filter_3 = true;
      } else {
        filter_3 = false;
      }
    } else {
      filter_3 = true;
    }
    // if(filters.stars.length!=0){
    //   return filter_1&&filter_3
    // }
    // else if(filters.availableOn){
    //   return filter_1&&filter_2;
    // }
    // else{
    //   return filter_1
    // }
    return filter_1 && filter_2 && filter_3;
  });
  document.getElementById("display-hotels").innerHTML = "";

  if (filteredHotels.length !== 0) {
    filteredHotels.map((hotel) => {
      hotelBlock(hotel);
    });
  } else {
    document.getElementById("display-hotels").innerHTML =
      " <h3>no hotels found for the mentioned destination</h3>";
  }
}

document.getElementById("top-filter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  filters_hotels();
});

for (i = 1; i <= 5; i++) {
  $("#star-cont").append(`<div>
                  <label>
                    <input id="star-${i}" value="${i}" type="checkbox" name="" /><span class="list">
                      ${i} Star</span
                    >
                  </label>
                </div>`);
  $(`#star-${i}`).click((e) => {
    if (e.target.checked) {
      filters.stars.push(e.target.value);
    } else {
      filters.stars = filters.stars.filter((stars) => {
        if (stars == e.target.value) {
          return false;
        }
        return true;
      });
    }
    filters_hotels()
  });
}


