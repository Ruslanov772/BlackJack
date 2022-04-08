const RANK = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const SUIT = ['diams', 'hearts', 'clubs', 'spades'];

export class Card {
  constructor(public rank: string, public suit: string) {}

  getScore(){
    if (this.rank === 'A') {
      return 11;
    }
    if (this.rank === 'J' || this.rank === 'Q' || this.rank === 'K') {
      return 10;
    }
    return parseInt(this.rank);
  }
}

export class CardDeck{
  card: Card[] = [];
  constructor() {
    for (let rank of RANK) {
      for (let suit of SUIT) {
        const card = new Card(rank, suit)
        this.card.push(card);
      }
    }
  }

  getCard(): Card{
    const randomCard = Math.floor(Math.random() * this.card.length);
    const result = this.card.splice(randomCard, 1);
    return  result[0];
  }

  getCards(howMany: number): Card[]{
    const deletedCard: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      deletedCard.push(this.getCard());
    }
    return deletedCard;
  }
}
