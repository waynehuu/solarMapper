mapboxgl.accessToken = 'pk.eyJ1IjoiZW5lcmd5aW5pdGlhdGl2ZSIsImEiOiJjazV3bzUwZHgxZmwxM2pvZ2M0YWc3bWpjIn0.ZgxnCrDTlmbiljcgEuJBpA';


// var bounds = [
//     [-75, 40.2],
//     [-70., 42.4]
// ];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/energyinitiative/ck4bir2rn1poi1cpne9onmxhb',
    center: [-72.670195, 41.595318],
    zoom: 8,
    // maxBounds: bounds
    minZoom: 4
});

var modal = document.getElementById('modal');

// var aboutButton = document.getElementById('about')

function openModal() {
    modal.style.display = 'block';
}

window.onclick = function (event) {
    if (event.target == modal) {
        this.modal.style.display = 'none';
    }
}

// map.addControl(new mapboxgl.FullscreenControl());

map.on('load', function () {

    document.getElementById('west-haven').addEventListener('click', function () {
        map.flyTo({
            center: [-72.981017, 41.260060],
            zoom: 16
        });
    });
    document.getElementById('somers').addEventListener('click', function () {
        map.flyTo({
            center: [-72.453251, 41.956257],
            zoom: 16
        });
    });
    document.getElementById('groton').addEventListener('click', function () {
        map.flyTo({
            center: [-72.068590, 41.377535],
            zoom: 15
        });
    });
    document.getElementById('full-ct').addEventListener('click', function () {
        map.flyTo({
            center: [-72.670195, 41.595318],
            zoom: 8
        });
    });

    map.addSource('centroids', {
        'type': 'geojson',
        'data': 'https://raw.githubusercontent.com/waynehuu/solarMapper/master/centroids.geojson',
        'cluster': true,
        'clusterMaxZoom': 11,
        'clusterRadius': 100
    });

    map.addLayer({
        id: 'solar-pv-centroids-clusters',
        type: 'circle',
        source: 'centroids',
        filter: ['has', 'point_count'],
        paint: {
            'circle-color': [
                'step',
                ['get', 'point_count'],
                '#E0E0E2',
                100,
                '#72BAD1',
                750,
                '#2B98C5'
            ],
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                20,
                100,
                30,
                750,
                40
            ]
        }
    });

    map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'centroids',
        filter: ['has', 'point_count'],
        layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12,
        }
    });

});
