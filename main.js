const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

var centroids_path = 'https://raw.githubusercontent.com/waynehuu/solarMapper/master/centroids.geojson';
// var centroids_path_mapbox = 'https://api.mapbox.com/datasets/v1/energyinitiative/cjuww43dn3oh02xp2l40jqq0z/features?access_token=pk.eyJ1IjoiZW5lcmd5aW5pdGlhdGl2ZSIsImEiOiJjazV3bzUwZHgxZmwxM2pvZ2M0YWc3bWpjIn0.ZgxnCrDTlmbiljcgEuJBpA';
var tile_id_path = 'https://raw.githubusercontent.com/waynehuu/solarMapper/master/tile_id.txt';

var tiles = [
    'mapbox://energyinitiative.57a6dx3k',
    'mapbox://energyinitiative.5n53r9o2',
    'mapbox://energyinitiative.17c0r4mu',
    'mapbox://energyinitiative.8oer6r7z',
    'mapbox://energyinitiative.79y0hx10',
    'mapbox://energyinitiative.3x2shkuo',
    'mapbox://energyinitiative.199f29c9',
    'mapbox://energyinitiative.8jbzsags',
    'mapbox://energyinitiative.1gp508hb',
    'mapbox://energyinitiative.c156x3z8',
    'mapbox://energyinitiative.8usr5a02',
    'mapbox://energyinitiative.5145dxir',
    'mapbox://energyinitiative.0ge8z74l',
    'mapbox://energyinitiative.58spqud5',
    'mapbox://energyinitiative.9hg7neez',
    'mapbox://energyinitiative.51hdc70j',
    'mapbox://energyinitiative.1d94o94p',
    'mapbox://energyinitiative.9sqyjx0f',
    'mapbox://energyinitiative.4zbaf7tb',
    'mapbox://energyinitiative.bkz9mb02',
    'mapbox://energyinitiative.dhq7pxos',
    'mapbox://energyinitiative.9nfatpcd',
    'mapbox://energyinitiative.8k0trsob',
    'mapbox://energyinitiative.9s65cktv',
    'mapbox://energyinitiative.1rle7tp6',
    'mapbox://energyinitiative.7wd10trs',
    'mapbox://energyinitiative.1z8qxfh8',
    'mapbox://energyinitiative.3cg8hcc1',
    'mapbox://energyinitiative.b9fpph0e',
    'mapbox://energyinitiative.bf2fbdrm',
    'mapbox://energyinitiative.027euelw',
    'mapbox://energyinitiative.76f7etrb',
    'mapbox://energyinitiative.75hsj4e9',
    'mapbox://energyinitiative.1kz30sqt',
    'mapbox://energyinitiative.3iucbokb',
    'mapbox://energyinitiative.3nakf8rl',
    'mapbox://energyinitiative.2q9cthff',
    'mapbox://energyinitiative.5ebk57mc',
    'mapbox://energyinitiative.ddqtewn9',
    'mapbox://energyinitiative.cq3ydypg',
    'mapbox://energyinitiative.9uzybu0i',
    'mapbox://energyinitiative.alnz9pp6',
    'mapbox://energyinitiative.2xm2phoa',
    'mapbox://energyinitiative.b6qh7dod',
    'mapbox://energyinitiative.czu8qqde',
    'mapbox://energyinitiative.12fwlb0d',
    'mapbox://energyinitiative.a3z96rew',
    'mapbox://energyinitiative.a1mb3g4c',
    'mapbox://energyinitiative.amm85fdo',
    'mapbox://energyinitiative.avzsr34t',
    'mapbox://energyinitiative.7mh0eyn4',
    'mapbox://energyinitiative.0o7nyf51',
    'mapbox://energyinitiative.9yorngd9',
    'mapbox://energyinitiative.2de2oguv',
    'mapbox://energyinitiative.cir81ozq',
    'mapbox://energyinitiative.566qe6cx',
    'mapbox://energyinitiative.4ha75ybf',
    'mapbox://energyinitiative.86sakzi0',
    'mapbox://energyinitiative.c5i3tcmt',
    'mapbox://energyinitiative.br8ip5ny',
    'mapbox://energyinitiative.45yzh69k',
    'mapbox://energyinitiative.6lr1wzw0',
    'mapbox://energyinitiative.59vvq4ie',
    'mapbox://energyinitiative.b8pbq6fm',
    'mapbox://energyinitiative.7d9399qy',
    'mapbox://energyinitiative.92tynybn',
    'mapbox://energyinitiative.7k2xtmed',
    'mapbox://energyinitiative.3c96bbzm',
    'mapbox://energyinitiative.9bkzyom8',
    'mapbox://energyinitiative.b5igmv8z',
    'mapbox://energyinitiative.77c7n6tc',
    'mapbox://energyinitiative.bus3b74h',
    'mapbox://energyinitiative.2khlnqib',
    'mapbox://energyinitiative.4bpax1gj',
    'mapbox://energyinitiative.6cm54qsj',
    'mapbox://energyinitiative.2r4mmde1',
    'mapbox://energyinitiative.5gy025ig',
    'mapbox://energyinitiative.51a354fg',
    'mapbox://energyinitiative.58im2epe',
    'mapbox://energyinitiative.6iq1b0h6',
    'mapbox://energyinitiative.1hllnftj',
    'mapbox://energyinitiative.8ikz5gcu',
    'mapbox://energyinitiative.48sj2qx6',
    'mapbox://energyinitiative.1zcvcqbx',
    'mapbox://energyinitiative.afk6hmri',
    'mapbox://energyinitiative.0mt6gvmu',
    'mapbox://energyinitiative.d1ic428t',
    'mapbox://energyinitiative.73jpwxkj',
    'mapbox://energyinitiative.4ia5cmyp',
    'mapbox://energyinitiative.716tsb1n',
    'mapbox://energyinitiative.0icxkmpu'
];

