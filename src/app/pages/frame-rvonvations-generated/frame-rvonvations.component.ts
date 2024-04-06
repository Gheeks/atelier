import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'frame-rvonvations',
  templateUrl: 'frame-rvonvations.component.html',
  styleUrls: ['frame-rvonvations.component.css'],
})
export class FrameRvonvations {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
