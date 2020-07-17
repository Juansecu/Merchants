import { Injectable } from '@angular/core';
import { MerchantsService } from './merchants.service';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  mapbox = (mapboxgl as typeof mapboxgl);
  token = 'pk.eyJ1IjoianVhbnNlY3UiLCJhIjoiY2tjbW9rbGM5MDM3dDJybzZ3MWlxdGZkMyJ9.9VbRsp28k9lpIbDiK0irkA';
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/dark-v10`;
  // Definición de la latitud y longitud para fijar ubicación por defecto en el mapa:
  lat = 4.742043976363009;
  lng = -74.08699035644531;
  zoom = 13;
  // Asociación de marcadores:
  marker: mapboxgl.Marker;
  // Asociación de comerciantes:
  merchants = [];

  constructor(private merchantsService: MerchantsService) {
    // Asignar el token desde las variables de entorno:
    this.mapbox.accessToken = this.token;
    this.merchantsService.geometry().subscribe(data => {
      this.merchants = data;
    });
  }

  buildMap() {
    this.map = new mapboxgl.Map({
      // ID del contenedor donde se mostrará el mapa:
      container: 'map',
      // Diseño del mapa:
      style: this.style,
      // Zoom por defecto del mapa:
      zoom: this.zoom,
      // Centrar el mapa en base a coordenadas:
      center: [this.lng, this.lat]
    });

    this.marker = new mapboxgl.Marker()
      .setLngLat([this.lng, this.lat])
      .addTo(this.map);

    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
