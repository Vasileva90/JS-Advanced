function deckOfCards(cards) {
    let result = [];

    for (const cardAsString of cards) {
        const face = cardAsString.slice(0, -1);
        const suit = cardAsString.slice(-1);
        let card = "";

        try {
            card = createCard(face, suit); 
            result.push(card);
        } catch (err) {
            result = [`Invalid card: ${cardAsString}`];
        }
    }

    console.log(result.join(" "));


    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };
    
        if (faces.includes(face) == false) {
            throw new TypeError('Invalid face');
        } else if (suits.hasOwnProperty(suit) == false) {
            throw new TypeError('Invalid suit');
        }
    
        const result = {
            face,
            suit,
            toString() {
                return this.face + suits[this.suit];
            }
        };
        return result;
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);