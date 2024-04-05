import { TextEditor } from "./TextEditor";
import {HistoryManager} from "./HistoryManager";
var readlineSync = require('readline-sync');

const textEditor = new TextEditor("Hello, World!");
const historyManager = new HistoryManager();
historyManager.addMemento(textEditor.createMemento());

while(true) {
    let text = readlineSync.question('Enter the text to be added to the document , enter "end" to stop editing:\n');
    if(text === 'end')
        break;
    textEditor.setText(text);
    historyManager.addMemento(textEditor.createMemento());
}

const previousState = historyManager.getMemento(1);
if (previousState) {
textEditor.restoreFromMemento(previousState);
console.log("Restored to previous state:", textEditor.getText());
} else {
console.log("No previous state available.");
}