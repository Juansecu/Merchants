import { Component, OnInit } from '@angular/core';
import { MerchantsService } from '../services/merchants.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  merchants = [];

  constructor(private merchantsService: MerchantsService) {
    this.merchantsService.merchants().subscribe(data => {
      this.merchants = data;
    });
  }

  ngOnInit(): void {
  }

}
