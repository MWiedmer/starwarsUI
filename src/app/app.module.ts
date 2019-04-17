import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SpaceshipsOverviewComponent} from './components/spaceships-overview/spaceships-overview.component';
import {SpaceshipsDetailComponent} from './components/spaceships-detail/spaceships-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SpaceshipsOverviewComponent,
    SpaceshipsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
