mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRuaGVycmFuIiwiYSI6ImNrYzJvYmd4MjE5OTgzOHA5dmhxaXEwcjIifQ.Q20rbBpBFxHPRGiLfbeTVA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-74.1483976,4.5891058],
zoom: 15
});

map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'top-left'
    );