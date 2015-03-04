// Load native UI library
var gui = require('nw.gui');

// Clipboard
// We can not create a clipboard, we have to receive the system clipboard
var clipboard = gui.Clipboard.get();
 
// Read from clipboard
var text = clipboard.get('text');
alert('Clipboard text : '+text);