import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  userSubscribed: boolean = false; 

  subscriptionChanged(ev: any){
    console.log("Usuario suscrito");
    this.userSubscribed = ev;
  }
}
