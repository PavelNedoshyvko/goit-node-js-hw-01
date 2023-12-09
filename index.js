import { program } from "commander";
import {
	listContacts,
	getContactById,
	addContact,
	removeContact
} from "./contacts.js";


program
	.option('-a, --action <type>', 'choose action')
	.option('-i, --id <type>', 'user id')
	.option('-n, --name <type>', 'user name')
	.option('-e, --email <type>', 'user email')
	.option('-p, --phone <type>', 'user phone');

program.parse();
const options = program.opts();


const invokeAction = async ({ action, id, name, email, phone }) => {
	switch (action) {
		case 'list':
			const allContacts = await listContacts();
			console.log(allContacts);
			break;

		case 'get':
			const oneContact = await getContactById(id);
			console.log(oneContact);
			break;

		case 'add':
			const newContact = await addContact(name, email, phone);
			console.log(newContact);
			break;

		case 'remove':
			const deleteContact = await removeContact(id);
			console.log(deleteContact);
			break;

		default:
			console.warn('\x1B[31m Unknown action type!');
	}
}

invokeAction(options);