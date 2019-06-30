module.exports = {
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
            uri: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            params: {
                minZoom: 11,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
                id: '',
                accessToken: ''
            }
        },
        geojson: {
            color: 'white',
            weight: .25,
            fillColor: "#fff2af",
            fillOpacity: 0
        }
    },
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
        },
        geojson: {
            color: '#333',
            weight: .4,
            fillColor: "#fff2af",
            fillOpacity: 0
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
        },
        geojson: {
            color: '#333',
            weight: 1.5,
            fillColor: "#fff2af",
            fillOpacity: .4
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
        },
        geojson: {
            color: '#333',
            weight: 1,
            fillColor: "#fff2af",
            fillOpacity: .4
        }
    },
};