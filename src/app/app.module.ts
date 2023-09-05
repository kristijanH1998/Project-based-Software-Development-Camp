import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { GeneralChatComponent } from './general-chat/general-chat.component';
import { RandomChatComponent } from './random-chat/random-chat.component';
import { ClientChatComponent } from './client-chat/client-chat.component';
import { InternalProjectsComponent } from './internal-projects/internal-projects.component';
import { MarketingComponent } from './marketing/marketing.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MessageComponent } from './chatroom/message/message.component';

import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    GeneralChatComponent,
    RandomChatComponent,
    ClientChatComponent,
    InternalProjectsComponent,
    MarketingComponent,
    ChatroomComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
