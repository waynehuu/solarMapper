const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

mapboxgl.accessToken = 'pk.eyJ1IjoiZW5lcmd5aW5pdGlhdGl2ZSIsImEiOiJjazV3bzUwZHgxZmwxM2pvZ2M0YWc3bWpjIn0.ZgxnCrDTlmbiljcgEuJBpA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/energyinitiative/ck4bir2rn1poi1cpne9onmxhb',
    center: [-72.670195, 41.595318],
    zoom: 8,
    minZoom: 4
});

// map.addControl(new mapboxgl.FullscreenControl());

map.on('load', function () {

    get('west-haven').addEventListener('click', function () {
        map.flyTo({
            center: [-72.981017, 41.260060],
            zoom: 16
        });
    });
    get('somers').addEventListener('click', function () {
        map.flyTo({
            center: [-72.453251, 41.956257],
            zoom: 16
        });
    });
    get('groton').addEventListener('click', function () {
        map.flyTo({
            center: [-72.068590, 41.377535],
            zoom: 15
        });
    });
    get('full-ct').addEventListener('click', function () {
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

let modal = get('modal');
let modalContent = query('.modal-content');

function openModal() {
    modal.classList.add('visible');
};

function closeModal() {
    modal.classList.remove('visible');
};

function isolateModalBox(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
};

modalContent.addEventListener('click', isolateModalBox);
modal.addEventListener('click', closeModal);