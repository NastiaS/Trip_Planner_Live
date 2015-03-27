$(document).ready(function() {

var existingHotelMarker;
var existingRestaurantMarkers = [];
var existingToDoMarkers = [];

function updateMarkers (max, current, neo) {   // current is an array of current markers
  											// new is the new marker to add to the map
}

$('.day-buttons').on('click', 'button', function() {
	
	var label = $(this).text();
	console.log(label);

	if (label == '+') {    // add a day ( up to 8 )
		var days = $('.day-buttons').children().length;
		if (days < 8) {		
			$(this).text(days);
			$('.day-buttons').append('<button class="btn btn-circle day-btn">+</button>');
		} 
	}

	// button that was pressed is highlighted
	$('.day-buttons').children().removeClass('current-day');
	$(this).addClass('current-day');

	// update day title tag
	if ($(this).text() !== '+') {
		$('#day-title span').text('Day ' + $(this).text());
	}
});

$("#top-panel .hotel").on("click", 'button' , function(){
	var value = $('#hotelSelect').val();
	var item = _.where(all_hotels, {_id: value})[0];
	var element = $('<div class="itinerary-item"><span class="title">' + 
		item.name + '</span><button class="btn btn-xs btn-danger ' + 
		'remove btn-circle">x</button></div>');
	if ($('ul.hotel').children().length == 1) {
		$('ul.hotel').children()[0].remove();
	}
	$('ul.hotel').append(element);

	//debugger;
	var location = item.place[0].location;
	//Define map location
	var loc = new google.maps.LatLng(location[0],location[1]);
	marker = new google.maps.Marker({
		position: loc,
	//	map: map,
		title: "Something"
	})
	if (existingHotelMarker) { existingHotelMarker.setMap(null) }
	existingHotelMarker = marker;	
	marker.setMap(map);
});

$('#top-panel .restaurant').on('click', 'button', function() {

    //var value = $(this).parent().find('select :selected');
    var value = $('#restaurantSelect').val();
    var item = _.where(all_restaurants, {_id: value})[0];
    if ($('ul.restaurant').children().length < 3) {
      var element = $('<div class="itinerary-item"><span class="title">' + item.name + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
        $('ul.restaurant').append(element);
    }
    var location = item.place[0].location;
	//Define map location
	var loc = new google.maps.LatLng(location[0],location[1]);
	marker = new google.maps.Marker({
		position: loc,
	//	map: map,
		title: "Something"
	})
	if (existingRestaurantMarkers.length < 3) { 
		marker.setMap(map); 
		existingRestaurantMarkers.push(marker);
	}
})

$('#top-panel .ttdo').on('click', 'button', function() {

    var value = $('#ttdoSelect').val();
    var item = _.where(all_things_to_do, {_id: value})[0];
    if ($('ul.ttdo').children().length < 3) {
      var element = $('<div class="itinerary-item"><span class="title">' + item.name + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');

        $('ul.ttdo').append(element);
    }
        var location = item.place[0].location;
	//Define map location
	var loc = new google.maps.LatLng(location[0],location[1]);
	marker = new google.maps.Marker({
		position: loc,
	//	map: map,
		title: "Something"
	})
	if (existingToDoMarkers.length < 3) { 
		marker.setMap(map); 
		existingToDoMarkers.push(marker);
	}

});

});




