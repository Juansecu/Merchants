import { Component, OnInit } from '@angular/core';
import { MapService } from '../services/map.service';
import { MerchantsService } from '../services/merchants.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private map: MapService) { }

  ngOnInit(): void {
    this.map.buildMap();
  }

}
