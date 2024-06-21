function verificaRisposta() {
    const risposta = document.getElementById('risposta').value.toLowerCase();
    const result = document.getElementById('result');
    if (risposta === 'la bottiglia di vino') {
        result.innerHTML = `<p>Brava! Ecco il tuo regalo: <a href="Regalo_Mari.pdf" target="_blank">Clicca qui per aprire il PDF</a></p>`;
    } else {
        result.innerHTML = `<p>Risposta sbagliata. Riprova!</p>`;
    }
}