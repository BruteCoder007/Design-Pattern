// Adapter class to adapt XMLProcessor to JSONProcessor
// Target interface (JSON interface)
import { XMLProcessor } from "./XMLProcessor";
export interface JSONProcessor {
    parseJSON(jsonData: string): Record<string, any>;
    convertToJSON(data: Record<string, any>): string;
  }
export class XMLToJSONAdapter implements JSONProcessor {
  private xmlProcessor: XMLProcessor;

  constructor(xmlProcessor: XMLProcessor) {
    this.xmlProcessor = xmlProcessor;
  }

  parseJSON(jsonData: string): Record<string, any> {
    const xmlData = this.xmlProcessor.parseXML(jsonData);
    console.log("Adapter: Converting XML data to JSON format");
    return xmlData;
  }

  convertToJSON(data: Record<string, any>): string {
    const xmlData = this.xmlProcessor.convertToXML(data);
    console.log("Adapter: Converting data to JSON format");
    return JSON.stringify(this.parseJSON(xmlData));
  }
}