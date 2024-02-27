import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  // messages = {
  //   id: 1,
  //   user: {
  //     id: 2,
  //     content: 'Hello, I am a regular user!',
  //   },
  //   assistant: {
  //     id: 3,
  //     content: 'Hello, I am your helpful assistant!',
  //   },
  // };
  users = [
    { id: 1, name: 'Kristiyan' },
    { id: 2, name: 'Emiliyan' },
    { id: 3, name: 'Kristiyan' },
  ];
}
