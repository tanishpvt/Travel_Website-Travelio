// this file is for Hotel1.html

var url = new URL(window.location.href);
var hotelId = url.searchParams.get("hotel");

// the detals tabs transition
$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

$("#hotel1_id").attr("src", hotels[hotelId].video);

hotels[hotelId].images.map((imgLink) => {
  document.getElementById(
    "hotel1_images-container"
  ).innerHTML += `<div id="first-image-div" class="row my-row">
  <div class="image-wrap">
      <img class="room-image" src="${imgLink}" alt="">
  </div>
  </div>`;
});


$("#booking_details").html(`<div class="text-start">
                                <span id="hot-name">${hotels[hotelId].name}</span>
                                <br>
                                <i class="fas fa-users"></i>
                                <span>King Room with Plaza Graden View</span>
                                <div class="rule">
                                    <div class="non-refund">
                                        <i class="fas fa-times"></i><span>Non-Refundable</span>
                                    </div>
                                    <div class="room-only">
                                        <i class="fas fa-check"></i><span>Room only</span>
                                    </div>
                                </div>
                                <a href="./hotel-review.html?hotel=${hotelId}" class="btn btn-yellow px-5 py-2 main-btn">Book This Now</a>
                            </div>
                            <div class="price-section">
                                <p><span>per night </span>
                                    <br>
                                <h3>₹ ${hotels[hotelId].price}</h3><span>+ ₹ 0 taxes & fees</span></p>
                            </div>`)
                            
$(".iframe_location").attr(`src`,hotels[hotelId].location_url);

$("#page2-form").html(`<div class="input-group">
                            <label for="destination" class="input-label">Destination</label>
                            <input type="text" class="input" id="destination" placeholder="City/Area/State" value="${hotels[hotelId].location}">
                        </div>
                        <div class="input-group">
                            <label for="available-date" class="input-label">Available Date</label>
                            <input type="date" class="input" id="available-date" value="${hotels[hotelId].dates}" />
                        </div>
                        <div class="input-group">
                            <label for="adults" class="input-label">Adults</label>
                            <select class="options" id="adults">
                                <option value="0" selected>0</option>
                                <option value="0">1</option>
                                <option value="0">2</option>
                                <option value="0">3</option>
                                <option value="0">4</option>
                                <option value="0">5</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="children" class="input-label">Children</label>
                            <select class="options" id="children">
                                <option value="0" selected>0</option>
                                <option value="0">1</option>
                                <option value="0">2</option>
                                <option value="0">3</option>
                                <option value="0">4</option>
                                <option value="0">5</option>
                            </select>
                        </div>
                        <button type="submit" class="btn-cust form-btn btn-brown">Search
                        </button>`)