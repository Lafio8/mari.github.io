
let attempts = 0;
const solution = 'labottigliadivino';
const hints = [
    '_ a _ _ _ _ _ _ _ _ _ _ _ _ _ _ _', // 0 lettere
    '_ a _ _ _ _ i _ _ _ _ _ _ _ _ _ _', // 1 lettera
    '_ a _ _ _ _ i _ _ _ a _ _ _ _ _ _', // 2 lettere
    '_ a b _ _ _ i _ _ _ a _ _ _ _ _ _', // 3 lettere
    '_ a b _ _ _ i _ _ _ a _ i _ _ _ _', // 4 lettere
    '_ a b _ _ _ i _ _ _ a _ i _ _ n _', // 5 lettere
    '_ a b _ t _ i _ _ _ a _ i _ _ n _', // 6 lettere
    '_ a b _ t t i _ _ _ a _ i _ _ n _', // 7 lettere
    '_ a b _ t t i _ _ _ a _ i _ _ n o', // 8 lettere
    '_ a b _ t t i _ _ _ a _ i _ i n o', // 9 lettere
	'_ a b _ t t i _ _ i a _ i _ i n o', // 10 lettere
	'_ a b _ t t i _ _ i a _ i v i n o', // 11 lettere
	'_ a b _ t t i g _ i a _ i v i n o', // 12 lettere
	'_ a b _ t t i g l i a _ i v i n o', // 13 lettere
	'l a b _ t t i g l i a _ i v i n o', // 14 lettere
	'l a b o t t i g l i a _ i v i n o', // 15 lettere
    'l a b o t t i g l i a d i v i n o'  // 16 lettere (soluzione completa)
];

function verificaRisposta() {
    const risposta = document.getElementById('risposta').value.toLowerCase().trim();
    const result = document.getElementById('result');
    
    if (risposta === solution) {
        result.innerHTML = `<p>Brava MRN! Ti sei guadagnata un <a href="Regalo_Mari.pdf" target="_blank">regalo</a></p>`;
    } else {
        if (attempts < hints.length - 2) {
            attempts++;
			result.innerHTML = `<p>"${hints[attempts]}"</p>`;
			result.innerHTML += `<p>Risposta sbagliata. Riprova!</p>`;
        }
		else{
			attempts++;
			result.innerHTML = `<p>Sei imbarazzante, era "${hints[attempts]}". Tieni il tuo <a href="Regalo_Mari.pdf" target="_blank">regalo</a></p>`;
		}
        
    }
}
