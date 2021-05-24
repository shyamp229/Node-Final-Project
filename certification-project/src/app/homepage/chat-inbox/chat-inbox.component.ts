import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { ChatInboxService } from 'src/app/services/chat-inbox.service';

const SOCKET_ENDPOINT = 'http://localhost:3050';
@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css'],
})

export class ChatInboxComponent {
  title = 'instant-chatting';
  user: String;
  room: String;

  messageText: String;
  messageArray: Array<{ user: String, message: String }> = [];
  constructor(private chatInboxService: ChatInboxService) {
    this.chatInboxService.newUserJoined()
      .subscribe(data => this.messageArray.push(data));


    this.chatInboxService.userLeftRoom()
      .subscribe(data => this.messageArray.push(data));

    this.chatInboxService.newMessageReceived()
      .subscribe(data => this.messageArray.push(data));
  }

  join() {
    this.chatInboxService.joinRoom({ user: this.user, room: this.room });
  }

  leave() {
    this.chatInboxService.leaveRoom({ user: this.user, room: this.room });
  }

  sendMessage() {
    this.chatInboxService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
  }
}
