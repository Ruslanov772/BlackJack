import { Component } from '@angular/core';
import {Card, CardDeck} from "../ lib/CardDeck";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardDeck: CardDeck;
  hand: Card[] = [];
  constructor() {
    this.cardDeck = new CardDeck();
    this.hand = this.cardDeck.getCards(2);
  }

  giveCard() {
    const card = this.cardDeck.getCard();
    this.hand.push(card);
  }

  reset() {
    this.cardDeck = new CardDeck();
    this.hand = this.cardDeck.getCards(2);
  }

  total() {
    let sum = 0;
    this.hand.forEach(card => {
      sum += card.getScore();
    });
    return sum;
  }
}
