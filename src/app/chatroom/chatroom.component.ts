import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageComponent } from './message/message.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  objectArray:any[] = [];

  now = new Date();

  userObject = {
    userName: "Joe Dirt",
    avatarURL: "https://www.cityheadshots.com/uploads/5/1/2/1/5121840/mjb-6951_2_orig.jpg",
    date: this.now.toUTCString(),
    messageText: "",
  }
  
  
  

  constructor() { }

  ngOnInit(): void {
    //this.message = this.MessageComponent.getMessage();
  }

  // removeItem(): void {
  //   this.deleteItem.emit()
  // }

 sendMessage(message:any) {
    this.userObject.messageText = message;
 
    this.objectArray.push(this.userObject);

    //this.message.push(this.messageForm.value);
    
  }

  deleteMessage(): void{
  
     this.objectArray.pop();

   }

}