import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'card-drawing',
  templateUrl: 'card-drawing.component.html',
  styleUrls: ['card-drawing.component.css'],
})
export class CardDrawing {
  rawxh1i: string = ' '
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
