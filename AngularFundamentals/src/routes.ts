import { Error404Component } from './app/errors/404.component';
import { CreateEventComponent } from './app/events/new-event/create-event.component';
import { Routes } from '@angular/router';
import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent
  },
  {
    path: 'events',
    component: EventsListComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent
  },
  ,
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
];
