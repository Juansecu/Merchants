import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Definición de la latitud y longitud para centrar el mapa:
  lat = 43.1746;
  lng = -2.4125;
  zoom = 15;

  constructor() {
    // Asignar el token desde las variables de entorno:
    this.mapbox.accessToken = environment.mapBoxToken;
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    });

    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
