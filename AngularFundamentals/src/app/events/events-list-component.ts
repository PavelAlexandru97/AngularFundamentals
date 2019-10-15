import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="well hoverwell thumbnail">
        <h2>{{ event.name }}</h2>
        <div>Date:{{ event.date }}</div>
        <div>Price:\${{ event.price }}</div>
        <div>
          <span> Location: {{ event.location.address }}</span>
          <span>&nbsp;</span>
          <span>{{ event.location.city }}, {{ event.location.country }}</span>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2017',
    price: '2324.423',
    imageUrl: 'assetsimagesimg.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}
