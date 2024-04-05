

import {EditingMode} from './EditingMode';
export class DocumentEditor {
  private editingMode: EditingMode;

  constructor(initialMode: EditingMode) {
    this.editingMode = initialMode;
  }

  
  setMode(newMode: EditingMode): void {
    this.editingMode = newMode;
  }


  formatText(text: string): string {
    return this.editingMode.formatText(text);
  }
}