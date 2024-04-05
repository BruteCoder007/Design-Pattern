import {Developers} from './Developers';
import {ContentCreators} from './ContentCreators';
import {Company} from './Company';

// Client code
const developers = new Developers();
const contentcreators = new ContentCreators();

const bangaloreOffice = new Company();
bangaloreOffice.add(developers);
bangaloreOffice.add(contentcreators);

const ahamedabadOffice = new Company();
ahamedabadOffice.add(new Developers());
ahamedabadOffice.add(new ContentCreators());
// [['developer','calculatesalary'],['developer','calculatesalary']]
const organisation = new Company();
organisation.add(bangaloreOffice);
organisation.add(ahamedabadOffice);

// Calculating pay for organisation
organisation.calculateSalary();