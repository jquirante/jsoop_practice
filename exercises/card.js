
class Card{
	constructor(suite, faceValue){
		this.suite = suite;
		this.faceValue = faceValue;
	}
	getSuite(){
		return this.suite;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		this.cardList = [];
		//takes in nothing
		//make storage for your card objects
	}
	addCard( suite, faceValue ){
	
		this.cardList.push(new Card ( suite, faceValue ));
		return this.cardList.length;
		//adds a card to the deck
		//takes in a string suite and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
	}
	shuffle(){
		debugger;
		// Get a random number between 0 and the number of cards in cardList
		// get the card at that index and push it into new sort array
		// set sort array to cardList array.
		var shuffledContainer = [];
		for ( var i = 0; i < this.cardList.length; i ++) {
			var randomIndex = Math.floor(Math.random() * this.cardList.length);
			var shuffledCard = this.cardList.splice(randomIndex,1);
			shuffledContainer.push(shuffledCard[0]);
		}

		this.cardList = shuffledContainer;
		
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing
	}
	getCardCount(){
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
		return this.cardList.length;
	}
	dealCards( numberOfCards ){
		//deals out a number of cards
		//takes in the number of cards to deal
		var dealtCards = [];

		for ( var i = 0; i < numberOfCards; i ++) {
		dealtCards.push(this.cardList.pop());
		}

		return dealtCards;
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
	}
}