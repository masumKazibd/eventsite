import { Component } from '@angular/core';

@Component({
  selector: 'app-contact.component',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Thanks for reaching out! (This is a dummy form)');
  }
}
