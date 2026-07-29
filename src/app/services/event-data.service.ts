import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Speaker } from '../models/speaker.model';
import { Sessions } from '../models/schedule.model';
import { Sponsors } from '../models/sponsor.model';

@Injectable({ providedIn: 'root' })
export class EventDataService {
  constructor(private http: HttpClient) {}

  getSpeakers() {
    return this.http.get<Speaker[]>('/data/speakers.json');
  }

  getSpeakerById(id: string) {
    return this.getSpeakers().pipe(map(list => list.find(s => s.id === id) ?? null));
  }

  getSessions() {
    return this.http.get<Sessions>('/data/sessions.json');
  }

  getSponsors() {
    return this.http.get<Sponsors>('/data/sponsors.json');
  }
}