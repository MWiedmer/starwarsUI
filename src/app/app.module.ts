import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SpaceshipsOverviewComponent} from './components/spaceships-overview/spaceships-overview.component';
import {SpaceshipsDetailComponent} from './components/spaceships-detail/spaceships-detail.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SpaceshipTableComponent } from './components/spaceship-table/spaceship-table.component';

const APP_ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: SpaceshipsOverviewComponent
  },
  {
    path: 'spaceship-edit/:id',
    component: SpaceshipsDetailComponent
    // resolve: {flight: FlightResolver}
  }
  /*,
  {
    path: 'errorPage404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'errorPage404'
  }*/
];

@NgModule({
  declarations: [
    AppComponent,
    SpaceshipsOverviewComponent,
    SpaceshipsDetailComponent,
    SpaceshipTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
