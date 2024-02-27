import { Component } from '@angular/core';
import { ChatPageComponent } from '../chat/chat-page/chat-page.component';
import { RouterLink } from '@angular/router';
import { UploadFileComponent } from '../ui/upload-file/upload-file.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    UploadFileComponent,
    ChatPageComponent,
    RouterLink,
    HeaderComponent,
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent {}
