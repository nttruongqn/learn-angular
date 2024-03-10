import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular99';

  isDanger = false;
  isWarning = false;
  classContent = "box bg-orange"
}
