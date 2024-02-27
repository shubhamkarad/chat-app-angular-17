import { Component } from '@angular/core';
import { MessageListComponent } from '../message-list/message-list.component';

@Component({
  selector: 'app-main-chat',
  standalone: true,
  imports: [MessageListComponent],
  templateUrl: './main-chat.component.html',
  styleUrl: './main-chat.component.css',
})
export class MainChatComponent {}
