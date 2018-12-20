import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { NewMeetComponent } from './new-meet/new-meet.component';
import { TrainerListComponent } from './new-meet/trainer-list/trainer-list.component';
import { ViewMeetsComponent } from './view-meets/view-meets.component';
import { MeetListComponent } from './view-meets/meet-list/meet-list.component';
import { ClientListComponent } from './new-meet/client-list/client-list.component';
import { NewClientComponent } from './new-client/new-client.component';
import { MeetDetailComponent } from './view-meets/meet-detail/meet-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    NewMeetComponent,
    TrainerListComponent,
    ViewMeetsComponent,
    MeetListComponent,
    ClientListComponent,
    NewClientComponent,
    MeetDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: NewMeetComponent, pathMatch: 'full' },
      { path: 'new-meet', component: NewMeetComponent },
      { path: 'new-meet:id', component: NewMeetComponent },
      {
        path: 'view-meets', component: ViewMeetsComponent, children: [
          { path: ':id', component: MeetDetailComponent },
          { path: ':id/edit', component: MeetDetailComponent }
        ]},
      { path: 'new-client', component: NewClientComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
