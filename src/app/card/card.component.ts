import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent{
  @Input() rank = '';
  @Input() suit = '';
  constructor() {

  }

  getSymbol() {
    switch (this.suit){
      case 'diams':
        return '♦'
      case 'hearts':
        return '♥'
      case 'clubs':
        return '♣'
      case 'spades':
        return '♠'
      default:
        return ' '
    }
  }

  getClassname() {
    return `card rank-${this.rank.toLocaleLowerCase()} ${this.suit}`
  }
}
