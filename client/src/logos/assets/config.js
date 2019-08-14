module.exports = {
    map1: {
        params: {
            center: [40.655769,-73.938503],
            zoomControl: false,
            zoom: 13,
            maxZoom: 19,
            minZoom: 11,
            scrollwheel: false,
            legends: true,
            infoControl: false,
            attributionControl: true
        },
        tileLayer: {
            uri: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.png',
            params: {
                minZoom: 11,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
                id: '',
                accessToken: ''
            }
        }
    },
    map2: {
        params: {
            center: [40.655769,-73.938503],
            zoomControl: false,
            zoom: 13,
            maxZoom: 19,
            minZoom: 11,
            scrollwheel: false,
            legends: true,
            infoControl: false,
            attributionControl: true
        },
        tileLayer: {
            uri: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png',
            params: {
                minZoom: 11,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
                id: '',
                accessToken: ''
            }
        }
    },
    map3: {
        params: {
            center: [40.655769,-73.938503],
            zoomControl: false,
            zoom: 13,
            maxZoom: 19,
            minZoom: 11,
            scrollwheel: false,
            legends: true,
            infoControl: false,
            attributionControl: true
        },
        tileLayer: {
            uri: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png',
            params: {
                minZoom: 11,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
                id: '',
                accessToken: ''
            }
        }
    },
    map4: { 
        params: {
            center: [40.655769,-73.938503],
            zoomControl: false,
            zoom: 13,
            maxZoom: 19,
            minZoom: 11,
            scrollwheel: false,
            legends: true,
            infoControl: false,
            attributionControl: true
        },
        tileLayer: {
            uri: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}.png',
            params: {
                minZoom: 11,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
                id: '',
                accessToken: ''
            }
        }
    },
    chart1Config: {
        geojson: {
            color: '#333',
            weight: .4,
            fillColor: "#ffeda0",
            fillOpacity: .85
        },
        modaltext: 'Use the selector below to display the average taxi fare in each zone by Hour.',
        header: 'FARE',
        label: '$',
        type: 'cost',
        2: 'Filter Average Taxi Fare by Hour.'
    },
    chart2Config: {
        geojson: {
            color: '#333',
            weight: .4,
            fillColor: "#ffeda0",
            fillOpacity: 1
        },
        modaltext: 'Use the selector below to display the average trip time by hour.',
        header: 'TRIP TIME',
        label: 'minutes',
        type: 'time',
        2: 'Find Average Time per Trip in each zone.'
    },
    chart3Config: {
        geojson: {
            color: '#333',
            weight: .5,
            fillColor: "#fff2af",
            fillOpacity: .85
        },
        modaltext: 'Display the average taxi fare in each zone by hour.  Results are normalized by distance, giving Average cost per mile.',
        header: 'NORMALIZED FARE',
        label: '$',
        type: 'cost',
        2: 'Filter Average Taxi Fare normalized by Distance per Trip.'
    },
    chart4Config: {
        geojson: {
            color: '#333',
            weight: 1,
            fillColor: "#fff2af",
            fillOpacity: 1
        },
        modaltext: 'Display the average time per trip.  Results are normalized by distance, giving length of trip per mile',
        header: 'NORMALIZED TIME',
        label: 'minutes',
        type: 'time',
        2: 'Find Average Time per Trip Normalized by Distance.'
    },
    gradients: {
        1: '#800026',
        2: '#BD0026',
        3: '#E31A1C',
        4: '#FC4E2A',
        5: '#FD8D3C',
        6: '#FEB24C',
        7: '#FED976',
        8: '#FFEDA0'
    }
};