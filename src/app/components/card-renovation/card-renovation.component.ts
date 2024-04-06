import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'card-renovation',
  templateUrl: 'card-renovation.component.html',
  styleUrls: ['card-renovation.component.css'],
})
export class CardRenovation {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
