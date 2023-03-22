import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'chat-app';
  userList = [{ userId: 'Joyse' }, { userId: 'Russell' }, { userId: 'Sam' }];
  channelList = [
    { channelId: 1, channelName: 'General Channel', path: 'general' },
    { channelId: 2, channelName: 'LGTM Channel', path: 'lgtm' },
    { channelId: 3, channelName: 'Technology Channel', path: 'technology' },
  ];
  constructor() {}
  ngOnInit(): void {
    // this.apollo
    //   .watchQuery<any>({
    //     query: Get_Messages,
    //   })
    //   .valueChanges.subscribe(({ data, loading }) => {
    //     console.log(loading);
    //     this.allMessages = data.Message;
    //   });
  }
}
