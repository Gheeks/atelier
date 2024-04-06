import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'frame-tableaux',
  templateUrl: 'frame-tableaux.component.html',
  styleUrls: ['frame-tableaux.component.css'],
})
export class FrameTableaux {
  rawh16u: string = ' '
  rawir4t: string = ' '
  raw5eew: string = ' '
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
