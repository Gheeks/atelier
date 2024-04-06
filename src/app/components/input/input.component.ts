import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css'],
})
export class Input {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
