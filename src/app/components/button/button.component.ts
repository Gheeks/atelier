import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.css'],
})
export class Button {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
