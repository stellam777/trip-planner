//import mapboxgl from 'mapbox-gl';
import mapboxgl from 'mapbox-gl';
import buildMarker from './marker';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic3RlbGxhbTc3NyIsImEiOiJja2tlOG03cWwwNjVxMnNvOTBldDIyc28zIn0.tzxrd8rZotIcZSY0oVxNAg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

buildMarker('restaurants', [-74.009151, 40.705086]).addTo(map);
