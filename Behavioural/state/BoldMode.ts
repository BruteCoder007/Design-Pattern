import {EditingMode} from './EditingMode';
export class BoldMode implements EditingMode {
  formatText(text: string): string {
    return `Bold: ${text}`;
  }
}