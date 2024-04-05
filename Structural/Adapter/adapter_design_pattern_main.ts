import {JSONProcessor} from './XMLToJSONAdapter';
import {XMLProcessor} from './XMLProcessor';
import {XMLToJSONAdapter} from './XMLToJSONAdapter';
function processJSONData(jsonProcessor: JSONProcessor, jsonData: string): void {
  const parsedData = jsonProcessor.parseJSON(jsonData);
  console.log("Processed JSON data:", parsedData);
}

const xmlProcessor = new XMLProcessor();
const jsonAdapter = new XMLToJSONAdapter(xmlProcessor);

const jsonData = '{"key": "value"}';
processJSONData(jsonAdapter, jsonData);