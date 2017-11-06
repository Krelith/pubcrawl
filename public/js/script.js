var map;
var pub = [];
var marker = [];

function initMap() {
    $.getJSON('myData.json', function(data){
        myData = data;
        var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 14,
                center: {lat: myData[10].lat, lng: myData[10].long}
            });
        for (var i = 0; i < 10; i++){
            var random = Math.floor(Math.random() * 50);
            var lati = myData[random].lat;
            var long = myData[random].long;
            pub[i] = {lat: lati, lng: long};
            
            marker[i] = new google.maps.Marker({
                position: pub[i],
                map: map
            });
            console.log(random);
        };
    });
};