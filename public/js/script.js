var map;
var pub = [];
var marker = [];

function initMap() {
    $.getJSON('myData.json', function(data){
        myData = data;
        var map = new google.maps.Map(document.getElementById('map'), { // generates an embedded google map instance
                zoom: 14,
                center: {lat: myData[10].lat, lng: myData[10].long} // Centres on The Roundabout pub, which is as close as Plymouth has to a central pub
            });
        for (var i = 0; i < 10; i++){
            var random = Math.floor(Math.random() * 50); // generates a random integer to select a pub at random from the array
            var lati = myData[random].lat;
            var long = myData[random].long;
            pub[i] = {lat: lati, lng: long};
            
            marker[i] = new google.maps.Marker({ // places markers
                position: pub[i],
                map: map
            });
            // console.log(random); // testing log 
        };
    });
};