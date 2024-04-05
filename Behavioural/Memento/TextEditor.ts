import { TextEditorMemento } from "./TextEditorMemento";

//Originator   
export class TextEditor {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }

  setText(text: string): void {
    this.text = text;
  }

  createMemento(): TextEditorMemento {
    return new TextEditorMemento(this.text);
  }

  restoreFromMemento(memento: TextEditorMemento): void {
    this.text = memento.getState();
  }
}