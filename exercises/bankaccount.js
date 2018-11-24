

class Account{
	constructor(){
		this.total = null;
		//store the amount of money in the account
	}
	add( amount  ){
	
		this.total += amount;
		return this.total;
		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
		var amountWithdrawn;
		if ( amount > this.total ) {
			amountWithdrawn = this.total;
			this.total = 0;
			
		} else {
			amountWithdrawn = amount;
			this.total = this.total - amount;
		}

		return amountWithdrawn;
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	}
	getAmount(){
		return this.total;
		//returns the amount in the account
	}
}