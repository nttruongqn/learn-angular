import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  private _progress = 50;
  @Input() set progress(value: number) {
    this._progress = value;
  }

  get progress(): number {
    return this._progress;
  }

  @Input() backgroundColor = '#ccc';
  // @Input() progress = 50;
  @Input() progressColor = "red";
}
