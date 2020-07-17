import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { TableComponent } from './table/table.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MerchantsService } from './services/merchants.service';
import { StatsComponent } from './stats/stats.component';

/*const routes: Route[] = [
  {}
];*/

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    TableComponent,
    SidebarComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //RouterModule,
    //RouterModule.forRoot(routes)
  ],
  providers: [MerchantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
