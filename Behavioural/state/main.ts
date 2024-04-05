import {BoldMode} from './BoldMode';
import {DocumentEditor} from './DocumentEditor';
import {NormalMode} from './NormalMode';

const normalMode = new NormalMode();
const boldMode = new BoldMode();

const editor = new DocumentEditor(normalMode);

console.log(editor.formatText('Hello')); // Outputs: Normal: Hello

editor.setMode(boldMode);
console.log(editor.formatText('Hello')); // Outputs: Bold: Hello
