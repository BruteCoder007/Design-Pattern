import {EditingMode} from './EditingMode';
export class NormalMode implements EditingMode {
  formatText(text: string): string {
    return `Normal: ${text}`;
  }
}