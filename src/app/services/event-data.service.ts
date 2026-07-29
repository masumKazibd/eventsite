import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';
import { EventMeta } from '../models/event.model';
import { Speaker } from '../models/speaker.model';
import { Sessions } from '../models/schedule.model';
import { Sponsors } from '../models/sponsor.model';

@Injectable({ providedIn: 'root' })
export class EventDataService {
  constructor(private http: HttpClient) {}

  getEventMeta() {
    return of<EventMeta>({
      slug: 'conference-summit-2026',
      name: 'Conference Summit 2026',
      timeFrame: '3 days • Oct 15–17, 2026',
      days: 3,
      tracks: ['Conference', 'CTF'],
      theme: {
        background: 'white',
        mode: 'light',
      },
    });
  }

  getSpeakers() {
    return this.http.get<Speaker[]>('/data/speakers.json');
  }

  getSpeakerById(id: string) {
    return this.getSpeakers().pipe(map(list => list.find(s => s.id === id) ?? null));
  }

  getSpeakerBySlug(slug: string) {
    return this.getSpeakers().pipe(map(list => list.find(s => this.buildSlug(s.name) === slug) ?? null));
  }

  getSessions() {
    return this.http.get<Sessions>('/data/sessions.json');
  }

  getSponsors() {
    return this.http.get<Sponsors>('/data/sponsors.json');
  }

  private buildSlug(value: string): string {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
}