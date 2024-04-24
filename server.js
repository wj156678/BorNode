/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
// Die Anweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links 
// zugewiesen an die konstante namens PORT. Das einfach gleichheitszeichen lässt sich also übersetzen
// mit *... wird zugewiesen an *...
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	// res ist die antwort des Servers an den Browser
	// send ist die Anweisung etwas an den browser zu senden
	// Hello *...' ist der Wert, der an Die Anweisung send() übergeben wird
	//res.send('Hello remote world!\n');
	res.render('index.ejs',{});
});
// Das res-Objekt kann noch mehr als nur eine Zeichenkette an den
// an den Browser zu senden. Das res Objekt kann mit der Funktion render()
// eine HTML-Datei an den Browser senden.


// Mit listen() wird der Server angewiesen, auf den angegebenen HOST und
// PORT zu lauschen.
app.listen(PORT, HOST);

// Mit der Anweisung console.log() wird dem Server Administrtor auf der
// Konsole angezeigt, was der Server macht. Der Programmierer schreibt dazu
// in die runden klammern den Ausdruck der auf der Konsole angezeigt wird
// werden soll. Die Werte der beiden Konstanten HOST und PORT werden in den 
// Ausdruck übergeben. Ein Verb mit anschließenden runden klammern steht
// immer für eine Anweisung etwas zu tun.
console.log(`Running on http://${HOST}:${PORT}`);