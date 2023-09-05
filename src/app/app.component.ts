import {Component, Output, EventEmitter} from '@angular/core';

import { MessageService } from './message.service';

type ChannelName = 'general' | 'random' | 'clientChat' | 'internalProjects' | 'marketing';

interface SelectedChannel {
  name: 'general' | 'random' | 'clientChat' | 'internalProjects' | 'marketing';
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public channelMessages: any[] = [];
  public selectedChannel: SelectedChannel = {
    name: 'general',
    description: 'General desc.'
  };
 
  public channelDescr: string = '';
  @Output() deleteItem: EventEmitter<any> = new EventEmitter();


  title = 'business-communication';

  constructor(private readonly messageService: MessageService) {}

  ngOnInit() {
    this.fetchMessages('general')
  }

  cliclChannel(channel: SelectedChannel) {
    this.selectedChannel = channel;
    
    this.fetchMessages(channel.name);
  }
  
  sendMessage(message:any) {
    this.messageService.messages[this.selectedChannel.name].push({
      userName: "Joe Dirt",
      avatarURL: "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/mjb-6951_2_orig.jpg",
      date: new Date().toUTCString(),
      messageText: message
    });
    
    this.fetchMessages(this.selectedChannel.name);
  }

  fetchMessages(channelName: ChannelName): void {
    console.log('channelName', channelName);
    this.channelMessages = this.messageService.messages[channelName];
  }
  
  deleteMessage(index: number): void {
    this.channelMessages.splice(index, 1)
  }
}