import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { EventMeta } from '../../../models/event.model';
import { EventDataService } from '../../../services/event-data.service';
import { EventCardComponent } from '../../shared/ui/event-card.component/event-card.component';
import { SpeakerCardComponent } from '../../shared/ui/speaker-card.component/speaker-card.component';
import { SponsorGridComponent } from '../../shared/ui/sponsor-grid.component/sponsor-grid.component';

@Component({
  selector: 'app-home.component',
  imports: [RouterLink, EventCardComponent, SpeakerCardComponent, SponsorGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
  private readonly eventData = inject(EventDataService);

  private readonly emptyEventMeta: EventMeta = {
    slug: '',
    name: '',
    timeFrame: '',
    days: 0,
    tracks: [],
    theme: {
      background: 'white',
      mode: 'light',
    },
  };

  readonly eventMeta = toSignal(this.eventData.getEventMeta(), { initialValue: this.emptyEventMeta });
  readonly sessions = toSignal(this.eventData.getSessions(), { initialValue: null });
  readonly speakers = toSignal(this.eventData.getSpeakers(), { initialValue: [] });
  readonly sponsors = toSignal(this.eventData.getSponsors(), { initialValue: null });
   
  slugify(value: string): string {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  get featuredSessions() {
    const data = this.sessions();
    if (!data) {
      return [];
    }

    return data.days.flatMap(day => day.events.filter(event => event.highlighted));
  }
 
  get featuredSpeakers() {
    return this.speakers().filter(speaker => speaker.highlighted).slice(0, 4);
  }
}
