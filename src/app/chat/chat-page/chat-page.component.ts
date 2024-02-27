import { Component } from '@angular/core';
import { ChatSidebarComponent } from '../../ui/chat-sidebar/chat-sidebar.component';
import { PdfViewerComponent } from '../../ui/pdf-viewer/pdf-viewer.component';
import { MainChatComponent } from '../../ui/main-chat/main-chat.component';

@Component({
  selector: 'app-chat-page',
  standalone: true,
  imports: [ChatSidebarComponent, PdfViewerComponent, MainChatComponent],
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
})
export class ChatPageComponent {}
