const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

var centroids_path = 'https://raw.githubusercontent.com/waynehuu/solarMapper/master/centroids.geojson';
// var centroids_path_mapbox = 'https://api.mapbox.com/datasets/v1/energyinitiative/cjuww43dn3oh02xp2l40jqq0z/features?access_token=pk.eyJ1IjoiZW5lcmd5aW5pdGlhdGl2ZSIsImEiOiJjazV3bzUwZHgxZmwxM2pvZ2M0YWc3bWpjIn0.ZgxnCrDTlmbiljcgEuJBpA';

var tile_id = [
    'energyinitiative.57a6dx3k',
    'energyinitiative.5n53r9o2',
    'energyinitiative.17c0r4mu',
    'energyinitiative.8oer6r7z',
    'energyinitiative.79y0hx10',
    'energyinitiative.3x2shkuo',
    'energyinitiative.1gp508hb',
    'energyinitiative.c156x3z8',
    'energyinitiative.8usr5a02',
    'energyinitiative.5145dxir',
    'energyinitiative.0ge8z74l',
    'energyinitiative.58spqud5',
    'energyinitiative.9hg7neez',
    'energyinitiative.51hdc70j',
    'energyinitiative.1d94o94p',
    'energyinitiative.9sqyjx0f',
    'energyinitiative.4zbaf7tb',
    'energyinitiative.bkz9mb02',
    'energyinitiative.dhq7pxos',
    'energyinitiative.9nfatpcd',
    'energyinitiative.8k0trsob',
    'energyinitiative.9s65cktv',
    'energyinitiative.1rle7tp6',
    'energyinitiative.7wd10trs',
    'energyinitiative.1z8qxfh8',
    'energyinitiative.3cg8hcc1',
    'energyinitiative.b9fpph0e',
    'energyinitiative.bf2fbdrm',
    'energyinitiative.027euelw',
    'energyinitiative.76f7etrb',
    'energyinitiative.75hsj4e9',
    'energyinitiative.1kz30sqt',
    'energyinitiative.3iucbokb',
    'energyinitiative.3nakf8rl',
    'energyinitiative.2q9cthff',
    'energyinitiative.5ebk57mc',
    'energyinitiative.ddqtewn9',
    'energyinitiative.cq3ydypg',
    'energyinitiative.9uzybu0i',
    'energyinitiative.alnz9pp6',
    'energyinitiative.2xm2phoa',
    'energyinitiative.b6qh7dod',
    'energyinitiative.czu8qqde',
    'energyinitiative.12fwlb0d',
    'energyinitiative.a3z96rew',
    'energyinitiative.a1mb3g4c',
    'energyinitiative.amm85fdo',
    'energyinitiative.avzsr34t',
    'energyinitiative.7mh0eyn4',
    'energyinitiative.0o7nyf51',
    'energyinitiative.9yorngd9',
    'energyinitiative.2de2oguv',
    'energyinitiative.cir81ozq',
    'energyinitiative.566qe6cx',
    'energyinitiative.4ha75ybf',
    'energyinitiative.86sakzi0',
    'energyinitiative.c5i3tcmt',
    'energyinitiative.br8ip5ny',
    'energyinitiative.45yzh69k',
    'energyinitiative.6lr1wzw0',
    'energyinitiative.59vvq4ie',
    'energyinitiative.b8pbq6fm',
    'energyinitiative.7d9399qy',
    'energyinitiative.92tynybn',
    'energyinitiative.7k2xtmed',
    'energyinitiative.3c96bbzm',
    'energyinitiative.9bkzyom8',
    'energyinitiative.b5igmv8z',
    'energyinitiative.77c7n6tc',
    'energyinitiative.bus3b74h',
    'energyinitiative.2khlnqib',
    'energyinitiative.4bpax1gj',
    'energyinitiative.6cm54qsj',
    'energyinitiative.2r4mmde1',
    'energyinitiative.5gy025ig',
    'energyinitiative.51a354fg',
    'energyinitiative.58im2epe',
    'energyinitiative.6iq1b0h6',
    'energyinitiative.1hllnftj',
    'energyinitiative.8ikz5gcu',
    'energyinitiative.48sj2qx6',
    'energyinitiative.1zcvcqbx',
    'energyinitiative.afk6hmri',
    'energyinitiative.0mt6gvmu',
    'energyinitiative.d1ic428t',
    'energyinitiative.73jpwxkj',
    'energyinitiative.4ia5cmyp',
    'energyinitiative.716tsb1n',
    'energyinitiative.0icxkmpu',
];

mapboxgl.accessToken = 'pk.eyJ1IjoiZW5lcmd5aW5pdGlhdGl2ZSIsImEiOiJjazV3bzUwZHgxZmwxM2pvZ2M0YWc3bWpjIn0.ZgxnCrDTlmbiljcgEuJBpA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/energyinitiative/ck5zsiv3z2yhz1iltudwldnff',
    center: [-72.670195, 41.595318],
    zoom: 8,
    minZoom: 5,
    maxZoom: 19,
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

    tile_id.forEach(function (item) {
        map.addSource(item, {
            type: 'raster',
            url: 'mapbox://' + item,
        });

        map.addLayer({
            id: item,
            type: 'raster',
            source: item,
            minzoom: 11,
        },
            'panels-cviclt' // This loads satellite imagery tiles before panels polygon layer
        );
    });

    map.addSource('centroids', {
        type: 'geojson',
        data: centroids_path, // TODO: replace data with mapbox hosted using mapbox dataset api
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