//OnSets Core Library
//Core Combinations and Card Class

var coreCombinations = {
	
	R: {
		p: {},
		n: {
			R: {},
			G: {},
			B: {},
			Y: {}
		},
		u: {
			R: {},
			G: {},
			B: {},
			Y: {}
		},
		m: {
			R: {},
			G: {},
			B: {},
			Y: {}
		}
	},

	B: {
		p: {},
		n: {
			R: {},
			G: {},
			B: {},
			Y: {}
		},
		u: {
			R: {},
			G: {},
			B: {},
			Y: {}
		},
		m: {
			R: {},
			G: {},
			B: {},
			Y: {}
		}
	},

	G: {
		p: {},
		n: {
			R: {},
			G: {},
			B: {},
			Y: {}
		},
		u: {
			R: {},
			G: {},
			B: {},
			Y: {}
		},
		m: {
			R: {},
			G: {},
			B: {},
			Y: {}
		}
	},

	Y: {
		p: {},
		n: {
			R: {},
			G: {},
			B: {},
			Y: {}
		},
		u: {
			R: {},
			G: {},
			B: {},
			Y: {}
		},
		m: {
			R: {},
			G: {},
			B: {},
			Y: {}
		}
	}
}

var cardTemplate = {
	cardWidth: 40,
	cardHeight: 80,
	colorOrder: "BRGY",
	
	makeCard: function(card){
		var htmlString = '<div class="card card'+card+'" card-num='+card+'>';
		var cardBin = card.toString(2);
    	cardBin = "0".repeat(4-cardBin.length)+cardBin;
		for(let idx = 0; idx < 4; idx++){
			if (cardBin[idx] == "1"){
				htmlString += '<div class = "dot '+this.colorOrder[idx]+'" card-num='+card+'></div>';
			}
			else {
				htmlString += '<div class = "dot blank" card-num='+card+'></div>';
			}
		}
		htmlString += '</div>';
		return htmlString;
	},
}

class universe {

	constructor(universeContainer, deckContainer){
		(this.universe = []).length = 16;
		this.universe.fill(0);
    	this.deckContainer = deckContainer;
    	this.universeContainer = universeContainer;
    	var self = this;
    	$(deckContainer).click(function(e){
    		var cardNum = Number($(e.target).attr('card-num'));
    		if(!Number.isNaN(cardNum)){
    			self.select(cardNum);
    		}
    	});
    	$(universeContainer).click(function(e){
    		var cardNum = Number($(e.target).attr('card-num'));
    		if(!Number.isNaN(cardNum)){
    			self.select(cardNum);
    		}
    	});
	}

	displayAll(){
		for (let card = 0; card < 16; card++){
			$(this.deckContainer).append(cardTemplate.makeCard(card));

		}

	}

	displayCard(card,container){
		return $(container).append(cardTemplate.makeCard(card));
	}

	removeCard(card, container){
		return $(container+'>.card'+card).remove();
	}

	select(card){
		this.universe[card] ^= 1;
		$('#DeckNum').html(this.universeNumber);
		if (this.universe[card] == 1){
			this.removeCard(card,this.deckContainer);
			this.displayCard(card, this.universeContainer);
		}
		else{
			this.removeCard(card,this.universeContainer);
			this.displayCard(card,this.deckContainer);
			}
	}

	get universeNumber(){
		return parseInt(this.universe.join(""),2);
	}
}

$(document).ready(function(){
	var fullDeck = new universe('.universe','.deck');
	fullDeck.displayAll();
});