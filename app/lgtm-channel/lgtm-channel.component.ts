import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lgtm-channel',
  templateUrl: './lgtm-channel.component.html',
  styleUrls: ['./lgtm-channel.component.css'],
})
export class LgtmChannelComponent implements OnInit {
  @ViewChild('scroll')
  scroll!: ElementRef;
  ngOnInit(): void {}

  recieved = false;
  reply = '';
  myProfile = [
    {
      imgSrc: 'assets/images/profile.jpeg',
      name: 'Russell',
    },
  ];
  message: any = [
    {
      sentText: '',
    },
  ];
  messages = [
    {
      id: '1',
      sent: `10:01`,
      text: 'How are you today?',
      user: {
        name: 'Joyse',
        avatarUrl:
          'https://lh3.googleusercontent.com/a-/AAuE7mAuiepkKGsj-1L9lhHSHtnQsXlVqHEQfJqzOoGz=s96-cc-rg',
        colour: '0080a2',
      },
    },
    {
      id: '2',
      sent: `10:04`,
      text: 'Good',
      user: {
        name: 'Sam',
        avatarUrl:
          'https://angular.io/assets/images/logos/angular/shield-large.svg',
        colour: 'c16fe0',
      },
    },
    {
      id: '3',
      sent: `10:10`,
      text: 'Good,How about you?',
      user: {
        name: 'Russell',
        avatarUrl: 'assets/images/profile.jpeg',
        colour: 'c16fe0',
      },
      fromYou: true,
    },
    {
      id: '4',
      sent: `10:20`,
      text: `
      Hi, Russell
      I need more information about Developer Plan.`,
      user: {
        name: 'Sam',
        avatarUrl:
          'https://angular.io/assets/images/logos/angular/shield-large.svg',
        colour: 'c16fe0',
      },
      fromYou: true,
    },
    {
      id: '5',
      sent: `10:22`,
      text: `
      Are we meeting today?
      Project has been already finished and I have results to show you`,
      user: {
        name: 'Joyse',
        avatarUrl:
          'https://angular.io/assets/images/logos/angular/shield-large.svg',
        colour: 'c16fe0',
      },
    },
  ];
  getReply(msg: string) {
    console.log(msg);
    // this.displayReply = msg;
  }

  scrollToTop(el: { scrollTop: number }) {
    el.scrollTop = 0;
  }
  scrollBottom(el: any): void {
    this.scroll.nativeElement.scroll({
      top: this.scroll.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
  getValue(val: string) {
    console.log(val);
    this.reply = val;
  }
  post() {
    this.message.push(new this.message());
  }
}
