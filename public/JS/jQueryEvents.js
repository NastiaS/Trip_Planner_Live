$(document).ready(function(){

var existingHotelMarker;

$("#top-panel .hotel").on("click", 'button' , function(){
	var value = $('#hotelSelect').val();
	var item = _.where(all_hotels, {_id: value})[0];
	$('.hotel .title')[0].firstChild.data = item.name;
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

    var value = $(this).parent().find('select :selected').val();

    if ($('ul.restaurant').children().length > 0 && $('ul.restaurant').children().length < 3) {
      var element = $('<div class="itinerary-item"><span class="title">' + value + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');

        $('ul.restaurant').append(element);
    }

})

$('#top-panel .ttdo').on('click', 'button', function() {

    var value = $(this).parent().find('select :selected').val();

    if ($('ul.ttdo').children().length > 0 && $('ul.ttdo').children().length < 3) {
      var element = $('<div class="itinerary-item"><span class="title">' + value + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');

        $('ul.ttdo').append(element);
    }

});

});




