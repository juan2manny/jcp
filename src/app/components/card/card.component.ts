import { Component, Input } from '@angular/core';

interface Skills {
  title: string,
  time: number,
  level: number,
  details?: string
}


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() skills: Array<Skills> | undefined
  @Input() cardTitle: string | undefined

  stringNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

  getStringNumber(num: number): string {
    return this.stringNumbers[num]
  }

  getLevel(num: number): string {
    return `l${num}`
  }

  checkTen(num: number): string {
    return num === 10 ? '10+' : num.toString()
  }

}
