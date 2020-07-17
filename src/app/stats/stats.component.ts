import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MerchantsService } from '../services/merchants.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  /*chart = document.querySelector('#chart');
  barChart = new Chart(this.chart, {
    type: 'bar',
    data: {
      labels: ['Comercio 1', 'Comercio 2', 'Comercio 3', 'Comercio 4', 'Comercio 5', 'Comercio 6', 'Comercio 7'],
      datasets: [
        {
          label: 'Ventas',
          data: [
            25692986,
            34292986,
            12392986,
            54392986,
            23392986,
            26792986,
            26792986
          ]
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });*/

  constructor(private http: HttpClient) { }

  showData() {}

  ngOnInit(): void {
  }

}
