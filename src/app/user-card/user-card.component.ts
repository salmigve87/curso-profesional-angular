import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public name: string;
  public username: string;
  public avatar: string;

  @Output() subscribed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.name = "Miguel",
    this.username = "salmigve"
    this.avatar = 
    "https://cdn.dribbble.com/users/373338/screenshots/2558656/batman_avatar_dribbbb_1x.png";

    setTimeout( ()=> this.subscribed.emit(true) , 3000);
  }

  changing(event: any){
    this.username = event.target.value;
  }


}
