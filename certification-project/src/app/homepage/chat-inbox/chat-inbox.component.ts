import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

const SOCKET_ENDPOINT = 'http://localhost:3050';
@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.css'],
})
export class ChatInboxComponent implements OnInit {
  socket;
  message: string;
  constructor() {}
  ngOnInit() {
    this.setupSocketConnection();
  }
  setupSocketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
    this.socket.on('message-broadcast', (data: string) => {
      if (data) {
        const element = document.createElement('li');
        element.innerHTML = data;
        element.className = 'list-group-item';
        document.getElementById('message-list').appendChild(element);
      }
    });
  }
  SendMessage() {
    this.socket.emit('message', this.message);
    const element = document.createElement('li');
    element.innerHTML = this.message;
    element.className = 'list-group-item';
    element.style.textAlign = 'right';
    document.getElementById('message-list').appendChild(element);
    this.message = '';
  }
}
