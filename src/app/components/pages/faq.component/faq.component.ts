import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faq.component',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  readonly faqs = signal<FaqItem[]>([
    {
      id: 'faq-1',
      question: 'Do I need to be an expert hacker to attend?',
      answer: 'Not at all! The conference features tracks for all skill levels, from beginners looking to learn the basics of bug bounty hunting to advanced operators dissecting zero-days.'
    },
    {
      id: 'faq-2',
      question: 'What should I bring for the Capture The Flag (CTF)?',
      answer: 'Bring a laptop capable of running virtual machines or Docker containers. We highly recommend having Wireshark, Burp Suite, and a Kali Linux VM pre-installed to hit the ground running.'
    },
    {
      id: 'faq-3',
      question: 'Can I participate in the CTF as a team?',
      answer: 'Yes! Teams can have up to 4 members. You can register your team on the first day of the event, or join a "looking for group" channel in our Discord to find teammates.'
    },
    {
      id: 'faq-4',
      question: 'Are meals and accommodations provided?',
      answer: 'Lunch and coffee breaks are provided on all three days for standard ticket holders. Accommodations must be booked separately, but we have discounted rates at partner hotels near the venue.'
    }
  ]);
}
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}