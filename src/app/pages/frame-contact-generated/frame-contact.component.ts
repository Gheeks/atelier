import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'frame-contact',
  templateUrl: 'frame-contact.component.html',
  styleUrls: ['frame-contact.component.css'],
})
export class FrameContact {
  rawj70a: string = ' '
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
