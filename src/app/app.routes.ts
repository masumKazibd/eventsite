import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home.component/home.component';
import { ConferenceComponent } from './components/pages/conference.component/conference.component';
import { CtfComponent } from './components/pages/ctf.component/ctf.component';
import { ScheduleComponent } from './components/pages/schedule.component/schedule.component';
import { SpeakersComponent } from './components/pages/speakers.component/speakers.component';
import { SpeakerDetailComponent } from './components/pages/speaker-detail.component/speaker-detail.component';
import { SponsorsComponent } from './components/pages/sponsors.component/sponsors.component';
import { VenueComponent } from './components/pages/venue.component/venue.component';
import { FaqComponent } from './components/pages/faq.component/faq.component';
import { ContactComponent } from './components/pages/contact.component/contact.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conference', component: ConferenceComponent },
  { path: 'ctf', component: CtfComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'speakers/:slug', component: SpeakerDetailComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'venue', component: VenueComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];