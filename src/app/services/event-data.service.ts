import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

type Speaker = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  social?: { twitter?: string; github?: string; linkedin?: string };
};

type Sessions = {
  days: Array<{
    id: string;
    title: string;
    date: string;
    events: Array<{
      time: string;
      track: 'Conference' | 'CTF' | string;
      type: string;
      title: string;
      speakerId: string | null;
      speakerName: string;
      keyPoint: string;
      highlighted: boolean;
    }>;
  }>;
};

type Sponsors = {
  platinum: Array<{ id: string; name: string; url: string; logo: string; tagline: string }>;
  gold: Array<{ id: string; name: string; url: string; logo: string; tagline: string }>;
  silver: Array<{ id: string; name: string; url: string; logo: string; tagline: string }>;
};

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