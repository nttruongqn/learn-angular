import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular99';
  isAlert = false;
  alertMsg = "abc";
  user = {
    name: "Nguyen Van A",
    age: 30
  }

  handler = (event:any) => {
    console.log('clicked', event);
  }
}
