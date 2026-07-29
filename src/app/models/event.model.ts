import { EventTrack } from './schedule.model';

export interface EventTheme {
  background: 'white';
  mode: 'light';
}

export interface EventMeta {
  slug: string;
  name: string;
  timeFrame: string;
  days: number;
  tracks: EventTrack[];
  theme: EventTheme;
}
