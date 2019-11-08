import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/new-event/create-event.component';
import { appRoutes } from './../routes';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { ToastrService } from './common/toastr.ervice';
import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventsAppComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
