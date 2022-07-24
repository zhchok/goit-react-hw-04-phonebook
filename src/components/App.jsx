import { useEffect } from "react";
import { GlobalStyle } from "./base/GlobalStyle";
import { Box } from "./box/box";
import { PhonebookForm } from "./Form/Form";
import { ContactsList } from "./Contacts/Contacts";
import { nanoid } from "nanoid";
import { SearchBox } from "./SearchBox/SearchBox";
import { useState } from "react";

export function App() {
	const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem("contacts")) ?? []);
	const [filter, setFilter] = useState("");
	console.log(contacts);

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts));
	}, [contacts]);

	const addContact = (name, number) => {
		const contact = {
			id: nanoid(),
			name,
			number,
		};

		if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
			alert(`${name} is already in contacts.`);
			return;
		}

		setContacts(prevState => [contact, ...prevState]);
	};
	const deleteContact = contactId => {
		setContacts(contacts.filter(({ id }) => id !== contactId));
	};
	const changeFilter = e => {
		setFilter(e.currentTarget.value);
	};

	const normalizedFilter = filter.toLocaleLowerCase();
	const filtredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

	return (
		<Box textAlign="center" margin="0 auto" width="500px">
			<GlobalStyle />

			<PhonebookForm onSubmit={addContact} />

			<>
				<SearchBox value={filter} onChange={changeFilter} />
				<ContactsList contacts={filtredContacts} onDeleteContact={deleteContact}></ContactsList>
			</>

			<Box mt={4}>
				<p>You dont have contacts, add your first contact 😉</p>
			</Box>
		</Box>
	);
}

// export class App extends Component {
// 	state = {
// 		contacts: [],
// 		filter: "",
// 	};

// 	componentDidMount() {
// 		const contacts = localStorage.getItem("contacts");
// 		const parsedContacts = JSON.parse(contacts);
// 		parsedContacts && this.setState({ contacts: parsedContacts });
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (this.state.contacts !== prevState.contacts) {
// 			localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
// 		}
// 	}

// 	addContact = (name, number) => {
// 		const contact = {
// 			id: nanoid(),
// 			name,
// 			number,
// 		};
// 		const { contacts } = this.state;

// 		if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
// 			alert(`${name} is already in contacts.`);
// 			return;
// 		}
// 		this.setState(prevState => ({
// 			contacts: [contact, ...prevState.contacts],
// 		}));
// 	};

// 	deleteContact = contactId => {
// 		this.setState(prevState => ({
// 			contacts: prevState.contacts.filter(contact => contact.id !== contactId),
// 		}));
// 	};

// 	changeFilter = e => {
// 		this.setState({ filter: e.currentTarget.value });
// 	};

// 	getVisibleContacts = () => {
// 		const { filter, contacts } = this.state;
// 		const normalizedFilter = filter.toLowerCase();

// 		return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
// 	};

// 	render() {
// 		const { filter } = this.state;
// 		const visibleContancts = this.getVisibleContacts();

// 		return (
// 			<Box textAlign="center" margin="0 auto" width="500px">
// 				<GlobalStyle />

// 				<PhonebookForm onSubmit={this.addContact} />

// 				{visibleContancts.length > 0 ? (
// 					<>
// 						<SearchBox value={filter} onChange={this.changeFilter} />
// 						<ContactsList contacts={visibleContancts} onDeleteContact={this.deleteContact}></ContactsList>
// 					</>
// 				) : (
// 					<Box mt={4}>
// 						<p>You dont have contacts, add your first contact 😉</p>
// 					</Box>
// 				)}
// 			</Box>
// 		);
// 	}
// }
