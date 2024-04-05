import {TeamLead} from '../Builder/TeamLead';
import {Manager} from '../Builder/Manager';
import {Director} from './Director';
 
const teamLead = new TeamLead();
const manager = new Manager();
const director = new Director();

teamLead.setNext(manager);
manager.setNext(director);


teamLead.processRequest(800);    
teamLead.processRequest(2500);   
teamLead.processRequest(10000);  
teamLead.processRequest(15000); 
