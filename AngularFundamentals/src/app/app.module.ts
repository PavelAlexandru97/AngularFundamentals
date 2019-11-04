import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventsListComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [EventsListComponent, EventThumbnailComponent, NavBarComponent, EventsAppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
