import { Component, inject, computed, signal, OnInit, OnDestroy } from '@angular/core';
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
// Added OnInit and OnDestroy implementation
export class HomeComponent implements OnInit, OnDestroy {
  
  private readonly eventData = inject(EventDataService);

  // --- Countdown State ---
  countdown = signal({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  private timerInterval: any;

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

  // Upgraded from 'get' to computed() Signals so the template execution works
  readonly featuredSessions = computed(() => {
    const data = this.sessions();
    if (!data) {
      return [];
    }
    return data.days.flatMap(day => day.events.filter(event => event.highlighted));
  });
 
  readonly featuredSpeakers = computed(() => {
    return this.speakers().filter(speaker => speaker.highlighted).slice(0, 4);
  });

  ngOnInit() {
    // Target date set for the timer
    const targetDate = new Date('October 15, 2026 09:00:00').getTime();

    this.timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        this.countdown.set({
          days: String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0'),
          hours: String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0'),
          minutes: String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0'),
          seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0')
        });
      } else {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}