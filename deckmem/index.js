require('colors')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var figures = [ '♠', '♦'.red, '♥'.red, '♣']
var ONE_FIGURE = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a
}

var deck = shuffle(figures.reduce(function (p, c) {
	ONE_FIGURE.forEach(function (e) {
		p.push(e + c)
	})
	return p
}, []))
var redeck = []

function iterate() {
	var card = deck.pop()
	rl.question('--> ' + card, function () {
		redeck.push(card)
		iterate()
	})
}

iterate()