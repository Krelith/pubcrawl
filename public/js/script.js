var map;

function initMap() {
    $.getJSON('myData.json', function(data){
        myData = data;
        var lati = myData[10].lat;
        var long = myData[10].long;
        var pub_one = {lat: lati, lng: long};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: pub_one
        });
        var marker = new google.maps.Marker({
            position: pub_one,
            map: map
        });
    });
};