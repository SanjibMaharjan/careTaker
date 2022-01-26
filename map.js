function initMap() {
    let options = {
        zoom: 13,
        center: {lat: 43.642531, lng: -79.387018}
    }

    let map = new google.maps.Map(document.getElementById('main_map'), options);

    let marker = new google.maps.Marker({
        position:{lat: 43.642531, lng: -79.387018},
        map: map
    });
}
