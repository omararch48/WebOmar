let deck = [];
const families = ['C', 'D', 'H', 'S',];
const others = ['A', 'J', 'Q', 'K',];

const createDeck = () => {
    for(let i = 2; i <= 10; i++) {
        for(let family of families) {
            deck.push(i + family);
        }
    }
    for(let other of others) {
        for(let family of families) {
            deck.push(other + family);
        }
    }

    
    return _.shuffle(deck);
}

deck = createDeck();
console.log(deck);