mapboxgl.accessToken = 'pk.eyJ1IjoiZW5lcmd5aW5pdGlhdGl2ZSIsImEiOiJjazV3bzUwZHgxZmwxM2pvZ2M0YWc3bWpjIn0.ZgxnCrDTlmbiljcgEuJBpA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/energyinitiative/ck5zsiv3z2yhz1iltudwldnff',
    center: [-72.670195, 41.595318],
    zoom: 8,
    minZoom: 4
});

// map.addControl(new mapboxgl.FullscreenControl());

map.on('load', function () {

    get('west-haven').addEventListener('click', function () {
        map.flyTo({
            // center: [-72.981017, 41.260060],
            center: [-72.985017, 41.258060],
            zoom: 17
        });
    });
    get('somers').addEventListener('click', function () {
        map.flyTo({
            center: [-72.453251, 41.956257],
            zoom: 15
        });
    });
    get('groton').addEventListener('click', function () {
        map.flyTo({
            center: [-72.068590, 41.376535],
            zoom: 15
        });
    });
    get('full-ct').addEventListener('click', function () {
        map.flyTo({
            center: [-72.670195, 41.595318],
            zoom: 8
        });
    });

    var i;
    for (i = 0; i < tiles.length; i++) {
        let sourceID = 'satellite-imagery-' + i.toString();
        let layerID = 'satellite-imagery-layer-' + i.toString();
        map.addSource(sourceID, {
            type: 'raster',
            url: tiles[i]
        });

        map.addLayer({
            id: layerID,
            type: 'raster',
            source: sourceID,
            minzoom: 11,
        },
            'panels-cviclt' // This loads satellite imagery tiles before panels polygon layer
        );
    };

    // TODO: some tiles fail to load

    map.addSource('centroids', {
        type: 'geojson',
        data: centroids_path, // TODO: change data mapbox hosted with dataset api
        cluster: true,
        clusterMaxZoom: 11,
        clusterRadius: 100
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