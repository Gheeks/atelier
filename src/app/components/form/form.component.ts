import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
})
export class Form {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
