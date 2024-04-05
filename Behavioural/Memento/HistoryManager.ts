import { TextEditorMemento } from "./TextEditorMemento";

//care taker 
export class HistoryManager {
  private mementos: TextEditorMemento[] = [];

  addMemento(memento: TextEditorMemento): void {
    this.mementos.push(memento);
  }

  getMemento(index: number): TextEditorMemento | undefined {
    return this.mementos[index];
  }
}