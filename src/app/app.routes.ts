import { Routes } from '@angular/router';
import { MainChatComponent } from './ui/main-chat/main-chat.component';
import { PageComponent } from './page/page.component';
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import { LoginComponent } from './ui/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'home', component: PageComponent },
  { path: 'chat', component: ChatPageComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' },
];
