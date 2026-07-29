export type EventTrack = 'Conference' | 'CTF';

export interface SessionEvent {
  time: string;
  track: EventTrack | string;
  type: string;
  title: string;
  speakerId: string | null;
  speakerName: string;
  keyPoint: string;
  highlighted: boolean;
}

export interface ScheduleDay {
  id: string;
  title: string;
  date: string;
  events: SessionEvent[];
}

export interface Sessions {
  days: ScheduleDay[];
}
